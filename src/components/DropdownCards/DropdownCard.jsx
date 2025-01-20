import React from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';
import { FaClipboard, FaChartBar, FaLightbulb, FaServer, FaMobileAlt, FaCogs } from 'react-icons/fa';
import './DropdownCard.css';

const services = [
  {
    icon: <FaClipboard />,
    title: "App strategy",
    description: "There is no secret about the fact that the best strategies can bring out the finest of applications. At AHEX, our team is highly capable of understanding the most advanced strategies and applying them towards the growth of your business.",
    color: "#ff7f50"
  },
  {
    icon: <FaChartBar />,
    title: "Data analytics and management",
    description: "The ultimate target of every business website, is to enhance the productivity of user engagement and conversions. With the help of data analytics and management, we present mobile applications that will help you to achieve the goal.",
    color: "#ff69b4"
  },
  {
    icon: <FaLightbulb />,
    title: "Design thinking",
    description: "We believe in a particular design thinking approach which helps us to prioritize the satisfaction and requirements of users.",
    color: "#00fa9a"
  },
  {
    icon: <FaServer />,
    title: "Platform migration",
    description: "If you were thinking about migration from one platform to another, then our team can help you do that quickly and securely.",
    color: "#9370db"
  },
  {
    icon: <FaMobileAlt />,
    title: "Cross platform",
    description: "We have various cross-platform apps in the Android and iOS App Stores at AHEX. Our team of skilled developers has extensive knowledge in this area.",
    color: "#007B6E"
  },
  {
    icon: <FaCogs />,
    title: "Interpretability or scalability",
    description: "We understand that your aim is to expand or grow your business. Therefore, we create mobile applications that are scalable and can cope up with the ever-expanding pattern of your business.",
    color: "#ffd700"
  },
];

const ServiceExpertise = () => {
  return (
    <Container className="First-continer py-5">
      <h2 className="text-center mb-4">Service Expertise</h2>
      <Row style={{ height: '50%' }} >
        {services.map((service, index) => (
          <Col md={4} sm={6} key={index} className="mb-4">
            <Card className={'CardSize23  text-center border-0 shadow-sm'}
              style={{ backgroundColor: "#f8f9fa", cursor: "pointer" }}>
              <Card.Body >
                <div
                  style={{ color: service.color,fontSize:'70px' }}
                >
                  {service.icon}
               
                </div>
                <Card.Title>{service.title}</Card.Title>
                <Card.Text>{service.description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ServiceExpertise;
