import React from 'react'
import Servicesdropdown from '../components/SerdropdownWeb/Serdropdown'
import LandingPage from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'
import TechStackComponent from '../components/Techstack/Techstack'
import IndustriesGrid from '../components/indusGrid/industriesGrid'
import Reviews from '../components/Reviews/Reviews'
import CustomForm from '../components/Custom form/Customform'
import ServiceExpertise from '../components/DropdownCards/DropdownCard'
import BusinessModels from '../components/HiringModel/Hiringmodel'

export default function Serdropdownpage() {
  return (
    <>
    <LandingPage/>
    <Servicesdropdown/>
    <TechStackComponent/>
    <ServiceExpertise/>
    <IndustriesGrid/>
    <BusinessModels/>
    <Reviews/>  
    <CustomForm/>
    <Footer/>
    </>
  )
}
