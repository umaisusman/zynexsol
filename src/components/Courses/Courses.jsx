import React from 'react';
import { Container, Row, Col, Card, Button, Navbar, Nav, Carousel } from 'react-bootstrap';
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaDatabase, FaNodeJs,FaPaintBrush, FaVuejs, FaAngular, FaCode } from 'react-icons/fa';
import { FaChartBar } from 'react-icons/fa';

const CoursePage = () => {
  return (
    <>
    <div>
      <Container id="courses" className="my-5">
        <h2 className="text-center mb-4"style={{color:'#007B6E'}}> <strong>Our Web Development Courses</strong></h2>
        <hr />
        <Row style={{marginTop:'10px'}}>

        <Col sm={12} md={6} lg={4} >
            <Card className="mb-4 shadow-lg hover-effect"style={{marginTop:'20px'}}>
              <Card.Body className="text-center">
                <FaCode size={60} className="text-dark mb-3" />
                <Card.Title style={{color:'#007B6E'}}>Full Stack Development</Card.Title>
                <Card.Text>
                  Become a full stack developer by learning both front-end and back-end web technologies.
                </Card.Text>
               
                <Button style={{backgroundColor:'#007B6E'}} href="https://wa.link/5jxo75" target='_blank'>Enroll Now</Button>              </Card.Body>
            </Card>
          </Col>
    

          <Col sm={12} md={6} lg={4}>
  <Card className="mb-4 shadow-lg hover-effect"style={{marginTop:'20px'}}>
    <Card.Body className="text-center">
      {/* Data Analysis Icon */}
      <FaChartBar size={60} className="text-success mb-3" />
      <Card.Title style={{ color: '#007B6E' }}>Data Analysis</Card.Title>
      <Card.Text>
        Master data-driven decision-making! Learn Excel, Python, SQL, and powerful tools like Power BI to analyze, visualize, and present data effectively.
      </Card.Text>
      <Button style={{ backgroundColor: '#007B6E' }} href="https://wa.link/5jxo75" target="_blank">
        Enroll Now
      </Button>
    </Card.Body>
  </Card>
</Col>


<Col sm={12} md={6} lg={4}>

<Card className="mb-4 shadow-lg hover-effect" style={{marginTop:'20px'}}>
  <Card.Body className="text-center">
    <FaHtml5 size={60} className="text-danger mb-3" />
    <Card.Title style={{color:'#007B6E'}}>Front-end Development</Card.Title>
    <Card.Text>
      Master the art of creating beautiful and responsive user interfaces. Learn HTML5, CSS3, and JavaScript to design modern websites.
    </Card.Text>
    
    <Button style={{backgroundColor:'#007B6E'}} href="https://wa.link/5jxo75" target='_blank'>Enroll Now</Button>    </Card.Body>
</Card>
</Col>     

          
        </Row>
      </Container>

    
    </div>

    <Container className="py-5 text-center">
      <h1 className="mb-5" style={{ fontWeight: 'bold', color: '#007B6E' }}>
        My Achievements
      </h1>
          <p className="text-muted mb-4">
           <strong> Here's a certificate showcasing my dedication and accomplishments in learning and development.</strong>
          </p>
      <Row className="justify-content-center">
        <Col xs={12} sm={10} md={6} lg={5} className="mb-4">
          <img
            src="/carcalicty/Certificate By Zynex Solution.png" // Replace with your actual certificate image path
            alt="Certificate"
            fluid
            rounded
            className="shadow-lg"
            style={{
              maxWidth: '100%',
              maxHeight: '500px',
              objectFit: 'cover',
              border: '2px solid #007B6E',
            }}
          />
        </Col>
        <Col xs={12} sm={10} md={6} lg={5} className="mb-4">
          <img
            src="/carcalicty/Green and Grey Bordered Appreciation Certificate (5).png" // Replace with your actual certificate image path
            alt="Certificate"
            fluid
            rounded
            className="shadow-lg"
            style={{
              maxWidth: '100%',
              maxHeight: '500px',
              objectFit: 'cover',
              border: '2px solid #007B6E',
            }}
          />
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col xs={12} sm={10} md={6} lg={5} className="mb-4">
          <img
            src="/public/carcalicty/Green and Grey Bordered Appreciation Certificate (7).png" // Replace with your actual certificate image path
            alt="Certificate"
            fluid
            rounded
            className="shadow-lg"
            style={{
              maxWidth: '100%',
              maxHeight: '500px',
              objectFit: 'cover',
              border: '2px solid #007B6E',
            }}
          />
        </Col>
        <Col xs={12} sm={10} md={6} lg={5} className="mb-4">
          <img
            src="/carcalicty/Green and Grey Bordered Appreciation Certificate (8).png" // Replace with your actual certificate image path
            alt="Certificate"
            fluid
            rounded
            className="shadow-lg"
            style={{
              maxWidth: '100%',
              maxHeight: '500px',
              objectFit: 'cover',
              border: '2px solid #007B6E',
            }}
          />
        </Col>
      </Row>
    </Container>
    </>
  );
};

export default CoursePage;
