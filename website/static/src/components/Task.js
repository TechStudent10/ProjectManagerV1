import React, { useState } from 'react';

function Task({task}) {
    const [name, setName] = useState(task.name);
    const [description, setDescription] = useState(task.description);
    const [complete, setComplete] = useState(task.complete);

    return (
        <div className="task">
            <h3>{name}</h3>
            <p>{description}</p>
            <p>{complete ? "Complete!" : "Not Complete"}</p>
            <button onClick={complete ? () => setComplete(false) : () => setComplete(true)}>{complete ? "Not Complete!" : "Complete!"}</button>
        </div>
    )
}

export default Task
