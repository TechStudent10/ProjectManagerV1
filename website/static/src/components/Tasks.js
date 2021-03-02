import React from 'react';
import Task from './Task';

function Tasks({tasks}) {
    return (
        <div className="tasks">
            {tasks.map((task) => {
                return <>
                    <Task task={task} />
                    <hr />
                </>
            })}
            {/* {tasks} */}
        </div>
    )
}

export default Tasks
