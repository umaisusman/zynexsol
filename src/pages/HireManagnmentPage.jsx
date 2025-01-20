import React, { useRef } from 'react';
import LandingPage from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import HireDevelopersSection1 from '../components/HireDeveloperComponent1/HireDeveloperComponent1';
import HireDeveloperComponent2 from '../components/HireDeveloperComponent2/HireDeveloperComponent2';
import HireDeveloperComponent3 from '../components/HireDeveloperComponent3/HireDeveloperComponent3';
import HireDeveloperComponent4 from '../components/HireDeveoperComponent4/HireDeveoperComponent4';
import HireDeveloperComponent5 from '../components/HireDeveloperComponent5/HireDeveloperComponent5';
import HireDeveloperComponent6 from '../components/HireDeveloperComponent6/HireDeveloperComponent6';
import BusinessModels from '../components/HiringModel/Hiringmodel';
import CustomForm from "../components/Custom form/Customform";

export default function HireManagnmentPage() {
  const customFormRef = useRef(null); // Create a ref for CustomForm

  // Function to scroll to CustomForm
  const scrollToForm = () => {
    customFormRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <LandingPage />
      <HireDevelopersSection1 scrollToForm={scrollToForm} /> {/* Pass the scroll function */}
      <HireDeveloperComponent2  scrollToForm={scrollToForm} />
      <HireDeveloperComponent3 />
      <HireDeveloperComponent4 />
      <HireDeveloperComponent5 />
      <BusinessModels />
      <HireDeveloperComponent6 />
      <div ref={customFormRef}> {/* Attach the ref to CustomForm */}
        <CustomForm />
      </div>
      <Footer />
    </>
  );
}
