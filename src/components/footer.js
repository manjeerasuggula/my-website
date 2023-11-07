import "./footer.css"
import React from 'react'
import{FaFacebook, FaGithub, FaHome,FaLinkedin,FaMailBulk,FaPhone} from "react-icons/fa";

const footer = () => {
  return (
    <div>
      <div className="footer-container">
        <div className="left">
            <div className="Location">
                <FaHome size={20} style={{color:"#fff", marginRight:"2rem"}}/>
                <div>
                    <p>Chikkagattiganabbe,Hoskote</p>
                    <p>Bangalore.</p>
                </div>
            </div>

            <div className="phone">
                <h4><FaPhone size={20} style={{color:"#fff", marginRight:"2rem"}} />
            9353634905</h4>
            </div>

            <div className="email">
                <h4><FaMailBulk size={20} style={{color:"#fff", marginRight:"2rem"}} />
            manjeeraadiandhra@gmail.com</h4>
            </div>

        </div>
        <div className="right">
            <h4>About the company</h4>
            <p>This is manjeera.Iam Freelancer. I enjoy discussing new projects and design challenges.</p>
            <div className="social">
            <FaFacebook size={30} style={{color:"#fff", marginRight:"1rem"}} />
            <FaGithub size={30} style={{color:"#fff", marginRight:"1rem"}} />
            <FaLinkedin size={30} style={{color:"#fff", marginRight:"1rem"}} />
            </div>
        </div>
      </div>
    </div>
  )
}

export default footer
