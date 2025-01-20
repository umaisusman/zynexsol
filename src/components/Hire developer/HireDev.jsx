import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import "./Hiredev.css";

const HireDedicatedDevelopers = ({ onRequestQuoteClick }) => {

  return (
    <Container className="text-center my-5">
      <Row>
        <Col>
          <h2 className="text-blue" style={{color:'#007B6E'}}> <strong> Hire Dedicated Developers </strong></h2>
          <p className="para">Get the top 1% of tech talent within your timezone for any software development project you have.</p>
          <Button  className='blue' onClick={onRequestQuoteClick}>
            Request A Quote
          </Button>
        </Col>
      </Row>
      <Row className="mt-5">
        <Col>
          <h3 className="text-blue"> <strong> Let's Talk </strong></h3>
          <p className="para">
            We’ve worked with clients of all sizes, from enterprise brands to funded startups.
            Let’s talk about your project and how we can help provide value.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default HireDedicatedDevelopers;
