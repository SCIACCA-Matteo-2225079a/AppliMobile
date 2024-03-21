import MyList from "./MyList";
import { useState } from "react";
import './App.css';

function App() {
    const [toDo, setToDo] = useState([
        {"id": 1, "title": "Task 1", "status": false},
        {"id": 2, "title": "Task 2", "status": false}
    ]);

    const [text, setText] = useState('');

    function addTask(text) {
        const newTask = {
            id: Date.now(), text, completed: false
        };
        setTasks([...tasks, newTask]);
        setText('');
    }

    function deleteTask(id) {
        setTasks(tasks.filter(task => task.id !== id));
    }

    function toggleCompleted(id) {
        setTasks(tasks.map(task => {
            if (task.id === id) {
                return {...task, completed: !task.completed};
            } else {
                return task;
            }
        }));
    }

    return (
        <div className="todo-list">
            {tasks.map(task => (
                <TodoItem
                key = {task.id}
                task = {task}
                deleteTask = {deleteTask}
                toggleCompleted={toggleCompleted}
                />
            ))}
            <input
                value = {text}
                onChange = {e => setText(e.target.value)}
                />
            <button onClick={() => addTask(text)}>Add</button>
        </div>
    );
}

export default App;
