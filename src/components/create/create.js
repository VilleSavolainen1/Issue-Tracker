import React, { useState } from 'react';
import './create-style.css';
import axios from 'axios';


const Create = ({ setCreatingNewProject, user, setProjectCreated }) => {

    const [projectName, setProjectName] = useState('');
    const [projectType, setProjectType] = useState('');
    const [projectDescription, setProjectDescription] = useState('');
    const [error, setError] = useState('');

    const onProjectNameChange = (e) => {
        setProjectName(e.target.value);
        setError('')
    }

    const onProjectTypeChange = (e) => {
        setProjectType(e.target.value);
        setError('')
    }

    const onProjectDescriptionChange = (e) => {
        setProjectDescription(e.target.value)
        setError('')
    }

    async function onSubmit(e) {
        e.preventDefault();
        if (projectName.length > 0 && projectType.length > 0) {
            await axios.post('/create', { name: projectName, type: projectType, description: projectDescription, assignee: user })
                .then(res => {
                    setCreatingNewProject(false)
                    setProjectCreated(false)
                })
                .catch(() => {
                    setError("Error!")
                })
        } else {
            setError('Give your projects name and type!');
        }
    }


    return (
        <div className="popup-box">
            <div className="box">
                <span className="close-icon" onClick={() => setProjectCreated(false)} >x</span>
                <div className="create-project-form">
                    <h1 className="create-project-title">Create a new project</h1>
                    <span className="create-project-info">Boost your productivity.</span>
                    <form onSubmit={onSubmit}>
                        <label className="project-info" for="project-name">Project name</label>
                        <input className="project-input" id="project-name" placeholder="Project 1" value={projectName} onChange={onProjectNameChange}></input>
                        <label className="project-info" for="project-type">Project type</label>
                        <input className="project-input" id="project-type" placeholder="Marketing" value={projectType} onChange={onProjectTypeChange} ></input>
                        <label className="project-info" for="project-description">Project description (optional)</label>
                        <textarea className="project-description" id="project-description" value={projectDescription} onChange={onProjectDescriptionChange} ></textarea>
                        <dl className="confirm-project">
                            <input className="project-submit" type="submit" value="Create project"></input>
                        </dl>
                    </form>
                    <p style={{color: 'red'}}>{error}</p>
                </div>
            </div>
        </div>
    )
}

export default Create;