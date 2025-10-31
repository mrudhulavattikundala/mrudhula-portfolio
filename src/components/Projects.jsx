// src/components/Projects.jsx
import React from 'react';

function Projects() {
return (
    <section id="projects" className="projects-section">
        <h2>Projects</h2>
        
        <div className="project-card">
            <h3>Cloud-Based Task Management System</h3>
            <p className="project-date">June 2025</p>
            <p className="project-tech">MERN Stack - Real-time task app with secure login</p>
            <ul>
                <li>Built a full-stack application with MongoDB, Express.js, React.js, and Node.js</li>
                <li>Added real-time task updates and gamified progress tracking to enhance productivity</li>
                {/* Add a placeholder for your live link and GitHub link here when available */}
                <li><a href="[Your Live Demo Link]">View Live</a> | <a href="[Your GitHub Repo Link]">GitHub Code</a></li>
            </ul>
        </div>

        <div className="project-card">
            <h3>Indoor Navigation Using QR Codes and Graph Theory</h3>
            <p className="project-date">June 2025</p>
            <p className="project-tech">Python, Network X, QR Code, Google Maps API </p>
            <ul>
                <li>Developed mobile indoor navigation using QR codes and graph theory without GPS</li>
                <li>Computed dynamic shortest paths and guided users step-by-step with Network X</li>
                <li><a href="[Your GitHub Repo Link]">GitHub Code</a></li>
            </ul>
        </div>

        <div className="project-card">
            <h3>Innovative Methods to Improve Students Attention Span</h3>
            <p className="project-date">July 2024</p>
            <p className="project-tech">AR, VR, and Enhancement Tools</p>
            <ul>
                <li>Used AR/VR and AI to create personalized learning experiences improving attention spans</li>
                <li>Monitored well-being with wearables and delivered tailored content to enhance focus</li>
                <li><a href="[Your GitHub Repo Link]">GitHub Code</a></li>
            </ul>
        </div>
    </section>
);
}

export default Projects;