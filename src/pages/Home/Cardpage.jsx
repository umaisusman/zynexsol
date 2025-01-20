import React from 'react'
import Cardpages from '../../components/portfoliocard/portfoliocradpages'
import LandingPage from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import Porfolioschedule from '../../components/PortfolioSchedule/Portfolioschudule'

export function PorfolioCardpage() {
  return (
    <>
    <LandingPage/>
    <Cardpages/>
    <Porfolioschedule/>
    <Footer/>
    </>
  )
}
