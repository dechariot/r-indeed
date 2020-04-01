import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import error404 from './img/error404.jpg'
import './css/FourOhFourPage.css';

export default function FourOhFourPage() {
    return (
        <Container fluid className="d-flex p-5 align-item-start justify-content-center" id="page-not-found">
            <Row>
                <Col className="col-md-6">
                    <h1>404. Oops.. 
                        <br></br> Page Not Found</h1>
                    <p> This request URL was not found on this server.</p>
                    <code>That's all we know about it</code>
                    <p><a href="https://dechariot-indeed.netlify.com/">Turn back the HomePage</a></p>
                </Col>
                <Col className="col-md-6">
                    <Container>
                        <img src={error404} style={{width:'300px'}}/>
                    </Container>
                </Col>
            </Row>
        </Container>
    )
}
