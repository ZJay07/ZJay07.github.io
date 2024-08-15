// src/App.js
import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { Application } from "@hotwired/stimulus";
import './App.css';

import ModeSwitchController from "./controllers/mode_switch_controller";

const application = Application.start();
application.register("mode-switch", ModeSwitchController);

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
