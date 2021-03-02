import React from 'react';

function AddTask({tasks, onClose}) {
    const addTask = (e) => {
        e.preventDefault();

        const name = document.getElementById('name').value;
        const description = document.getElementById('description').value;

        tasks.push({
            _id: Math.random() * 1000,
            name: name,
            description: description,
            complete: false
        });

        onClose(false);
    }

    return (
        <div className="addTask">
            <h1>Add Task</h1>
            <label htmlFor="name">Name: </label>
            <input type="text" autocomplete="off" name="name" id="name" />
            <br />
            <br />
            <label htmlFor="description">Description: <br /></label>
            <textarea name="description" id="description" />
            <br />
            <br />
            <button onClick={addTask}>Add Task</button>
        </div>
    )
}

export default AddTask
