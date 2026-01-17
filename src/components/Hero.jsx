import React from 'react'
import './Hero.css'

const Hero = () => {
  return (
    <section className="hero">
        <div className="hero-content">
            <h1>Bonjour, je suis <span className="highlight">Ton Prénom</span></h1>
            <h2>Étudiant en BUT Informatique & Développeur Web</h2>
            <p>
                Passionné par le développement Fullstack. 
                J'apprends React pour créer des interfaces modernes et dynamiques.
            </p>
            <a href="#projets" className="cta-button">Voir mes projets</a>
        </div>
        
        <div className="hero-image">
            <img src="https://ui-avatars.com/api/?name=Ton+Prenom&background=random&size=200" alt="Avatar" />
        </div>
    </section>
  )
}

export default Hero