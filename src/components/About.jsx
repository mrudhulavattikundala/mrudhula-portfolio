// src/components/About.jsx
import React from 'react';

function About() {
  return (
    <section id="about" className="about-section">
      <h2>About Me</h2>
      
      <div className="career-objective">
        <p>
          [cite_start]B.Tech Computer Science and Engineering student with a strong academic foundation[cite: 9].
          [cite_start]Seeking a challenging role to apply my skills in programming, problem-solving, and software development[cite: 10].
          [cite_start]Eager to learn new technologies and contribute to real-world projects[cite: 11].
          [cite_start]Aiming to grow professionally while adding value to the organization[cite: 11].
        </p>
      </div>

      <div className="education">
        <h3>Education</h3>
        <div className="education-item">
          <h4>Bachelor of Computer Science and Engineering</h4>
          <p>Jain University, Bangalore | [cite_start]Sep 2022 - Aug 2026 [cite: 7]</p>
          [cite_start]<p>CGPA: 7.9 [cite: 7]</p>
        </div>
        <div className="education-item">
          <h4>Board of Intermediate Education</h4>
          <p>Sri Chaitanya Girls Junior College, AP | [cite_start]Oct 2020 - May 2022 [cite: 7]</p>
          [cite_start]<p>79% [cite: 7]</p>
        </div>
      </div>
    </section>
  );
}

export default About;