import React, { useState } from 'react';
import './index.css';

function TodoItem({ task, deleteTask, updateTask, toggleCompleted }) {
    const [editedTitle, setEditedTitle] = useState('');
    const [isEditing, setIsEditing] = useState(false);

    React.useEffect(() => {
        setEditedTitle(task.title);
    }, [task]);

    function handleChange() {
        toggleCompleted(task.id);
    }

    function handleEdit() {
        setIsEditing(true);
        setEditedTitle(task.title);
    }

    function handleSave() {
        updateTask(task.id, editedTitle);
        setIsEditing(false);
    }

    return (
        <div className="todo-item">
            <input
                type="checkbox"
                checked={task.status}
                onChange={handleChange}
            />
            {isEditing ? (
                <input
                    type="text"
                    value={editedTitle}
                    onChange={(e) => setEditedTitle(e.target.value)}
                />
            ) : (
                <p>{task.title}</p>
            )}
            {isEditing ? (
                <button onClick={handleSave}>Save</button>
            ) : (
                <button onClick={handleEdit}>🖊️</button>
            )}
            <button onClick={() => deleteTask(task.id)}>🗑️</button>
        </div>
    );
}

export default TodoItem;
