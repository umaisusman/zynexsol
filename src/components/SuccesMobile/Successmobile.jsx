import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { debounce } from "lodash";

export default function MobileApp() {
    const [portfolioData, setPortfolioData] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        // Create a debounced function for fetching data
        const fetchData = debounce(async () => {
            try {
                const response = await axios.get(`${import.meta.env.VITE_APP_API_KEY}/api/MobileApp`);
                setPortfolioData(response.data);
            } catch (error) {
                console.error("Error fetching portfolio data", error);
            }
        }, 500);

        fetchData();

        // Cleanup function to cancel debounce on component unmount
        return () => fetchData.cancel();
    }, []);

    const handleCardClick = (name) => {
        window.scrollTo(0, 0);
        navigate(`/MobileAPP/${name}`); // Redirect to the detailed project page
    };

    const handleLearnMoreClick = () => {
        window.scrollTo(0, 0); // Scroll to the top of the page
        navigate('/portfoliopage'); // Navigate to the portfolio page
    };

    const formatDescription = (description) => {
        return description.length > 100
            ? `${description.substring(0, 100)}...`
            : description;
    };

    return (
        <>
            <Container className="portfolio">
                <Row>
                    {portfolioData.length > 0 ? (
                        portfolioData.slice(0, 2).map((item, index) => ( // Slice the data to show only 2 items
                            <Col md={4} key={index} className="mb-4">
                                <Card
                                    onClick={() => handleCardClick(item.Title)}
                                    className="cursor-pointer"
                                >
                                    <Card.Img
                                        variant="top"
                                        src={item.Thumbnailimage}
                                        alt={item.Title}
                                        className="card-img"
                                    />
                                    <Card.Body>
                                        <Card.Title className="card-title">{item.Title}</Card.Title>
                                        <Card.Text className="card-platforms">
                                            {item.techStacks ? item.techStacks.slice(0, 3).join(" ") : "N/A"}
                                        </Card.Text>
                                        <Card.Text className="card-text">
                                            {formatDescription(item.description)}
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))
                    ) : (
                        <p className="text-center mt-4">Loading...</p>
                    )}
                </Row>
                <div className=" mt-4">
                    <button
                        onClick={handleLearnMoreClick}
                        style={{
                            width: '200px', // Width of the button
                            height: '50px', // Height of the button
                            backgroundColor: '#007B6E', // Background color
                            border: 'none', // No border
                            color: 'white', // Text color
                            fontSize: '18px', // Font size
                            padding: '10px', // Padding
                            borderRadius: '5px', // Rounded corners
                            cursor: 'pointer', // Pointer cursor on hover
                            transition: 'all 0.3s ease', // Smooth transition for hover effect
                            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)' // Shadow effect
                        }}
                        onMouseOver={(e) => {
                            e.target.style.backgroundColor = '#005f73'; // Darker color on hover
                            e.target.style.boxShadow = '0 6px 12px rgba(0, 0, 0, 0.3)'; // Enhanced shadow on hover
                        }}
                        onMouseOut={(e) => {
                            e.target.style.backgroundColor = '#007B6E'; // Original color
                            e.target.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)'; // Original shadow
                        }}
                    >
                        Learn more
                    </button>
                </div>
            </Container>
        </>
    );
}
