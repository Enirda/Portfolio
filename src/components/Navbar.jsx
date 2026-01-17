import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <nav className="navbar">
        <div className="navbar-logo">Mon Portfolio</div>
        <ul className="navbar-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#projets">Projects</a></li>
            <li><a href="#contact">Contact me</a></li>
        </ul>
    </nav>
  )
}

export default Navbar