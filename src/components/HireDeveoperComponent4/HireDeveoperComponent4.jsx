import React, { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { FaCheckCircle, FaUserAlt, FaUserTie } from "react-icons/fa";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import "./HireDeveoperComponent4.css";

const HireDeveloperComponent4 = () => {
  const navigate = useNavigate(); // Initialize useNavigate
  const [showForm, setShowForm] = useState(false); // State to toggle form visibility

  const handleHireClick = (Section) => {
    if (Section === "H") {
      window.scroll(0,0)
      navigate("/HireManagnmentPage"); // Optionally navigate to another page if needed    
    }
  };

  return (
    <Container className="py-5">
      <Row className="text-center ">
        <Col>
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <h1  style={{color:'#007B6E'}}>
              {" "}
              It’s Easy to Hire Developers <br /> with Zynex Soultions
            </h1>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
          >
            Partner with Zynex Soultions to hire developers for startups and
            enterprises easily and efficiently. <br /> With a tech talent pool
            of 200+ pre-vetted resources and a transparent hiring process,{" "}
            <br />
            you can hire developers to build remote teams and start your
            development in as short as 2 weeks.
          </motion.p>
        </Col>
      </Row>

      <Row
        className="align-items-center"
        style={{
          border: "1px solid #ddd",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        }}
      >
        <Col md={1}></Col>
        <Col md={5}>
          <motion.div
            initial={{ x: -200 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.5 }}
            style={{
              padding: "20px",
              borderRadius: "10px",
            }}
          >
            <FaCheckCircle size={50} color="#007B6E" />
            <h4  style={{color:'#007B6E'}}>Request</h4>
            <p>
              Describe the ideal remote software developer you’re looking for.
            </p>
            <p>Tell us about the role, technical needs, and hiring budget.</p>
          </motion.div>
        </Col>
        <Col md={5}>
          <motion.div
            initial={{ x: -200 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.5 }}
            style={{
              padding: "20px",
              borderRadius: "10px",
            }}
          >
            <img
              src="/Running coach/hire2-removebg-preview.png"
              alt="Hire 2"
              style={{ width: "100%" }}
            />
          </motion.div>
        </Col>
      </Row>

      <Row
        className="align-items-center"
        style={{
          border: "1px solid #ddd",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        }}
      >
        <Col md={1}></Col>
        <Col md={5}>
          <motion.div
            initial={{ x: -200 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.5 }}
            style={{
              padding: "20px",
              borderRadius: "10px",
            }}
          >
            <FaUserAlt size={50} color="#007B6E" />
            <h4  style={{color:'#007B6E'}}>Interview</h4>
            <p>
              Receive vetted candidate profiles that match your engineering
              needs.
            </p>
            <p>Select the remote software engineer you want to interview.</p>
          </motion.div>
        </Col>
        <Col md={5}>
          <motion.div
            initial={{ x: -200 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.5 }}
            style={{
              padding: "20px",
              borderRadius: "10px",
            }}
          >
            <img
              src="/Running coach/hire3-removebg-preview.png"
              alt="Hire 2"
              style={{ width: "100%" }}
            />
          </motion.div>
        </Col>
      </Row>

      <Row
        className="align-items-center"
        style={{
          border: "1px solid #ddd",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        }}
      >
        <Col md={1}></Col>
        <Col md={5}>
          <motion.div
            initial={{ x: -200 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.5 }}
            style={{
              padding: "20px",
              borderRadius: "10px",
            }}
          >
            <FaUserTie size={50} color="#007B6E" />
            <h4  style={{color:'#007B6E'}}> Hire</h4>
            <p>When ready, hire the software developer you prefer.</p>
            <p>
              Sign an NDA with your new remote software engineer, and we'll
              handle all the other paperwork.
            </p>
          </motion.div>
        </Col>
        <Col md={5}>
          <motion.div
            initial={{ x: -200 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.5 }}
            style={{
              padding: "20px",
              borderRadius: "10px",
            }}
          >
            <img
              src="/Running coach/hire4-removebg-preview.png"
              alt="Hire 2"
              style={{ width: "100%" }}
            />
          </motion.div>
        </Col>
      </Row>

      <Row>
        <Col className="text-center">
          <Button
            variant="primary"
            size="lg"
            style={{marginTop:'30px',backgroundColor:'#007B6E'}}
            onClick={()=>handleHireClick("H")}  
          >
            Hire a Developer
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default HireDeveloperComponent4;
