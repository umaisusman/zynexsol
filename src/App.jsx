import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'

import PrivacyPolicy from './components/privacypolicy/privacy'
import TermsOfUse from './components/TermofUse/Termofuse'
import Portfoliopage from './pages/Home/portfoliopage'
import {PorfolioCardpage} from './pages/Home/Cardpage'
import { Mobileapp } from './pages/Home/Mobilecard'
import ServicesPage from './pages/Home/ServicesPage'

import Servicesdropdown from './components/SerdropdownWeb/Serdropdown'

import SerdropdownDevOps from './components/DevOpspage/SerdropdownDevOps'
import UIUX from './components/UIUX/UIUX'
import MobileAppPage from './components/MobileAppPage/MobileAppPage'
import DigitalMarketing from './components/DigitalMarketing/DigitalMarketing'
import HireManagnmentPage from './pages/HireManagnmentPage'
import HireDeveloperDropdown from './components/HireDeveloperDropdown/HireDeveloperDropdown'
import AboutPage from './pages/AboutPage'
import Contactpage from './pages/Contactpage'
import Courses from './pages/Home/Courses'

export default function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/PrivacyPolicy" element={<PrivacyPolicy/>}/>
      <Route path="/TermsOfUse" element={<TermsOfUse/>}/>
      <Route path="/portfoliopage" element={<Portfoliopage/>}/>
      <Route path="/PortfolioCardpage/:name" element={<PorfolioCardpage />} />
      <Route path="/MobileApp/:name" element={<Mobileapp />} />
       
      <Route path="/Services" element={<ServicesPage />} />
      <Route path="/HireManagnmentPage" element={<HireManagnmentPage />} />
      <Route path="/HireDeveloperDropdown/:developerType" element={<HireDeveloperDropdown />} />
      <Route path="/AboutPage" element={<AboutPage />} />
      <Route path="/Contactpage" element={<Contactpage />} />


      <Route path="/services/Web App Development" element={<Servicesdropdown />} />
      <Route path="/services/Mobile App Development" element={<MobileAppPage />} />
      <Route path="/services/DevOps Services" element={<SerdropdownDevOps />} />
      <Route path="/services/UI UX Design" element={<UIUX />} />
      <Route path="/services/Digital Marketing" element={<DigitalMarketing />} />
      <Route path="/Courses" element={<Courses />} />
      </Routes>
    </Router>
  )
}

