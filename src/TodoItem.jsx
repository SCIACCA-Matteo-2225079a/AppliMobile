import React from 'react';
import './index.css';

function TodoItem({task, deleteTask, toggleCompleted }) {
    function handleChange() {
        toggleCompleted(task.id);
    }

    return (
        <div className="todo-item">
            <input
                type="checkbox"
                checked={task.status}
                onChange={handleChange}
            />
            <p>{task.title}</p>
            <button onClick={() => deleteTask(task.id)}>
                🗑️
            </button>
        </div>
    );
}

export default TodoItem;
