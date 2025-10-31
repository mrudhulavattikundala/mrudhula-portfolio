// src/components/Contact.jsx
import React from 'react';

function Contact() {
  return (
    <section id="contact" className="contact-section">
      <h2>Get In Touch</h2>
      <p>I'm eager to learn new technologies and contribute to real-world projects.</p>
      
      <div className="contact-details">
        <p><strong>Email:</strong> <a href="mailto:mrudhulavattikundala@gmail.com">mrudhulavattikundala@gmail.com</a></p>
        <p><strong>Phone:</strong> 8247444053 </p>
      </div>

      <div className="social-links">
        <a href="http://linkedin.com/in/mrudhula-vattikundala-664255253" target="_blank" rel="noopener noreferrer">LinkedIn</a> 
        <a href="https://github.com/mrudhulavattikundala" target="_blank" rel="noopener noreferrer">GitHub</a> 
      </div>
    </section>
  );
}

export default Contact;