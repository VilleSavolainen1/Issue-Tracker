import React from 'react';
import './style.css';


const Home = ({ allProjects, user, setRoute, setSelectedProject }) => {


    const userProjects = allProjects.map(project => {
        if (project.assignee === user) {
            return (
                <ul style={{ margin: '0' }} key={project.id}>
                    <li style={{ listStyle: 'none' }} ><span className="projectlink" onClick={() => { setRoute('details'); setSelectedProject(project) }} >{project.name}</span></li>
                </ul>
            )
        }
        return null;
    })


    return (
        <div className="home-container">
            <div className="all-boards">
                <div className="boards-section">
                    <div className="boards-section-header">
                        <div className="introduction">
                            <h3>Introduction</h3>
                        </div>
                        <div className="welcome">
                            <h5>Welcome to Issue Tracker</h5>
                            <p>The navigation bar, present at the top of the page, will be the same across all the pages/screens of Issue Tracker.
                            Home, Projects and Create are the main links.
                            These links may have sub-links to navigate other functionalities.</p>
                        </div>
                        <div className="boards-section-options">
                            <button className="boards-section-item">Members</button>
                            <button className="boards-section-item">Settings</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="all-boards">
                <div className="boards-section">
                    <div className="boards-section-header">
                        <div className="introduction">
                            <h3>My projects</h3>
                        </div>
                        <div className="welcome">
                            <h5>Projects assigned to you</h5>
                            {userProjects}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;