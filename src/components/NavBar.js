import React from 'react';
import {Nav, Navbar, Form, FormControl, Button} from 'react-bootstrap';

import './css/NavBar.css'


export default function NavBar() {
    return (
        <div>
            <Navbar bg="white" variant="white" expand="lg">
                <Navbar.Brand href="https://dechariot-indeed.netlify.com/"><img src={`https://logodix.com/logo/75506.png`} style={{width:'30px'}}/></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="https://dechariot-indeed.netlify.com/">Home Page</Nav.Link>
                        <Nav.Link href="#link">Candidates</Nav.Link>
                        <Nav.Link href="#link">Company</Nav.Link>      
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}
