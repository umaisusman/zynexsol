import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

const HeroSection = () => {
  return (
    <Container
      fluid
      className="d-flex justify-content-center align-items-center text-center hero-section"
      style={{
        height: "100vh",
        padding: "0 20px",
        marginTop: '8px',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      <video
        autoPlay
        loop
        muted
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          zIndex: -1,
          filter: 'brightness(0.7) saturate(1.5)'
        }}
      >
        <source src="/header-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 128, 128, 0.3)', // Green teal shade
          zIndex: 0,
        }}
      ></div>
      <Row style={{ zIndex: 1 }}>
        <Col>
          <h5
            style={{
              color: "#007B6E",
              fontSize: "2.8rem",
              fontWeight: "bold",
            }}
          >
            Top Software Development Solutions
          </h5>
          <h2
            style={{
              color: "#1a1a1a",
              fontSize: "2rem",
              marginTop: "15px",
            }}
          >
            Empowering Businesses With Next-Gen Solutions
          </h2>
          <p
            style={{
              color: "#1a1a1a",
              marginTop: "20px",
              fontSize: "1.75rem",
            }}
          >
            Enterprises - Innovators - Startups
          </p>
          <Button
            onClick={() => window.open('https://wa.link/5jxo75', '_blank', 'noopener,noreferrer')}
            variant="primary"
            style={{
              color: "#FFFFFF",
              backgroundColor: "#007B6E",
              padding: "10px 20px",
              marginTop: "20px",
              borderRadius: "50px",
              fontSize: '20px',
              border: "none"
            }}
          >
            Schedule a Free Consultation
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default HeroSection;
