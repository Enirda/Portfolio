import React, { useState, useEffect } from 'react'
import './Navbar.css'

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(true);
  const [isAtTop, setIsAtTop] = useState(true);
  const [isAtBottom, setIsAtBottom] = useState(false);
  const [isDarkText, setIsDarkText] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = () => {
    if (typeof window !== 'undefined') {
      const currentScrollY = window.scrollY;
      const isBottom = window.innerHeight + currentScrollY >= document.body.offsetHeight - 50;
      
      if (isBottom) {
        setShowNavbar(true);
        setIsAtBottom(true);
      } else {
        setIsAtBottom(false);
        if (currentScrollY > lastScrollY && currentScrollY > 100) {
          setShowNavbar(false);
        } else {
          setShowNavbar(true);
        }
      }

      if (currentScrollY < 10) {
        setIsAtTop(true);
      } else {
        setIsAtTop(false);
      }
      if (currentScrollY > innerHeight) {
        setIsAtBottom(true);
      } else {
        setIsAtBottom(false);
      }

      const lightSections = document.querySelectorAll('.light-section');
      let isOverLightSection = false;
      const navbarOffset = 40; 

      lightSections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= navbarOffset && rect.bottom >= navbarOffset) {
          isOverLightSection = true;
        }
      });

      setIsDarkText(isOverLightSection);
      setLastScrollY(currentScrollY);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', controlNavbar);
    return () => {
      window.removeEventListener('scroll', controlNavbar);
    };
  }, [lastScrollY]);

  return (
    <nav 
      className={`
        navbar 
        ${showNavbar ? 'visible' : 'hidden'} 
        ${isAtTop ? 'at-top' : (isAtBottom ? 'at-bottom' : 'scrolled')}
        ${isDarkText ? 'text-dark' : 'text-white'} 
      `}
    >
      
        <div className="navbar-left">
            <span className="my-name">Enirda</span>
        </div>

        <ul className="navbar-links">
            <li><a href="#about">About me</a></li>
            <li><a href="#resume">Resume</a></li>
            <li><a href="#work">Work</a></li>
        </ul>
    </nav>
  )
}

export default Navbar