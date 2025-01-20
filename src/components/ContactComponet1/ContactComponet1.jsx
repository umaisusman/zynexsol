import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaEnvelope, FaPhoneAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';
import 'bootstrap/dist/css/bootstrap.min.css';

// Background image styling
const sectionStyle = {
  backgroundImage: 'url(/Expensify/service1.jpg)', // Replace with actual image path
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  color: 'white',
  padding: '80px 0',
  position: 'relative',
  textAlign: 'center',
  marginTop:'8px'
};

const overlayStyle = {
  backgroundColor: 'rgba(0, 0, 0, 0.6)', // Dark overlay for contrast
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  zIndex: 1,
};

const contentStyle = {
  zIndex: 2, // Ensures the content is on top of the overlay
  position: 'relative',
};

const GetInTouch = () => {
  return (
    <div style={sectionStyle}>
      <div style={overlayStyle}></div>
      <Container style={contentStyle} >
        <Row className="justify-content-center" style={{marginTop:'20px'}}>
          <Col md={8} >
            <motion.h2 
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className=" mb-3"
              style={{ fontWeight: 'bold',color:'#007B6E' }}
            >
              Get in Touch With Our Technical Experts
            </motion.h2>

            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="text-white mb-4"
            >
              With your team in pakistan, you get the trust of the highest level of commitment and expertise in offshore software development services. 
              Want to take your business to the next level? Get in touch with us now!
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="d-flex justify-content-center mt-4"
            >
            </motion.div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default GetInTouch;
