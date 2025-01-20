import React, { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { FaCalendarCheck, FaRegComments, FaUserTie } from 'react-icons/fa';
import { motion } from 'framer-motion';
import CustomForm from '../Custom form/Customform'; // Import the form component
import './HireDeveloperComponent5.css';

const HireDeveloperComponent5 = () => {
    const [showForm, setShowForm] = useState(false); // State to show or hide the form

    const toggleForm = () => {
        setShowForm(!showForm); // Toggle the form's visibility
    };

    return (
        <>
            <Container fluid className="py-5 benefits-section" style={{ backgroundColor: '#004b75', color: '#fff' }}>
                <Container>
                    <Row className="text-center mb-5">
                        <Col>
                            <motion.h2
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 1 }}
                                style={{color:'#007B6E'}}
                            >
                                Hiring a software developer is hassle-free, efficient, and includes three additional benefits
                            </motion.h2>
                            <motion.div
                                className="underline"
                                initial={{ width: 0 }}
                                animate={{ width: '50%' }}
                                transition={{ duration: 1.5 }}
                                style={{ height: '2px', backgroundColor: '#007B6E', margin: '0 auto' }}
                            ></motion.div>
                        </Col>
                    </Row>
                    <Row className="text-center">
                        <Col md={4} className="mb-4">
                            <motion.div
                                whileHover={{ scale: 1.1 }}
                                className="benefit-card"
                            >
                                <FaCalendarCheck size={50} color="#007B6E" />
                                <h4  style={{color:'#007B6E'}}>7-Day Trial</h4>
                                <p>Enjoy free 40 hours of our talented developers’ time on your project development.</p>
                            </motion.div>
                        </Col>
                        <Col md={4} className="mb-4">
                            <motion.div
                                whileHover={{ scale: 1.1 }}
                                className="benefit-card"
                            >
                                <FaRegComments size={50} color="#007B6E" />
                                <h4  style={{color:'#007B6E'}}>Free Consultation</h4>
                                <p>Talk to our experts and get a free consultation on your project idea, best-suited technology, resource planning, and TAT.</p>
                                <Button variant="warning" className="mt-3" onClick={toggleForm} style={{backgroundColor:'#007B6E'}}>
                                    {showForm ? 'Close Form' : 'Get In Touch'}
                                </Button>
                            </motion.div>
                        </Col>
                        <Col md={4} className="mb-4">
                            <motion.div
                                whileHover={{ scale: 1.1 }}
                                className="benefit-card"
                            >
                                <FaUserTie size={50} color="#007B6E" />
                                <h4  style={{color:'#007B6E'}}>Alignment with Sr. Tech-lead</h4>
                                <p>We assign a senior developer/tech-lead to all our client projects. Our CTO actively overlooks all projects to assist, supervise, and guide the team.</p>
                            </motion.div>
                        </Col>
                    </Row>
                </Container>
            </Container>

            {showForm && <CustomForm />} {/* Conditionally render the form based on the state */}

            <h1 style={{
                display: 'flex',
                marginTop: '40px',
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center', // Center text inside the flex box
                fontSize: '2.5rem',  // Adjust the font size for large header
                fontWeight: 'bold',  // Make the text bold
                color: '#007B6E',    // You can adjust this color to match the theme
                marginBottom: '1rem' // Add some space below the heading
            }}>
                Flexible Engagement Models to <br /> Hire Developer Quickly
            </h1>

            <p style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center',   // Center the text inside the flex box
                fontSize: '1.2rem',    // Adjust the font size
                lineHeight: '1.8',     // Add more line spacing for readability
                color: '#333',         // Darker text color for contrast
                marginBottom: '2rem'   // Space below the paragraph
            }}>
                Every company is unique, and we at Zynex Soultions understand that. <br />
                Hence we have curated three unique engagement models for hiring developers <br />
                with different payment terms to deliver customized services <br />
                that cater to your business needs.
            </p>

        </>
    );
};

export default HireDeveloperComponent5;
