// src/components/Skills.jsx
import React from 'react';

function Skills() {
  return (
    <section id="skills" className="skills-section">
      <h2>Technical Skills & Expertise</h2>
      
      <div className="skills-group">
        <h3>Core Technologies</h3>
        <ul>
          <li><strong>Frontend:</strong> React.js, HTML, CSS, JavaScript </li>
          <li><strong>Backend:</strong> Node.js, Express.js </li>
          <li><strong>Database:</strong> MongoDB, MongoDB Atlas </li>
          <li><strong>Languages:</strong> Python, Java, C, Data Structures </li>
        </ul>
      </div>

      <div className="skills-group">
        <h3>Development Tools & Coursework</h3>
        <ul>
          <li><strong>Dev Tools:</strong> Git, GitHub, Postman, JWT, bcrypt, Vercel </li>
          <li><strong>Relevant Coursework:</strong> Full Stack Development , NoSQL , Data Structures , DBMS , Linux , Computer Networks </li>
        </ul>
      </div>

      <div className="skills-group">
        <h3>Certificates</h3>
        <ul>
          <li>Introduction to Java - Coursera (LearnQuest)  (OOP, syntax, app development)</li>
          <li>AI Fundamentals - IBM SkillsBuild (ML, neural networks, and ethical AI )</li>
          <li>Python Programming Fundamentals - Microsoft (Cert ID: FMXCD040HUVY) </li>
          <li>Building Database Applications in PHP - University of Michigan </li>
        </ul>
      </div>
    </section>
  );
}

export default Skills;