import React from 'react'
import Navbar from "../components/Navbar";
import Footer from "../components/footer";
import HeroImg2 from '../components/HeroImg2';
import Forms from '../components/Forms';

const contact = () => {
  return (
    <div>
      <Navbar/>
      <HeroImg2 heading="CONTACT" text="Let's have a chat"/>
      <Forms/>
      <Footer/>
    </div>
  )
}

export default contact;