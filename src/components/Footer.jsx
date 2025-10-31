// src/components/Footer.jsx
import React from 'react';

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="footer-section">
      <p>&copy; {2025} Mrudhula Vattikundala</p>
      <p>All rights reserved.</p>
    </footer>
  );
}

export default Footer;