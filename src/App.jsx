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
            id: Date.now(), title: text, status: false
        };
        setToDo([...toDo, newTask]);
        setText('');
    }

    function deleteTask(id) {
        setToDo(toDo.filter(task => task.id !== id));
    }

    function toggleCompleted(id) {
        setToDo(toDo.map(task => {
            if (task.id === id) {
                return {...task, status: !task.status};
            } else {
                return task;
            }
        }));
    }

    return (
        <div className="todo-list">
            {toDo.map(task => (
                <MyList
                    key={task.id}
                    type="text"
                    name={task.title}
                    completed={task.status}
                    deleteTask={() => deleteTask(task.id)}
                    toggleCompleted={() => toggleCompleted(task.id)}
                />
            ))}
            <input
                value={text}
                onChange={e => setText(e.target.value)}
            />
            <button onClick={() => addTask(text)}>Add</button>
        </div>
    );
}

export default App;
