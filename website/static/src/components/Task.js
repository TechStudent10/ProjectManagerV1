import React, { useState } from 'react';

function Task({task}) {
    const [name, setName] = useState(task.name);
    const [description, setDescription] = useState(task.description);
    const [complete, setComplete] = useState(task.complete);

    const completeTask = (e) => {
        e.preventDefault();

        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                projectCode: task.projectCode,
                taskCode: task._id
            })
        };
        fetch('/api/completeTask', requestOptions).then(res => res.json()).then(data => {
            setComplete(data.complete);
        })
    }

    return (
        <div className="task">
            <h3>{name}</h3>
            <p>{description}</p>
            <p>{complete ? "Complete!" : "Not Complete"}</p>
            <button onClick={completeTask}>{complete ? "Not Complete!" : "Complete!"}</button>
        </div>
    )
}

export default Task
