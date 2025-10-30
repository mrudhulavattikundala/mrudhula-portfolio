// src/components/Header.jsx
import React from 'react';

function Header() {
  return (
    <header id="home" className="header-section">
      <h1>Mrudhula Vattikundala</h1>
      <nav className="main-nav">
        <ul>
          {/* Internal links for navigation */}
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
      
      <div className="contact-info-header">
        <a href="mailto:mrudhulavattikundala@gmail.com" className="email-link">
          Email
        </a>
        <a href="http://linkedin.com/in/mrudhula-vattikundala-664255253" target="_blank" rel="noopener noreferrer" className="social-link">
          LinkedIn
        </a>
        <a href="https://github.com/mrudhulavattikundala" target="_blank" rel="noopener noreferrer" className="social-link">
          GitHub
        </a>
        {/* Phone number is often best kept separate or click-to-call if included */}
        <p className="phone-number">8247444053</p>
      </div>
    </header>
  );
}

export default Header;