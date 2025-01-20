import React, { useState } from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import webImage from '/Images/Web.jpg';
import mobileImage from '/Images/Mobile.jpg';
import devopsImage from '/Images/devops.jpg';
import uiuxImage from '/Images/ui ux.jpg';
import digitalMarketingImage from '/Images/dg marketing.png';
import cms from '/Images/cms.jpg'
import databasesImage from '/Images/database.jpg';
import cloudImage from '/Images/cloud.jpg';

function TechStackComponent() {
  const [activeSection, setActiveSection] = useState('Web');

  const industries = [
    'Web',
    'Mobile',
    'DevOps',
    'UI/UX',
    'Digital Marketing',
    'CMS-ecommerce',
    'Databases',
    'Cloud',
  ];

  const industryImages = {
    Web: webImage,
    Mobile: mobileImage,
    DevOps: devopsImage,
    'UI/UX': uiuxImage,
    'Digital Marketing': digitalMarketingImage,
    'CMS-ecommerce': cms,
    Databases: databasesImage,
    Cloud: cloudImage,
  };

  return (
    <Container className="text-center my-1">
      <h2 style={{ color: '#007B6E' }}> <strong> Our Tech Stack </strong></h2>
      <h5 style={{ marginTop: '40px' }}>
        Our software development company is composed of certified experts with comprehensive knowledge and
        <br />
        experience in:
      </h5>
      {/* Navbar */}
      <Navbar bg="light" expand="lg" className="justify-content-center" style={{ marginTop: '60px', fontSize: '20px', fontWeight: '50px' }}>
        <Nav className="mr-auto">
          {industries.map((industry) => (
            <Nav.Link
              key={industry}
              onClick={() => setActiveSection(industry)}
              className={activeSection === industry ? 'font-weight-bold' : 'text-dark'}
            >
              {industry}
            </Nav.Link>
          ))}
        </Nav>
      </Navbar>

      {/* Underline */}
      <div style={{ borderTop: '1px solid #000', marginTop: '10px' }}></div>

      {/* Display the Selected Industry's Image */}
      <div style={{ marginTop: '40px'  }}>
        <img src={industryImages[activeSection]} alt={activeSection} style={{ width: '100%', maxWidth: '600px', height: 'auto' }} />
      </div>
    </Container>
  );
}

export default TechStackComponent;
