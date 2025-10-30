// src/App.jsx
import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css'; // Don't forget to import your CSS file

function App() {
  return (
    <div className="portfolio-app">
      <Header />
      <main>
        {/* The IDs here match the anchors you set in the Header.jsx links */}
        <div id="about"><About /></div>
        <div id="skills"><Skills /></div>
        <div id="projects"><Projects /></div>
      </main>
      <div id="contact"><Contact /></div>
      <Footer />
    </div>
  );
}

export default App;