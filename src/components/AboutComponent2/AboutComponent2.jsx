import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';

const BeliefsComponent = () => {
    return (
        <>
            <Container fluid className="beliefs-section">
                <Row className="text-center justify-content-center">
                    <Col xs={12}>
                        <motion.h1
                            initial={{ opacity: 0, y: -50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1 }}
                            style={{ color: '#007B6E' }}
                        >
                           <strong> What We Believe in </strong>
                        </motion.h1>
                    </Col>

                    <Col xs={12}>
                        <motion.h2
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3, duration: 1 }}
                            style={{ color: '#6c757d', fontWeight: 'bold' }}
                        >
                            Honesty, Integrity and Transparency
                        </motion.h2>
                    </Col>

                    <Col xs={12} md={8} className="mt-3">
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5, duration: 1 }}
                            style={{ color: '#6c757d', fontSize: '1.1rem' }}
                        >
                            At Zynex Soultions, our developers, product managers, and engineers are trained in a
                            culture that promotes 100% transparency. We are not a team of "yes-men" who will
                            let you follow the wrong path.
                        </motion.p>
                    </Col>
                </Row>
            </Container>

            <Container>
                <Row className="justify-content-center align-items-center mt-5">
                    <Col xs={12} md={6}>
                        <motion.h3
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.6, duration: 1 }}
                            className="text-left"
                            style={{ color: '#007B6E', fontWeight: 'bold' }}
                        >
                         <strong> Our Vision</strong>
                        </motion.h3>
                        <hr />
                        <motion.p
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.7, duration: 1 }}
                            style={{ color: '#6c757d', fontSize: '1.1rem' }}
                        >
                            Our Vision is to create innovative technology solutions that simplify and improve
                            the daily lives of individuals and businesses. At Zynex Soultions, we strive to be a
                            leader in Application Development and we constantly push the boundaries of what
                            is possible with software development. We value diversity, inclusivity, and
                            sustainability in our operations and culture. We aim to provide excellent customer
                            service and build long-lasting relationships with our clients.
                        </motion.p>
                    </Col>
                    <Col md={1}></Col>
                    <Col xs={12} md={5}>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1, duration: 1 }}
                        >
                            <img src="/Expensify/Our vision.jpg" alt="About Us" className="img-fluid" style={{width:'100vw',height:'50vh'}}/>
                        </motion.div>
                    </Col>
                </Row>
            </Container>
            <Container>
                <Row className="justify-content-center align-items-center mt-5">
                    <Col xs={12} md={6}>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1, duration: 1 }}
                        >
                            <img src="/Expensify/Our mission.jpg" alt="About Us" className="img-fluid" style={{width:'100vw',height:'50vh'}}/>
                        </motion.div>
                    </Col>
                    <Col md={1}></Col>
                    <Col xs={12} md={5}>
                        <motion.h3
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.6, duration: 1 }}
                            className="text-left"
                            style={{ color: '#007B6E', fontWeight: 'bold' }}
                        >
                       
                        </motion.h3>
                    
                        <motion.p
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.7, duration: 1 }}
                            style={{ color: '#6c757d', fontSize: '1.1rem' }}
                        >
                            <h1 style={{ fontSize: '25px', marginTop: '20px', color: '#007B6E' }}> <strong>Our Mission</strong></h1>
                            <hr />
                            <p> Our mission is to design, develop, and deliver high-quality software products and
                                services that meet the evolving needs of our customers. We strive to create
                                products that are user-friendly, efficient, and reliable. Our focus is on building
                                a strong and dedicated team of software professionals and fostering a culture of
                                continuous learning and improvement. We commit ourselves to ethical business practices,
                                transparent communication, and maintaining a positive impact on society.</p>
                        </motion.p>
                    </Col>
                    
                </Row>
            </Container>

            {/* Custom Styles */}
            <style jsx>{`
                .beliefs-section {
                    padding: 80px 20px;
                    background-color: #f8f9fa;
                }
                h1, h2, h3 {
                    font-family: 'Roboto', sans-serif;
                }
                @media (max-width: 768px) {
                    .beliefs-section h2, h3 {
                        font-size: 1.5rem;
                    }
                    .beliefs-section p {
                        font-size: 1rem;
                    }
                }
            `}</style>
        </>
    );
};

export default BeliefsComponent;
