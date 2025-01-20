import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom'; // Import this for navigation

const Awards = () => {
  const navigate = useNavigate(); // Define navigate for page navigation

  const handleClick = (section) => {
    if (section === "Hire") {
        window.scrollTo(0, 0); 
      navigate("/HireManagnmentPage"); // Corrected spelling
    }else{
        console.log("error");
    }
  };

  return (
    <>
      {/* Centered Button */}
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '30px' }}>
        <Button 
          onClick={() => handleClick("Hire")} 
          style={{ backgroundColor: '#007B6E', padding: '10px 20px', border: 'none' }}
        >
          Secure A Free Quote Today
        </Button>
      </div>

      <Container className="my-5">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-4"
        >
          <h1 style={{ color: '#007B6E' }}><strong>Our Awards & Recognition</strong></h1>
          <hr />
        </motion.h2>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-4"
          style={{ fontSize: '1.2rem', color: '#555' }}
        >
          We are proud to be consistently recognized as a top development company known for exceeding expectations.
        </motion.p>

        {/* Awards Image */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="p-3"
          style={{ border: '5px solid #f7c9c9', borderRadius: '20px', textAlign: 'center' }}
        >
          <img src="/Expensify/Awards.png" alt="Awards" style={{ width: '100%', height: 'auto', maxHeight: '300px' }} />
        </motion.div>
      </Container>

      {/* Project Consultation Section */}
      <Container>
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          style={{ color: '#007B6E', textAlign: 'center', marginBottom: '20px' }}
        >
          <strong>Talk About Your Project With An Expert</strong>
        </motion.h1>

        <motion.h4
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          style={{ textAlign: 'center', marginBottom: '40px' }}
        >
          Have a free conversation and find the technical feasibility & development approach of your idea.
        </motion.h4>

        <hr />
      </Container>
    </>
  );
};

export default Awards;
