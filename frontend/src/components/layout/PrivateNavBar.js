import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import {Link} from 'react-router-dom';
import { removeUserStorage } from '../utils/Auth';

const PrivateNavBar = () => {
    return (
        <>
        <Navbar expand="lg" bg="transparent" expand="lg" className="pl-5 pr-5">
            <Link to="/dashboard" className="text-decoration-none navbarDesktopLink" href="#"><Navbar.Brand id="cookit">Profile</Navbar.Brand></Link>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto d-flex justify-content-between align-items-center w-25">
                    <Link to="/weekkit" className="text-decoration-none navbarDesktopLink" href="#">Week Kit</Link>
                    <Link to="/setting" className="text-decoration-none navbarDesktopLink" href="#">Setting</Link>
                    <Link to="/users/login" href="#"><Button className="signupCTA text-light" onClick={removeUserStorage}>Log out</Button></Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
        </>
    )
}

export default PrivateNavBar;