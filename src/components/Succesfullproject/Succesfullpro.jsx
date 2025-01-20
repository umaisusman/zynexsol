import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Successfullpro.css";
import { debounce } from "lodash";

export default function Portfolio() {
  const [portfolioData, setPortfolioData] = useState([]);
  const navigate = useNavigate(); // Initialize useNavigate

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
    window.scrollTo(0, 0); // Scroll to the top of the page

    const pth=`/PortfolioCardpage/${name}`; // Redirect to PortfolioCardpage with the name as a URL parameter
    window.open(pth,'_blank')
  };

  const formatDescription = (description) => {
    return description.length > 100
      ? `${description.substring(0, 100)}...`
      : description;
  };

  return (
    <Container className="portfolio">
      <h1 style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        Our Successful Software Projects
      </h1>
      <Row loading="lazy">
        {portfolioData.length > 0 ? (
          portfolioData.slice(0, 3).map((item, index) => ( // Slice the data to show only 3 items
            <Col md={4} key={index} loading="lazy">
              <Card
                onClick={() => handleCardClick(item.Title)}
                style={{ cursor: "pointer" }}
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
                  <h3 className="card-title">{item.Title}</h3>
                  <p className="card-platforms">
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
  );
}
