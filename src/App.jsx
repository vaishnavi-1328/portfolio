import { useEffect } from "react";
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
  useEffect(() => {
    AOS.init({
      duration: 600,
      easing: "ease-out",
      once: true,
      offset: 50,
    });
  }, []);

  return (
    <div>
      <CursorEffect />
      <Navbar />
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
