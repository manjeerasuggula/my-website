import './HeroImg.css';
import React from 'react'
import backImg from '../assets/intro-bg.jpg'
import {Link} from "react-router-dom"

const Hero = () => {
  return (
    <div className='hero'>
      <div className='mask'>
        <img className='intro-img' src={backImg} alt='IntroImg'/>
      </div>
      <div className='content'>
        <p>HI, I'M A FREELANCER.</p>
        <h1>React Developer.</h1>
        <div>
          <Link to="/project" className="btn">projects</Link>
          <Link to="/contact" className="btn btn-light">contact</Link>
        </div>
      </div>
    </div>
  )
}

export default Hero
