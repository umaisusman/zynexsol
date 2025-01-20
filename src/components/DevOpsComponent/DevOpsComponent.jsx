import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import { FaComments, FaCogs, FaWrench, FaSyncAlt, FaChartLine, FaCloud } from 'react-icons/fa';
import './DevOpsComponent.css'; // Custom CSS

const servicesData = [
  {
    title: 'DevOps Consulting Services',
    description: 'Leverage our DevOps consulting services to accelerate the time-to-market of your software. We cater to complete DevOps assessment, DevOps automation, and DevOps management.',
    icon: <FaComments />,
    color: '#007bff'
  },
  {
    title: 'Infrastructure Automation',
    description: 'Our IT and software infrastructure automation services assist enterprises in accelerating their IT operations to reach the pinnacle of success in their IT and software development operations.',
    icon: <FaCogs />,
    color: '#e83e8c'
  },
  {
    title: 'DevOps Configuration Management',
    description: 'Our DevOps developers use extensive tools for faster issue determination and increased agility to leverage the supreme quality of services. We have the expertise to manage your lean operations.',
    icon: <FaWrench />,
    color: '#28a745'
  },
  {
    title: 'Integration & Deployment',
    description: 'Our DevOps outsourcing team provides services & solutions with continuous integration and delivery services to safely build, test, and release quality code using various tools.',
    icon: <FaSyncAlt />,
    color: '#6f42c1'
  },
  {
    title: 'Infrastructure Monitoring',
    description: 'With our DevOps solutions, we empower IT operations with cloud- and vendor-agnostic infrastructure monitoring and management. We pre-empt hurdles before they occur, maintaining 100% systems performance.',
    icon: <FaChartLine />,
    color: '#fd7e14'
  },
  {
    title: 'Platform-As-A-Service',
    description: 'Zynex Soultions offers DevOps as a service and owns this expertise to provide comprehensive DevOps software development services like planning and strategy execution.',
    icon: <FaCloud />,
    color: '#ffc107'
  },
];

const DevOpsSection = () => {
  return (
    <Row className="services-section-1">
        <h1 style={{display:'flex',justifyContent:'center',marginBottom:'30px',marginTop:'50px',color:'#007B6E'}}> <strong> Solution Development Expertise </strong></h1>
        <hr />
      {servicesData.map((service, index) => (
        <Col md={4} sm={6} xs={12} key={index}>
          <Card className="service-card-1" style={{ borderTop: `5px solid ${service.color}`,marginTop:'50px' }}>
            <Card.Body>
              <div className="service-icon-1" style={{ color: service.color ,display:'flex',alignItems:'center',justifyContent:'center',fontSize:'140px'}}>
                {service.icon}
              </div>
              <Card.Title  style={{color:'#007B6E'}}>{service.title}</Card.Title>
              <Card.Text>{service.description}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default DevOpsSection;
