import React, { useState } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { FaAngular, FaNodeJs, FaReact, FaAndroid, FaJava } from 'react-icons/fa';
import { SiPhp, SiVerdaccio } from "react-icons/si";
import { IoIosAperture } from "react-icons/io";
import './HireDeveloperComponent3.css';
import CustomForm from '../Custom form/Customform'; // Import CustomForm

const HireDeveloperComponent3 = () => {
    const [showForm, setShowForm] = useState(false); // State to manage form visibility

    const developers = [
        { icon: <FaAngular />, title: 'Hire AngularJS Developer', description: 'Build captivating front end for web applications with ease. Hire angular js developers to create interactive UI/UX to engage your users.' },
        { icon: <FaReact />, title: 'Hire Flutter Developer', description: 'Deliver engaging experience consistently across platforms. Hire Flutter developers to build cross-platform applications.' },
        { icon: <FaJava />, title: 'Hire JavaScript Developer', description: 'Build highly scalable and secure enterprise solutions by hiring experienced Java programmers.' },
        { icon: <FaNodeJs />, title: 'Hire NodeJS Developer', description: 'Hire NodeJS developers from your team in India to create efficient and data-intensive server-side web applications.' },
        { icon: <SiPhp />, title: 'Hire php Developer', description: 'Build desktop, web, mobile, or cloud applications easily and quickly. Hire .Net developers to build both front-end & backend for your application.' },
        { icon: <FaReact />, title: 'Hire ReactJS Developer', description: 'Hire React developers to create an attractive front-end for your web application. Drive engagement through interactive UI & UX.' },
        { icon: <FaAndroid />, title: 'Hire Android Developer', description: 'Hire experienced Android developers to build secure and feature-rich native apps at competitive rates.' },
        { icon: <IoIosAperture />, title: 'Hire IOS Developer', description: 'Hire IOS experts to create high-performance IOS applications with intuitive designs to drive user engagement.' },
        { icon: <SiVerdaccio />, title: 'Hire RoR Developers', description: 'Hire RoR developers to automate mundane and rule-based repetitive tasks. Deploy RoR bots to bring speed and accuracy to processes.' },
    ];

    return (
        <>
            <Container className="hire-developers-sectionOne py-5" style={{ backgroundColor: 'white' }}>
                <h2 className="text-center mb-4"  style={{color:'#007B6E'}}>Hire Developers For 360° Development Services</h2>
                <p className="text-center mb-5" style={{ color: 'black' }}>
                    Hire developers across different tech-stack from
                    a pre-vetted talent pool of mid to <br />
                    senior-level software engineers to scale your project quickly and efficiently. With Zynex Soultions, <br />
                    you get offshore programmers with extensive industry experience who fast-forward your project development.
                </p>
                <Row className="gy-4">
                    {developers.map((developer, index) => (
                        <Col key={index} md={4}>
                            <Card className="h-100 text-center">
                                <Card.Body>
                                    <div className="developer-icon mb-3" style={{ fontSize: '70px', color: '#007B6E' }}>
                                        {developer.icon}
                                    </div>
                                    <Card.Title  style={{color:'#007B6E'}}>{developer.title}</Card.Title>
                                    <Card.Text>{developer.description}</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        height: '15vh',
                    }}
                >
                    <button
                        style={{
                            backgroundColor: '#007B6E',
                            color: 'white',
                            padding: '15px 30px',
                            border: 'none',
                            borderRadius: '20px',
                            fontSize: '1.2rem',
                            cursor: 'pointer',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                        }}
                        onClick={() => setShowForm(!showForm)} // Toggle form visibility
                    >
                        Hire Top Developer - Affordable & Reliable Experts
                    </button>
                </div>
            </Container>

            {/* Conditionally render the CustomForm based on state */}
            {showForm && <CustomForm />}
        </>
    );
};

export default HireDeveloperComponent3;
