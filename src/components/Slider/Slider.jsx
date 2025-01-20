import React, { useState } from "react";
import { Carousel, Container, Row, Col, Button } from "react-bootstrap";
import "./Slider.css";
import { useNavigate } from "react-router-dom";

const CustomSlider = () => {
  const navigate = useNavigate();
  const [activeIndex, setActiveIndex] = useState(0);

  const handleslider = (Slider) => {
    if (Slider === "portfolio") {
      window.scrollTo(0, 0);
      const path = "/portfoliopage";
      window.open(path , '_blank')
    } else {
      // Handle other cases if necessary
    }
  };

  const handleSelect = (selectedIndex) => {
    setActiveIndex(selectedIndex);
  };

  // Descriptions for each slide
  const descriptions = [
    {
      title: "Remoteco",
      text: "Remoteco is a cutting-edge platform revolutionizing remote work opportunities With an intuitive interface...",
      tech: "NextJs\nNodeJs\nGoogle APIs\nOpenAI\nDocker\nAWS\nCI/CD",
    },
    {
      title: "ShaBaas Pay",
      text: "Its an australian fintech company and we developed a comprehensive payment method...",
      tech: "FinTech\nReactJs\nTailwind CSS\nRadix\nNodeJs\nNextJs\nMongoDB",
    },
    {
      title: "ZenHotels",
      text: "We developed ZenHotels the booking platform, an innovative service that provides travelers with access...",
      tech: "JavaScript\njQuery\nBootstrap\nVueJs\nNodeJs",
    },
    {
      title: "BubbleSwift",
      text: "The Hassle-Free Dry-Cleaning App offers a reliable, user-friendly platform for scheduling laundry...",
      tech: "VueJs\nErlang\nPostgreSQL\nStripe\nNodeJs\nExpressJs\nReact Native",
    },
    {
      title: "Fox",
      text: "We have developed the Famous Foxes NFT Marketplace, a vibrant platform for trading unique digital assets...",
      tech: "VueJs\nTypeScript\nPostgreSQL\nStripe\nNodeJs\nExpressJs\nReact Native",
    },
    {
      title: "Stake ",
      text: "Stake is an SaaS based innovative financial platform designed to democratize access to investment opportunities... ",
      tech: "ReactJs\nExpressJS\nThree.js\nNode.js\nCloud Database\nIntercom",
    },
    {
      title: "Expensify ",
      text: "We have developed an expense management solution specifically for our client that streamlines the process of tracking expenses... ",
      tech: "React\n Native\n RESTful API\n  Redux\n PostgreSQL\nAWS\n CI/CD",
    },
    {
      title: "LookPrior ",
      text: "LookPrior Marketplace is a dynamic eCommerce mobile app for buying and selling a wide range of local goods and services...",
      tech: " React Native\n  RESTful API\n Push Notifications\n OneSignal\n MySQL",
    },
  ];

  return (
    <Container className="my-5">
      <Row>
        <h1
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "70px",
            color:'#007B6E'
          
          }}
        >
         <strong> Work Portfolio </strong>
        </h1>
        <Col md={6}>
          <Carousel
            // controls={false}
            // indicators={true}
            interval={2000}
            // pause={false}
            // fade
            activeIndex={activeIndex}
            onSelect={handleSelect}
          >
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="/Images/remoteco - scroll.png"
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="/Images/shabas scroll.png"
                alt="Second slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="/Images/zone scroll.png"
                alt="Third slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="/Images/bubbleswift - scroll transparent.png"
                alt="Fourth slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="/Images/fox scroll.jpg"
                alt="Fifth slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="/Images/Stake scroll.jpg"
                alt="Sixth slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="/Running coach/expensify_scroll-removebg-preview.png"
                alt="Seven slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="/Running coach/Lookprior_scroll-removebg-preview.png"
                alt="Eight slide"
              />
            </Carousel.Item>
            {/* New Carousel Item */}
          </Carousel>
        </Col>
        <Col md={6}>
          <div className="slider-content">
            <h3 style={{color:'#007B6E'}}>{descriptions[activeIndex].title}</h3>
            <p>{descriptions[activeIndex].text}</p>
            <div className="tech-stack">
              {descriptions[activeIndex].tech.split("\n").map((tech, index) => (
                <div key={index} className="tech-item">
                  {tech}
                </div>
              ))}
            </div>

            <Button
              style={{ borderRadius: "20px", backgroundColor: "#007B6E" }}              
             onClick={() => handleslider("portfolio")}
            >
              View Portfolio
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default CustomSlider;


  <Container className="intro-section">
      <Row className="text-center">
        <Col>
          <h1>
            We’ve Partnered with These Amazing <br /> Clients to Build World-Class
            Solutions
          </h1>
          <h4>
            We have designed and built a wide range of high-quality projects from
            scratch.
          </h4>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col xs={12} sm={10} md={8} lg={6} xl={5}>
          <Image
            src="/Images/percentage.jpg"
            alt="Responsive Image"
            fluid
            style={{ marginTop: '20px' }}
          />
        </Col>
      </Row>
    </Container>
