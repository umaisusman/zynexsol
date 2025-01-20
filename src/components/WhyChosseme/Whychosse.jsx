import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { FaUsers, FaTools, FaCogs, FaHandshake, FaClock, FaRegCheckCircle, FaUserTie, FaChartLine } from 'react-icons/fa';
import './Whychosse.css';

const reasons = [
    { icon: <FaUsers />, title: 'We’re an Extension of your Team', description: 'Our team approaches every project like it’s the first of many engagements where long-term client satisfaction is at the core of every decision made.', color: '#FF6B6B' },
    { icon: <FaTools />, title: 'Full-Stack Expertise', description: 'With experts in cloud infrastructure, database design, application architecture, UI/UX and more, our team has all your software needs covered for this project AND your next one.', color: '#FFD93D' },
    { icon: <FaCogs />, title: 'Agile Development Puts You in the Driver’s Seat', description: 'With our agile process, you’ll see progress earlier, collaborate with our team more often, and enjoy a quicker time to market.', color: '#4CAF50' },
    { icon: <FaHandshake />, title: 'We Value Client Partnerships Over New Sales', description: 'Long-term client partnerships and an impressive track record of delivery allow us to focus on delivering solutions over sales tactics.', color: '#007B6E' },
    { icon: <FaClock />, title: 'Solutions Focused, not Hours Focused', description: 'Our goal with every project is to minimize the need for custom development by leveraging existing best-in-class tools to solve our clients’ problems.', color: '#34D399' },
    { icon: <FaRegCheckCircle />, title: 'Complete Delivery from Design to Deployment to Support', description: 'Don’t just “rent a developer”. With us, you’ll engage a full team of software pros including designers, developers and testers until the job is done.', color: '#3B82F6' },
    { icon: <FaUserTie />, title: 'You’ll Only Pay for Productive Time', description: 'Need us to slow development to reduce costs? We can do that. Need to deliver in record time? We can do that too! Control your budget with our flexible scheduling.', color: '#FB7185' },
    { icon: <FaChartLine />, title: 'We Emphasize Employee Development', description: 'Investing in our team’s growth ensures cutting edge skills are passed on to you. After all, when you partner with us, our team becomes your team.', color: '#F59E0B' }
];

const WhyChooseUs = () => {
    return (
        <Container className="why-choose-us my-5">
            <h2 className="text-center mb-5" > <strong> Why Choose Zynex Soultions?</strong></h2>
            <Row className='mt-5'>
                {reasons.map((reason, index) => (
                    <Col key={index} xs={12} sm={6} lg={3} className="mb-4">
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Card className="h-100 shadow-sm p-1">
                                <Card.Body className="text-center" style={{ height: "300px" }}>
                                    <div className="icon-container mb-3" style={{color:'#007B6E'}}>
                                        {reason.icon}
                                    </div>
                                    <Card.Title className="mb-2" style={{color:'#007B6E'}}>{reason.title}</Card.Title>
                                    <Card.Text className="text-muted">{reason.description}</Card.Text>
                                </Card.Body>
                            </Card>
                        </motion.div>
                    </Col>
                ))}
            </Row>
        </Container>

    );
};
export default WhyChooseUs;

export function Chosse() {
  return (
    <h1 style={{display:'flex',justifyContent:'center',alignItems:'center',marginTop:'20px'}}>Hear From Our Happy Clients</h1>
  )
}


