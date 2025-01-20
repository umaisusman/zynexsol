import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Container, Row, Col, Button, Image, Card, Form } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { FaCheckCircle } from 'react-icons/fa';
import './DigitalMarketing.css';
import LandingPage from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import DigitalMarkComponent1 from '../DigitalMarkComponent1/DigitalMarkComponent1';
import PricingCards from '../PricingCard/Pricingcard';
import Reviews from '../Reviews/Reviews';
import CustomForm from '../Custom form/Customform';
import IndustriesGrid from '../indusGrid/industriesGrid'
import { FaUsers, FaChartBar, FaComments, FaBullhorn, FaShoppingCart, FaCalculator, FaMoneyBillWave, FaVideo } from 'react-icons/fa';
import { FaSearch, FaClipboardCheck, FaCode, FaTags, FaLink, FaFileAlt } from "react-icons/fa";


const styles = {
    section: {
      padding: "3rem 0",
    },
    heading: {
      fontSize: "2.5rem",
      fontWeight: "bold",
      color: "#000",
      textAlign: "center",
    },
    highlight: {
      color: "#007B6E",
    },
    paragraph: {
      fontSize: "1rem",
      lineHeight: "1.8",
      marginTop: "1rem",
      color: "#000",
      textAlign: "center",
    },
    list: {
      listStyleType: "none",
      padding: 0,
      fontSize: "1rem",
      lineHeight: "1.8",
      color: "#000",
      textAlign: "center",
    },
    listItem: {
      marginBottom: "0.5rem",
    },
    subHeading: {
      fontSize: "1.5rem",
      fontWeight: "bold",
      color: "#007B6E",
      textAlign: "center",
      marginBottom: "2rem",
    },
    card: {
      border: "1px solid #ddd",
      borderRadius: "8px",
      textAlign: "center",
      padding: "1.5rem",
      fontSize: "1rem",
      fontWeight: "bold",
      boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
      transition: "transform 0.3s ease, box-shadow 0.3s ease",
      cursor: "pointer",
    },
    cardHover: {
      transform: "translateY(-5px)",
      boxShadow: "0 8px 20px rgba(0,0,0,0.2)",
    },
  };

  const servicer = [
    { title: "Ebook Ghostwriting" },
    { title: "Ebook Proofreading & Editing" },
    { title: "Ebook Cover Design" },
    { title: "Ebook Publishing" },
    { title: "Ebook Marketing" },
    { title: "Ebook Store Creation" },
  ];


const servicess = [
    {
      title: "KEYWORD RESEARCH",
      description: "This is the most important step where we research the marketplace to find out the most relevant keywords for your business. Keywords are the key players that help you to rank on search engines, and we will choose the best keywords that can yield maximum profit.",
      icon: <FaSearch />,
    },
    {
      title: "COMPETITOR RESEARCH",
      description: "An essential phase needs to be covered before planning an SEO strategy for the website. We identify, validate, and compare your competitors and their website so that you can stand out from them.",
      icon: <FaUsers />,
    },
    {
      title: "WEBSITE AUDIT & OPTIMIZATION",
      description: "This is an initial phase in SEO, and it is a vital measure to improve the efficiency and visibility of a website on search engines. We can find out all of the website issues by conducting a website audit.",
      icon: <FaClipboardCheck />,
    },
    {
      title: "TECHNICAL SEO",
      description: "It's a crucial aspect of overall SEO, as search engines rely on the technical infrastructure of a website to determine its relevance & authority.",
      icon: <FaCode />,
    },
    {
      title: "ON-PAGE SEO",
      description: "On-page SEO can help to improve your website's performance, increase organic traffic, & boost the visibility of your business.",
      icon: <FaTags />,
    },
    {
      title: "LINK BUILDING",
      description: "This is one of the most important parts of SEO. To increase brand awareness and traffic, backlinks from high-authority websites are beneficial.",
      icon: <FaLink />,
    },
    {
      title: "CONTENT OPTIMIZATION",
      description: "‘Content is king,’ and this is true. You can connect with your right audience by creating compelling and engaging content.",
      icon: <FaFileAlt />,
    },
    {
      title: "RANK-TRACKING PROGRESS",
      description: "We track the ranking of your website on a weekly and monthly basis and check all the ‘Loopholes’.",
      icon: <FaChartBar />,
    },
    {
      title: "ANALYSIS & REPORTING",
      description: "We regularly track and evaluate key performance indicators, such as search engine rankings and website traffic.",
      icon: <FaClipboardCheck />,
    },
  ];

  const sectionStyle = {
    padding: "3rem 0",
    textAlign: "center",
  
  };

  const headingStyle = {
    fontSize: "1.8rem",
    fontWeight: "bold",
    marginBottom: "1.5rem",
  };

  const highlightStyle = {
    color: "#007B6E",
  };

  const cardStyle = {
    border: "none",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    cursor: "pointer",
    height:'250px'
  };

  const cardHoverStyle = {
    transform: "translateY(-5px)",
    boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.2)",
  };

  const iconStyle = {
    fontSize: "2.5rem",
    color: "#007B6E",
    transition: "transform 0.3s ease",
  };

  const iconHoverStyle = {
    transform: "scale(1.2)",
  };

  const titleStyle = {
    fontSize: "1.1rem",
    fontWeight: "bold",
    marginBottom: "1rem",
  };

  const descriptionStyle = {
    fontSize: "0.9rem",
    lineHeight: "1.5",
  };

    const services = [
      { icon: <FaUsers />, title: 'Social Media Strategy', color: '#007BFF' },
      { icon: <FaChartBar />, title: 'Social Media Management', color: '#FFC107' },
      { icon: <FaComments />, title: 'Community Management & Listening', color: '#007BFF' },
      { icon: <FaBullhorn />, title: 'Influencer Marketing', color: '#FFC107' },
      { icon: <FaShoppingCart />, title: 'Social Selling', color: '#FF5722' },
      { icon: <FaCalculator />, title: 'Data Analysis & ROI Modeling', color: '#007BFF' },
      { icon: <FaMoneyBillWave />, title: 'Paid Social Advertising', color: '#FF5722' },
      { icon: <FaVideo />, title: 'Content Production', color: '#007BFF' },
    ];


const DigitalMarketing = () => {
    const { name } = useParams();
    const [DigitalMarketing, setServiceData] = useState(null);
    const [portfolioData, setPortfolioData] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        axios
            .get(`${import.meta.env.VITE_APP_API_KEY}/api/servicesdropdown/${name || 'Digital Marketing'}`)
            .then((response) => {
                setServiceData(response.data);
            })
            .catch((error) => {
                console.error("There was an error fetching the service data!", error);
            });
    }, [name]);


    return (
        <>
            <LandingPage />
            <br/>
            <section className="design-services-section">
            <Container fluid style={{ backgroundColor: '#00b3a0' }}>
                <Container>
                    <Row className="align-items-center" style={{ minHeight: '90vh' }}>
                        <Col md={6}>
                            <motion.div
                                initial={{ opacity: 0, x: -50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5 }}
                            >
                                <h1 className=""  style={{color:'#007B6E'}}>{DigitalMarketing?.title1}</h1>
                                <p className="text-white mt-4">{DigitalMarketing?.description}</p>
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
                                src={DigitalMarketing?.thumbnailImage}
                                alt={DigitalMarketing?.title}
                                className="img-fluid"
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5 }}
                            />
                        </Col>
                    </Row>
                </Container>
                </Container>



                <Container fluid className="py-5" >
                <Row className="text-center mb-4">
                <Col>
                <motion.h1
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="fw-bold"
                >
               <h1 style={{fontSize:'60px',color:'#007B6E',fontWeight:'bold'}}>Social Media Marketing Services</h1> 
               <hr  style={{width:'50%',marginLeft:'25%',height:'13px'}}/>
                </motion.h1>
                <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="text-secondary fs-3"
                style={{marginTop:'25px'}}
                >
                Your customers are deep into the social media space.
                </motion.p>
                </Col>
                </Row>
                <Row className="text-center">
                <Col>
                <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="text-muted mb-5 fs-4"
                style={{}}
                >
                Whether your customers are on Facebook, Twitter, Instagram, LinkedIn, or other social platforms, our social media marketing services can help you connect with them.
                </motion.p>
                <motion.div
                className="d-flex justify-content-center flex-wrap gap-2 mt-3 fs-5"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.9, duration: 0.8 }}
                >
                {[
                  'social strategy',
                  'content production',
                  'community management',
                  'paid social advertising',
                  'influencer marketing',
                  'social selling',
                ].map((tag, index) => (
                  <span
                    key={index}
                    style={{
                      backgroundColor: '#007B6E',
                      borderRadius: '20px',
                      padding: '5px 15px',
                      fontSize: '14px',
                      fontWeight: 'bold',
                    }}
                  >
                    {tag}
                  </span>
                ))}
                </motion.div>
                </Col>
                </Row>
                <Row className="text-center mt-5">
                <Col>
                <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 1.2, duration: 0.8 }}
                >
                </motion.div>
                </Col>
                </Row>
                
                </Container>




                <Container
      
      className="py-5"
      style={{
        
        padding: '50px 15px',
      }}
    >
      {/* Section Title */}
      <Row className="text-center mb-5">
        <Col>
          <motion.h2
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            style={{
              fontWeight: 'bold',
              fontSize: '36px',
              color: '#007B6E',
              fontFamily: "'Poppins', sans-serif",
              letterSpacing: '1px',
            }}
          >
            Our Social Media Marketing Services
          </motion.h2>
          <p
            style={{
              color: '#666',
              fontSize: '16px',
              marginTop: '10px',
              fontFamily: "'Poppins', sans-serif",
            }}
          >
            Elevate your brand presence with our innovative social media strategies.
          </p>
        </Col>
      </Row>

      {/* Services Grid */}
      <Row className="g-4">
        {services.map((service, index) => (
          <Col key={index} lg={3} md={4} sm={6} xs={12}>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileHover={{ scale: 1.1, rotate: 2 }}
              whileTap={{ scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              style={{ cursor: 'pointer' }}
            >
              <Card
                className="text-center shadow-lg"
                style={{
                  backgroundColor: '#fff',
                  borderRadius: '20px',
                  border: 'none',
                  overflow: 'hidden',
                  boxShadow: '0px 8px 15px rgba(0, 0, 0, 0.1)',
                  height:'250px'
                }}
              >
                <Card.Body>
                  {/* Icon Container */}
                  <div
                    style={{
                      fontSize: '40px',
                      color: service.color,
                      backgroundColor: `${service.color}20`,
                      borderRadius: '50%',
                      width: '90px',
                      height: '90px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      margin: '0 auto 20px',
                      boxShadow: `0px 4px 10px ${service.color}50`,
                    }}
                  >
                    {service.icon}
                  </div>
                  <Card.Title
                    style={{
                      fontWeight: 'bold',
                      fontSize: '18px',
                      color: '#007B6E',
                      fontFamily: "'Poppins', sans-serif",
                    }}
                  >
                    {service.title}
                  </Card.Title>
                  <motion.p
                    whileHover={{ y: -5 }}
                    style={{
                      fontSize: '14px',
                      color: '#777',
                      marginTop: '10px',
                      fontFamily: "'Poppins', sans-serif",
                    }}
                  >
                    Delivering results-driven solutions to transform your brand.
                  </motion.p>
                </Card.Body>
              </Card>
            </motion.div>
          </Col>
        ))}
        <p style={{display:'flex',justifyContent:'center',fontSize:'25px',marginTop:'50px'}}> <strong>Contact us today to request an engaging social media marketing strategy for your brand. </strong> </p>
        <Button
  style={{
    backgroundColor: "#007B6E",
    color: "#000",
    fontWeight: "bold",
    fontSize: "16px",
    padding: "10px 30px",
    borderRadius: "25px",
    border: "none",
    boxShadow: "0px 4px 10px rgba(0,0,0,0.2)",
    marginTop: "50px",
    width:'30%',
  marginLeft:'35%'
  }}
  onClick={() => window.open(" https://wa.link/5jxo75", "_blank")}
>
  Contact Us
</Button>
      </Row>
    </Container>





    <Container
      fluid
      style={{
        backgroundColor: "#fff",
        padding: "50px 15px",
        textAlign: "center",
      }}
    >
      {/* SEO Agency Label */}
      <Row>
        <Col>
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            style={{
              display: "inline-block",
              backgroundColor: "#007B6E",
              color: "#000",
              padding: "5px 15px",
              fontWeight: "bold",
              fontSize: "20px",
              borderRadius: "5px",
              letterSpacing: "1px",
              position: "relative",
            }}
          >
            SEO Services
            <span
              style={{
                position: "absolute",
                top: "50%",
                left: "-15px",
                transform: "translateY(-50%)",
                width: "10px",
                height: "10px",
                backgroundColor: "#000",
                borderRadius: "50%",
              }}
            ></span>
            <span
              style={{
                position: "absolute",
                top: "50%",
                right: "-15px",
                transform: "translateY(-50%)",
                width: "10px",
                height: "10px",
                backgroundColor: "#000",
                borderRadius: "50%",
              }}
            ></span>
          </motion.div>
        </Col>
      </Row>

      {/* Title */}
      <Row>
        <Col>
          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            style={{
              fontSize: "36px",
              fontWeight: "bold",
              color: "#000",
              margin: "20px 0 10px",
              fontFamily: "'Poppins', sans-serif",
            }}
          >
            Our{" "}
            <span style={{ color: "#007B6E" }}>SEO Services</span> Designed to
            Rank Website Higher
            <br />
            and Sell More!
          </motion.h1>
        </Col>
      </Row>

      {/* Subtitle */}
      <Row>
        <Col>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{
              color: "#555",
              fontSize: "16px",
              fontFamily: "'Poppins', sans-serif",
              marginTop: "10px",
              maxWidth: "700px",
              margin: "10px auto 20px",
              lineHeight: "1.6",
            }}
          >
           Our customized SEO services are designed to help you achieve a higher ranking in search results to attract more customers and drive more sales for your business. 
           As one of the leading and best SEO companies, we understand your business goals to develop a customized SEO strategy that addresses your specific requirements. We help you to get ahead of the competition and achieve your targeted business goals.
          </motion.p>
        </Col>
      </Row>

      {/* Call to Action */}
      <Row>
        <Col>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
          </motion.div>
        </Col>
      </Row>
    </Container>






    <Container style={sectionStyle}>
      <h2 style={headingStyle}>
        Our Customized <span  style={{color:'#007B6E'}}>Website Ranking Services</span> include
      </h2>
      <Row>
        {servicess.map((service, index) => (
          <Col md={4} sm={6} xs={12} key={index} className="mb-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ ...cardHoverStyle }}
            >
              <Card style={cardStyle}>
                <Card.Body className="text-center">
                  <div
                    className="icon mb-3"
                    style={{color:'#007B6E'}}
                    onMouseEnter={(e) => (e.currentTarget.style.transform = iconHoverStyle.transform)}
                    onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
                  >
                    {service.icon}
                  </div>
                  <Card.Title  style={{color:'#007B6E'}}>{service.title}</Card.Title>
                  <Card.Text style={descriptionStyle}>{service.description}</Card.Text>
                </Card.Body>
              </Card>
            </motion.div>
          </Col>
          
        ))}
          <Button
  style={{
    backgroundColor: "#007B6E",
    color: "#000",
    fontWeight: "bold",
    fontSize: "16px",
    padding: "10px 30px",
    borderRadius: "25px",
    border: "none",
    boxShadow: "0px 4px 10px rgba(0,0,0,0.2)",
    marginTop: "50px",
    width:'30%',
  marginLeft:'35%'
  }}
  onClick={() => window.open("https://wa.link/5jxo75", "_blank")}
>
  GET A FREE SEO CONSULTATION NOW!
</Button>

      </Row>
    </Container>

    <Container fluid style={{ backgroundColor: '#F0F9F6', minHeight: '70vh' }}>
                <Row className="align-items-center p-4">
                    <Col xs={12} md={6}>
                        <motion.img
                            src={DigitalMarketing?.image2}
                            alt="Development Illustration"
                            className="development-illustration img-fluid"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1 }}
                        />
                    </Col>
                    <Col xs={12} md={6} className="mt-4 mt-md-0">
                        <motion.h2
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="section-title"
                            style={{color:'#007B6E'}}
                        >
                            {DigitalMarketing?.title2}
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            className="section-description"
                        >
                            {DigitalMarketing?.description2}
                        </motion.p>
                    </Col>
                </Row>
            </Container>

        <DigitalMarkComponent1 />




    <Container style={styles.section}>
      {/* Main Heading */}
      <Row>
        <Col>
          <h2 style={styles.heading}>
            <span  style={{color:'#007B6E'}}>Ebook</span> Writing Services
          </h2>
          <p style={styles.paragraph}>
            If you are looking for creatively written unique{" "}
            <span  style={{color:'#007B6E'}}>eBook</span> content, then our expert{" "}
            <span  style={{color:'#007B6E'}}>eBook</span> writers will do wonders
            for you. We offer a professional{" "}
            <span  style={{color:'#007B6E'}}>eBook</span> writing service powered
            by highly vetted Pakistan-based{" "}
            <span  style={{color:'#007B6E'}}>eBook</span> writers and bestsellers
            who have ghostwritten numerous{" "}
            <span  style={{color:'#007B6E'}}>eBooks</span> for our clients.
          </p>
        </Col>
      </Row>

      {/* Bullet List */}
      <Row>
        <Col>
          <ul style={styles.list}>
            <li style={styles.listItem}>✔ Creative & Unique Content</li>
            <li style={styles.listItem}>✔ Native English Expert Writers</li>
            <li style={styles.listItem}>✔ Free Designing</li>
            <li style={styles.listItem}>✔ Unlimited Revisions</li>
            <li style={styles.listItem}>✔ Quick Turnaround Time</li>
            <li style={styles.listItem}>✔ Stock Images</li>
            <li style={styles.listItem}>✔ Ready to Publish Content</li>
          </ul>
        </Col>
      </Row>

      {/* Subheading */}
      <Row>
        <Col>
          <h4 style={styles.subHeading}>
            Get Tailored Ebook Writing Services to Meet Your Goals
          </h4>
        </Col>
      </Row>

      {/* Service Cards */}
      <Row>
        {servicer.map((service, index) => (
          <Col lg={4} md={6} sm={12} key={index} className="mb-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={styles.cardHover}
              style={styles.card}
            >
              {service.title}
            </motion.div>
          </Col>
        ))}
      </Row>
    </Container>

    <div className="section">
      {/* First Section */}
      <div className="container">
        <h2 className="heading">
          The Ultimate <span  style={{color:'#007B6E',fontWeight:'bold'}}>eBook</span> Writing Solution
        </h2>
        <p className="paragraph">
          Our <span>eBook</span> writing service is a solution to all the
          problems you face while writing an <span>eBook</span>. If you are an{" "}
          <span>eBook</span> writer looking for a platform to showcase your
          talent, we give you an <span>eBook</span> writing platform. If you
          deal in writing <span>eBooks</span> for Amazon, our team provides you
          with professionals who are eminent in writing <span>eBooks</span> for
          Amazon. We provide you with the service of professional{" "}
          <span>eBook</span> writers. If you are looking to outsource{" "}
          <span>eBook</span> writing, you will not find any firm more reliable
          than Zynex Soultions for <span>eBook</span> writing outsourcing.
        </p>
      </div>

      {/* Second Section */}
      <div className="container">
        <h2 className="heading">
          Connect with the Best <span  style={{color:'#007B6E',fontWeight:'bold'}}> eBook</span> Writers Here
        </h2>
        <p className="paragraph">
          Do you want to hire an <span>eBook</span> ghostwriter on one of the
          best <span>eBook</span> writing sites? We provide you the opportunity
          to connect with the writers on the best <span>eBook</span> writing
          site. If you are looking for an <span>eBook</span> ghostwriter to
          write enchanting content for your books and <span>eBooks</span>, we
          are here to help! We let you connect with an expert{" "}
          <span>eBook</span> writer at the most inexpensive <span>eBook</span>{" "}
          ghostwriting rates. We provide a cheap <span>eBook</span> writing
          service with complete privacy and secrecy. We can also help in
          designing your <span>eBook</span>, order now.
        </p>
      </div>
    </div>
           



    <Container  className="ebook-offer py-5">
      <Row className="align-items-center">
        {/* Left Section */}
        <Col md={6} className="text-section">
          <h2 className="offer-title">
            What More We Have to Offer You with Your <span style={{color:'#007B6E'}}>E-Book?</span>
          </h2>
          <p className="offer-description">
            Our competent team at Zynex Solutions Publishers is trained and experienced
            to provide quality work on par with the industry’s best standards.
            Our experts integrate graphics, colors, charts, and to support the
            eBook theme, they even cater the callouts as well. Our team is
            dedicated and committed to helping you improve the content of your
            book.
          </p>
        </Col>

        {/* Right Section */}
        <Col md={6} className="features-section">
          <Row>
            <Col xs={6}>
              <ul className="features-list"  style={{color:'#007B6E'}}>
                <li>
                  <FaCheckCircle className="check-icon" />
                  E-book Publications
                </li>
                <li>
                  <FaCheckCircle className="check-icon" />
                  100% Original and grammatically correct content
                </li>
                <li>
                  <FaCheckCircle className="check-icon" />
                  Content that establishes you as the subject matter expert
                </li>
                <li>
                  <FaCheckCircle className="check-icon" />
                  Multiple level quality checks before delivery
                </li>
                <li>
                  <FaCheckCircle className="check-icon" />
                  Well researched, properly formatted, and user-friendly content
                </li>
              </ul>
            </Col>
            <Col xs={6}>
              <ul className="features-list"  style={{color:'#007B6E'}}>
                <li>
                  <FaCheckCircle className="check-icon" />
                  Full ownership rights to the eBook
                </li>
                <li>
                  <FaCheckCircle className="check-icon" />
                  Services of Expert niche-specific Zynex Solutions Publishers
                </li>
                <li>
                  <FaCheckCircle className="check-icon" />
                  ISBN registration
                </li>
                <li>
                  <FaCheckCircle className="check-icon" />
                  Free creative images
                </li>
                <li>
                  <FaCheckCircle className="check-icon" />
                  On-time delivery in any format you need (.doc, .pdf, etc.)
                </li>
              </ul>
            </Col>
          </Row>
          {/* Buttons */}
          <div className="action-buttons mt-4">
            <Button style={{backgroundColor:'#007B6E'}} className="get-started-btn" variant="danger" onClick={() => window.open(" https://wa.link/5jxo75", "_blank")}>
              Let’s Get Started
            </Button>
            <Button className="contact-btn" style={{backgroundColor:'black',color:'white'}} variant="">
            +92 3064344599
            </Button>
          </div>
        </Col>
      </Row>
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
                    <Col xs={12}>
                        <motion.img
                            src="/Images/dg marketing.png"
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
                            }}
                        />
                    </Col>
                </Row>
            </Container>
            <IndustriesGrid />
            {/* <Reviews /> */}
            <PricingCards />
            <h1 style={{ display: 'flex', justifyContent: 'center' }}> <strong style={{ color: '#007B6E' }}> Get Our </strong> Free Digital Marketing</h1>
            <h1 style={{ display: 'flex', justifyContent: 'center' }}>   Proposal</h1>
            <CustomForm />
            </section>
            <Footer />
        </>
    );
};

export default DigitalMarketing;














