import React from 'react'
import Navbar from "../components/Navbar";
import Footer from "../components/footer";
import HeroImg2 from '../components/HeroImg2';
import Price from '../components/price'
import Works from '../components/Works'



const project = () => {
  return (
    <div>
      <Navbar/>
      <HeroImg2 heading="PROJECTS." text="Some of my most recent works"/>
      <Works/>
      <Price/>
      <Footer/>
    </div>
  )
}

export default project
