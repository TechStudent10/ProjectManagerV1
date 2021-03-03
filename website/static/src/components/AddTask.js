import React, { useState } from 'react';

function AddTask({tasks, onClose, projectCode}) {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [error, setError] = useState('');

    const handleNameChange = (e) => {
        setName(e.target.value);
    }

    const handleDesChange = (e) => {
        setDescription(e.target.value);
    }

    const addTask = (e) => {
        e.preventDefault();

        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                code: projectCode,
                name: name,
                description: description
            })
        }

        fetch('/api/addTask', requestOptions).then(res => res.json()).then(data => {
            if (data.projectIsValid) {
                tasks[data._id] = {}
                tasks[data._id] = {
                    _id: data._id,
                    name: data.name,
                    description: data.description,
                    complete: data.complete,
                    projectCode: projectCode
                };
                // tasks.push({
                //     _id: data._id,
                //     name: data.name,
                //     description: data.description,
                //     complete: data.complete
                // });
        
                onClose(false);
            } else {
                setError(data.message);
            }
        })
    }

    return (
        <div className="addTask">
            <h1>Add Task</h1>
            <label htmlFor="name">Name: </label>
            <input type="text" autocomplete="off" name="name" id="name" onChange={handleNameChange} />
            <br />
            <br />
            <label htmlFor="description">Description: <br /></label>
            <textarea name="description" id="description" onChange={handleDesChange} />
            {error === '' ? <>
                <br />
                <br />
            </> : <p>{error}</p>}
            <button onClick={addTask}>Add Task</button>
        </div>
    )
}

export default AddTask
