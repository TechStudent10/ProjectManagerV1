import React, { useState } from 'react';
import Tasks from './Tasks';
import AddTask from './AddTask';

function ProjectInfo(projectInfo){
    const [addTask, changeAddTask] = useState(false)
    const project = projectInfo.projectInfo

    return (
        <div>
            {addTask ? <AddTask tasks={project.tasks} onClose={changeAddTask} /> : <>
                <h1>{project.title}</h1>
                <hr />
                <p>{project.description}</p>
                <hr />
                <p>Project Link: <a href={project.project_link}>{project.project_link}</a> </p>
                <hr />
                <h2>Tasks:</h2>
                <Tasks tasks={project.tasks} />
                <button onClick={(e) => changeAddTask(addTask ? false : true)}>{addTask ? "Close" : "Add A Task"}</button>
                <h2>Contributers:</h2>
                {project.contributers.map((contributer) => {
                    return <>
                        {contributer}
                        <hr />
                    </>
                })}
                {/* {project.contributers} */}
            </>}
        </div>
    )
}

export default ProjectInfo;