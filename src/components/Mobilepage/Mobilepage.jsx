import React, { useState, useEffect } from "react";
import { Container, Row, Col, Image, Button, Card } from "react-bootstrap";
import { motion } from "framer-motion";
import axios from "axios";
import { useParams } from "react-router-dom";
import { FaApple } from "react-icons/fa";
import { IoLogoAndroid } from "react-icons/io";
import { BsPhone, BsListTask, BsFolder } from 'react-icons/bs'
import './Mobilepage.css'

const MobileReviewedPage = () => {
  const { name } = useParams();
  const [propertyData, setPropertyData] = useState(null);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_APP_API_KEY}/api/MobileApp/${name}`)
      .then((response) => {
        setPropertyData(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the property data!", error);
      });
  }, [name]);

  if (!propertyData) {
    return <p>Loading...</p>;
  }

  const formatDescription = (description) => {
    return description.length > 100
      ? `${description.substring(0, 100)}...`
      : description;
  };

  const images = propertyData.images || []; // Assuming images are provided in an array
  const descriptions = propertyData.descriptions || []; // Assuming descriptions are provided in an array

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="property-reviewed-container"
      >
        <Container
          fluid
          className="py-5"
          style={{
            backgroundColor: propertyData.color || "#007B6E",
            width: "97vw",
            minHeight: "100vh", // Changed from height to minHeight
            borderRadius: "10px",
            paddingBottom: "20px",
            marginTop:'20px' // Added padding to prevent overlap
          }}
        >
          <Row className="align-items-center h-100">
            <Col xs={12} md={5} className="mb-4">
              <motion.div
                initial={{ x: -20 }}
                animate={{ x: 0 }}
                transition={{ type: "spring", stiffness: 100 }}
              >
                <h1
                  className="fw-bold"
                  style={{ color: "black", marginLeft: "40px" }}
                >
                  {propertyData.Title || "Project Title"}
                </h1>
                <p
                  className="property-description"
                  style={{
                    color: "#007B6E",
                    fontSize: "25px",
                    marginLeft: "40px",
                  }}
                >
                  {(
                    propertyData.Maindecription || "No description available."
                  )}
                </p>
                <Button variant="" size="lg" className="button-primary"
                  onClick={() => window.open(' https://wa.link/5jxo75', '_blank', 'noopener,noreferrer')}>
                  <h5>Get in Touch</h5>
                </Button>
              </motion.div>
            </Col>
            <Col xs={12} md={7} className="text-center">
              <motion.div
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.5 }}
              >
                <Image
                  src={propertyData.Mainimage || "default-image-url"}
                  loading="lazy"
                  alt={propertyData.Title || "Project Image"}
                  className="img-fluid"
                  style={{
                    marginTop: "30px",
                    maxHeight: "90vh",
                    objectFit: "cover",
                    marginBottom: "20px", // Added margin to prevent overlap
                  }}
                />
                <div className="gradient-overlay"></div>
              </motion.div>
            </Col>
          </Row>
          <Row className="mt-4">
            <Col className="text-center"></Col>
          </Row>
        </Container>
      </motion.div>

      <Container className="project-details my-5">
        <Row className="text-center" style={{ fontSize: "30px" }}>
          <Col xs={12} md={3} lg={2} className="mb-4">
            <h6 className="detail-title">PLATFORM</h6>
            <div className="detail-value">
              {propertyData.platforms ? (
                <ul style={{ display: "inline-block", textAlign: "left", paddingLeft: "20px", listStylePosition: "outside" }}>
                  {propertyData.platforms.split(',').map((platform, index) => (
                    <li key={index}>{platform.trim()}</li>
                  ))}
                </ul>
              ) : (
                "Not specified"
              )}
            </div>
          </Col>









          {/* propertyData.platforms  */}

          <Col xs={12} md={3} lg={3}>
            <h6 className="detail-title">Tech Stack</h6>
            <div className="detail-value">
              {propertyData.techStacks && propertyData.techStacks.length > 0
                ? propertyData.techStacks.map((tech, index) => (
                  <span key={index}>
                    {tech}
                    {index !== propertyData.techStacks.length - 1 ? ", " : ""}
                    {(index + 1) % 10 === 0 && <br />}
                  </span>
                ))
                : "Not specified"}
            </div>
          </Col>

          <Col xs={12} md={3} lg={2} className="mb-4">
            <h6 className="detail-title">Location</h6>
            <p className="detail-value">
              {propertyData.location || "Not specified"}
            </p>
          </Col>

          <Col xs={12} md={3} lg={3} className="mb-4">
            <h6 className="detail-title" style={{ height: "15px" }}>
              <FaApple style={{ fontSize: "30px" }} /> IOS
            </h6>
            <p className="detail-value">
              <a
                href={propertyData.IOS || "#"}
                target="_blank"
                rel="noopener noreferrer"
              >
                {propertyData.IOS ? "App URL" : "Not available"}
              </a>
            </p>
          </Col>
          <Col xs={12} md={3} lg={2} className="mb-4">
            <h6 className="detail-title" style={{ height: "15px" }}>
              <IoLogoAndroid style={{ fontSize: "30px" }} /> Android
            </h6>
            <p className="detail-value">
              <a
                href={propertyData.Android || "#"}
                target="_blank"
                rel="noopener noreferrer"
              >
                {propertyData.Android ? "App URL" : "Not available"}
              </a>
            </p>

          </Col>
        </Row>
      </Container>


      <Container className="image-section my-5">
        <Row className="justify-content-center">
          <Col md={12}>
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="shadow-lg"
            >
              <Card
                className="card border-0"
                style={{
                  borderRadius: "15px",
                  overflow: "hidden",
                  position: "relative",
                }}
              >
                <Card.Img
                  variant="top"
                  src={propertyData.Cardimage || "default-image-url"}
                  alt="Card Image"
                  className="img-fluid-x"
                  style={{ borderRadius: "15px 15px 0 0", objectFit: "cover" }}
                />
              </Card>
              <Card.Body
                className="p-4"
                style={{
                  position: "relative",
                  zIndex: 2,

                }}
              >
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                >
                  <Card.Text
                    className="class"
                    style={{
                      color: "black",
                      fontSize: "24px",

                    }}
                  >
                    {propertyData.description || "No description available."}
                  </Card.Text>
                </motion.div>
              </Card.Body>
            </motion.div>
          </Col>
        </Row>
      </Container>
      <Container fluid className="px-5">
        <Row className="align-items-center mb-5">
          <Col xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="display-3 fw-bold animated-title">{propertyData.FeacturTitle}</h1>
              <h1 className="display-3 fw-bold animated-title">{propertyData.CarcityTiltle}</h1>
              <h1 className="display-3 fw-bold animated-title">{propertyData.priorTitle}</h1>
              <h1 className="section-title fw-bold animated-title">{propertyData.ExpensityTitle}</h1>

              <p className="lead animated-description">{propertyData.FeactureDescription}</p>
              <p className="lead animated-description">{propertyData.CarcityDescription}</p>
              <p className="lead animated-description">{propertyData.priorDescription}</p>
              <p className="lead animated-description">{propertyData.ExpensityTitledescription}</p>



              <h1 className="section-title fw-bold animated-title">{propertyData.Expensityheadingone}</h1>
              <p className="lead animated-description">{propertyData.Expensitydescriptionone}</p>
              <Container>
                <h1 className="section-title fw-bold animated-title">{propertyData.Expensityheadingonetwo}</h1>
                <p className="lead animated-description">{propertyData.Expensitydescriptiononetwo}</p>
              </Container>
            </motion.div>
          </Col>
          <Col xs={12} md={6} className="d-flex justify-content-center">
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              {/* <Row>
                <Col xs={6} sm={3} className="text-center">
                  <div className="icon-container">
                    <BsPhone size={50} className="icon-style" />
                  </div>
                  <p>#FFFFFF</p>
                </Col>
                <Col xs={6} sm={3} className="text-center">
                  <div className="icon-container">
                    <BsListTask size={50} className="icon-style" />
                  </div>
                  <p>#136FD1</p>
                </Col>
                <Col xs={6} sm={3} className="text-center mt-4 mt-sm-0">
                  <div className="icon-container">
                    <BsFolder size={50} className="icon-style" />
                  </div>
                  <p>#0A2463</p>
                </Col>
                <Col xs={6} sm={3} className="text-center mt-4 mt-sm-0">
                  <div className="icon-container">
                    <BsFolder size={50} className="icon-style" />
                  </div>
                  <p>#414F63</p>
                </Col>
              </Row> */}
            </motion.div>
          </Col>
        </Row>
      </Container>

      <Row>
        <Col>
          <Image
            src={propertyData?.Bottomimg || "default-image-url"}
            alt="Bottom Image"
            className="w-100 responsive-image"
          />
        </Col>
      </Row>

      <Container className="my-5">
        <Row>
          <Col md={12}>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="" style={{color:'black'}}>
                <h2 className="section-title">{propertyData.BottomFirstheading}</h2>
                <h2 className="section-sub">{propertyData.priorFirstTitle}</h2>
                <h2 className="section-title" >{propertyData.CarcityBottomTitle}</h2>

                <h6 className="section-subtitle"  style={{color:'#5e6770'}}>{propertyData.BottomFirstDescription}</h6>
                <h6 className="section-subtitle"  style={{color:'#5e6770'}}>{propertyData.CarcityBottomDescription}</h6>
                <h6 className="section-subtitle"  style={{color:'#5e6770'}}>{propertyData.priorFirstDescription}</h6>

                <h1 className="section-title fw-bold animated-title">{propertyData.Expensityheadingthree}</h1>
                <p className="lead animated-description">{propertyData.Expensitydescriptionthree}</p>

                <h1 className="section-title fw-bold animated-title">{propertyData.ExpensityheadingFour}</h1>
                <p className="lead animated-description">{propertyData.Expensitydescriptionfour}</p>

                {/* <h1 className="section-title fw-bold animated-title">{propertyData.ExpensityheadingFive}</h1>
                <p className="lead animated-description" >{propertyData.Expensitydescriptionfive}</p> */}
              </div>
            </motion.div>
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="" >
                <h2 className="section-title">{propertyData.BottomSecondheading}</h2>
                <h6 className="section-subtitle" style={{color:'#5e6770'}}>{propertyData.BottomSecondDescription}</h6>
              </div>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default MobileReviewedPage;
