import React from 'react'
import Navbar from "../components/Navbar";
import Footer from "../components/footer";
import Hero from "../components/HeroImg";
import Works from "../components/Works"

const Home = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Works/>
      <Footer/>
    </div>
  )
}

export default Home;
