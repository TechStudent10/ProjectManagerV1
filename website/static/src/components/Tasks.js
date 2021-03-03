import React from 'react';
import Task from './Task';

function Tasks({tasks}) {
    return (
        <div className="tasks">
            {Object.keys(tasks).map((key) => {
                return <>
                    <Task task={tasks[key]} />
                    <hr />
                </>
            })}
            {/* {tasks} */}
        </div>
    )
}

export default Tasks
