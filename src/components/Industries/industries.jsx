import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { TbTournament } from "react-icons/tb";
import { MdHealthAndSafety } from "react-icons/md";
import {
  FaStethoscope, FaMoneyBillAlt, FaUtensils, FaShoppingCart, FaTruck,
  FaFacebook, FaGamepad, FaPlane, FaBuilding, FaGraduationCap,
  FaHandHoldingUsd, FaFilm, FaLandmark, FaSeedling
} from 'react-icons/fa';
import './industries.css';

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

const IndustryGrid = () => {
  return (
    <Container className="industry-grid-container">
      <h2 className="industry-grid-title">
        Different Industries <strong>We Serve</strong>
      </h2>
      <Row className="industry-grid-row">
        {industries.map((industry, index) => (
          <Col xs={12} sm={6} md={4} lg={4} xl={3} key={index} className="industry-grid-col">
            <div className="industry-grid-item">
              <div className="industry-grid-icon">{industry.icon}</div>
              <p className="industry-grid-name">{industry.name}</p>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default IndustryGrid;
