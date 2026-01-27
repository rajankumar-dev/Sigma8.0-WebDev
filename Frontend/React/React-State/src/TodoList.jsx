import { useState } from "react"
import { v4 as uuidv4 } from 'uuid';

export default function TodoList(){
    let[ todos, setTodos] = useState([{task: "sample-task", id: uuidv4()}]);
    let[ newTodo, setNewTodo] = useState("");

    let addNewtask = () => {
        setTodos(
            (preTodos) => {
                return [...preTodos, {task: newTodo, id: uuidv4()}]
            }
        );
        setNewTodo("");
    }
    let updateTodoValue = (event) => {
        setNewTodo(event.target.value);
    }

    return (
        <div>
            <input placeholder="Add a Task" value={newTodo} onChange={updateTodoValue}/><br /><br />
            <button onClick={addNewtask}>Add Task</button>
            <br /><br />
            <hr />
            <h4>Task Todo</h4>
            <ul>
                {
                    todos.map((todo) => {
                        return <li key={todo.id}>{todo.task}</li>
                    })
                }
            </ul>

        </div>
    )
}