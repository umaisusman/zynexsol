import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { FaHandshake, FaLaptopCode, FaRocket } from 'react-icons/fa';

export default function AboutComponent() {
    return (
        <Container fluid style={{ marginTop: '85px', padding: '0' }}>
            {/* Background Section */}
            <Row className="About-Section-Unique align-items-center justify-content-center text-center"
                style={{ minHeight: '80vh', background: 'linear-gradient(to right, #001f3f 20%, #003366 80%)' }}>

                {/* Heading */}
                <Col xs={12} className="mb-4">
                    <motion.h1
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.2, ease: 'easeOut' }}
                        style={{ color: '#007B6E', fontWeight: 'bold', fontSize: '2.8rem', lineHeight: '1.3', marginTop: '30px' }}
                    >
                        <h1 style={{ color: '#007B6E' }}> <strong>Your technology partner </strong></h1>
                        for innovative and impactful <br />
                        digital solutions
                    </motion.h1>
                </Col>

                {/* Subheading */}
                <Col xs={12} className="mb-4">
                    <motion.h4
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1.5, ease: 'easeOut' }}
                        style={{ color: 'white', fontSize: '1.8rem', marginBottom: '40px' }}
                    >
                        We are firm believers that the best software comes from small, agile, highly skilled teams.
                    </motion.h4>
                </Col>

                {/* Call to Action Button */}
                <Col xs={12} md={4}>
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ duration: 0.3 }}
                    >
                        <Button
                            className="cta-button-unique"
                            style={{
                                backgroundColor: '#007B6E',
                                border: 'none',
                                padding: '15px 30px',
                                fontSize: '1.1rem',
                                width: '100%',
                                maxWidth: '250px',
                                fontWeight: 'bold',
                                marginBottom: '40px'
                            }}
                            onClick={() => window.open(' https://wa.link/5jxo75', '_blank', 'noopener,noreferrer')}
                        >
                            Get in Touch
                        </Button>

                    </motion.div>
                </Col>

                {/* Icons with animations */}
                <Row className="icon-section text-center" style={{ marginTop: '50px' }}>
                    <Col xs={12} md={4}>
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1.2, ease: 'easeOut' }}
                            whileHover={{ scale: 1.2 }}
                            style={{ color: '#007B6E' }}
                        >
                            <FaHandshake size={60} style={{color:'#007B6E'}} />
                        </motion.div>
                        <h5 style={{ color: '#fff', marginTop: '15px' }}>Trusted Partnership</h5>
                        <p style={{ color: '#aaa' }}>Building long-term relationships based on trust and transparency.</p>
                    </Col>

                    <Col xs={12} md={4}>
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1.5, ease: 'easeOut' }}
                            whileHover={{ scale: 1.2 }}
                            style={{ color: '#007B6E' }}
                        >
                            <FaLaptopCode size={60} style={{color:'#007B6E'}}/>
                        </motion.div>
                        <h5 style={{ color: '#fff', marginTop: '15px' }}>Expert Development</h5>
                        <p style={{ color: '#aaa' }}>Innovative, agile, and scalable software development for your business.</p>
                    </Col>

                    <Col xs={12} md={4}>
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1.8, ease: 'easeOut' }}
                            whileHover={{ scale: 1.2 }}
                            style={{ color: '#007B6E' }}
                        >
                            <FaRocket size={60} style={{color:'#007B6E'}}/>
                        </motion.div>
                        <h5 style={{ color: '#fff', marginTop: '15px' }}>Future-Proof Solutions</h5>
                        <p style={{ color: '#aaa' }}>Helping you stay ahead with cutting-edge digital solutions.</p>

                    </Col>

                </Row>

            </Row>





            <style jsx>{`
                .About-Section-Unique {
                    background-color: #001f3f;
                    background: linear-gradient(to right, rgb(43, 67, 146) 20%, transparent 150%);
                }

                .cta-button-unique {
                    transition: background-color 0.3s ease-in-out;
                }
                
                .cta-button-unique:hover {
                    background-color: #005f8c;
                }

                .icon-section h5 {
                    font-weight: bold;
                    font-size: 1.4rem;
                }

                /* Responsive adjustments */
                @media (max-width: 768px) {
                    .About-Section-Unique {
                        padding: 20px;
                    }

                    .About-Section-Unique h1 {
                        font-size: 2rem;
                    }

                    .About-Section-Unique h4 {
                        font-size: 1rem;
                    }

                    .cta-button-unique {
                        font-size: 1rem;
                    }

                    .icon-section h5 {
                        font-size: 1.2rem;
                    }
                }
            `}</style>
        </Container>
    );
}
