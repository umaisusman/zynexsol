import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { FaCheck } from 'react-icons/fa';  // Importing the missing icon
import './Serviceshero.css';

const services = [
    { title: "Frontend Development" },
    { title: "Backend Development" },
    { title: "DevOps Services" },
    { title: "QA & Testing" },
    { title: "Code Review" },
    { title: "IT Staff Augmentations" },
];

const HeroSection = () => {
    return (
        <div className="hero-section">
            <div className="overlay"></div>
            <Container className="text-white d-flex h-auto align-items-center">
                <Row>
                    <Col xs={12}>
                        <motion.p
                            className="subtitle mb-3"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1 }}
                        >
                            Full Cycle Software Development
                        </motion.p>
                        <motion.h1
                            className="title mb-4"
                            initial="hidden"
                            animate="visible"
                            transition={{ staggerChildren: 0.1, delayChildren: 0.5 }}
                        >
                            Ignite Your Growth in the Digital <br /> Age With Zynex Soultions as Your <br /> IT Services Partner
                        </motion.h1>
                        <motion.p
                            className="description mb-4"
                            initial="hidden"
                            animate="visible"
                            transition={{ staggerChildren: 0.05, delayChildren: 1.5 }}
                        >
                            Whether you’re an enterprise, SME, or startup, Zynex Soultions Technologies
                            can help <br /> you grow and innovate with the power of data and
                            emerging technologies <br /> to unlock new business potential.
                        </motion.p>
                        <h3>Web & App Design</h3>
                        <Row>
                            {services.map((service, index) => (
                                <Col xs={12} sm={6} md={4} key={index} className="service-item">
                                    <FaCheck className="check-icon" />
                                    <span className="service-title">{service.title}</span>
                                </Col>
                            ))}
                        </Row>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 2.5 }}
                            style={{marginTop:'30px'}}
                        >
                            <Button
                                onClick={() => window.open(' https://wa.link/5jxo75', '_blank', 'noopener,noreferrer')}
                                variant="primary"
                                size="lg"
                            >
                                Discuss your project
                            </Button>
                        </motion.div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default HeroSection;
