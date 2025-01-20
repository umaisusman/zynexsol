import React from 'react'
import Porfolio from '../../components/portfolio/porfolio'
import LandingPage from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import Porfolioschedule from '../../components/PortfolioSchedule/Portfolioschudule'
import MobileApp from '../../components/MobileApp/Mobile'

export default function portfoliopage() {
  return (
    <>
    <LandingPage/>
    <Porfolio/>
    <MobileApp/>
    <Porfolioschedule/>
    <Footer/>
    </>
  )
}
