import React from 'react'
import { Row, Col, Container } from "react-bootstrap";
import CandidateForm from '../components/CandidateForm';
import NavBar from '../components/NavBar';

export default function CandidatePage(props) {
    console.log({props})

    const {id} = props.match.params;
return (
  <Container fluid>  
    <NavBar/>
  <Container>
    <Row>
      <Col>
        <CandidateForm id={id} />
      </Col>
    </Row>
  </Container>
  </Container>
);
}
