import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Container, Row, Col, Button, Image, Card } from 'react-bootstrap';
import { motion } from 'framer-motion';
import LandingPage from '../Navbar/Navbar';
import ServicesSectionWeb from '../SerSectionWeb/SerSectionWeb';
import Footer from '../Footer/Footer';
import Reviews from '../Reviews/Reviews'
import CustomForm from '../Custom form/Customform'
import BusinessModels from '../HiringModel/Hiringmodel'
import IndustriesGrid from '../indusGrid/industriesGrid'
import PricingCards from '../PricingCard/Pricingcard'
import './Serdropdown.css';

const ServicesDropdown = () => {
    const { name } = useParams();
    const [serviceData, setServiceData] = useState(null);
    const [portfolioData, setPortfolioData] = useState([]);
    const [isMobileView, setIsMobileView] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const handleResize = () => {
            setIsMobileView(window.innerWidth < 1000);
        };

        window.addEventListener('resize', handleResize);
        handleResize();

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {
        axios.get(`${import.meta.env.VITE_APP_API_KEY}/api/servicesdropdown/${name || 'Web App Development'}`)
            .then(response => setServiceData(response.data))
            .catch(error => console.error("There was an error fetching the service data!", error));
    }, [name]);

    useEffect(() => {
        axios.get(`${import.meta.env.VITE_APP_API_KEY}/api/Portfolio`)
        
            .then(response => setPortfolioData(response.data))
            .catch(error => console.error("Error fetching portfolio data", error));
    }, []);

    const handleViewMoreClick = () => {
        const path = '/portfoliopage';
        window.open(path, '_blank', 'noopener,noreferrer');  
    };

    const handleCardClick = (title) => {
        window.scrollTo(0, 0);
        const path =`/PortfolioCardpage/${title}`;
        window.open(path, '_blank', 'noopener,noreferrer'); 
    };

    const formatDescription = (description) => {
        return description.length > 100
            ? `${description.substring(0, 100)}...`
            : description;
    };

    if (!serviceData) {
        return <p>Loading...</p>;
    }

    return (
        <>
            <LandingPage />
            <Container fluid className="design-services-section" style={{ backgroundColor: serviceData.color || '#00b3a0' }}>
                <Container>
                    <Row className="align-items-center" style={{ minHeight: '90vh' }}>
                        <Col md={6}>
                            <motion.div
                                initial={{ opacity: 0, x: -50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5 }}
                            >
                                <h1 className="" style={{color:'#007B6E'}}>{serviceData.Title}</h1>
                                <p className="text-white mt-4">{serviceData.description}</p>
                                <Button
                                    onClick={() => window.open('https://wa.link/5jxo75', '_blank', 'noopener,noreferrer')}
                                    variant=""
                                    className="get-start-btn"
                                    style={{ backgroundColor: '#007B6E',color:'white' }}
                                >
                                    Get Started
                                </Button>
                            </motion.div>
                        </Col>
                        <Col md={6} className="text-center">
                            <motion.img
                                src={serviceData.thumbnailImage}
                                alt={serviceData.title}
                                className="img-fluid"
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5 }}
                            />
                        </Col>
                    </Row>
                </Container>
            </Container>

            <Container>
                <Row className="justify-content-center">
                    <Col xs={12} sm={10} md={12}>
                        <Image
                            src="/carcalicty/000.jpg"
                            alt="Responsive Image"
                            fluid
                            style={{ marginTop: '20px', height: '220px' }}
                        />
                    </Col>
                </Row>
            </Container>

            <Container className="py-5">
                <div >
                    <h1 style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Web Application Development Services</h1>
                    <h4 style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>With Zynex Soultions, accelerate your pace of web application </h4>
                    <h4 style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>development to gain competitive advantage</h4>
                </div>
            </Container>


            <ServicesSectionWeb />

            <Container className="portfolio">
                <h1 style={{ textAlign: 'center', marginTop: '60px' }}>
                    Our Successful Web App Projects
                </h1>
                <Row>
                    {portfolioData.length > 0 ? (
                        portfolioData.slice(0, 6).map((item, index) => (
                            <Col md={4} key={index}>
                                <Card onClick={() => handleCardClick(item.Title)} style={{ marginTop: '60px' }}>
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5 }}
                                        className="card"
                                    >
                                        <img
                                            src={item.Thumbnailimage}
                                            alt={item.Title}
                                            style={{
                                                width: '100%',
                                                height: '320px',
                                                borderRadius: '8px',
                                                padding: '20px',
                                                position: 'relative',
                                            }}
                                        />
                                        <h3 className="card-title">{item.Title}</h3>
                                        <p className="card-platforms">
                                            {item.techStacks ? item.techStacks.slice(0, 4).join(' ') : 'N/A'}
                                        </p>
                                        <p className="card-text">
                                            {formatDescription(item.description)}
                                        </p>
                                    </motion.div>
                                </Card>
                            </Col>
                        ))
                    ) : (
                        <p style={{ textAlign: 'center', marginTop: '40px' }}>
                            Loading...
                        </p>
                    )}
                </Row>

                <div style={{ display: 'flex', justifyContent: 'center', marginTop: '40px' }}>
                    <motion.div
                        whileHover={{ scale: 1.1, backgroundColor: '#005f7f' }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                        style={{ display: 'inline-block' }}
                    >
                        <Button variant="" onClick={handleViewMoreClick} style={{ backgroundColor: '#007B6E', padding: '15px', color: 'white', width: '330px' }}>
                            View More Projects
                        </Button>
                    </motion.div>
                </div>
            </Container>

            <Container className="py-4">
                <Row>
                    <Col xs={12}>
                        <motion.h2
                            initial={{ opacity: 0, y: -50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            style={{
                                color: '#005f7f',
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
                            src="/carcalicty/stack.jpg"
                            alt="Technology Stacks"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5 }}
                            className="img-fluid"
                            style={{
                                borderRadius: '10px',
                                boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
                                height: '400px',
                                marginTop: '20px',
                            }}
                        />
                    </Col>
                </Row>
            </Container>


            <Container fluid style={{ backgroundColor: '#f2f7f7' }}>
                <Container fluid>
                    <div className="zigzag-container my-3">
                        <div className="process-content text-center">
                            <h2>Our Web App Development Process</h2>
                            <p>
                                Whether you’re new to web application development or a seasoned veteran, we’re committed to providing transparent, honest communication every step of the way.
                            </p>
                        </div>
                        <img
                            src={isMobileView ? "/Images/990.jpg" : "/Images/999.jpg"}
                            alt="Zigzag"
                            className="zigzag-image"
                        />
                    </div>
                </Container>
            </Container>

            <Container className="py-5">
                <Row className="align-items-center">
                    <Col md={6}>
                        <motion.div
                            initial={{ opacity: 0, y: -50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <h1>Why choose Zynex Soultions as your web app development company?</h1>
                            <p>
                                For businesses to make the most of technology, they require an expert's calm and knowing hand.
                                A committed partnership to illuminate the most efficient and beneficial path to success.
                                That’s where Zynex Soultions comes in.
                            </p>
                            <motion.img
                                src="/Images/68image.png"
                                alt="Why Choose Us"
                                className="img-fluid"
                                style={{ marginTop: '40px' }}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5, delay: 0.3 }}
                            />
                        </motion.div>
                    </Col>
                    <Col md={1}></Col>
                    <Col md={5}>
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <Image
                                src="/Images/67.png"
                                alt="Zynex Image"
                                className="img-fluid"
                                style={{ width: '100%', marginBottom: '30px' }}
                            />
                        </motion.div>
                    </Col>
                </Row>
            </Container>

            <BusinessModels />
            <PricingCards/>

            <Container className="py-5">
                <div >
                    <h1 style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>WORK FOR ANY INDUSTRY</h1>
                    <h6 style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Experience Across Different Industries</h6>
                </div>
            </Container>

            <IndustriesGrid />
            <Reviews />
            <CustomForm />
            <Footer />
        </>
    );
};

export default ServicesDropdown;
