import React from 'react'
import HeroSection from '../sections/Home/HeroSection'
import GetStarted from '../sections/Home/GetStarted'
import JustGrad from '../sections/Home/JustGrad'
import DreamCompanies from '../sections/Home/PopularCompanies'

const HomePage = () => {
  return (
    <div>
      <HeroSection/>
      <GetStarted/>
      <JustGrad/>
      <DreamCompanies/>
    </div>
  )
}

export default HomePage
