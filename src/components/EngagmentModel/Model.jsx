import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Model.css';

export default function Model() {
  return (
    <Container className="mt-4 p-4 container-custom">
      <Row className="row-custom">
        <Col md={6} sm={12} className="col-custom">
          <img 
            src="/Images/new.png" 
            alt="Left" 
            className="img-fluid img-custom"
          />
        </Col>
        <Col md={6} sm={12} className="col-custom">
          <img 
            src="/Images/right.png" 
            alt="Right" 
            className="img-fluid img-custom"
          />
        </Col>
      </Row>
    </Container>
  );
}
