import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { FaDollarSign, FaUserClock, FaLock } from 'react-icons/fa'; // Import icons
import { FaArrowRight } from 'react-icons/fa';
import './HireDeveloperComponent2.css'; // Custom CSS for creativity
import { ImAddressBook } from "react-icons/im";
import { ImArrowRight2 } from "react-icons/im";

const HireDeveloperComponent2 = ({ scrollToForm }) => {
  return (
    <>
     <Container fluid className="why-hire-section py-5">
      <Container>
        <h2 className="text-center mb-4"  style={{color:'#007B6E'}}>Why Hire Developers From Zynex Soultions?</h2>
        <p className="text-center mb-5" style={{ fontSize: '25px' }}>
          If you aspire to accelerate business growth using cutting-edge software, <br /> our developers can transform your vision into reality.
          Hire a software programmer from us and get <br /> tailored solutions that grow your business by improving overall ROI,<br /> enhancing productivity,
          and slashing operational costs.
        </p>

        <Row className="g-4">
          <Col xs={12} md={6} lg={4}>
            <Card className="h-100 hire-card">
              <Card.Body>
                <div className="icon-container mb-3">
                  <FaDollarSign className="icon-style" />
                </div>
                <Card.Title>Cost Effective</Card.Title>
                <Card.Text className='icons-one'>
                  <ul>
                    <li>Hire Developer Starting at $18 per hour</li>
                    <p>Zynex Soultions offers dedicated developers with industry experience starting at $18 per hour to scale your development.</p>
                    <li>Zero Infrastructure Cost</li>
                    <p>When you hire developers from Zynex Soultions, you don’t have to invest in systems and working spaces as we offer complete work infrastructure.</p>
                    <li>Zero Hiring Costs</li>
                    <p>With TZynex Soultions, you get a large pool of talented and pre-vetted developers, saving you the time, effort, and cost of hiring resources through consultants.</p>
                  </ul>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col xs={12} md={6} lg={4}>
            <Card className="h-100 hire-card">
              <Card.Body>
                <div className="icon-container mb-3">
                  <FaUserClock className="icon-style" />
                </div>
                <Card.Title>Quick Hiring</Card.Title>
                <Card.Text className='icons-one'>
                  <ul>
                    <li>200+ Programmers for Hire</li>
                    <p>Zynex Soultions has a large and pre-vetted talent pool of software developers across technologies to ensure quick hiring for your project.</p>
                    <li>Transparent Hiring Process</li>
                    <p>From resource shortlisting to the final selection, you are part of the end-to-end process of hiring developers.</p>
                    <li>Quick Replacement</li>
                    <p>Zynex Soultions guarantees 100% backup and quick replacement of resources if you are not satisfied with the work of the hired developer.</p>
                  </ul>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col xs={12} lg={4}>
            <Card className="h-100 hire-card">
              <Card.Body>
                <div className="icon-container mb-3">
                  <FaLock className="icon-style" />
                </div>
                <Card.Title>Highly Secure</Card.Title>
                <Card.Text className='icons-one'>
                  <ul>
                    <li>Non-Disclosure Agreements</li>
                    <p>Our extensive NDAs and enterprise-grade security systems ensure that your IPs and Data are never compromised.</p>
                    <li>Global Quality Standard</li>
                    <p>Our highly-skilled and experienced developers follow global coding standards to deliver quality output.</p>
                    <li>Well-defined Process Framework</li>
                    <p>We have built a well-defined process framework, work hierarchy, reporting structure, and security protocols that developers follow to ensure smooth project development.</p>
                  </ul>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </Container>


      <div className="try-before-section">
      <Container className="text-center py-5">
      <h2 className="section-title" style={{ color: '#007B6E' }}>Try Before, Commit Later</h2>
      <p className="section-subtitle">
        Start your 7-day trial today and discover the perfect fit for your project needs.
      </p>
      <Row className="justify-content-center">
        <Col xs={12} md="auto" className="d-flex justify-content-center mt-3 mt-md-0">
          <Button
            variant=""
            className="hire-developer-btn me-3"
            style={{ color: 'white', borderRadius: '30px', padding: '15px', width: '100%', maxWidth: '300px', backgroundColor: '#007B6E' }}
            onClick={() => window.open(' https://wa.link/5jxo75', '_blank', 'noopener,noreferrer')}// Opens Calendly link in a new tab
          >
            <ImAddressBook /> Schedule a meeting
          </Button>
        </Col>
        <Col xs={12} md="auto" className="d-flex justify-content-center mt-3 mt-md-0">
          <Button
            variant=""
            style={{ borderRadius: '30px', padding: '15px', width: '100%', maxWidth: '200px', backgroundColor: '#007B6E', color: 'white' }}
            onClick={scrollToForm}
          >
            Hire Now <ImArrowRight2 />
          </Button>
        </Col>
      </Row>
    </Container>
      </div>
    </>
  );
};

export default HireDeveloperComponent2;
