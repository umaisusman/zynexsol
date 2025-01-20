import React from 'react'
import LandingPage from '../components/Navbar/Navbar'
import AboutComponent1 from '../components/AboutComponent1/AboutComponent1'
import AboutComponent2 from '../components/AboutComponent2/AboutComponent2'
import AboutComponent3 from '../components/AboutComponent3/AboutComponent3'
import Footer from '../components/Footer/Footer'
import WhyChooseUs from '../components/WhyChosseme/Whychosse'
import Leadership from '../components/AboutComponent4/AboutComponent4'
import BusinessModels from '../components/HiringModel/Hiringmodel'
import CustomForm from '../components/Custom form/Customform'
import Awards from '../components/AboutComponent5/AboutComponent5'

export default function AboutPage() {
  return (
    <>
    <LandingPage />
    <AboutComponent1/>
    <AboutComponent2/>
    <AboutComponent3/>
    <WhyChooseUs/>
    {/* <Leadership/> */}
    <BusinessModels/>
    <Awards/>
    <CustomForm/>
    <Footer/>
    </>
  )
}
