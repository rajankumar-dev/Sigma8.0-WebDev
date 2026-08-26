import { connectDB } from "@/lib/db";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-950 p-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-yellow-400 mb-2">My Notes</h1>
          <p className="text-gray-400">
            Create, read, update and delete your notes
          </p>
        </div>
      </div>
    </div>
  );
}
