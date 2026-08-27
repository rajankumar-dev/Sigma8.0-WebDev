"use client";
import { useEffect, useState } from "react";

export default function Home() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [notes, setNotes] = useState([]);

  const fetchNotes = async () => {
    try {
      const res = await fetch("/api/notes");
      const data = await res.json();
      console.log(data);
      setNotes(data);
    } catch (e) {
      console.error("error in fetching notes", e);
    }
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title || !content) {
      alert("please fill in all fields");
      return;
    }
    try {
      setIsLoading(true);
      const res = await fetch("/api/notes", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title, content }),
      });

      if (res.ok) {
        fetchNotes();
        alert("Notes created successfully");
        setTitle("");
        setContent("");
      }
    } catch (error) {
      console.error("Error saving note:", error);
      alert("Error saving note");
    } finally {
      setIsLoading(false);
    }
  };

  const handleDelete = async (id) => {
    try {
      const res = await fetch(`/api/notes/${id}`, {
        method: "DELETE",
      });
      if (res.ok) {
        setNotes(notes.filter((note) => note._id !== id));
        alert("Note delete Successfully");
      }
    } catch (error) {
      console.error("Error deleting note", error);
    }
  };
  const handleUpdate = () => {};

  return (
    <div className="min-h-screen bg-gray-950 p-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-yellow-400 mb-2">My Notes</h1>
          <p className="text-gray-400">
            Create, read, update and delete your notes
          </p>
        </div>

        {/*Form*/}
        <div className="bg-gray-900 rounded-lg shadow-md p-6 mb-8 border border-gray-800">
          <form onSubmit={handleSubmit}>
            <div className="mb-2">
              <label className="block text-sm font-medium text-yellow-400 mb-2">
                Title
              </label>
              <input
                type="text"
                placeholder="Enter note title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full px-4 py-2 border border-gray-700 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-yellow-5 00 placeholder-gray-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-yellow-400 mb-2">
                Content
              </label>
              <textarea
                type="text"
                placeholder="Enter note title"
                value={content}
                rows="5"
                onChange={(e) => setContent(e.target.value)}
                className="w-full px-4 py-2 border border-gray-700 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-yellow-5 00 placeholder-gray-500"
              />
            </div>
            <div className="flex gap-2">
              <button
                type="submit"
                disabled={isLoading}
                className="bg-yellow-500 flex-1 text-gray-900 py-2 px-4 rounded-lg hover:bg-yellow-600 disabled:bg-gray-600 transition font-semibold"
              >
                {isLoading ? "Saving..." : "Create Note"}
              </button>
            </div>
          </form>
        </div>

        <div>
          {notes.length === 0 ? (
            <p className="text-gray-400">No notes found</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {notes.map((note) => (
                <div
                  key={note._id}
                  className="bg-gray-800 rounded-lg shadow-md p-6 border border-gray-600"
                >
                  <h2 className="text-xl font-bold text-yellow-400 mb-2">
                    {note.title}
                  </h2>
                  <p className="text-gray-400">{note.content}</p>

                  <div className="mt-4 flex justify-between items-center">
                    <span className="text-gray-500 text-sm">
                      {new Date(note.createdAt).toLocaleString()}
                    </span>
                  </div>
                  <div className="flex gap-4 mt-5">
                    <button
                      className="bg-red-500 text-white py-1 px-8 rounded-lg hover:bg-red-600 transition mt-2"
                      onClick={() => handleDelete(note._id)}
                    >
                      Delete
                    </button>
                    <button
                      className="bg-yellow-500 text-white py-1 px-8 rounded-lg hover:bg-yellow-600 transition mt-2"
                      onClick={handleUpdate}
                    >
                      Update
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
