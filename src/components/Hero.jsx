import React from 'react'
import './Hero.css'

const Hero = () => {
  return (
    <section className="hero container">
      <div className="hero-top">
        <p className="hero-label">PORTFOLIO 2026 - ADRIEN BAYSSAT</p>
      </div>
      
      <div className="hero-main">
        <h1>
          CREATIVE<br />
          FRONT-END<br />
          DEVELOPER
        </h1>
      </div>

      <div className="hero-footer">
        <p className="intro-text">
          Je suis Adrien Bayssat...
        </p>
      </div>
    </section>
  )
}

export default Hero