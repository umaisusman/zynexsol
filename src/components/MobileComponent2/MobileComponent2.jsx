import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaDatabase, FaProjectDiagram, FaClipboardCheck, FaPhone } from 'react-icons/fa';
import { motion } from 'framer-motion';
import './MobileComponent2.css'

const features = [
  {
    icon: <FaDatabase size={40} color="#007B6E" />,
    title: 'Data based Decisions',
    description: 'Using the information gathered, we craft solutions tailored to address the evolving needs of your end customers, keeping in mind the dynamic shifts in the market.'
  },
  {
    icon: <FaProjectDiagram size={40} color="#007B6E" />,
    title: 'Robust Architecture',
    description: 'Our mobile app development experts design an architecture with a focus on sustainability and adaptability, conceptualizing every aspect.'
  },
  {
    icon: <FaClipboardCheck size={40} color="#007B6E" />,
    title: 'Proven Track Record',
    description: 'We have consistently empowered clients with our high-quality solutions, further strengthening our proven track record. Please explore our portfolio for references.'
  },
  {
    icon: <FaPhone size={40} color="#007B6E" />,
    title: 'Open Communication',
    description: 'Our straightforward and transparent approach ensures an effective internal and external communication for a clear vision of business objectives.'
  }
];

const FeatureSection = () => {
  return (
    <Container fluid className=" conOne py-5">
      <h2 className="text-center mb-5"  style={{color:'#007B6E'}}> <strong> Why Zynex Soultions for App Development? </strong></h2>
      <Row>
        {features.map((feature, idx) => (
          <Col key={idx} md={6} lg={3} className="mb-4">
            <motion.div
            style={{height:'100%'}}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Card className="h-100 text-center">
                <Card.Body>
                  <div className="mb-3"  style={{color:'#007B6E'}}>{feature.icon}</div>
                  <Card.Title  style={{color:'#007B6E'}}>{feature.title}</Card.Title>
                  <Card.Text>{feature.description}</Card.Text>
                </Card.Body>
              </Card>
            </motion.div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default FeatureSection;
