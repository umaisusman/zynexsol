import React, {
  useState,
  useRef,
  forwardRef,
  useImperativeHandle,
} from "react";
import { Card, Button, Container, Row, Col, Form } from "react-bootstrap";
import { FaUsers, FaLayerGroup, FaBox } from "react-icons/fa";

import "./pricingcard.css";

const PricingCards = forwardRef((props, ref) => {
  const [showPricing, setShowPricing] = useState(false);
  const formRef = useRef(null);

  useImperativeHandle(ref, () => ({
    handleScrollToForm() {
      if (!showPricing) {
        setShowPricing(true);
      }
      if (formRef.current) {
        formRef.current.scrollIntoView({ behavior: "smooth" });
      }
    },
  }));

  const handleTogglePricing = () => {
    setShowPricing(!showPricing);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    // Assuming you have a ref for your form
    const formData = new FormData(formRef.current);
    const data = Object.fromEntries(formData.entries());
  
    console.log("Form Data:", data); // Log the form data for debugging
  
    try {
      const response = await fetch(`${import.meta.env.VITE_APP_API_KEY}/api/send`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      console.log('Response status:', response.status);

  
      if (response.ok) {
        alert('Quote request sent successfully!'); // Notify success
        window.open("https://wa.link/5jxo75", "_blank");
      } else {
        alert('Failed to send quote request.'); // Notify failure
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred while sending the request.'); // Notify error
    }
  };
  

  return (
    <Container className=" cardthree my-5">
      <Button
        variant=" py-2 px-4"
        className="btn-price"
        style={{backgroundColor:'#007B6E',color:'white'}}
        onClick={handleTogglePricing}
      >
        Our Pricing
      </Button>
      {showPricing && (
        <div>
          <Row
            className="g-4"
            style={{
              marginRight: "80px",
              marginLeft: "80px",
              borderRadius: "40px",
              padding: "20px",
            }}
          >
            <Col md={4} sm={12}>
              <Card className="h-100 my-4">
                <Card.Header
                  className="bg-info text-white text-center"
                  style={{ height: "auto" }}
                >
                  <FaUsers size={40} />
                  <h5>Fixed Price Model</h5>
                  <p>
                    Get your project done in a clearly defined time with a fixed
                    price model.No surprises, delays or overpayments – all risks
                    are on us.{" "}
                  </p>
                </Card.Header>
                <Card.Body>
                  <ul>
                    <li>The requirements are clear and the scope won’t change</li>
                    <li>The project can be fully delegated to the team</li>
                    <li>The project has a strict deadline and a budget</li>
                    <li>Expert Quality Assurance Team</li>
                    <li>Seasoned Project Management Professionals</li>
                    <li>Exceptional Code Quality Standards</li>
                    <li>Sophisticated UI/UX Design Experts</li>
                    <li>Complimentary Cost and Time Estimates</li>
                    <li>Weekly Agile Sprints</li>
                    <li>No-Cost Project Consultation</li>
                    <li>On-Time Delivery Commitment</li>
                  </ul>
                </Card.Body>
                <Card.Footer>
                  <Form onSubmit={handleSubmit} ref={formRef}>
                  <input type="hidden" name="formType" value="quoteRequest" />
                    <div className="mb-3">
                      <Form.Label>Name:</Form.Label>
                      <Form.Control type="text" name="name" required />
                    </div>
                    <div className="mb-3">
                      <Form.Label>Email:</Form.Label>
                      <Form.Control type="email" name="email" required />
                    </div>
                    <div className="mb-3">
                      <Form.Label>Phone Number:</Form.Label>
                      <Form.Control type="tel" name="phone" required />
                    </div>
                    <div className="mb-3">
                      <Form.Label>Budget:</Form.Label>
                      <Form.Control type="number" name="budget" required />
                    </div>
                    <div className="mb-3">
                      <Form.Label>
                        How early do you need a developer?
                      </Form.Label>
                      <Form.Control as="select" name="availability" required>
                        <option value="" disabled>
                          Select
                        </option>
                        <option>Within 7 days</option>
                        <option>Within two weeks</option>
                        <option>In a Month</option>
                        <option>Not sure</option>
                      </Form.Control>
                    </div>
                    <div className="mb-3">
                      <Form.Label>For how long?</Form.Label>
                      <Form.Control as="select" name="duration" required>
                        <option value="" disabled>
                          Select a duration
                        </option>
                        <option value="1-3">1-3 Month</option>
                        <option value="3-6">3-6 Month</option>
                        <option value="6-10">6-10 Month</option>
                        <option value="10+">10+ Month</option>
                      </Form.Control>
                    </div>
                    <div className="mb-3">
                      <Form.Label>Preferred tech stack?</Form.Label>
                      <Form.Control as="select" name="techStack">
                        <option value="" disabled>
                          Select your preferred tech stack...
                        </option>
                        <option>Reactjs</option>
                        <option>Nodejs</option>
                        <option>Flutter</option>
                        <option>Javascript</option>
                        <option>RoR</option>
                        <option>Backend</option>
                        <option>Frontend</option>
                        <option>MERN stack</option>
                        <option>MEAN stack</option>
                        <option>UI/UX</option>
                      </Form.Control>
                    </div>
                    <Button style={{backgroundColor:'#007B6E'}} className="w-100" type="submit">
                      Get A Free Quote
                    </Button>
                  </Form>
                </Card.Footer>
              </Card>
            </Col>
            <Col md={4} sm={12}>
              <Card className="h-100 my-4">
                <Card.Header
                  className="bg-secondary text-white text-center"
                  style={{ height: "auto" }}
                >
                  <FaBox size={40} />
                  <h5>Staff Augmentation</h5>
                  <p >
                    We help expand your tech teams, reduce costs, and achieve
                    business goals faster. Under the staff augmentation model,
                    we provide talents in all IT project roles
                  </p>
                </Card.Header>
                <Card.Body>
                  <ul>
                    <li>Schedule a Paid 7-Day Trial</li>
                    <li> Receive Developer Profiles Within 12 Hours</li>
                    <li>Rapid Staff Onboarding Within 12 Hours</li>
                    <li>Access to Developers Across All Technology Stacks</li>
                    <li>Flexible Management and Payroll Options</li>
                  </ul>
                </Card.Body>
                <Card.Footer>
                  <Form onSubmit={handleSubmit}>
                  <input type="hidden" name="formType" value="quoteRequest" />
                    <div className="mb-3">
                      <Form.Label>Name:</Form.Label>
                      <Form.Control type="text" name="name" required />
                    </div>
                    <div className="mb-3">
                      <Form.Label>Email:</Form.Label>
                      <Form.Control type="email" name="email" required />
                    </div>
                    <div className="mb-3">
                      <Form.Label>Phone Number:</Form.Label>
                      <Form.Control type="tel" name="phone" required />
                    </div>
                    <div className="mb-3">
                      <Form.Label>Budget:</Form.Label>
                      <Form.Control type="number" name="budget" required />
                    </div>
                    <div className="mb-3">
                      <Form.Label>What are you looking to develop?</Form.Label>
                      <Form.Control as="select" name="availability">
                        <option value="" disabled>
                          Select
                        </option>
                        <option>MVP</option>
                        <option>Complete product development</option>
                        <option>UI/UX design</option>
                        <option>Working prototype</option>
                        <option>Something Else</option>
                      </Form.Control>
                    </div>
                    <div className="mb-3">
                      <Form.Label>For which platform?</Form.Label>
                      <Form.Control as="select" name="duration">
                        <option value="" disabled>
                          Select
                        </option>
                        <option>Web</option>
                        <option>Mobile</option>
                        <option>Desktop</option>
                        <option>All of them</option>
                      </Form.Control>
                    </div>
                    <div className="mb-3">
                      <Form.Label>Preferred tech stack?</Form.Label>
                      <Form.Control as="select" name="techStack">
                        <option value="" disabled>
                          Select your preferred tech stack...
                        </option>
                        <option>Reactjs</option>
                        <option>Nodejs</option>
                        <option>Flutter</option>
                        <option>Javascript</option>
                        <option>RoR</option>
                        <option>Backend</option>
                        <option>Frontend</option>
                        <option>MERN stack</option>
                        <option>MEAN stack</option>
                        <option>UI/UX</option>
                      </Form.Control>
                    </div>
                    <Button style={{backgroundColor:'#007B6E'}} className="w-100" type="submit">
                      Get A Free Quote
                    </Button>
                  </Form>
                </Card.Footer>
              </Card>
            </Col>
            <Col md={4} sm={12}>
              <Card className="h-100 my-4">
                <Card.Header
                  className="bg-primary text-white text-center"
                  style={{ height: "auto" }}
                >
                  <FaLayerGroup size={40} />
                  <h5>Dedicated Team</h5>
                  <p>Hire a team of experts selected to meet your product and business goals. Get full transparency across all development stages and bring your project to success.</p>
                </Card.Header>
                <Card.Body>
                  <ul>
                    <li>The hired team is fully integrated with your in-house specialists</li>
                    <li>Get daily reports about every step of the development process</li>
                    <li>Extend and Reduce Team Based on Requirements</li>
                    <li>Direct Communication with Developers</li>
                    <li>Team Flexibility and Scalability</li>
                    <li>Project Managers</li>
                    <li>Allocated Multiple IT Experts Upon Needs</li>
                    <li>Pricing is Transparent According to Project</li>
                  </ul>
                </Card.Body>
                <Card.Footer>
                  <Form onSubmit={handleSubmit}>
                  <input type="hidden" name="formType" value="quoteRequest" />
                    <div className="mb-3">
                      <Form.Label>Name:</Form.Label>
                      <Form.Control type="text" name="name" required />
                    </div>
                    <div className="mb-3">
                      <Form.Label>Email:</Form.Label>
                      <Form.Control type="email" name="email" required />
                    </div>
                    <div className="mb-3">
                      <Form.Label>Phone Number:</Form.Label>
                      <Form.Control type="tel" name="phone" required />
                    </div>
                    <div className="mb-3">
                      <Form.Label>Budget:</Form.Label>
                      <Form.Control type="number" name="budget" required />
                    </div>
                    <div className="mb-3">
                      <Form.Label>
                        How early do you need a developer?
                      </Form.Label>
                      <Form.Control as="select" name="availability" required>
                        <option value="" disabled>
                          Select
                        </option>
                        <option>Within 7 days</option>
                        <option>Within two weeks</option>
                        <option>In a Month</option>
                        <option>Not sure</option>
                      </Form.Control>
                    </div>
                    <div className="mb-3">
                      <Form.Label>For how long?</Form.Label>
                      <Form.Control as="select" name="duration" required>
                        <option value="" disabled>
                          Select a duration
                        </option>
                        <option value="1-3">1-3 Month</option>
                        <option value="3-6">3-6 Month</option>
                        <option value="6-10">6-10 Month</option>
                        <option value="10+">10+ Month</option>
                      </Form.Control>
                    </div>
                    <div className="mb-3">
                      <Form.Label>Preferred tech stack?</Form.Label>
                      <Form.Control as="select" name="techStack">
                        <option value="" disabled>
                          Select your preferred tech stack...
                        </option>
                        <option>Reactjs</option>
                        <option>Nodejs</option>
                        <option>Flutter</option>
                        <option>Javascript</option>
                        <option>RoR</option>
                        <option>Backend</option>
                        <option>Frontend</option>
                        <option>MERN stack</option>
                        <option>MEAN stack</option>
                        <option>UI/UX</option>
                      </Form.Control>
                    </div>
                    <Button style={{backgroundColor:'#007B6E'}} className="w-100" type="submit">
                      Get A Free Quote
                    </Button>
                  </Form>
                </Card.Footer>
              </Card>
            </Col>
          </Row>
        </div>
      )}
    </Container>
  );
});

export default PricingCards;
