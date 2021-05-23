import React from 'react';
import './create-style.css';


const Create = ({setCreatingNewProject}) => {
    return (
        <div className="popup-box">
            <div className="box">
                <span className="close-icon" onClick={() => setCreatingNewProject(false)} >x</span>
                <div className="create-project-form">
                    <h1 className="create-project-title">Create a new project</h1>
                    <span className="create-project-info">Boost your productivity.</span>
                    <form>
                        <label className="project-info" for="project-name">Project name</label>
                        <input className="project-input" id="project-name" placeholder="Project 1"></input>
                        <label className="project-info" for="project-type">Project type</label>
                        <input className="project-input" id="project-type" placeholder="Marketing"></input>
                        <label className="project-info" for="project-description">Project description (optional)</label>
                        <textarea className="project-description" id="project-description"></textarea>
                        <dl className="confirm-project">
                            <input className="project-submit" type="submit" value="Create project"></input>
                        </dl>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Create;