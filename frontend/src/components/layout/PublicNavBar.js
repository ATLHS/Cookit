import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import {Link} from 'react-router-dom';
import '../../css/Navbar.css';

const NavBar = () => {
    return (
        <>
            <Navbar expand="lg" bg="transparent" expand="lg" className="pl-5 pr-5">
                <Link to="/" className="text-decoration-none navbarDesktopLink" href="#"><Navbar.Brand id="cookit">Cookit</Navbar.Brand></Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto d-flex justify-content-between align-items-center w-25">
                        <Link to="/aboutus" className="text-decoration-none navbarDesktopLink" href="#">About us</Link>
                        <Link to="/users/login" className="text-decoration-none navbarDesktopLink" href="#">Login</Link>
                        <Link to="/users/signup" href="#"><Button className="signupCTA text-light">Sign up</Button></Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    );
}

export default NavBar;