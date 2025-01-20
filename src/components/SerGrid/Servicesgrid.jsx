import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { motion } from 'framer-motion';
import './ServicesGrid.css'; 

const services = [
    { title: 'Web App development', image: '/Images/software.png' },
    { title: 'Mobile App development', image: '/Images/mobile.png' },
    { title: 'DevOps services', image: '/Images/devops.png' },
    { title: 'UI UX design', image: '/Images/ui.png' },
    { title: 'Digital Marketing', image: '/Images/business.png' },
];

const ServicesGrid = () => {

    // Function to handle redirection on service click
    const handleServiceClick = (serviceTitle) => {
        const servicePath = `/services/${encodeURIComponent(serviceTitle.replace(/\s+/g, ' '))}`;
        window.open(servicePath, '_blank'); // Open the page in a new tab
    };

    return (
        <div className="services-grid">
            <Container>
                <h1 className="mb-4" style={{fontWeight:'bold',color:'#007B6E'}}>
                    World-Class Services for <br />Forward-Thinking Businesses
                </h1>
                <h4 className="text-muted mb-5">
                    Explore our broad spectrum of design and technology <br />
                    solutions tailored to your business needs and goals.
                </h4>
                <Row>
                    {services.map((service, index) => (
                        <Col key={index} xs={12} sm={6} md={4} className="mb-4">
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="h-100"
                                onClick={() => handleServiceClick(service.title)} // Add click handler
                                style={{ cursor: 'pointer' }} // Add pointer cursor
                            >
                                <Card className="service-card text-center h-100">
                                    <Card.Body>
                                        <img src={service.image} alt={service.title} className="service-icon" />
                                        <Card.Title className=" Tiltleicons text-black mt-5">
                                            {service.title}
                                        </Card.Title>
                                    </Card.Body>
                                </Card>
                            </motion.div>
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    );
};

export default ServicesGrid;
