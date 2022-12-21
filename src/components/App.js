import React, { useState, useEffect } from 'react';
import '../styles/app.css';
import Welcome from './Welcome';
import About from './About';
import Skills from './Skills';
import Navbar from './Navbar';

function App() {
  return (
    <div className="App parent">
      <Navbar />
      <div className="sections">
        <div id="welcome"> 
          <Welcome />
        </div>
        <div id="about">
          <About />
        </div>
        <div id="skills">
          <Skills />
        </div>
      </div>
    </div>
  );
}

export default App;
