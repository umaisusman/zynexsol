import React from 'react';
import { Container, Row, Col, Card, Button, Navbar, Nav, Carousel } from 'react-bootstrap';
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaDatabase, FaNodeJs,FaPaintBrush, FaVuejs, FaAngular, FaCode } from 'react-icons/fa';

const CoursePage = () => {
  return (
    <>
    <div>
     

      {/* Hero Section */}
      <Carousel interval={5000}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/carcalicty/brooke-cagle-g1Kr4Ozfoac-unsplash.jpg"
            alt="First slide" style={{height:'90vh'}}
          />
          <Carousel.Caption>
            <h3 style={{color:'#007B6E'}}> <strong> Master Web Development </strong></h3>
            <p>Learn the latest technologies and start your career as a web developer.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/carcalicty/headway-5QgIuuBxKwM-unsplash.jpg"
            alt="Second slide" style={{height:'90vh'}}
          />
          <Carousel.Caption>
            <h3 style={{color:'#007B6E'}}> <strong> Code Your Future</strong></h3>
            <p>Join our coding community and build the next big thing.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      {/* Course Offerings Section */}
      <Container id="courses" className="my-5">
        <h2 className="text-center mb-4"style={{color:'#007B6E'}}> <strong>Our Web Development Courses</strong></h2>
        <hr />
        <Row style={{marginTop:'10px'}}>
          {/* HTML5 Course */}


          <Col sm={12} md={6} lg={4}>
  <Card className="mb-4 shadow-lg hover-effect">
    <Card.Body className="text-center">
      {/* Front-end Development Icon */}
      <FaHtml5 size={60} className="text-danger mb-3" />
      <Card.Title style={{color:'#007B6E'}}>Front-end Development</Card.Title>
      <Card.Text>
        Master the art of creating beautiful and responsive user interfaces. Learn HTML5, CSS3, and JavaScript to design modern websites.
      </Card.Text>
      
      <Button style={{backgroundColor:'#007B6E'}} href="https://wa.link/5jxo75" target='_blank'>Enroll Now</Button>    </Card.Body>
  </Card>
</Col>

<Col sm={12} md={6} lg={4}>
  <Card className="mb-4 shadow-lg hover-effect">
    <Card.Body className="text-center">
      {/* Back-end Development Icon */}
      <FaDatabase size={60} className="text-success mb-3" />
      <Card.Title style={{color:'#007B6E'}}>Back-end Development</Card.Title>
      <Card.Text>
        Learn server-side programming and databases to power web applications. Understand Node.js, Express, and database management with SQL or NoSQL.
      </Card.Text>
     
      <Button style={{backgroundColor:'#007B6E'}} href="https://wa.link/5jxo75" target='_blank'>Enroll Now</Button>    </Card.Body>
  </Card>
</Col>
          <Col sm={12} md={6} lg={4} >
            <Card className="mb-4 shadow-lg hover-effect">
              <Card.Body className="text-center">
                <FaCode size={60} className="text-dark mb-3" />
                <Card.Title style={{color:'#007B6E'}}>Full Stack Development</Card.Title>
                <Card.Text>
                  Become a full stack developer by learning both front-end and back-end web technologies.
                </Card.Text>
               
                <Button style={{backgroundColor:'#007B6E'}} href="https://wa.link/5jxo75" target='_blank'>Enroll Now</Button>              </Card.Body>
            </Card>
          </Col>

 
          <Col sm={12} md={6} lg={4} style={{marginTop:'10px'}}>
            <Card className="mb-4 shadow-lg hover-effect">
              <Card.Body className="text-center">
                <FaHtml5 size={60} className="text-danger mb-3" />
                <Card.Title style={{color:'#007B6E'}}>HTML5 Advance</Card.Title>
                <Card.Text>
                  Learn the core structure of web pages with HTML5. This is the foundation of web development.
                </Card.Text>
                
                <Button style={{backgroundColor:'#007B6E'}} href="https://wa.link/5jxo75" target='_blank'>Enroll Now</Button>              </Card.Body>
            </Card>
          </Col>

          {/* CSS3 Course */}
          <Col sm={12} md={6} lg={4} style={{marginTop:'10px'}}>
            <Card className="mb-4 shadow-lg hover-effect">
              <Card.Body className="text-center">
                <FaCss3Alt size={60} className="text-info mb-3" />
                <Card.Title style={{color:'#007B6E'}}>CSS3 Styling</Card.Title>
                <Card.Text>
                  Master the art of styling web pages using CSS3. Learn how to make your websites look stunning.
                </Card.Text>
                
                <Button style={{backgroundColor:'#007B6E'}} href="https://wa.link/5jxo75" target='_blank'>Enroll Now</Button>              </Card.Body>
            </Card>
          </Col>

          {/* JavaScript Course */}
          <Col sm={12} md={6} lg={4} style={{marginTop:'10px'}}>
            <Card className="mb-4 shadow-lg hover-effect">
              <Card.Body className="text-center">
                <FaJsSquare size={60} className="text-warning mb-3" />
                <Card.Title style={{color:'#007B6E'}}>JavaScript Programming</Card.Title>
                <Card.Text>
                  Dive into programming with JavaScript, the language that powers interactive web pages.
                </Card.Text>
                
                <Button style={{backgroundColor:'#007B6E'}} href="https://wa.link/5jxo75" target='_blank'>Enroll Now</Button>              </Card.Body>
            </Card>
          </Col>
      
          {/* ReactJS Course */}
          <Col sm={12} md={6} lg={4} style={{marginTop:'10px'}}>
            <Card className="mb-4 shadow-lg hover-effect">
              <Card.Body className="text-center">
                <FaReact size={60} className="text-info mb-3" />
                <Card.Title style={{color:'#007B6E'}}>ReactJS</Card.Title>
                <Card.Text>
                  Learn ReactJS, one of the most popular JavaScript libraries for building modern user interfaces.
                </Card.Text>
               
                <Button style={{backgroundColor:'#007B6E'}} href="https://wa.link/5jxo75" target='_blank'>Enroll Now</Button>              </Card.Body>
            </Card>
          </Col>
          <Col sm={12} md={6} lg={4} style={{ marginTop: '10px' }}>
    <Card className="mb-4 shadow-lg hover-effect">
      <Card.Body className="text-center">
        <FaDatabase size={60} className="mb-3" style={{color:'#007B6E'}}  />
        <Card.Title style={{color:'#007B6E'}}>PostgreSQL</Card.Title>
        <Card.Text>
          Master PostgreSQL database management, learn to create and maintain efficient databases.
        </Card.Text>
        
        <Button style={{ backgroundColor: '#007B6E' }} href="https://wa.link/5jxo75" target='_blank'>Enroll Now</Button>
      </Card.Body>
    </Card>
  </Col>

          {/* Node.js Course */}
          <Col sm={12} md={6} lg={4} style={{marginTop:'10px'}}>
            <Card className="mb-4 shadow-lg hover-effect">
              <Card.Body className="text-center">
                <FaNodeJs size={60} className="text-success mb-3" />
                <Card.Title style={{color:'#007B6E'}}>Node.js Development</Card.Title>
                <Card.Text>
                  Learn Node.js, a powerful backend JavaScript runtime used for building scalable web applications.
                </Card.Text>
              
                <Button style={{backgroundColor:'#007B6E'}} href="https://wa.link/5jxo75" target='_blank'>Enroll Now</Button>              </Card.Body>
            </Card>
          </Col>

          {/* Vue.js Course */}
          <Col sm={12} md={6} lg={4} style={{marginTop:'10px'}}>
            <Card className="mb-4 shadow-lg hover-effect">
              <Card.Body className="text-center">
                <FaVuejs size={60} className="text-success mb-3" />
                <Card.Title style={{color:'#007B6E'}}>Next.js</Card.Title>
                <Card.Text>
                  Dive into Next.js, an elegant JavaScript framework for building dynamic user interfaces.
                </Card.Text>
               
                <Button style={{backgroundColor:'#007B6E'}} href="https://wa.link/5jxo75" target='_blank'>Enroll Now</Button>              </Card.Body>
            </Card>
          </Col>
        
          {/* Angular Course */}
          <Col sm={12} md={6} lg={4} style={{marginTop:'10px'}}>
            <Card className="mb-4 shadow-lg hover-effect">
              <Card.Body className="text-center">
                <FaAngular size={60} className="text-danger mb-3" />
                <Card.Title style={{color:'#007B6E'}}>Angular Fundamentals</Card.Title>
                <Card.Text>
                  Learn Angular, a popular framework for building single-page applications.
                </Card.Text>
               
                <Button style={{backgroundColor:'#007B6E'}} href="https://wa.link/5jxo75" target='_blank'>Enroll Now</Button>
              </Card.Body>
            </Card>
          </Col>

          {/* Database Management Course */}
          <Col sm={12} md={6} lg={4} style={{marginTop:'10px'}}>
            <Card className="mb-4 shadow-lg hover-effect">
              <Card.Body className="text-center">
                <FaDatabase size={60} className="mb-3" style={{color:'#007B6E'}} />
                <Card.Title style={{color:'#007B6E'}}>Database Management</Card.Title>
                <Card.Text>
                  Learn how to manage and interact with databases. PostgreSQL, Mongodb and other databases.
                </Card.Text>
               
                <Button style={{backgroundColor:'#007B6E'}} href="https://wa.link/5jxo75" target='_blank'>Enroll Now</Button>
              </Card.Body>
            </Card>
          </Col>


  <Col sm={12} md={6} lg={4} style={{ marginTop: '10px' }}>
    <Card className="mb-4 shadow-lg hover-effect">
      <Card.Body className="text-center">
        <FaPaintBrush size={60} className=" mb-3" style={{color:'red'}}  />
        <Card.Title style={{color:'#007B6E'}}>Graphic Design</Card.Title>
        <Card.Text>
          Unleash your creativity and learn Adobe Photoshop, Illustrator, and other graphic design tools.
        </Card.Text>
        
        <Button style={{ backgroundColor: '#007B6E' }} href="https://wa.link/5jxo75" target='_blank'>Enroll Now</Button>
      </Card.Body>
    </Card>
  </Col>

  <Col sm={12} md={6} lg={4} style={{ marginTop: '10px' }}>
    <Card className="mb-4 shadow-lg hover-effect">
      <Card.Body className="text-center">
        <FaDatabase size={60} className="mb-3" style={{color:'#007B6E'}}  />
        <Card.Title style={{color:'#007B6E'}}>MongoDB</Card.Title>
        <Card.Text>
          Dive into NoSQL databases with MongoDB, learn CRUD operations and advanced queries.
        </Card.Text>
        <Button style={{ backgroundColor: '#007B6E' }} href="https://wa.link/5jxo75" target='_blank'>Enroll Now</Button>
      </Card.Body>
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
            src="/carcalicty/#007B6E and Grey Bordered Appreciation Certificate (5).png" // Replace with your actual certificate image path
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
            src="/carcalicty/#007B6E and Grey Bordered Appreciation Certificate (8).png" // Replace with your actual certificate image path
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
            src="/carcalicty/#007B6E and Grey Bordered Appreciation Certificate (7).png" // Replace with your actual certificate image path
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
