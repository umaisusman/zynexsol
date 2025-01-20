import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Container,
  Row,
  Col,
  Button,
  Navbar,
  Nav,
  Dropdown,
} from "react-bootstrap";
import axios from "axios";
import "./Navbar.css";

const LandingPage = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isHireDropdownOpen, setIsHireDropdownOpen] = useState(false);
  const [isIndustriesDropdownOpen, setIsIndustriesDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const fetchServices = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`${import.meta.env.VITE_APP_API_KEY}/api/services`);
      setServices(response.data);
    } catch (error) {
      console.error("Error fetching services:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleNavClicks = (section, serviceName = null) => {
    window.scroll(0, 0);
    const routes = {
      portfolio: "/portfoliopage",
      services: serviceName
        ? `/services/${serviceName.replace(/ /g, "%20")}`
        : "/services",
      hireManagement: "/HireManagnmentPage",
      About: "/AboutPage",
      Contact: "/Contactpage",
    };
    navigate(routes[section]);
  };

  const handleDropdownToggle = (setDropdownState) => {
    setDropdownState(true);
    if (services.length === 0) {
      fetchServices();
    }
  };

  const handleDropdownClose = (setDropdownState) => setDropdownState(false);

  const handleHireClicks = (developerType) => {
    navigate(`/HireDeveloperDropdown/${developerType.replace(/ /g, "%20")}`);
  };

  const courseclick = (course)=>{
    if (course) {
      navigate("/Courses")     
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector(".navbar");
      const heroHeight = document.querySelector(".hero-section")?.offsetHeight || 0;
      const scrollPosition = window.scrollY;

      navbar.classList.toggle("past-hero", scrollPosition > heroHeight);
      navbar.classList.toggle("scrolled", scrollPosition > 5);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div style={{ fontSize: "20px" }} className="fullnavbar">
      <Navbar
        expand="lg"
        className="shadow-sm navbar"
        style={{
          backgroundColor: "white",
          position: "fixed",
          width: "100%",
          height:'100px',
          top: 0,
          zIndex: 999,
        }}
      >
        <Container fluid className="fullnavbar py-2 px-4">
          <Navbar.Brand href="/" onClick={() => handleNavClicks("home")}>
            <img
              src="/carcalicty/zynex.logo.png"
              alt="Zynex Soultions"
              style={{ height: "60px",width:'auto',margin:'0px',padding:'0px'}}
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
            <Nav.Link onClick={() => courseclick("/Courses")}>
            Courses
              </Nav.Link>
              <Dropdown
                onMouseEnter={() => handleDropdownToggle(setIsDropdownOpen)}
                onMouseLeave={() => handleDropdownClose(setIsDropdownOpen)}
                show={isDropdownOpen}
              >

                <Dropdown.Toggle
                  id="dropdown-services"
                  style={{
                    background: "none",
                    border: "none",
                    padding: 0,
                    color: "#007B6E",
                    marginRight: "10px",
                    marginTop: "8px",
                    marginBottom: "15px",
                    fontSize: "20px",
                  }}
                  onClick={() => handleNavClicks("services")}
                >
                  Services
                </Dropdown.Toggle>
                {isDropdownOpen && (
                  <Dropdown.Menu className="dropdown-menu">
                    {loading ? (
                      <Dropdown.Item>Loading...</Dropdown.Item>
                    ) : (
                      services.map((service) => (
                        <Dropdown.Item
                          key={service._id}
                          onClick={() => handleNavClicks("services", service.name)}
                        >
                          {service.name}
                        </Dropdown.Item>
                      ))
                    )}
                  </Dropdown.Menu>
                )}
              </Dropdown>

              {/* <Dropdown
                className="industries-dropdown"
                onMouseEnter={() => handleDropdownToggle(setIsIndustriesDropdownOpen)}
                onMouseLeave={() => handleDropdownClose(setIsIndustriesDropdownOpen)}
                show={isIndustriesDropdownOpen}
              >
                <Dropdown.Toggle
                  id="dropdown-industries"
                  style={{
                    background: "none",
                    border: "none",
                    padding: 0,
                    color: "#007B6E",
                    marginTop: "8px",
                    marginBottom: "15px",
                    fontSize: "20px",
                  }}
                >
                  Industries
                </Dropdown.Toggle>

                {isIndustriesDropdownOpen && (
                  <Dropdown.Menu className="dropdown-menu industries-menu">
                    {loading ? (
                      <Dropdown.Item>Loading...</Dropdown.Item>
                    ) : (
                      <Row>
                        <Col xs={12}>
                          <strong>Target Industries</strong>
                        </Col>
                        <Col xs={12} >
                          <Row>
                            {[
                              "SaaS",
                              "ERP",
                              "Healthcare",
                              "Finance",
                              "CRM",
                              "On-Demand",
                              "Education",
                              "Real Estate",
                              "e-Commerce",
                              "Game Development",
                            ].map((industry) => (
                              <Col xs={6} md={3} key={industry}>
                                <Dropdown.Item
                                  className="text-black"
                                >
                                  {industry}
                                </Dropdown.Item>
                              </Col>
                            ))}
                          </Row>
                        </Col>
                      </Row>
                    )}
                  </Dropdown.Menu>
                )}
              </Dropdown> */}

              <Dropdown
                className="hire-developers-dropdown"
                onMouseEnter={() => handleDropdownToggle(setIsHireDropdownOpen)}
                onMouseLeave={() => handleDropdownClose(setIsHireDropdownOpen)}
                show={isHireDropdownOpen}
              >
                <Dropdown.Toggle
                  id="dropdown-hire-developers"
                  onClick={() => handleNavClicks("hireManagement")}
                  style={{
                    background: "none",
                    border: "none",
                    padding: 0,
                    color: "#007B6E",
                    marginTop: "8px",
                    marginBottom: "15px",
                    fontSize: "20px",
                  }}
                >
                  Hire Developers
                </Dropdown.Toggle>
                {isHireDropdownOpen && (
                  <Dropdown.Menu className="hire-developers-menu">
                    <Row>
                      <Col sm={12} md={4} lg={3} xl={3}>
                        <strong>Backend Developers</strong>
                        {["ROR Developer", "PHP Developer", "Node Developer", "Express Developer"].map(
                          (role) => (
                            <Dropdown.Item key={role} onClick={() => handleHireClicks(role)}>
                              {role}
                            </Dropdown.Item>
                          )
                        )}
                      </Col>
                      <Col sm={12} md={4} lg={3} xl={3}>
                        <strong>Frontend Developers</strong>
                        {[
                          "React JS Developer",
                          "JavaScript Developer",
                          "TypeScript Developer",
                          "Angular Developer",
                        ].map((role) => (
                          <Dropdown.Item key={role} onClick={() => handleHireClicks(role)}>
                            {role}
                          </Dropdown.Item>
                        ))}
                      </Col>
                      <Col sm={12} md={4} lg={3} xl={3}>
                        <strong>Mobile App Developers</strong>
                        {["iOS Developer", "Android Developer", "Flutter Developer"].map((role) => (
                          <Dropdown.Item key={role} onClick={() => handleHireClicks(role)}>
                            {role}
                          </Dropdown.Item>
                        ))}
                      </Col>
                      <Col sm={12} md={4} lg={3} xl={3}>
                        <strong>Hire By Roles</strong>
                        {["MERN Stack Developer", "CTO", "Product Manager", "SaaS Developer"].map(
                          (role) => (
                            <Dropdown.Item key={role} onClick={() => handleHireClicks(role)}>
                              {role}
                            </Dropdown.Item>
                          )
                        )}
                      </Col>
                    </Row>
                  </Dropdown.Menu>
                )}
              </Dropdown>

              <Nav.Link onClick={() => handleNavClicks("portfolio")}>
                Portfolio
              </Nav.Link>
              <Nav.Link onClick={() => handleNavClicks("About")}>
                About Us
              </Nav.Link>
              {/* <Nav.Link>Blog</Nav.Link> */}
              <Button
                onClick={() => handleNavClicks("Contact")}
                variant="primary"
                style={{
                  marginLeft: "10px",
                  color: "#FFFFFF",
                  backgroundColor: "black",
                  borderRadius: "50px",
                  border: "none",
                  padding: "10px 20px",
                  marginTop: "0px",
                  backgroundColor:'#007B6E'
                }}
              >
                Contact Us
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default LandingPage;
