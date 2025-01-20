import React, { useState, useEffect } from "react";
import { Container, Row, Col, Image, Button, Card } from "react-bootstrap";
import { motion } from "framer-motion";
import axios from "axios";
import { useParams } from "react-router-dom";
import "./portfoliocardpages.css";

const PropertyReviewedPage = () => {
  const { name } = useParams();
  const [propertyData, setPropertyData] = useState(null);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_APP_API_KEY}/api/Portfolio/${name}`)
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
            borderRadius: "10px",
            width: "100%", // Adjusted width to be 100%
            height: "auto",
            marginTop:'20px' // Adjusted height to be auto
          }}
        >
          <Row className="align-items-center">
            <Col xs={12} md={5} className="mb-4 mb-md-0">
              <motion.div
                initial={{ x: -20 }}
                animate={{ x: 0 }}
                transition={{ type: "spring", stiffness: 100 }}
              >
                <h1 className="fw-bold" style={{ color: "black" }}>
                  {propertyData.Title || "Project Title"}
                </h1>
                <p
                  className="property-description"
                  style={{
                    color: "white",
                    fontSize: "1.5rem", // Responsive font size
                  }}
                >
                  {(
                    propertyData.maindescription || "No description available."
                  )}
                </p>
                <Button variant="primary" size="lg" className="button-primary" style={{border:"none"}}
                 onClick={() => window.open(' https://wa.link/5jxo75', '_blank', 'noopener,noreferrer')} >
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
                  style={{ marginTop: "30px", maxWidth: "100%", height: "80vh" }}
                />
                <div className="gradient-overlay"></div>
              </motion.div>
            </Col>
          </Row>
        </Container>
      </motion.div>

      <Container className="project-details my-5">
        <Row className="text-center">
          <Col xs={12} md={3}>
            <h6 className="detail-title">PLATFORM</h6>
            <p className="detail-value">
              {propertyData.platforms || "Not specified"}
            </p>
          </Col>
          <Col xs={12} md={3}>
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

          <Col xs={12} md={3}>
            <h6 className="detail-title">Location</h6>
            <p className="detail-value">
              {propertyData.location || "Not specified"}
            </p>
          </Col>
          <Col xs={12} md={3}>
            <h6 className="detail-title">WEBSITE</h6>
            <p className="detail-value ">
              <a
                href={propertyData.webURL || "#"}
                target="_blank"
                rel="noopener noreferrer"
              >
                {propertyData.webURL || "Not available"}
              </a>
            </p>
          </Col>
        </Row>
      </Container>

      <Container className="image-section my-5">
        <Row className="justify-content-center">
          <Col xs={12}>
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
                  maxWidth: "100%",
                }}
              >
                <Card.Img
                  variant="top"
                  src={propertyData.Cardimage || "default-image-url"}
                  alt="Card Image"
                  className="img-fluid"
                  style={{ borderRadius: "15px 15px 0 0", objectFit: "cover" }}
                />
                <Card.Body
                  className="p-4"
                  style={{
                    position: "relative",
                    zIndex: 2,
                    background: "linear-gradient(to right,#007B6E, #0072ff)",
                  }}
                >
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                  >
                    <Card.Text
                      className="clasvalue"
                      style={{
                        color: "white",
                        fontSize: "1rem", // Responsive font size
                        fontWeight: "700",
                        textAlign: "center",
                        textShadow: "5px 1px 3px rgba(10, 10, 0, 0.2)",
                        padding: "12px 18px",
                        borderRadius: "8px",
                        background: "rgba(255, 255, 255, 0.15)",
                      }}
                    >
                      {propertyData.Secondimage || "No description available."}
                    </Card.Text>
                  </motion.div>
                </Card.Body>
              </Card>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default PropertyReviewedPage;
