import React from 'react';
import { Card, Row, Col, Container } from 'react-bootstrap';
import { FiImage, FiTablet, FiShare2, FiCheckSquare, FiThumbsUp, FiPackage } from 'react-icons/fi';
import './UIUXComponent.css'; // Custom CSS

const expertiseData = [
  {
    title: 'Image-based summary',
    description: 'Don’t worry we got solutions for your UI/UX design problems collected from various platforms. You can customise your dashboard easily to fit your data and get the most appropriate results that are easy to understand.',
    icon: <FiImage />,
    color: '#fd7e14'
  },
  {
    title: 'Cross Platform Compatibility',
    description: 'We prioritize the fundamental principles of UI design and the implementation of functionality to ensure a consistently delivered user experience.',
    icon: <FiTablet />,
    color: '#007bff'
  },
  {
    title: 'Wireframes & Blueprints',
    description: 'Our seasoned UI/UX engineers create and provide wireframes to assist clients in visualizing and testing features and user journeys.',
    icon: <FiShare2 />,
    color: '#e83e8c'
  },
  {
    title: 'Compare and Analyse',
    description: 'With Zynex Soultions technology, you get to analyse all market trends and keep track of your business with our UI/UX design service.',
    icon: <FiCheckSquare />,
    color: '#6f42c1'
  },
  {
    title: 'Usability Testing',
    description: 'We conduct user testing to evaluate how efficiently individuals can complete tasks and pinpoint any issues or opportunities for enhancement.',
    icon: <FiThumbsUp />,
    color: '#28a745'
  },
  {
    title: 'Elaborate visual representations',
    description: 'Visual representations with a focus on UX design principles can effectively communicate the message of simplifying while providing an engaging and user-friendly experience for your audience.',
    icon: <FiPackage />,
    color: '#6f42c1'
  },
];

const UIUXComponent = () => {
  return (
    <Container>
        <h1 style={{display:'flex',alignItems:'center',justifyContent:'center',marginTop:'40px',color:'#007B6E',fontWeight:'bold'}}>Solution Development Expertise</h1>
    <Row className="expertise-section">
        
      {expertiseData.map((item, index) => (
        <Col md={4} sm={6} xs={12} key={index}>
          <Card className="expertise-card" style={{ borderTop: `5px solid ${item.color}` ,marginTop:'30px'}}>
            <Card.Body>
              <div className="expertise-icon" style={{ color: item.color }}>
                {item.icon}
              </div>
              <Card.Title  style={{color:'#007B6E'}}>{item.title}</Card.Title>
              <Card.Text>{item.description}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
    </Container>
  );
};

export default UIUXComponent;
