import React, { useRef } from 'react';
import LandingPage from '../../components/Navbar/Navbar';
import ServiceSection from '../../components/Service.sec/Service';
import TechStackComponent from '../../components/Techstack/Techstack';
import IndustryGrid from '../../components/Industries/industries';
import Reviews from '../../components/Reviews/Reviews';
import Model from '../../components/EngagmentModel/Model';
import PricingCards from '../../components/PricingCard/Pricingcard';
import Footer from '../../components/Footer/Footer';
import HireDedicatedDevelopers from '../../components/Hire developer/HireDev';
import CustomForm from '../../components/Custom form/Customform'
import CustomSlider from '../../components/Slider/Slider';
import HeroSection from '../../components/Hero/Hero';

const Home = () => {
  const pricingRef = useRef(null);

  const handleScrollToForm = () => {
    if (pricingRef.current) {
      pricingRef.current.handleScrollToForm();
    }
  };

  return (
    <>
      <LandingPage />
      <HeroSection/>
      <ServiceSection />
      <TechStackComponent />
      <IndustryGrid />
      <Reviews />
      <Model />
      <div id="pricing-cards">
        <PricingCards ref={pricingRef} />
      </div>
      <HireDedicatedDevelopers onRequestQuoteClick={handleScrollToForm} />
      <CustomSlider/>
      <CustomForm/>
      <Footer />
    </>
  );
};

export default Home;
