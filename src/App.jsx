import { useState } from "react";

import ThemeToggle from "./components/Theme/ThemeToggle";
import { Routes, Route } from "react-router-dom";

import { useTheme } from "./components/Theme/ThemeContext";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home page/Home";
import About from "./components/About page/About";
import Services from "./components/Service page/services";
import PrivacyPolicy from "./components/Privacy";
import License from "./components/Licence";
import Contact from "./components/Contact";

function App() {
  const { theme } = useTheme();
  const appStyle = {
    height: "200vh",
    backgroundColor: theme === "light" ? "#f9f9f9" : "#222",
    color: theme === "light" ? "#000" : "#fff",
  };
  return (
    <div style={appStyle}>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/license" element={<License />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
