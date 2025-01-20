import React from 'react';
import { Card, Row, Col, Container } from 'react-bootstrap';
import { FaLaptopCode, FaPalette, FaShoppingCart, FaPencilRuler, FaGlobe, FaCodeBranch, FaDatabase, FaWrench, FaCode, FaServer, FaCloud, FaCheckCircle } from 'react-icons/fa';

const services = [
  {
    title: "Custom Web Application Development",
    description: "End-to-end web app tailored to serve your bespoke purposes while providing your users a seamless experience",
    icon: <FaLaptopCode size={40} color="#4CAF50" />, // #007B6E
    bgColor: "bg-light text-dark"
  },
  {
    title: "Website Design And Development",
    description: "From identifying your users’ pulse for an intuitive design to developing a robust platform – we’re your one-stop-buddy-in-need !",
    icon: <FaPalette size={40} color="#673AB7" />, // Purple
    bgColor: "bg-light text-dark"
  },
  {
    title: "Ecommerce Development",
    description: "Design, Implementation, Testing and Deployment of software that is custom built to fit your organisation",
    icon: <FaShoppingCart size={40} color="#3F51B5" />, // Blue
    bgColor: "bg-light text-dark"
  },
  {
    title: "UI & UX Design",
    description: "A clean design with organized navigation under budget, done from the scratch to popularize your brand’s face.",
    icon: <FaPencilRuler size={40} color="#FF9800" />, // Orange
    bgColor: "bg-light text-dark"
  },
  {
    title: "Web Portal Development",
    description: "We put together a 360° digital experience with our pro portal development services covering consultation to development using cutting-edge techstack.",
    icon: <FaGlobe size={40} color="#9E9E9E" />, // Grey
    bgColor: "bg-light text-dark"
  },
  {
    title: "API Development And Integration",
    description: "Harness the power of API with our in-house experts who’ve extensive knowledge in API development & integrations across a wide spectrum of use cases.",
    icon: <FaCodeBranch size={40} color="#FFEB3B" />, // Yellow
    bgColor: "bg-light text-dark"
  },
  {
    title: "CMS Development",
    description: "Our robust CMS development services aim to provide permission-imposed access to the critical business information while ensuring top-notch functionality.",
    icon: <FaDatabase size={40} color="#4CAF50" />, // #007B6E
    bgColor: "bg-light text-dark"
  },
  {
    title: "Maintenance And Support",
    description: "Our web app support services tick each from your requirement checklist – content updates, web programming, bug resolution, database support & updates, code reviews, application hosting to name a few.",
    icon: <FaWrench size={40} color="#9C27B0" />, // Purple
    bgColor: "bg-light text-dark"
  },
  {
    title: "Front-End Web Development",
    description: "From React.js to Vue.js, From Next to Angular and alike – get the best of tech expertise & innovation to create highly functional user experiences.",
    icon: <FaCode size={40} color="#FF5722" />, // Deep Orange
    bgColor: "bg-light text-dark"
  },
  {
    title: "Back-End Web Development",
    description: "Get the best of Cloud, DevOps, PHP, Python, Java, .NET and more to build custom backends and APIs that bring security & performance together.",
    icon: <FaServer size={40} color="#607D8B" />, // Blue Grey
    bgColor: "bg-light text-dark"
  },
  {
    title: "DevOps & Cloud Server Management",
    description: "Tap into our on-demand DevOps expertise to achieve the cloud-enabled business transformation aimed at cost-saving, agility, speed-to-delivery, and innovation.",
    icon: <FaCloud size={40} color="#03A9F4" />, // Light Blue
    bgColor: "bg-light text-dark"
  },
  {
    title: "Quality Assurance And Testing",
    description: "Whether manual testing or automated, our pro project assessment team can help you get your web app up & running, without any functional glitches.",
    icon: <FaCheckCircle size={40} color="#4CAF50" />, // #007B6E
    bgColor: "bg-light text-dark"
  }
];

const ServicesSectionWeb = () => {
  return (
    <Container className=" servicesCardsone p-4">
      <Row xs={1} md={2} lg={3} className="g-4">
        {services.map((service, index) => (
          <Col key={index}>
            <Card className={`h-100  ${service.bgColor} shadow-sm`} >
              <Card.Body className="d-flex align-items-start mt-6" style={{height:'200px'}}>
                <div className="me-3">
                  {service.icon}
                </div>
                <div>
                  <Card.Title className="fw-bold" style={{color:'#007B6E'}}>
                    {service.title}
                  </Card.Title>
                  <Card.Text>
                    {service.description}
                  </Card.Text>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ServicesSectionWeb;
