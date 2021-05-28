import React from 'react';
import { Table } from 'react-bootstrap'
import './projects-style.css';


const Projects = ({ setRoute, allProjects, setSelectedProject }) => {

    const renderProjects = allProjects.map(project => {
        const ProjectStatus = () => {
            if (project.status === false) {
                return (
                    <span style={{ color: '#E1CA36', border: '1px solid #E1CA36', borderRadius: '3px' }}><span style={{ padding: '4px' }}>In progress</span></span>
                )
            } else {
                return (
                    <span style={{ color: '#17DF14', border: '1px solid #17DF14', borderRadius: '3px' }}><span style={{ padding: '4px' }}>Done</span></span>
                )
            }
        }
        return (
            <tr key={project.id} className="tablerow" onClick={() => { setRoute('details'); setSelectedProject(project) }} >
                <td>{project.name}</td>
                <td>{project.type}</td>
                <td>{project.description}</td>
                <td>{project.assignee}</td>
                <td><ProjectStatus /></td>
            </tr>
        )
    })


    return (
        <div className="projects-container">
            <div className="all-projects">
                <h3 className="projects-title">All projects</h3>
                <div className="projects-section">
                    <div className="projects-section-header">
                        <div className="projects-section-options">
                            <Table hover>
                                <thead className="tablehead">
                                    <tr>
                                        <th>Name</th>
                                        <th>Type</th>
                                        <th>Description</th>
                                        <th>Assignee</th>
                                        <th>Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {renderProjects}
                                </tbody>
                            </Table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects;