import React from 'react'
import Navbar from "../components/Navbar";
import Footer from "../components/footer";
import HeroImg2 from "../components/HeroImg2"
import AboutContent from "../components/AboutContent"
const about = () => {
  return (
    <div>
      <Navbar/>
      <HeroImg2 heading="ABOUT" text="Im a friendly Front-End Developer"/>
      <AboutContent/>
      <Footer/>
    </div>
  )
}

export default about;