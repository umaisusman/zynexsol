import React from 'react'

import LandingPage from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import HeroSection from '../../components/ServiceHero/Serviceshero'
import ServicesGrid from '../../components/SerGrid/Servicesgrid'
import IndustriesGrid from '../../components/indusGrid/industriesGrid'
import WhyChooseUs from '../../components/WhyChosseme/Whychosse'
import HiringModels from '../../components/HiringModel/Hiringmodel'
import { Chosse } from '../../components/WhyChosseme/Whychosse'
import Reviews from '../../components/Reviews/Reviews'
import Portfolio from '../../components/Succesfullproject/Succesfullpro'
import MobileApp from '../../components/SuccesMobile/Successmobile'
import TechStackComponent from '../../components/Techstack/Techstack'
import PricingCards from '../../components/PricingCard/Pricingcard';
import CustomForm from '../../components/Custom form/Customform'
// import TechSlider from '../../components/TechSlider/Techslider'

export default function ServicesPage() {
  return (
    <>
    <LandingPage/>
    <HeroSection/>
    <ServicesGrid/>
    <IndustriesGrid/>
    <WhyChooseUs/>
    <Portfolio/>
    <MobileApp/>
    <Chosse/>
    <Reviews/>
    <TechStackComponent/>
    {/* <TechSlider/> */}
    <HiringModels/>
    <PricingCards />
    <CustomForm/>
    <Footer/>
    </>
  )
}
