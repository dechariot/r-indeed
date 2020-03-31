import React from 'react'
import { Row, Col, Container } from "react-bootstrap";
import CandidateForm from './CandidateForm'

export default function CandidatePage(props) {
    console.log({props})

    const {id} = props.match.params;
return (
  <Container>
    <Row>
      <Col>
        <CandidateForm id={id} />
      </Col>
    </Row>
  </Container>
);
}
