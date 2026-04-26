import { FaLinkedin, FaGithub, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { personalInfo } from "../data/content";

const Contact = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="footer" id="contact">
      <div className="container">
        <div className="footer-grid">
          <div>
            <h4 className="footer-title">Contact</h4>
            <div className="footer-links">
              <a href={`mailto:${personalInfo.email}`} className="footer-link">
                <FaEnvelope /> {personalInfo.email}
              </a>
              <span className="footer-link">
                <FaMapMarkerAlt /> {personalInfo.location}
              </span>
            </div>
          </div>

          <div>
            <h4 className="footer-title">Expertise</h4>
            <div className="footer-links">
              <span className="footer-link">Machine Learning</span>
              <span className="footer-link">Data Engineering</span>
              <span className="footer-link">Statistical Analysis</span>
            </div>
          </div>

          <div>
            <h4 className="footer-title">Quick Links</h4>
            <div className="footer-links">
              <span className="footer-link" onClick={() => scrollToSection("about")}>About</span>
              <span className="footer-link" onClick={() => scrollToSection("projects")}>Projects</span>
              <span className="footer-link" onClick={() => scrollToSection("skills")}>Skills</span>
            </div>
          </div>

          <div>
            <h4 className="footer-title">Connect</h4>
            <div className="footer-social">
              <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
              </a>
              <a href={personalInfo.github} target="_blank" rel="noopener noreferrer">
                <FaGithub />
              </a>
              <a href={`mailto:${personalInfo.email}`}>
                <FaEnvelope />
              </a>
            </div>
          </div>
        </div>

        <hr className="footer-divider" />

        <p className="footer-copyright">
          {new Date().getFullYear()} Vaishnavi S. Built with React.
        </p>
      </div>
    </footer>
  );
};

export default Contact;
