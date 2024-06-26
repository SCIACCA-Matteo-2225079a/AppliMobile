import React, { useState } from 'react';
import TodoItem from "./TodoItem.jsx";

function TodoList() {
    const [toDo, setToDo] = useState([
        { "id": 1, "title": "Task 1", "status": false },
        { "id": 2, "title": "Task 2", "status": false }
    ]);

    const [text, setText] = useState('');
    const [editingTaskId, setEditingTaskId] = useState(null);

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

    function updateTask(id, newTitle) {
        setToDo(toDo.map(task => {
            if (task.id === id) {
                return { ...task, title: newTitle };
            } else {
                return task;
            }
        }));
        setEditingTaskId(null);
    }

    function toggleCompleted(id) {
        setToDo(toDo.map(task => {
            if (task.id === id) {
                return { ...task, status: !task.status };
            } else {
                return task;
            }
        }));
    }

    return (
        <div className="todo-list">
            {toDo.map(task => (
                <TodoItem
                    key={task.id}
                    task={task}
                    deleteTask={() => deleteTask(task.id)}
                    toggleCompleted={() => toggleCompleted(task.id)}
                    updateTask={(newTitle) => updateTask(task.id, newTitle)}
                    isEditing={editingTaskId === task.id}
                    setEditingTaskId={setEditingTaskId}
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

export default TodoList;