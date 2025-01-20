import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaSearch, FaFlask, FaFileAlt, FaBullhorn, FaChartLine, FaClipboardCheck, FaMoneyBillWave, FaMapMarkerAlt, FaTasks } from 'react-icons/fa';
import { motion } from 'framer-motion';
import './DigitalMarkComponent1.css';

const services = [
    { icon: <FaSearch />, title: 'Keyword Research', description: 'Our team uses the best tools and software available to pinpoint the PPC keywords that are optimized for your budget and conversion rates to see the best results' },
    { icon: <FaFileAlt />, title: 'Landing Pages', description: 'PPC advertising without a dedicated landing page is a quick way to lose conversions, so we optimize a specific landing page for each advertising campaign and service' },
    { icon: <FaBullhorn />, title: 'Ad Management', description: 'We handle all advertising settings and specifics, so you tell us your goals for your PPC marketing and we will optimize a strategy and implement it across all chosen platforms' },
    { icon: <FaFlask />, title: 'A/B Testing', description: 'To ensure we’re getting the best results possible, our PPC agency uses A/B testing to assess how effective our current copy, design, and CTAs are compared to other options and we pivot for success' },
    { icon: <FaTasks />, title: 'Social Media Presence', description: 'If your audience is found on social media, we will utilize Facebook advertising and explore Instagram, LinkedIn, and more to ensure you’re getting the best conversion rates possible' },
    { icon: <FaChartLine />, title: 'Google Advertising', description: 'Go directly to the source with Google PPC advertising, immediately outranking competitors and showing up promptly at the top of results for your targeted services and products' },
    { icon: <FaClipboardCheck />, title: 'Monthly Reporting', description: 'Always stay in the know with prompt monthly reporting from your dedicated PPC advertising team, where we outline successes, pitfalls, and areas for improvement' },
    { icon: <FaMoneyBillWave />, title: 'Budget Optimization', description: 'You give us the numbers and we give you the best-optimized strategy to fit your budget; with recommendations from our PPC experts you can feel confident that our approach will get you the best return on investment' },
    { icon: <FaMapMarkerAlt />, title: 'Geographical Targeting', description: 'For LOCAL SEO or other location-specific services, we use geographical targeting to ensure that your advertisements are honed into the precise location where you’ll see the best results' },
];

const DigitalMarkComponent1 = () => {
    return (
        <Container className="ppc-management-section">
            <h2 className="text-center"  style={{color:'#007B6E',fontWeight:'bold'}}>What's Included in PPC Management</h2>
            <p className="text-center">Our PPC advertising plans are always flexible, so no matter what new updates are released, how your business changes, or what results show, we can always improve, pivot, and find success.</p>
            <Row className="justify-content-center">
                {services.map((service, index) => (
                    <Col xs={12} md={6} lg={4} className="d-flex align-items-stretch mb-4" key={index}>
                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="w-100">
                            <Card className="h-100 service-cards d-flex flex-column">
                                <Card.Body className="text-center flex-grow-1 d-flex flex-column">
                                    <div className="icon-wrapper mb-3"  style={{color:'#007B6E'}}>
                                        {service.icon}
                                    </div>
                                    <Card.Title  style={{color:'#007B6E'}}>{service.title}</Card.Title>
                                    <Card.Text>{service.description}</Card.Text>
                                </Card.Body>
                            </Card>
                        </motion.div>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default DigitalMarkComponent1;
