import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { debounce } from "lodash";

export default function MobileApp() {
  const [portfolioData, setPortfolioData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = debounce(() => {
      axios
        .get(`${import.meta.env.VITE_APP_API_KEY}/api/MobileApp`)
        .then((response) => setPortfolioData(response.data))
        .catch((error) =>
          console.error("Error fetching portfolio data", error)
        );
    }, 500);

    fetchData();
  }, []);

  const handleCardClick = (name) => {
    window.scrollTo(0, 0);
    const path = `/MobileAPP/${name}`; // Redirect to the detailed project page
    window.open(path, '_blank', 'noopener,noreferrer');  
  };
  

  const formatDescription = (description) => {
    return description.length > 100
      ? `${description.substring(0, 100)}...`
      : description;
  };

  return (
    <>
      <Container className="portfolio">
        <div className="button-container">
          <button className="animated-button">
            <h1>Mobile App</h1>
          </button>
        </div>

        <Row loading="lazy">
          {portfolioData.length > 0 ? (
            portfolioData.map((item, index) => (
              <Col md={4} key={index} loading="lazy">
                <Card
                  onClick={() => handleCardClick(item.Title)}
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
                        ? item.techStacks.slice(0, 3).join("     ")
                        : "N/A"}
                    </p>
                    <p className="card-text" >
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
