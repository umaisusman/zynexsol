import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import { FaRegStar, FaDollarSign, FaChartLine, FaLightbulb, FaUsers, FaHeadset } from 'react-icons/fa';
import { motion } from 'framer-motion';
import './MobileAppPage.css';
import LandingPage from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import MobileComponent from '../MobileComponent/MobileComponent';
import Reviews from '../Reviews/Reviews'
import CustomForm from '../Custom form/Customform';
import BusinessModels from '../HiringModel/Hiringmodel';
import PricingCards from '../PricingCard/Pricingcard'
import FeatureSection from '../MobileComponent2/MobileComponent2';
import IndustriesGrid from '../indusGrid/industriesGrid'

const MobileAppPage = () => {
    const { name } = useParams();
    const [MobileData, setMobileData] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        axios
            .get(`${import.meta.env.VITE_APP_API_KEY}/api/servicesdropdown/${name || 'Mobile App Development'}`)
            .then((response) => {
                setMobileData(response.data);
            })
            .catch((error) => {
                console.error("There was an error fetching the service data!", error);
            });
    }, [name]);

    if (!MobileData) {
        return <div>Loading...</div>; // Loading state while data is being fetched
    }
    const services = [
        {
            icon: <FaRegStar size={40} color="#007B6E" />,
            title: "Thriving in the industry since 7 years",
            description: "With a good 7 years of experience, we have high expertise in developing products by utilizing the latest technologies for different industries and can proudly boast about our top clients who have been quite happy with our services."
        },
        {
            icon: <FaDollarSign size={40} color="#007B6E" />,
            title: "Cost-efficient services",
            description: "We offer the best quality services at a decent price. Our highly efficient developers are dedicated towards catering the cut-edge services at a reasonable rate."
        },
        {
            icon: <FaChartLine size={40} color="#007B6E" />,
            title: "Top-notch services",
            description: "Our products thrive the best in the market due to the endless efforts put forth by our determined team."
        },
        {
            icon: <FaLightbulb size={40} color="#007B6E" />,
            title: "We believe in innovation",
            description: "Delivering any product without an innovative strategy isn’t feasible and is worthless. We implement constant innovative strategies to deliver better results."
        },
        {
            icon: <FaUsers size={40} color="#007B6E" />,
            title: "Enhanced customer experience",
            description: "With a team of highly skilled and qualified professionals, we have the expertise to build highly interactive applications that provide an excellent customer experience."
        },
        {
            icon: <FaHeadset size={40} color="#007B6E" />,
            title: "Customer support",
            description: "Our service is not just limited to the delivery of the product. We do provide customer support post the delivery of the product."
        },
    ];

    return (
        <>
            <LandingPage />

            <Container fluid className="design-services-section" style={{ backgroundColor: '#00b3a0' }}>
                <Container>
                    <Row className="align-items-center" style={{ minHeight: '90vh' }}>
                        <Col md={6}>
                            <motion.div
                                initial={{ opacity: 0, x: -50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5 }}
                            >
                                <h1 className="" style={{color:'#007B6E'}}>{MobileData.Title}</h1>
                                <p className="text-white mt-4">{MobileData.description}</p>
                                <Button
                                     onClick={() => window.open(' https://wa.link/5jxo75', '_blank', 'noopener,noreferrer')}
                                    variant="primary"
                                    className="get-start-btn"
                                    style={{ backgroundColor: '#007B6E',color:'white' }}
                                >
                                    Get Started
                                </Button>
                            </motion.div>
                        </Col>
                        <Col md={6} className="text-center">
                            <motion.img
                                src={MobileData.thumbnailImage}
                                alt={MobileData.title}
                                className="img-fluid"
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5 }}
                            />
                        </Col>
                    </Row>
                </Container>
            </Container>


            <Container fluid className="tech-illustration">
                <Row className="align-items-center justify-content-center">
                    <h1 style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '40px',color:'#007B6E' }}>Assisting You in Achieving Your Business goals through Top-notch</h1>
                    <h1 style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '0px' }}>Mobile App Development Strategies and Techniques</h1>
                    <Col xs={12} md={6} className="d-flex justify-content-center">
                        <div className="laptop">
                            <img src="/Running coach/mobile10-removebg-preview.png" alt="Laptop" />
                        </div>
                    </Col>


                    <Col xs={12} md={6} className="d-flex justify-content-center">
                        <div className="tech-icons">
                            <p>Zynex Soultions is recognized as a best mobile application development software provider, committed to understanding
                                your business concept first and foremost. We pride ourselves on delivering market-ready applications tailored
                                precisely to your needs. Our approach goes beyond traditional mobile app development services, as we prioritize your
                                satisfaction above all else. Feel free to share your requirements with us, and we'll work to incorporate them
                                into a contemporary mobile app that aligns with your broader business goals</p>
                        </div>
                    </Col>
                </Row>
            </Container>



            <Container fluid style={{ backgroundColor: '#f3f6f5' }}>
                <Row
                    className="justify-content-center align-items-center"
                    style={{ padding: '20px' }}
                >
                    <Col md={6} className="d-flex justify-content-center mb-4 mb-md-0">
                        <motion.img
                            src={MobileData.image3}
                            alt={MobileData.Title2}
                            className="img-fluid"
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            style={{ maxWidth: '100%', height: 'auto' }}
                        />
                    </Col>
                    <Col md={6}>
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <h1 style={{color:'#007B6E'}}>{MobileData.Title2}</h1>
                            <p>{MobileData.description2}</p>
                        </motion.div>
                    </Col>
                </Row>
            </Container>


            <Container fluid style={{ backgroundColor: '' }}>
                <Row
                    className="justify-content-center align-items-center"
                    style={{ padding: '20px' }}
                >
                    <Col md={6}>
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <h1  style={{color:'#007B6E'}}>{MobileData.Title3}</h1>
                            <p>{MobileData.description3}</p>
                        </motion.div>
                    </Col>
                    <Col md={6} className="d-flex justify-content-center mb-4 mb-md-0">
                        <motion.img
                            src={MobileData.image4}
                            alt={MobileData.Title3}
                            className="img-fluid"
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            style={{ maxWidth: '100%', height: 'auto' }}
                        />
                    </Col>
                </Row>
            </Container>

            <Container fluid style={{ backgroundColor: '#f3f6f5' }}>
                <Row
                    className="justify-content-center align-items-center"
                    style={{ padding: '20px' }}
                >
                    <Col md={6} className="d-flex justify-content-center mb-4 mb-md-0">
                        <motion.img
                            src={MobileData.image5}
                            alt={MobileData.Title4}
                            className="img-fluid"
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            style={{ maxWidth: '100%', height: 'auto' }}
                        />
                    </Col>
                    <Col md={6}>
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <h1  style={{color:'#007B6E'}}>{MobileData.Title4}</h1>
                            <p>{MobileData.description4}</p>
                        </motion.div>
                    </Col>
                </Row>
            </Container>



            <Container fluid >
                <Row
                    className="justify-content-center align-items-center"
                    style={{ padding: '20px' }}
                >
                    <Col md={6}>
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <h1  style={{color:'#007B6E'}}>{MobileData.Title5}</h1>
                            <p>{MobileData.description5}</p>
                        </motion.div>
                    </Col>
                    <Col md={6} className="d-flex justify-content-center mb-4 mb-md-0">
                        <motion.img
                            src={MobileData.image6}
                            alt={MobileData.Title5}
                            className="img-fluid"
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            style={{ maxWidth: '100%', height: 'auto' }}
                        />
                    </Col>
                </Row>
            </Container>

            <MobileComponent />

            <Container className="py-5">
                <h1 className="text-center"  style={{color:'#007B6E'}}> <strong> Why Work with Us? </strong></h1>
                <p className="text-center mt-3">We offer vetted Developers with high expertise in delivering high-quality software development</p>

                <Row xs={1} md={2} lg={3} className="g-4 mt-5">
                    {services.map((service, idx) => (
                        <Col key={idx} className='Dr'>
                            <Card className=" h-100 text-center p-3 shadow-sm service-card90">
                                <Card.Body>
                                    <div className="mb-3">
                                        {service.icon}
                                    </div>
                                    <Card.Title className="mb-3">{service.title}</Card.Title>
                                    <Card.Text>{service.description}</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>

                <style type="text/css">
                    {`
          .service-card90:hover {
            transform: translateY(-10px);
            transition: transform 0.3s ease-in-out;
          }

          .card-title {
            font-weight: 600;
            font-size: 1.2rem;
            color: #1a1a1a;
          }

          .card-text {
            font-size: 0.95rem;
            color: #666;
          }
        `}
                </style>
            </Container>



            <Container className="py-4">
                <Row>
                    <Col xs={12}>
                        <motion.h2
                            initial={{ opacity: 0, y: -50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            style={{
                                color: '#007B6E',
                                fontSize: '2.5rem',
                                fontWeight: 'bold',
                                marginBottom: '20px',
                                marginTop: '20px',
                                textAlign: 'center',
                            }}
                        >
                            Technology Stacks
                        </motion.h2>
                    </Col>
                </Row>
                <Row>
                    <Col md={1}></Col>
                    <Col xs={12} md={10}>
                        <motion.img
                            src="/Images/Mobile.jpg"
                            alt="Technology Stacks"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5 }}
                            className="img-fluid"
                            style={{
                                borderRadius: '10px',
                                boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
                                height: '150px',
                                marginTop: '20px',
                            }}
                        />
                    </Col>
                </Row>
            </Container>

            <IndustriesGrid />
            <Reviews />
            <FeatureSection />
            <BusinessModels />
            <PricingCards />
            <CustomForm />

            <Footer />
        </>
    );
};

export default MobileAppPage;
