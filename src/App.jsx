import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Publications from "./components/Publications";
import Recommendations from "./components/Recommendations";
import Blogs from "./components/Blogs";
import Contact from "./components/Contact";
import CursorEffect from "./components/CursorEffect";

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const saved = sessionStorage.getItem("darkMode");
    return saved === "true";
  });

  useEffect(() => {
    AOS.init({
      duration: 600,
      easing: "ease-out",
      once: true,
      offset: 50,
    });
  }, []);

  useEffect(() => {
    sessionStorage.setItem("darkMode", darkMode.toString());
    if (darkMode) {
      document.body.style.background = "#0f172a";
    } else {
      document.body.style.background = "#ffffff";
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={darkMode ? "dark-mode" : ""}>
      <CursorEffect />
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Publications />
        <Recommendations />
        <Blogs />
        <Contact />
      </main>
    </div>
  );
}

export default App;
