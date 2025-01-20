import React from 'react';
import { Container, Row, Col, Button, Image } from 'react-bootstrap';
import { FaCheckCircle } from 'react-icons/fa';
import { motion } from 'framer-motion';
import './HireDeveloperComponent1.css'; // Custom styling
import { ImAddressBook, ImArrowRight2 } from 'react-icons/im';

const HireDevelopersSection1 = ({ scrollToForm }) => {
    return (
        <Container fluid className="hire-developers-section py-5">
            <Row className="align-items-center">
                <Col sm={12} md={6}>
                    <div className="text-start text-light mt-5 ps-2">
                        <motion.h1
                            className="mb-4"
                            initial={{ opacity: 0, y: -50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            style={{ marginTop: '130px',color:'#007B6E' }}
                        >
                            Hire Dedicated Developers
                        </motion.h1>
                        <p className="lead mb-4" style={{ marginTop: '40px' }}>
                            Top 1% Pre-Vetted, In-house & Dedicated Software Programmers
                        </p>
                        <p>
                            Unlock the potential of your business with years of expertise,
                            providing customized software solutions that guarantee success in
                            a rapidly evolving market.
                        </p>
                        <ul className="list-unstyled mb-4" style={{ marginTop: '70px' }}>
                            <li style={{ marginTop: '20px' }}>
                                <FaCheckCircle className="icon-check" /> Proof of Work based Top Rated Talent
                            </li>
                            <li style={{ marginTop: '20px' }}>
                                <FaCheckCircle className="icon-check" /> IP Protection & Strict NDA
                            </li>
                            <li style={{ marginTop: '20px' }}>
                                <FaCheckCircle className="icon-check" /> Quick & Easy Onboarding Process
                            </li>
                            <li style={{ marginTop: '20px' }}>
                                <FaCheckCircle className="icon-check" /> Direct Access to Developer as Your Own Employee
                            </li>
                            <li style={{ marginTop: '20px' }}>
                                <FaCheckCircle className="icon-check" /> Flexible Hiring Models - Fixed price- Staff Augmentation- Dedicated Team
                            </li>
                        </ul>
                        <Button
                            variant=""
                            className="hire-developer-btn me-2"
                            style={{ color: 'white', borderRadius: '30px', padding: '15px', width: '30%', backgroundColor: '#007B6E' }}
                            onClick={() => window.open(' https://wa.link/5jxo75', '_blank', 'noopener,noreferrer')} // Opens Calendly link in a new tab
                        >
                            <ImAddressBook /> Schedule a meeting
                        </Button>
                        <Button
                            variant=""
                            style={{ borderRadius: '30px', padding: '15px', width: '20%', backgroundColor: '#007B6E', color: 'white' }}
                            onClick={scrollToForm} // Call scrollToForm on click
                        >
                            Hire Now <ImArrowRight2 />
                        </Button>
                    </div>
                </Col>
                <Col sm={12} md={6} className="text-center">
                    <Image
                        src="/Running coach/hire11-removebg-preview.png"
                        fluid
                        className="img-responsive"
                    />
                </Col>
            </Row>
        </Container>
    );
};

export default HireDevelopersSection1;
