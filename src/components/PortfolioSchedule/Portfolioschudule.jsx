import React, { useState } from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { motion, AnimatePresence } from 'framer-motion';
import CustomForm from '../Custom form/Customform';  // Import the CustomForm component
import "./portfolioschedule.css";

const variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const Porfolioschedule = () => {
  const [showCards, setShowCards] = useState(false);
  const [showForm, setShowForm] = useState(false);  // State to control the form visibility

  const handleScheduleClick = () => {
    setShowForm(true);  // Show the form when "Schedule Meeting" is clicked
  };

  return (
    <Container className="mt-5">
      <section className="call-to-action text-center">
        <div className="call-to-action-content">
          <h3 className="mb-3" style={{color:'#007B6E'}}>READY TO BUILD SOMETHING AMAZING?</h3>
          <h4 className="mb-3">Your Next Great App Awaits</h4>
          <h5 className="highlighted-text mb-4">Let's discuss how Zynex Soultions can help bring your project to life.</h5>
          <Button
            variant="primary"
            className="animated-button"
            onClick={() => setShowCards(true)}
            style={{backgroundColor:'#007B6E'}}
          >
            Schedule a Call Today
          </Button>
        </div>
      </section>

      <AnimatePresence>
        {showCards && !showForm && (
          <motion.div variants={variants} initial="hidden" animate="visible" transition={{ duration: 0.5 }}>
            <Card className="mb-4">
              <Card.Body>
                <Card.Title className="text-center mb-3" style={{color:'#007B6E'}}> READY TO BUILD SOMETHING AMAZING?</Card.Title>
                <h2 className="text-center mb-3">Your Next <span style={{ color: "#007B6E" }}>Great App</span> Awaits</h2>
                <Card.Text className="text-center mb-3">
                  Let's discuss how Zynex Solutions can help bring your project to life.
                </Card.Text>
              </Card.Body>
            </Card>
            <Row className="justify-content-center">
              <Col xs={12} md={6} lg={5} className="mb-4">
                <Card className="text-center">
                  <Card.Body>
                    <i className="bi bi-calendar-event fs-1 mb-3"></i>
                    <Card.Title style={{color:'#007B6E'}}>Schedule a timeslot</Card.Title>
                    <Card.Text>
                      View our calendar and select a timeslot to speak to our team.
                    </Card.Text>
                    <Button
                      variant="primary"
                      style={{ borderRadius: '10px', width: '80%', backgroundColor: "#007B6E" }}
                      className="mt-3"
                      onClick={() => window.open(' https://wa.link/5jxo75', '_blank', 'noopener,noreferrer')}
                    >
                      Schedule Meeting
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
              <Col xs={12} md={6} lg={5} className="mb-4">
                <Card className="text-center">
                  <Card.Body>
                    <i className="bi bi-pencil-square fs-1 mb-3"></i>
                    <Card.Title style={{color:'#007B6E'}}>Write to us</Card.Title>
                    <Card.Text>
                      Fill out our contact form and we'll reach back out to you within 24 hours.
                    </Card.Text>
                    <Button
                      variant="primary"
                      style={{ borderRadius: '10px', width: '80%', backgroundColor: "#007B6E" }}
                      className="mt-3"
                      onClick={handleScheduleClick}
                    >
                      Contact Us
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showForm && (
          <motion.div variants={variants} initial="hidden" animate="visible" transition={{ duration: 0.5 }}>
            <CustomForm />  {/* Render the CustomForm component */}
          </motion.div>
        )}
      </AnimatePresence>
    </Container>
  );
};

export default Porfolioschedule;
