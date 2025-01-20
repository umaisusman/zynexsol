import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Assuming you're using react-router for navigation

const ServiceSection = () => {
  const [services, setServices] = useState([]);
  const [selectedService, setSelectedService] = useState(null);
  const navigate = useNavigate(); // For programmatic navigation

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const apiUrl = `${import.meta.env.VITE_APP_API_KEY}/api/services`;
        const response = await axios.get(apiUrl);

        console.log('API Response:', response.data);

        // Ensure the response data is an array
        if (Array.isArray(response.data)) {
          setServices(response.data);

          // Automatically set the first service as selected
          if (response.data.length > 0) {
            setSelectedService(response.data[0]);
          }
        } else {
          console.error('Expected an array of services, but received:', response.data);
        }
      } catch (e) {
        console.error('Error fetching services:', e);
      }
    };
    fetchServices();
  }, []);

  // Handles service selection when a card is clicked
  const handleCardClick = (service) => {
    setSelectedService(service);
  };

  // Handles Learn More button click
  const handleLearnMore = () => {
    if (selectedService) {
      const servicePath = `/services/${encodeURIComponent(selectedService.name.replace(/\s+/g, ' '))}`;
      navigate(servicePath); // Navigate to the dynamic service page
    }
  };

  return (
    <div style={{ backgroundColor: '#FFFFFF', padding: '50px 0' }}>
      <Container>
        <h1 style={{ color: '#007B6E', fontSize: '2.5rem', textAlign: 'center', marginBottom: '20px' }}>
         <strong> We Build Great Software </strong>
        </h1>
        <p style={{ color: '#1a1a1a', fontSize: '1.25rem', textAlign: 'center', marginBottom: '50px' }}>
          We unlock tech excellence, delivering bespoke software solutions aligned with your business goals
        </p>
        <Row>
          <Col md={6}>
            <Row>
              {/* Safeguard: Check if services is an array before mapping */}
              {Array.isArray(services) && services.length > 0 ? (
                services.map(service => (
                  <Col key={service._id} xs={6} md={4} className="text-center mb-4">
                    <div 
                      onClick={() => handleCardClick(service)} 
                      style={{ 
                        backgroundColor: selectedService?._id === service._id ? '#007B6E' : '#f1f1f1', 
                        borderRadius: '10px', 
                        padding: '20px', 
                        cursor: 'pointer',
                        transition: 'transform 0.2s',
                        height: '150px', 
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                      className="service-card"
                    >
                      <img 
                        src={service.image} 
                        alt={service.name} 
                        style={{color:'#007B6E', width: '50px', height: '50px', marginBottom: '10px', filter: selectedService?._id === service._id ? 'invert(1)' : 'none' }} 
                      />
                      <p style={{ color: selectedService?._id === service._id ? '#fff' : '#1a1a1a' }}>
                        {service.name}
                      </p>
                    </div>
                  </Col>
                ))
              ) : (
                <p>No services available</p>
              )}
            </Row>
          </Col>
          <Col md={6}>
            {selectedService ? (
              <div style={{ textAlign: 'left', padding: '20px' }}>
                <img 
                  src={selectedService.image} 
                  alt={selectedService.name} 
                  style={{ width: '50px', height: '50px', marginBottom: '10px' }} 
                />
                <h3 style={{ color: '#1a1a1a' }}>{selectedService.name}</h3>
                <p style={{ color: '#1a1a1a', fontSize: '1rem' }}>{selectedService.description}</p>
                <div>
                  {/* Add any icons based on the selected service */}
                </div>
                <div className="text-left mt-4">
                  <Button 
                    
                    style={{ backgroundColor: '#007B6E', }} 
                    onClick={handleLearnMore}
                  >
                    Learn More
                  </Button>
                </div>
              </div>
            ) : (
              <div style={{ textAlign: 'left', padding: '20px' }}>
                <p style={{ color: '#1a1a1a', fontSize: '1rem' }}>Click on a service to see more details</p>
              </div>
            )}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ServiceSection;
