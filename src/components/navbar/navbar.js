import React from 'react';
import { Navbar, Form, Button, Dropdown, DropdownButton } from 'react-bootstrap'
import './style.css'


const Nav = ({ setRoute, user, setUser, setError, setCreatingNewProject, setProjectCreated}) => {


    const exit = () => {
        localStorage.clear();
        setUser(null);
        setError('')
        setRoute('signin')
    };


    return (
        <div className="navbar">
            <Navbar className="justify-content-between">
                <Form inline>
                    <Button className="navbutton" onClick={() => setRoute('home')} >Home</Button>
                    <Button className="navbutton" onClick={() => setRoute('projects')} >Projects</Button>
                    <DropdownButton className="navbutton" id="dropdown-basic-button" title="Create">
                        <Dropdown.Item onClick={() => {setCreatingNewProject(true); setProjectCreated(true)}} >Create new project</Dropdown.Item>
                    </DropdownButton>
                    <DropdownButton className="navbutton" id="dropdown-basic-button" title="Manage">
                        <Dropdown.Item>Manage Role Assignment</Dropdown.Item>
                        <Dropdown.Item>Manage Project Users</Dropdown.Item>
                    </DropdownButton>
                </Form>
                <Form inline>
                    <Navbar.Brand><DropdownButton className="userbutton" id="dropdown-basic-button" title={user}>
                        <Dropdown.Item onClick={()=> exit()}>Logout</Dropdown.Item>
                    </DropdownButton></Navbar.Brand>
                </Form>
            </Navbar>
        </div>
    )
}

export default Nav;