import React from 'react'
import MobileReviewedPage from '../../components/Mobilepage/Mobilepage'
import LandingPage from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import Porfolioschedule from '../../components/PortfolioSchedule/Portfolioschudule'

export function Mobileapp() {
  return (
    <>
    <LandingPage/>
    <MobileReviewedPage/>
    <Porfolioschedule/>
    <Footer/>
    </>
  )
}
