import React, { useRef, useState } from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import "./Hiringmodel.css";

export default function BusinessModels() {

  return (
    <Container className="business-models-container">
      <Row className="justify-content-center">
        <h1 className="business-models-title" style={{color:'#007B6E'}}>
          Our Business-Friendly Hiring Models
        </h1>
      </Row>
      <Row className="justify-content-center position-relative model-cards">
        <div className="blue-background"></div>
        <Col md={4} sm={12} className="model-card">
          <Card className="Cardwidth text-center pt-2">
            <Card.Img
              variant="top"
              src="/Expensify/222.png"
              className="model-icon"
              style={{
                width: '20%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                marginLeft: '40%'
              }}
            />
            <Card.Body>
              <Card.Title style={{color:'#007B6E'}}>Fixed Price Model</Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} sm={12} className="model-card">
          <Card className="Cardwidth text-center pt-2">
            <Card.Img
              variant="top"
              src="/Expensify/111.png"
              className="model-icon"
              style={{
                width: '20%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                marginLeft: '40%'
              }}
            />
            <Card.Body>
              <Card.Title style={{color:'#007B6E'}}>Staff Augmentation</Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} sm={12} className="model-card">
          <Card className="Cardwidth text-center pt-2">
            <Card.Img
              variant="top"
              src="/Expensify/333.png"
              className="model-icon"
              style={{
                width: '20%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                marginLeft: '40%'
              }}
            />
            <Card.Body>
              <Card.Title style={{color:'#007B6E'}}> Dedicated Team</Card.Title>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
