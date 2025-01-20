import React from 'react';
import { Container, Row, Col, Card, Image } from 'react-bootstrap';
import { FaShieldAlt, FaEye, FaAward, FaUsers, FaHandshake } from 'react-icons/fa';
import { motion } from 'framer-motion';
import './AboutComponent3.css';

const CoreValues = () => {
    const values = [
        {
            icon: <FaShieldAlt size={50} color="#007B6E" />,
            title: "Integrity",
            description: "Accountability and being genuine in what we do inculcate reliability, and we sustain the virtue."
        },
        {
            icon: <FaEye size={50} color="#007B6E" />,
            title: "Transparency",
            description: "We maintain transparency in our operations and ensure the client is fully aware of our processes."
        },
        {
            icon: <FaAward size={50} color="#007B6E" />,
            title: "Quality Assurance",
            description: "We ensure premium quality in services and guarantee the delivery of technically sound products."
        },
        {
            icon: <FaUsers size={50} color="#007B6E" />,
            title: "Value for People",
            description: "We foster growth and nurture lives by providing a workplace conducive to constant learning."
        },
        {
            icon: <FaHandshake size={50} color="#007B6E" />,
            title: "Commitment",
            description: "We pursue our clients' goals by being consistent and committed to the delivery of their results."
        }
    ];

    return (
        <>
            <Container className="AboutCardOne text-center my-5">
                <motion.h1
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="mb-4"
                >
                    <strong style={{ color: '#007B6E' }}> Our Core Values </strong>
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="mb-5"
                >
                    We are experienced inventors and keen learners. Together, we can develop solutions that benefit both people and technology.
                </motion.p>

                <Row xs={1} md={2} lg={5} className="g-4">
                    {values.map((value, idx) => (
                        <Col key={idx}>
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.3, delay: idx * 0.2 }}
                            >
                                <Card className="shadow-sm h-100 text-center">
                                    <Card.Body>
                                        <div className="mb-3" >{value.icon}</div>
                                        <Card.Title style={{color:'#007B6E'}}>{value.title}</Card.Title>
                                        <Card.Text>{value.description}</Card.Text>
                                    </Card.Body>
                                </Card>
                            </motion.div>
                        </Col>
                    ))}
                </Row>
            </Container>

            {/* Responsive Image Section */}
            <Container className="mt-5">
                <Row className="justify-content-center">
                    <Col xs={12} md={8} lg={12}>
                        <Image src="/carcalicty/new.jpeg" className="img-fluid" alt="percentage" style={{height:'30vh'}} /> {/* img-fluid ensures responsiveness */}
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default CoreValues;
