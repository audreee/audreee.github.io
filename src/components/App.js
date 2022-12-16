import React, { useState, useEffect } from 'react';
import '../styles/App.css';
import Welcome from './Welcome';
import About from './About';
import Skills from './Skills';
import Navbar from './Navbar';
// import getWindowDimensions from '../hooks/getWindowDimensions';

function App() {
  return (
    <div className="App parent">
      <Navbar />
      <div className="sections">
        <Welcome id="welcome" />
        <About id="about" />
        <Skills id="skills"/>
      </div>
    </div>
  );
}

export default App;
