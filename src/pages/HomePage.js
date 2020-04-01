import React from  'react';
import {Container} from 'react-bootstrap';

import NavBar from '../components/NavBar';

export default function HomePage () {
    return (
        <Container fluid className="p-0" id="home-page">
            <NavBar/>
            <h1>{/* code comming soon */}</h1>
        </Container>
    );
}