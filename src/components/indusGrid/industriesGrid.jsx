import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { motion } from 'framer-motion';
import './industriesGrid.css'; // For custom styles
import { TbTournament } from "react-icons/tb";
import { MdHealthAndSafety } from "react-icons/md";
import {
  FaStethoscope, FaMoneyBillAlt, FaUtensils, FaShoppingCart, FaTruck,
  FaFacebook, FaGamepad, FaPlane, FaBuilding, FaGraduationCap,
  FaHandHoldingUsd, FaFilm, FaLandmark, FaSeedling
} from 'react-icons/fa';

const industries = [
    { icon: <MdHealthAndSafety />, name: 'Healthcare' },
    { icon: <FaMoneyBillAlt />, name: 'Finance' },
    { icon: <FaHandHoldingUsd />, name: 'On-Demand' },
    { icon: <FaGraduationCap />, name: 'Education' },
    { icon: <FaBuilding />, name: 'Real Estate' },
    { icon: <FaShoppingCart />, name: 'Ecommerce' },
    { icon: <FaGamepad />, name: 'Games Development' },
    { icon: <FaUtensils />, name: 'Restaurant' },
    { icon: <FaTruck />, name: 'Logistics' },
    { icon: <FaFacebook />, name: 'Social Networking' },
    { icon: <FaPlane />, name: 'Aviation' },
    { icon: <FaFilm />, name: 'Entertainment' },
    { icon: <FaLandmark />, name: 'Government' },
    { icon: <FaSeedling />, name: 'Agriculture' },
    { icon: <TbTournament />, name: 'Tour' },
];

const IndustriesGrid = () => {
    return (
        <Container fluid className="industries-grid text-center">
            <h2 className="industries-title"  style={{color:'#007B6E'}}>Industries</h2>
            <p className="industries-subtitle">We work with diverse industries, offering
                tailored solutions that align perfectly with each sector's unique requirements.</p>
            <Row>
                {industries.map((industry, index) => (
                    <Col key={index} xs={12} sm={6} md={3} className="mb-4">
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Card className="industry-card">
                                <Card.Body>
                                    <div className="industry-icon"  style={{color:'#007B6E'}}>
                                        {industry.icon}
                                    </div>
                                    <Card.Title className="industry-title mt-3">
                                        {industry.name}
                                    </Card.Title>
                                </Card.Body>
                            </Card>
                        </motion.div>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default IndustriesGrid;
