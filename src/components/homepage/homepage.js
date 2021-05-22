import React from 'react';
import './style.css';


const Home = ({setRoute}) => {
    return (
        <div className="home-container">
            <div className="all-boards">
                <h3 className="workspace-title">Workspaces</h3>
                <div className="boards-section">
                    <div className="boards-section-header">
                        <div className="boards-section-options">
                            <button className="boards-section-item" onClick={() => setRoute('projects')} >Projects</button>
                            <button className="boards-section-item">Members</button>
                            <button className="boards-section-item">Settings</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;