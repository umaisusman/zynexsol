import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { FaEnvelope, FaMapMarkerAlt, FaFacebookF, FaLinkedinIn } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { IoLogoWhatsapp } from "react-icons/io";
import { FaInstagram, FaYoutube } from 'react-icons/fa';
import axios from 'axios';
import './ContactComponent2.css';

const submitForm = async (formData) => {
    try {
        const response = await axios.post(`${import.meta.env.VITE_APP_API_KEY}/api/Node/Submit`, formData);
        alert(response.data);  // Display success message
    } catch (error) {
        console.error('Error submitting form:', error);
        alert('There was a problem submitting the form.');
    }
};

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        company: '',
        message: '',
        country: 'Pakistan',  // Default country
        Email:''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        submitForm(formData);  // Call the Axios function
    };

    return (
        <Container fluid className="p-5 contact-form-container">
            <Row className="d-flex justify-content-center align-items-center">
                {/* Contact Form Section */}
                <Col
                    as={motion.div}
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    md={6}
                    className="p-4 form-border"
                >
                    <h4 className="mb-4" style={{ color: '#007B6E' }}>
                        <strong>Send us a Message</strong> <FaEnvelope />
                    </h4>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3">
                            <Form.Control
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Name*"
                                className="input-field"
                                required
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Row>
                                <Col md={4}>
                                    <Form.Select
                                        name="country"
                                        value={formData.country}
                                        onChange={handleChange} // Added country to handleChange
                                        className="input-field"
                                    >
                                        <option>Pakistan (پاکستان)</option>
                                        <option>United States</option>
                                        <option>United Kingdom</option>
                                        <option>Canada</option>
                                        <option>India</option>
                                        <option>Australia</option>
                                        <option>Germany</option>
                                        <option>France</option>
                                        <option>China</option>
                                        <option>Japan</option>
                                        <option>South Korea</option>
                                        <option>Brazil</option>
                                        <option>Russia</option>
                                        <option>South Africa</option>
                                        <option>Saudi Arabia</option>
                                        <option>United Arab Emirates</option>
                                        <option>Turkey</option>
                                        <option>Italy</option>
                                        <option>Mexico</option>
                                        <option>Argentina</option>
                                        <option>Egypt</option>
                                        {/* Add more countries as needed */}
                                    </Form.Select>
                                </Col>
                                <Col md={8}>
                                    <Form.Control
                                        type="text"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        placeholder="+92"
                                        className="input-field"
                                        required
                                    />
                                </Col>
                            </Row>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Row>
                                <Col md={6}>
                                <Form.Control
                                type="text"
                                name="company"
                                value={formData.company}
                                onChange={handleChange}
                                placeholder="Company name"
                                className="input-field"
                            />
                            </Col>
                                <Col md={6}>
                                <Form.Control
                                type="text"
                                name="Email"
                                value={formData.Email}
                                onChange={handleChange}
                                placeholder="E-mail"
                               
                            />
                            </Col>
                            </Row>

                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Control
                                as="textarea"
                                rows={3}
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                placeholder="Message*"
                                className="input-field"
                                required
                            />
                        </Form.Group>
                        <Button className="submit-button" style={{backgroundColor:'#007B6E'}} type="submit">
                            Submit
                        </Button>
                    </Form>
                    <p className="mt-3 small-text">
                        We guarantee 100% security of your information. We will not share the details
                        you provide above with anyone. Your email won’t be used for spamming.
                    </p>
                </Col>
                {/* Contact Info Section */}
                <Col md={1}></Col>
                <Col
                    as={motion.div}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    md={4}
                    className="p-4 info-border"
                >
                    <h4 className="mb-4" style={{ color: '#007B6E' }}><strong>Contact Information</strong></h4>
                    <hr />
                    <p><FaMapMarkerAlt className="contact-icon"  style={{marginRight:'5px'}}/>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuuTv0AvsJhKCEPmw202ANq3iLUYIBQLq_nA&s" alt="Pakistan Flag" style={{height:"15px"}}/> <span style={{marginRight:'10px'}}>Park View City Lahore, Pakistan </span></p>

                    <a href="https://wa.me/%2B923064344599?text=Contact%20USmailto" target="_blank" rel="noopener noreferrer">
                    <p style={{color:'#007B6E'}}><IoLogoWhatsapp className="contact-icon" style={{color:'#007B6E'}}/> +92 3154138621</p>
                    </a>
                    <a href="mailto:zynexsolutions1@gmail.com" target="_blank" rel="noopener noreferrer">
                    <p style={{color:'#007B6E'}}><FaEnvelope /> zynexsolutions1@gmail.com</p>
                    </a>
                    <div className="social-icons mt-3">
                        <motion.span whileHover={{ scale: 1.1 }}>
                            <a href="https://www.facebook.com/share/18R9jHL8SD/" target="_blank" rel="noopener noreferrer">
                                <FaFacebookF className="mx-2" style={{color:'#007B6E'}} />
                            </a>
                            <a href="  https://www.linkedin.com/in/mehtab-anwar-196a01312?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">
                                <FaLinkedinIn className="mx-2 icon" style={{color:'#007B6E'}}/>
                            </a>
                            <a href="https://www.instagram.com/zynexsolutions_/profilecard/?igsh=dDU2dHBjcDZ2NDBr" target="_blank" rel="noopener noreferrer">
                                <FaInstagram className="mx-2 icon" style={{color:'#007B6E'}}/>
                            </a>
                            <a href=" https://youtube.com/@itbrains-c9l?si=ljOqedeM0k7ljlJ9" target="_blank" rel="noopener noreferrer">
                                <FaYoutube className="mx-2 icon" style={{color:'#007B6E'}}/>
                            </a>
                        </motion.span>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default ContactForm;
