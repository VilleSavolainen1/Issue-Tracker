import React from 'react';
import { Button } from 'react-bootstrap'
import './projects-style.css';


const Projects = ({setRoute}) => {
    return (
        <div className="projects-container">
            <div className="all-projects">
                <h3 className="projects-title">Projects</h3>
                <div className="projects-section">
                    <div className="projects-section-header">
                        <div className="projects-section-options">
                            <ul>
                                <li onClick={() => setRoute('details')} >First project</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects;