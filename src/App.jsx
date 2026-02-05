import React from "react";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Experience from "./components/Experience.jsx";
import Projects from "./components/Projects.jsx";
import Education from "./components/Education.jsx";
import Skills from "./components/Skills.jsx";
import Certifications from "./components/Certifications.jsx";
import CodingPlatforms from "./components/CodingPlatforms.jsx";
import Contact from "./components/Contact.jsx";

export default function App() {
  return (
    <div  className="font-sans antialiased  bg-navy">
      <Navbar />
      <main className="mt-16">
        <Hero />
        <Experience />
        <Projects />
        <Education />
        <Skills />
        <Certifications />
        <CodingPlatforms />
        <Contact />
      </main>
    </div>
  );
}