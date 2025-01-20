import React from 'react';
import { Container, Row, Col, Image, Card } from 'react-bootstrap';
import { motion } from 'framer-motion';
import './AboutComponent4.css'; 

const Leadership = () => {
  return (
    <>
      <Container fluid className="leadership-container py-5">
        {/* Section Title */}
        <motion.div 
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-5"
        >
          <h2 className="display-4 section-title" style={{color:'#007B6E'}}> Our Leadership</h2>
          <p className="lead section-subtitle">
            Meet the team driving our success.
          </p>
        </motion.div>

        {/* Leadership Cards */}
        <Row className="justify-content-center mx-3">
          {[
            { name: 'Nouman Hafeez', role: 'Director of IT', imgSrc: '/Expensify/02.png' },
            { name: 'Farrukh Hafeez', role: 'Founder & CEO', imgSrc: '/Expensify/04.png' },
            { name: 'Faizan Hafeez', role: 'Co-Founder & Director', imgSrc: '/Expensify/03.png' },
          ].map((leader, index) => (
            <Col  md={6} lg={4} className="mb-4" key={index}>
              <motion.div 
                initial={{ opacity: 0, scale: 0.9, y: 20 }} 
                animate={{ opacity: 1, scale: 1, y: 0 }} 
                transition={{ duration: 0.6, ease: 'easeOut' }}
                whileHover={{ scale: 1.05, y: -5, boxShadow: '0px 15px 25px rgba(0,0,0,0.3)' }}
              >
                <Card className="leader-card border-0" style={{width:'auto',height:'auto'}}>
                  {/* Accent Header */}
                  <div className="card-header accent-header"></div>

                  {/* Leader Image */}
                  <Image src={leader.imgSrc} className="card-img-top leader-image mx-auto mt-3" style={{height:'auto'}}/>

                  {/* Leader Details */}
                  <Card.Body className="text-center">
                    <Card.Title className="mb-2">
                      <h3 className="leader-name">{leader.name}</h3>
                    </Card.Title>
                    <Card.Text className="role-text">
                      {leader.role}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>

      {/* Business Engagement Section */}
      <Container fluid className="py-5 engagement-section text-center">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="display-5 section-title"
        >
          Our Business Engagement Approach
        </motion.h2>
        <motion.hr
          initial={{ width: 0 }}
          animate={{ width: '50%' }}
          transition={{ duration: 0.7 }}
          className="mx-auto my-4 engagement-hr"
        />
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="lead text-black engagement-text"
        >
          Take your business to the next level by hiring our expert developers and teams on monthly or fixed-price models.
        </motion.p>
      </Container>

      {/* Custom CSS */}
      <style jsx>{`
        .leadership-container {
          background-color: #F8F9FA;
        }

        /* Section Titles */
        .section-title {
          color: #002147;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 1px;
        }
        .section-subtitle {
          font-size: 1.2rem;
          color: #5A5A5A;
        }

        /* Leadership Cards */
        .leader-card {
          background: linear-gradient(135deg, #ffffff, #f0f0f0);
          border-radius: 15px;
          overflow: hidden;
          position: relative;
          transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
        }

        /* Accent Header */
        .accent-header {
          height: 5px;
          background: linear-gradient(to right, #001f3f 20%, #003366 80%);
        }

        /* Leader Image */
        .leader-image {
          width: 100%;
          max-width: 400px;
          height: 700px;
          object-fit: cover;
        
          border-radius: 5px;
          margin-top: 20px;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .leader-image:hover {
          transform: scale(1.05);
          box-shadow: 0px 10px 15px rgba(0, 0, 0, 0.2);
        }

        /* Leader Name and Role */
        .leader-name {
          color: #002147;
          font-weight: 600;
        }
        .role-text {
          color: #5A5A5A;
          font-size: 1.1rem;
          font-weight: 500;
        }

        /* Engagement Section */
        .engagement-section {
          background-color: #F0F2F5;
        }
        .engagement-hr {
          border-top: 2px solid #002147;
        }
        .engagement-text {
          color: #5A5A5A;
        }

        /* Responsive Adjustments */
        @media (max-width: 768px) {
          .leader-image {
            max-width: 250px;
          }
        }
      `}</style>
    </>
  );
};

export default Leadership;
