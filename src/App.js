import React from 'react'
import './index.css'
import  Home from './routes/Home'
import  About from './routes/about'
import  Project from './routes/project'
import  Contact from './routes/contact'
import {Route, Routes} from "react-router-dom";
// import Navbar from './components/Navbar'

function App() {
  return (
    <div>
      <>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/About" element={<About/>}/>
          <Route path="/Project" element={<Project/>}/>
          <Route path="/Contact" element={<Contact/>}/>
        </Routes>
      </>

    </div>
    
  );
}

export default App;
