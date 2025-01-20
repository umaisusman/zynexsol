import React from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col, Button, Image } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { FaCheckCircle } from 'react-icons/fa';
import { ImAddressBook, ImArrowRight2 } from 'react-icons/im';
import LandingPage from '../Navbar/Navbar';
import HireDeveloperComponent2 from '../HireDeveloperComponent2/HireDeveloperComponent2';
import HireDeveloperComponent3 from '../HireDeveloperComponent3/HireDeveloperComponent3';
import HireDeveloperComponent5 from '../HireDeveloperComponent5/HireDeveloperComponent5';
import HireDeveloperComponent6 from '../HireDeveloperComponent6/HireDeveloperComponent6';
import HireDeveloperComponent4 from '../HireDeveoperComponent4/HireDeveoperComponent4'

import PricingCards from '../PricingCard/Pricingcard' 
import BusinessModels from '../HiringModel/Hiringmodel'
import Footer from '../Footer/Footer';



// Sample data structure
const developerData = [
    { Title: "ROR Developer", Description: "Ruby on Rails developers specialize in creating high-performance web applications using the Ruby on Rails framework. RoR is well-known for enabling rapid application development with minimal code and structure, making it ideal for building complex yet scalable applications efficiently." },
    { Title: "PHP Developer", Description: "Whether you need a dynamic website, a complex web application, or custom web solutions, our team of PHP programmers is equipped with the skills to transform your vision." },
    { Title: "Node Developer", Description: "Our adept Node.js programmers specialize in crafting dynamic, feature-rich web applications, guaranteeing your digital success." },
    { Title: "Express Developer", Description: "An Express Developer specializes in using Express.js, a minimal and flexible Node.js web application framework, to build scalable and high-performance web applications and APIs. Express.js is known for its simplicity and efficiency, making it a popular choice for developers who need to create robust server-side applications with minimal overhead." },
    { Title: "React JS Developer", Description: "Accelerate project development with our skilled ReactJS programmers. Hire dedicated ReactJS developers on flexible models to create interactive UI and UX, ensuring high user engagement and success." },
    { Title: "JavaScript Developer", Description: " A JavaScript Developer is a specialist in creating dynamic, interactive, and engaging user interfaces for web applications. JavaScript is a versatile, high-level programming language that enables developers to build complex functionalities and improve user experiences on the web. JavaScript Developers utilize their skills to ensure that websites and web applications are both functional and visually appealing." },
    { Title: "TypeScript Developer", Description: "A TypeScript Developer specializes in building robust and scalable web applications using TypeScript, a statically typed superset of JavaScript that adds optional type annotations to the language. TypeScript offers enhanced developer productivity and code quality by catching errors at compile time and providing a rich set of features that improve code maintainability and readability." },
    { Title: "Angular Developer", Description: "Our expert AngularJS programmers create secure, scalable, and dynamic web solutions. Amplify your project effortlessly by hiring our dedicated AngularJS developers.." },
    { Title: "iOS Developer", Description: "We believe in building intuitive design & high-performance applications. Contact us now to hire iOS developers and transform your startup into a Million-Dollar Company!" },
    { Title: "Android Developer", Description: "An Android Developer is responsible for developing applications for devices powered by the Android operating system. The primary focus is on the development of Android applications and their integration with back-end services. An Android Developer works closely with other app development and technical teams." },
    { Title: "Flutter Developer", Description: "As a leading Flutter app development company in India, we help global clients hire top-tier Flutter app developers on an hourly, part-time, or monthly basis. Our hand-picked Flutter programmers are dedicated to ensuring success using cutting-edge technology." },
    { Title: "MERN Stack Developer", Description: "Build next-gen apps using the MERN stack. Discover business growth opportunities with our highly experienced offshore MERN developers." },
    { Title: "CTO", Description: "The CTO actively monitors and oversees the progress of your project, ensuring it stays on track and meets the highest standards of quality." },
    { Title: "Product Manager", Description: "A Product Manager acts as the bridge between the business, technology, and user experience teams. They are responsible for defining the product vision, strategy, and roadmap, prioritizing features, and working closely with engineering, design, marketing, and sales teams to ensure the successful delivery of the product." },
    { Title: "SaaS Developer", Description: "A SaaS (Software as a Service) Developer is a software engineer who specializes in building, maintaining, and improving software applications delivered as a service over the internet. SaaS developers focus on creating cloud-based applications that users can access from any device with an internet connection, usually through a web browser. Below is a detailed description of what a SaaS Developer does, their skills, responsibilities, and the technologies they typically work with." },
];

const HireDeveloperDropdown = () => {
    const { developerType } = useParams();

    // Find the matching developer type from the data
    const selectedDeveloper = developerData.find(
        (developer) => developer.Title.toLowerCase() === decodeURIComponent(developerType).toLowerCase()
    );

    // Handle cases where no matching developer type is found
    if (!selectedDeveloper) {
        return (
            <>
                <LandingPage />
                <div>
                    <h1>Developer Type Not Found</h1>
                    <p>We couldn't find the developer type you're looking for.</p>
                </div>
            </>
        );
    }

    return (
        <>
            <LandingPage />
            <Container fluid className="hire-developers-section py-5">
                <Row className="align-items-center">
                    <Col md={1}></Col>
                    <Col md={6}>
                        <div className="text-start text-light mt-5">
                            <motion.h1
                                className="mb-4"
                                initial={{ opacity: 0, y: -50 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8 }}
                                style={{ marginTop: '130px',color:'#007B6E' }}
                            >
                                {selectedDeveloper.Title}
                            </motion.h1>
                            <p className="lead mb-4" style={{ marginTop: '40px' }}>
                                Top 1% Pre-Vetted, In-house & Dedicated Software Programmers
                            </p>
                            <p>
                                {selectedDeveloper.Description}
                            </p>
                            <ul className="list-unstyled mb-4" style={{ marginTop: '70px' }}>
                                <li style={{ marginTop: '20px' }}>
                                    <FaCheckCircle className="icon-check" /> Top Rated Talent
                                </li>
                                <li style={{ marginTop: '20px' }}>
                                    <FaCheckCircle className="icon-check" /> IP Protection & Strict NDA
                                </li>
                                <li style={{ marginTop: '20px' }}>
                                    <FaCheckCircle className="icon-check" /> Quick & Easy Onboarding Process
                                </li>
                                <li style={{ marginTop: '20px' }}>
                                    <FaCheckCircle className="icon-check" /> Direct Access to Developer as Your Own Employee
                                </li>
                                <li style={{ marginTop: '20px' }}>
                                    <FaCheckCircle className="icon-check" /> Flexible Hiring Models - Fixed Price, Staff Augmentation, Dedicated Team
                                </li>
                            </ul>
                            <Button
                                variant=""
                                className="hire-developer-btn me-2"
                                style={{ color: 'white', borderRadius: '30px', padding: '15px', width: '30%',backgroundColor:'#007B6E' }}
                                onClick={() => window.open(' https://wa.link/5jxo75', '_blank', 'noopener,noreferrer')}
                            >
                                <ImAddressBook /> Schedule a meeting
                            </Button>
                            <Button
                                variant=""
                                style={{ borderRadius: '30px', padding: '15px', width: '20%',backgroundColor:'#007B6E',color:'white' }}
                            >
                                Hire Now <ImArrowRight2 />
                            </Button>
                        </div>
                    </Col>
                    <Col md={5} className="text-center">
                        <Image
                            src="/Running coach/hire11-removebg-preview.png"
                            fluid
                            className="img-responsive"
                        />
                    </Col>
                </Row>
            </Container>

            <HireDeveloperComponent2 />
            <HireDeveloperComponent3 />
            <HireDeveloperComponent4/>
            <HireDeveloperComponent5 />
            <BusinessModels/>
            {/* <PricingCards/> */}
            <HireDeveloperComponent6 />
            <Footer />
        </>
    );
};

export default HireDeveloperDropdown;
