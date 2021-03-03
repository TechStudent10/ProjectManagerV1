import React, { useState } from 'react';
import { RequestOptions } from './utils';

function CreateProject(props) {
    const [name, setName] = useState('');
    const [desc, setDesc] = useState('');
    const [projectLink, setLink] = useState('');

    const createProject = (e) => {
        e.preventDefault();
        const requestOptions = RequestOptions(
            'POST',
            {
                'Content-Type': 'application/json'
            }, {
                title: name,
                description: desc,
                project_link: projectLink
            }
        );
        fetch('/api/createProject', requestOptions).then(res => res.json()).then(data => {
            window.location.href = `/project/${data._id}`
        })
    }

    const handleChange = (e, stateSetter) => {
        stateSetter(e.target.value);
    }
    
    return (
        <div className="createProject">
            <h1>Create A Project</h1>
            <form>
                <label htmlFor="projectName">Name: </label>
                <input type="text" name="projectName" onChange={(e) => handleChange(e, setName)} />
                <br />
                <br />
                <label htmlFor="projectDescription" >Description: </label>
                <br />
                <textarea name="projectDescription" onChange={(e) => handleChange(e, setDesc)} />
                <br />
                <br />
                <label htmlFor="projectLink">Project Link: </label>
                <input type="text" name="projectLink" onChange={(e) => handleChange(e, setLink)} />
                <br />
                <br />
                <input type="submit" value="Create" onClick={createProject} />
            </form>
        </div>
    )
}

export default CreateProject
