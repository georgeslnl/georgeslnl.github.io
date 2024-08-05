import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./Pages/About";
import Home from "./Pages/Home";
import Projects from "./Pages/Projects";
import Contact from "./Pages/Contact";
import Header from "./Components/Header";
import Footer from "./Components/Footer";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };


  return (
    <div className="font-ubuntu bg-background-50 min-h-svh">
      <Router>
        <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode}/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
