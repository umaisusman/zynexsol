import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaPhoneAlt, FaEnvelope, FaFacebookF, FaLinkedinIn, FaInstagram, FaYoutube } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
    window.scrollTo(0, 0); // Scroll to top when navigating
  };

  const handleClick = (section, developerType) => {
    let path = "";
  
    switch (section) {
      case "Web":
        path = "/services/Web App Development";
        break;
      case "Mobiles":
        path = "/services/Mobile App Development";
        break;
      case "Marketing":
        path = "/services/Digital Marketing";
        break;
      case "UIUX":
        path = "/services/UI UX Design";
        break;
      case "DevOps":
        path = "/services/DevOps Services";
        break;
      case "About":
        path = "/AboutPage";
        break;
      case "Portfolio":
        path = "/portfoliopage";
        break;
      case "Services":
        path = "/Services";
        break;
      case "Hiredeveloper":
        path = "/HireManagnmentPage";
        break;
      case "Contact":
        path = "/Contactpage";
        break;
      case "Hire":
        if (developerType) {
          path = `/HireDeveloperDropdown/${developerType}`;
        }
        break;
      default:
        break;
    }
  
    if (path) {
      window.scrollTo(0, 0);  // Scrolls to the top of the page
      window.open(path, '_blank', 'noopener,noreferrer');  
    }
  };
  

  return (
    <footer>
      <Container>
        <Row className="mb-4">
          <Col xs={12} md={3} className="details mb-4">
          <img src="/carcalicty/zynex-white.png" alt="" style={{ width: '220px',height:'80px' }} className="my-3" />
            <p>
              <a href="https://wa.me/%2B923064344599?text=Contact%20US" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
                <FaPhoneAlt style={{ marginRight: '5px',color :'#007B6E' }} className="icon" /> <strong style={{ fontSize: '12px' }}>+92 3154138621</strong>
              </a>
            </p>
            <p>
              <a href="mailto:zynexsolutions1@gmail.com" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
                <FaEnvelope style={{ marginRight: '4px',color:'#007B6E' }} className="icon" /> <strong style={{fontSize:'12px'}}>zynexsolutions1@gmail.com</strong>
              </a>
            </p>
            <div style={{ marginTop: '30px' }}>
              <h6 style={{color:'#007B6E'}}> <strong> Socials </strong></h6>
              <div className="d-flex my-4 justify-content-center justify-content-md-start">
                <a href="https://www.facebook.com/share/18R9jHL8SD/ " target="_blank" rel="noopener noreferrer">
                  <FaFacebookF className="mx-2 icon" style={{color:'#007B6E'}}/>
                </a>
                <a href="  https://www.linkedin.com/in/mehtab-anwar-196a01312?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">
                  <FaLinkedinIn className="mx-2 icon"  style={{color:'#007B6E'}}/>
                </a>
                <a href=" https://www.instagram.com/zynexsolutions_/profilecard/?igsh=dDU2dHBjcDZ2NDBr" target="_blank" rel="noopener noreferrer">
                  <FaInstagram className="mx-2 icon" style={{color:'#007B6E'}}/>
                </a>
                <a href=" https://youtube.com/@itbrains-c9l?si=ljOqedeM0k7ljlJ9" target="_blank" rel="noopener noreferrer">
                  <FaYoutube className="mx-2 icon" style={{color:'#007B6E'}}/>
                </a>
              </div>
            </div>
            
          </Col>
          <Col xs={12} md={9}>
            <Row>
              <Col xs={12} sm={6} md={3} className="mb-4">
                <h5 style={{ marginLeft: '30px' ,color:'#007B6E'}}>Services</h5>
                <ul className="list-unstyled">
                  <li onClick={() => handleClick("Web")}>Web App Development</li>
                  <li onClick={() => handleClick("Mobiles")}>Mobile App Development</li>
                  <li onClick={() => handleClick("DevOps")}>DevOps Services</li>
                  <li onClick={() => handleClick("UIUX")}>UI/UX Design</li>
                  <li onClick={() => handleClick("Marketing")}>Digital Marketing</li>
                </ul>
              </Col>
              <Col xs={12} sm={6} md={3} className="mb-4">
                <h5 style={{ marginLeft: '30px' ,color:'#007B6E'}}>Hire Developers</h5>
                <ul className="list-unstyled">
                  <li onClick={() => handleClick("Hire", "ROR Developer")}>ROR Developer</li>
                  <li onClick={() => handleClick("Hire", "PHP Developer")}>PHP Developer</li>
                  <li onClick={() => handleClick("Hire", "Node Developer")}>Node Developer</li>
                  <li onClick={() => handleClick("Hire", "React JS Developer")}>React JS Developer</li>
                  <li onClick={() => handleClick("Hire", "JavaScript Developer")}>JavaScript Developer</li>
                  <li onClick={() => handleClick("Hire", "Angular Developer")}>Angular Developer</li>
                  <li onClick={() => handleClick("Hire", "SaaS Developer")}>SaaS Developer</li>
                  <li onClick={() => handleClick("Hire", "MERN Stack Developer")}>MERN Stack Developer</li>
                  <li onClick={() => handleClick("Hire", "iOS Developer")}>iOS Developer</li>
                  <li onClick={() => handleClick("Hire", "Flutter Developer")}>Flutter Developer</li>
                </ul>
              </Col>
              <Col xs={12} sm={6} md={3} className="mb-4">
                <h5 style={{ marginLeft: '30px',color:'#007B6E' }}>Industry</h5>
                <ul className="list-unstyled">
                  <li>SaaS</li>
                  <li>ERP</li>
                  <li>Healthcare</li>
                  <li>Finance</li>
                  <li>CRM</li>
                  <li>On-Demand</li>
                  <li>Education</li>
                  <li>Real Estate</li>
                  <li>Ecommerce</li>
                  <li>Games Development</li>
                </ul>
              </Col>
              <Col xs={12} sm={6} md={3} className="mb-4">
                <h5 style={{ marginLeft: '30px' ,color:'#007B6E'}}>Company</h5>
                <ul className="list-unstyled">
                  <li onClick={() => handleClick("About")}>About Us</li>
                  <li onClick={() => handleClick("Portfolio")}>Portfolio</li>
                  <li onClick={() => handleClick("Services")}>Services</li>
                  <li>Industries</li>
                  <li onClick={() => handleClick("Hiredeveloper")}>Hire Developer</li>
                  <li>Blog</li>
                  <li onClick={() => handleClick("Contact")}>Contact Us</li>
                </ul>
              </Col>
            </Row>
          </Col>
        </Row>
        <hr />
        <Row className="footer-bottom">
          <Col xs={12} md={6} className="text-center text-md-left mb-3 mb-md-0">
            <p>© Zynex Soultions. All Rights Reserved. © Copyright 2018-2024</p>
          </Col>
          <Col xs={12} md={6} className="text-center text-md-right">
            <a onClick={() => handleNavigation('/PrivacyPolicy')} className="ml-3">Privacy Policy</a>
            <a onClick={() => handleNavigation('/TermsOfUse')} className="ml-3">Terms of Use</a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
