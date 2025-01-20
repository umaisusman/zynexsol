import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Reviews.css';

const Reviews = () => {
  const testimonials = [
    {
      image: '/Images/1.png',
      name: 'Jim Chilton',
      title: 'CTO',
      company: 'Cengage Group',
      review: 'We work with Zynex Solutions for more than a year on different projects. They helped us on many different tasks ranging from design to backend. Working remotely means that communication is key and they never failed us. We move fast and lean and they give us the resources to doing so. Highly recommended!',
      rating: '5.0',
      img: '/carcalicty/zynex.logo.png'
    },
    {
      image: '/Images/2.png',
      name: 'Eric Stenman',
      title: 'CEO & Founder',
      company: 'Balfour Beatty',
      review: 'The whole Zynex Solutions team has gone above and beyond my expectations. Their hands-on approach and attention to detail is the best in the industry. They helped us bring our app idea to life. I can’t thank them enough for everything they have done for us.',
      rating: '5.0',
      img: '/carcalicty/zynex.logo.png'
    },
    {
      image: '/Images/3.png',
      name: 'Rod West',
      title: 'Group President',
      company: 'iUtility Operations',
      review: 'Zynex Solutions has been our core software development partner from the initial stage to launch and has delivered solid, high-quality results during the whole project integration. We would highly recommend them to anyone looking for a reliable software development company with a complex challenging project and would like to appreciate their team.',
      rating: '5.0',
      img: '/carcalicty/zynex.logo.png'
    },
  ];

  return (
    <>
    <Container className="reviews-container">
      <Row className="justify-content-center">
        {testimonials.map((testimonial, index) => (
          <Col key={index} xs={12} md={6} lg={4} className="mb-4">
            <Card className="testimonial-card">
              <div className="card-image-container">
                <Card.Img variant="top" src={testimonial.image} className="rounded-circle" />
              </div>
              <Card.Body>
                <Card.Title style={{color:'#007B6E'}}>{testimonial.name}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  {testimonial.title}, {testimonial.company}
                </Card.Subtitle>
                <Card.Text>"{testimonial.review}"</Card.Text>
              </Card.Body>
              <Card.Footer className="d-flex justify-content-between align-items-center">
                <div>
                  <img 
                    src={testimonial.img} 
                    alt="Company Logo" 
                    style={{ height: '35px', width: '80px', marginBottom: '0px' }} 
                  />
                </div>
                <div className="d-flex align-items-center">
                  <div className="rating">{testimonial.rating}</div>
                  <div className="d-flex">
                    {[...Array(5)].map((_, i) => (
                      <div key={i} className="star">★</div>
                    ))}
                  </div>
                </div>
              </Card.Footer>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
    <Container>
  <Row className="justify-content-center">
    <Col md={1} sm={12}></Col>
    <Col md={11} sm={12} className="d-flex justify-content-center">
      <img 
        src="/Images/images.png" 
        alt="" 
        className="img-fluid" 
        style={{height:'30vh'}}
      />
    </Col>
  </Row>
</Container>

    </>
  );
};

export default Reviews;
