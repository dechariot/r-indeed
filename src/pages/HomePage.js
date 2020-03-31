import React from  'react';
import {Container} from 'react-bootstrap';

import NavBar from '../components/NavBar';


export default function HomePage () {
    return (
        <Container fluid>
            <NavBar/>
            <h1>Home Page</h1>
        </Container>
    );
}