import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { FaClipboardList, FaChartLine, FaLightbulb, FaCloudUploadAlt, FaMobileAlt, FaArrowsAltV } from 'react-icons/fa';
import './MobileComponent.css';

const MobileComponent = () => {
    const services = [
        {
            icon: <FaClipboardList />,
            title: 'App strategy',
            description: 'There is no secret about the fact that the best strategies can bring out the finest of applications. At Zynex Soultions, our team is highly capable of understanding the most advanced strategies and applying them towards the growth of your business.',
            color: '#f68b1e',
        },
        {
            icon: <FaChartLine />,
            title: 'Data analytics and management',
            description: 'The ultimate target of every business website, is to enhance the proactivity of user engagement and conversions. With the help of data analytics and management, we present mobile applications that will help you to achieve the goal.',
            color: '#f2545b',
        },
        {
            icon: <FaLightbulb />,
            title: 'Design thinking',
            description: 'We believe in a particular design thinking approach which helps us to prioritize the satisfaction and requirements of users.',
            color: '#00b4d8',
        },
        {
            icon: <FaCloudUploadAlt />,
            title: 'Platform migration',
            description: 'If you were thinking about migration from one platform to another, then our team can help you do that quickly and securely.',
            color: '#9d4edd',
        },
        {
            icon: <FaMobileAlt />,
            title: 'Cross platform',
            description: 'We have various cross-platform apps in the Android and iOS App Stores at Zynex Soultions. Our team of skilled developers has extensive knowledge in this area.',
            color: '#0096c7',
        },
        {
            icon: <FaArrowsAltV />,
            title: 'Interpretability or scalability',
            description: 'We understand that your aim is to expand or grow your business. Therefore, we create mobile applications that are scalable and can cope up with the ever-expanding pattern of your business.',
            color: '#ffd166',
        },
    ];

    return (
        <Container className="service-expertise-section py-5">
            <h2 className="text-center mb-5"  style={{color:'#007B6E'}}> <strong> Service Expertise </strong></h2>
            <Row  style={{color:'black'}}>
                {services.map((service, index) => (
                    <Col key={index} lg={4} md={6} className="mb-4">
                        <motion.div
                        style={{height:'100%',backgroundColor:'white'}}
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.3 }}
                        >
                            <Card className="service-card h-100 text-center p-4" style={{ borderColor: service.color }}>
                                <motion.div
                                    className="icon-wrapper mb-3"
                                    style={{ color: service.color ,fontSize:'60px'}}
                                    initial={{ scale: 0.8 }}
                                    animate={{ scale: 1 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    {service.icon}
                                   
                                </motion.div>
                                <Card.Body>
                                    <Card.Title style={{color:'#007B6E'}}>{service.title}</Card.Title>
                                    <Card.Text style={{color:'black'}}>{service.description}</Card.Text>
                                </Card.Body>
                            </Card>
                        </motion.div>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default MobileComponent;
