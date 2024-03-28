import React, { useState } from 'react';
import './index.css';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

function TodoItem({ task, deleteTask, updateTask, toggleCompleted }) {
    const [editedTitle, setEditedTitle] = useState('');
    const [isEditing, setIsEditing] = useState(false);
    const [isCalendarOpen, setIsCalendarOpen] = useState(false);


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

    function toggleCalendar() {
        setIsCalendarOpen(!isCalendarOpen);
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
            <button onClick={toggleCalendar}>📅</button>
            {isCalendarOpen && <Calendar />}
            <button onClick={() => deleteTask(task.id)}>🗑️</button>
        </div>
    );
}

export default TodoItem;
