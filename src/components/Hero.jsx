import { useState } from "react";
import { TypeAnimation } from "react-type-animation";
import { FaLinkedin, FaGithub, FaEnvelope, FaArrowDown } from "react-icons/fa";
import { personalInfo } from "../data/content";

const Hero = () => {
  const [imageError, setImageError] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="hero-section" id="summary">
      <div className="container hero-container">
        <div className="hero-text" data-aos="fade-up">
          <span className="greeting-tag">Hello, I'm</span>
          <h1 className="hero-name">{personalInfo.name}</h1>
          <div className="typed-wrapper">
            <TypeAnimation
              sequence={[
                "Data Scientist",
                2500,
                "ML Engineer",
                2500,
                "Research Assistant",
                2500,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="typed-text"
            />
          </div>
          <p className="hero-description">
            Building production ML pipelines and scalable data solutions.
            Passionate about transforming complex data into actionable insights.
          </p>

          <div className="hero-buttons">
            <a
              href="https://drive.google.com/your-resume-link"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              View Resume
            </a>
            <button
              className="btn btn-outline"
              onClick={() => scrollToSection("contact")}
            >
              Get in Touch
            </button>
          </div>

          <div className="social-links">
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
            <a href={`mailto:${personalInfo.email}`} aria-label="Email">
              <FaEnvelope />
            </a>
          </div>
        </div>

        <div className="hero-visual" data-aos="fade-up" data-aos-delay="200">
          <div className="avatar-circle">
            {!imageError ? (
              <img
                src="/photo.jpg"
                alt={personalInfo.name}
                className="avatar-image"
                onError={() => setImageError(true)}
              />
            ) : (
              <span className="avatar-initials">VS</span>
            )}
          </div>
        </div>
      </div>

      <div className="scroll-indicator" onClick={() => scrollToSection("about")}>
        <span>Scroll</span>
        <FaArrowDown />
      </div>
    </section>
  );
};

export default Hero;
