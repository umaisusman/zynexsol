import axios from 'axios';
import { FaRegStar, FaDollarSign, FaChartLine, FaLightbulb, FaUsers, FaHeadset } from 'react-icons/fa';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col, Button ,Card} from 'react-bootstrap';
import { motion } from 'framer-motion';
import LandingPage from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import './SerdropdownDevOps.css';
import DevOpsSection from '../DevOpsComponent/DevOpsComponent';
import Reviews from '../Reviews/Reviews';
import CustomForm from '../Custom form/Customform';
import PricingCards from '../PricingCard/Pricingcard'


const ServicesDropdownDevOps = () => {
    const { name } = useParams();
    const [devOpsData, setDevOpsData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`${import.meta.env.VITE_APP_API_KEY}/api/servicesdropdown/${name || 'DevOps Services'}`);
                setDevOpsData(response.data);
            } catch (err) {
                setError("There was an error fetching the service data!");
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, [name]);

    if (loading) {
        return <div>Loading...</div>;  // Optionally replace with a spinner component
    }

    if (error) {
        return <div>{error}</div>;
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

            <Container fluid className="design-services-section" style={{ backgroundColor: ' #007B6E'}}>
                <Container>
                    <Row className="align-items-center" style={{ minHeight: '90vh' }}>
                        <Col md={6}>
                            <motion.div
                                initial={{ opacity: 0, x: -50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5 }}
                            >
                                <h1 className=""  style={{color:'#007B6E'}}>{devOpsData?.title}</h1>
                                <p className="text-white mt-4">{devOpsData?.description}</p>
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
                                src={devOpsData?.thumbnailImage}
                                alt={devOpsData?.title}
                                className="img-fluid"
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5 }}
                            />
                        </Col>
                    </Row>
                </Container>
            </Container>


            <Container fluid style={{ minHeight: '60vh', backgroundColor: '#F0F9F6' }}>
                <Row className="align-items-center p-4">
                    <Col xs={12} md={6} className="mt-4 mt-md-0">
                        <motion.h2
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="section-title"
                            style={{marginTop:'120px',color:'#007B6E'}}
                        >
                            {devOpsData?.Title2}
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            className="section-description"
                        >
                            {devOpsData?.description2}
               
                        </motion.p>
                    </Col>
                    <Col xs={12} md={6} className="mt-4 mt-md-0">
                        <motion.img
                            src={devOpsData?.image3}
                            alt="Development Illustration"
                            className="development-illustration img-fluid"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1 }}
                        />
                    </Col>
                </Row>
            </Container>





            <DevOpsSection />


            <Container className="py-4 mt-5">
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
                    <Col sm={12} md={12}>
                        <motion.img
                            src="/Images/devops.jpg"
                            alt="Technology Stacks"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5 }}
                            className="img-fluid"
                            style={{
                                borderRadius: '10px',
                                boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
                                width:"100%",
                                height: '350px',
                                marginTop: '20px',
                                textAlign:"center"
                            }}
                        />
                    </Col>
                </Row>
            </Container>


            <Container fluid style={{ height: 'auto', marginTop: '120px', backgroundColor: '#F0F9F6' }}>
                <Row className="align-items-center p-4">
                    <Col xs={12} md={6}>
                        <motion.img
                            src={devOpsData?.image4}
                            alt="Development Illustration"
                            className="development-illustration"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1 }}
                        />
                    </Col>
                    <Col xs={12} md={6}>
                        <motion.h2
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="section-title"
                            style={{color:'#007B6E'}}
                        >
                            {devOpsData?.Title3}
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            className="section-description"
                        >
                            {devOpsData?.description3}
                           
                        </motion.p>
                    </Col>
                </Row>
            </Container>

            <Container  className="my-5">
                <Row>
                    <h1 style={{display:'flex',justifyContent:'center',color:'#007B6E',fontWeight:'bold'}}>Benefits of DevOps Development Service</h1>
                    <hr />
                    <Col md={10} className="mx-auto" >
                        <img src="/Expensify/second.png" style={{ width: '100%' }} alt="Service Image" />
                    </Col>
                </Row>
            </Container>

            <Container className="py-5">
                <h1 className="text-center"  style={{color:'#007B6E',fontWeight:'bold'}}>Why Work with Us?</h1>
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


            <Reviews />
            <PricingCards />
            <CustomForm />
            <Footer />
        </>
    );
};

export default ServicesDropdownDevOps;
