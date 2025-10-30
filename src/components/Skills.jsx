// src/components/Skills.jsx
import React from 'react';

function Skills() {
  return (
    <section id="skills" className="skills-section">
      <h2>Technical Skills & Expertise</h2>
      
      <div className="skills-group">
        <h3>Core Technologies</h3>
        <ul>
          [cite_start]<li><strong>Frontend:</strong> React.js, HTML, CSS, JavaScript [cite: 26]</li>
          [cite_start]<li><strong>Backend:</strong> Node.js, Express.js [cite: 27]</li>
          [cite_start]<li><strong>Database:</strong> MongoDB, MongoDB Atlas [cite: 28]</li>
          [cite_start]<li><strong>Languages:</strong> Python, Java, C, Data Structures [cite: 29]</li>
        </ul>
      </div>

      <div className="skills-group">
        <h3>Development Tools & Coursework</h3>
        <ul>
          [cite_start]<li><strong>Dev Tools:</strong> Git, GitHub, Postman, JWT, bcrypt, Vercel [cite: 29]</li>
          [cite_start]<li><strong>Relevant Coursework:</strong> Full Stack Development [cite: 31][cite_start], NoSQL [cite: 32][cite_start], Data Structures [cite: 33][cite_start], DBMS [cite: 34][cite_start], Linux [cite: 40][cite_start], Computer Networks [cite: 41]</li>
        </ul>
      </div>

      <div className="skills-group">
        <h3>Certificates</h3>
        <ul>
          [cite_start]<li>Introduction to Java - Coursera (LearnQuest) [cite: 36] (OOP, syntax, app development)</li>
          [cite_start]<li>AI Fundamentals - IBM SkillsBuild [cite: 36] [cite_start](ML, neural networks, and ethical AI [cite: 37])</li>
          [cite_start]<li>Python Programming Fundamentals - Microsoft (Cert ID: FMXCD040HUVY) [cite: 38]</li>
          [cite_start]<li>Building Database Applications in PHP - University of Michigan [cite: 39]</li>
        </ul>
      </div>
    </section>
  );
}

export default Skills;