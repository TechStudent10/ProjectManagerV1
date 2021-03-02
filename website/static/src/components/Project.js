import React, { useState, useEffect } from 'react'
import ProjectInfo from './ProjectInfo';

function Project(props) {
    const routerProps = props.match.params;
    // const [projectInfo, setProject] = useState({
    //     _id: 'ID0102',
    //     title: 'My React Site',
    //     description: "My Frontend React Site API Avalible here: https://github.com/techstudent11/ThisDoesntExist",
    //     project_link: 'https://github.com/techstudent11/ThisAlsoDoesntExist',
    //     tasks: [
    //         {
    //             _id: 'ID0102',
    //             name: 'Add API',
    //             description: 'Add the API to the frontend app',
    //             complete: false
    //         },
    //         {
    //             _id: 'ID0103',
    //             name: 'Add Frontend',
    //             description: 'Add the Frontend to the api app',
    //             complete: true
    //         },
    //     ],
    //     contributers: [
    //         'TS11',
    //         'MM8',
    //         'LYM5'
    //     ]
    // })
    const [projectInfo, setProject] = useState({
        _id: 0,
        name: '',
        description: "",
        project_link: "",
        tasks: [],
        contributers: []
    });
    const [projectIsValid, setProjectIsValid] = useState(true);

    useEffect(() => {
        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                code: routerProps.projectCode
            })
        };
        // console.log(routerProps.projectCode)
        fetch('/api/getProject', requestOptions).then(responce => responce.json()).then(data => {
            setProject(data)
            setProjectIsValid(data.projectIsValid)
        })
    }, [])

    return (
        <div className="project">
            {projectIsValid ? <ProjectInfo projectInfo={projectInfo} /> : <h1>{projectInfo.message}</h1>}
        </div>
    )
}

export default Project
