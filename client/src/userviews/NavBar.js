import React, { useState } from 'react';
import '../stylesheets/navbar.css'

function NavBar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => {
      setIsOpen(!isOpen);
    };
  
    return (
      <nav className="navbar">
        <div className="navbar-brand">
          <h1>Logo</h1>
          <button className={`navbar-toggler ${isOpen ? 'open' : ''}`} onClick={toggleNavbar}>
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
        <ul className={`navbar-links ${isOpen ? 'open' : ''}`}>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/services">Services</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </nav>
    );
};

export default NavBar;
