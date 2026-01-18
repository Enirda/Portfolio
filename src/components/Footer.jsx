import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer-fullscreen">
      
      <div className="ty-container">
        <div className="star-top">
           <span>✦</span>
        </div>

        <h2 className="ty-text filled">THANK YOU !</h2>
        <h2 className="ty-text outline">THANK YOU !</h2>
        <h2 className="ty-text outline">THANK YOU !</h2>
        
        <div className="star-bottom">
           <span>✦</span>
        </div>
      </div>

      <div className="footer-contact-bar">
        
        <div className="contact-item">
            <span className="icon">in</span>
            <a href="https://www.linkedin.com/in/adrien-bayssat/" target="_blank" rel="noopener noreferrer">/adrien-bayssat</a>
        </div>

        <div className="contact-item">
            <span className="icon">✉</span>
            <a href="mailto:adrien.bayssat15@gmail.com">adrien.bayssat15@gmail.com</a>
        </div>

        <div className="contact-item">
            <span className="icon">📞</span>
            <span>07 83 60 04 55</span>
        </div>


      </div>
    </footer>
  )
}

export default Footer