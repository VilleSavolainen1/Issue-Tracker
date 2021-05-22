import React from 'react';
import { Navbar, Form, Button, Dropdown, DropdownButton } from 'react-bootstrap'
import './style.css'


const Nav = ({ setRoute, user, setUser }) => {


    const exit = () => {
        localStorage.clear();
        setUser(null);
    };


    return (
        <div className="navbar">
            <Navbar className="justify-content-between">
                <Form inline>
                    <Button className="navbutton" onClick={() => setRoute('home')} >Home</Button>
                    <Button className="navbutton" onClick={() => setRoute('projects')} >Projects</Button>
                    <DropdownButton className="navbutton" id="dropdown-basic-button" title="Create">
                        <Dropdown.Item href="#/action-1">Create project</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Create ticket</Dropdown.Item>
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