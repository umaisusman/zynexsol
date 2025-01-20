import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card, Image } from "react-bootstrap";
import axios from "axios";
import { debounce } from "lodash";
import "./portfolio.css";

export default function Portfolio() {
  const [portfolioData, setPortfolioData] = useState([]);

  useEffect(() => {
    const fetchData = debounce(() => {
      axios
        .get(`${import.meta.env.VITE_APP_API_KEY}/api/Portfolio`)
        .then((response) => setPortfolioData(response.data))
        .catch((error) =>
          console.error("Error fetching portfolio data", error)
        );
    }, 500);
  
    fetchData();
    // return () => fetchData.cancel();
  }, []);

  const handleCardClick = (name) => {
    const path = `/PortfolioCardpage/${name}`;
    window.open(path, '_blank', 'noopener,noreferrer');
  };

  const formatDescription = (description) => {
    return description.length > 100
      ? `${description.substring(0, 100)}...`
      : description;
  };

  return (
    <>
      <Container className="intro-sectionp" style={{marginTop:'120px'}}>
        <Row className="text-center">
          <Col>
            <h1 style={{color:'#007B6E'}}>
              We’ve Partnered with These Amazing <br /> Clients to Build World-Class Solutions
            </h1>
            <h4>
              We have designed and built a wide range of high-quality projects from scratch.
            </h4>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col xs={12} sm={10} md={8} >
            <Image
              src="/carcalicty/new.jpeg"
              alt="Responsive Image"
              fluid
              style={{ marginTop: '20px' ,width:'100%', height:'100%'}}
            />
          </Col>
        </Row>
      </Container>

      <Container className="portfolio">
        <div className="button-container">
          <button className="animated-button" >
            <h1>Web App</h1>
          </button>
        </div>

        <Row loading="lazy">
          {portfolioData.length > 0 ? (
            portfolioData.map((item, index) => (
              <Col md={4} key={index} loading="lazy">
                <Card
                  onClick={() => handleCardClick(item.Title) }
                  style={{ cursor: "pointer" ,color:'#007B6E'}}
                >
                  <div className="card">
                    <img
                      loading="lazy"
                      src={item.Thumbnailimage}
                      alt={item.Title}
                      style={{
                        width: "350px",
                        height: "320px",
                        borderRadius: "8px",
                        padding: "20px",
                        position: "relative",
                        marginRight: "720px",
                      }}
                    />
                    <h3 className="card-title" style={{color:'#007B6E'}}>{item.Title}</h3>
                    <p className="card-platforms" style={{color:'#007B6E'}}>
                      {item.techStacks
                        ? item.techStacks.slice(0, 4).join("     ")
                        : "N/A"}
                    </p>
                    <p className="card-text">
                      {formatDescription(item.description)}
                    </p>
                  </div>
                </Card>
              </Col>
            ))
          ) : (
            <p
              style={{
                display: "flex",
                justifyContent: "center",
                marginTop: "40px",
              }}
            >
              Loading...
            </p>
          )}
        </Row>
      </Container>
    </>
  );
}
