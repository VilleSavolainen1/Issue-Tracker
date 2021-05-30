import React from 'react';
import './style.css';


const Home = ({setRoute}) => {
    return (
        <div className="home-container">
            <div className="all-boards">
                <h3 className="workspace-title">System dashboard</h3>
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
        </div>
    )
}

export default Home;