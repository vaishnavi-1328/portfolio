import { useState, useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaBriefcase } from "react-icons/fa";
import { projects } from "../data/content";

const CARD_WIDTH = 320;
const CARD_GAP = 24;
const TRACK_PADDING = 96;

const fallbackGradients = [
  "linear-gradient(135deg, #1a0533, #4c1d95)",
  "linear-gradient(135deg, #2d1b69, #7c3aed)",
  "linear-gradient(135deg, #0d0d1a, #6d28d9)",
  "linear-gradient(135deg, #1e0a3c, #a855f7)",
];

const ProjectCard = ({ project, index }) => {
  const [imageError, setImageError] = useState(false);
  const hasGithub = project.github && project.github !== "#" && project.github !== "";
  const hasLive = project.live && project.live !== "#" && project.live !== "";
  const isInternshipWork = !hasGithub && !hasLive;
  const hasImage = project.image && project.image !== "" && !imageError;

  return (
    <div className={`project-card ${!hasImage ? "project-card-no-image" : ""}`}>
      {hasImage ? (
        <div className="project-thumbnail">
          <img
            src={project.image}
            alt={project.title}
            onError={() => setImageError(true)}
          />
        </div>
      ) : (
        <div
          className="project-thumbnail"
          style={{ background: fallbackGradients[index % fallbackGradients.length] }}
        />
      )}

      <div className="project-content">
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "8px" }}>
          <p className="project-date">{project.date}</p>
          {isInternshipWork && (
            <span className="internship-badge">
              <FaBriefcase size={10} /> Internship
            </span>
          )}
        </div>
        <h3 className="project-title">{project.title}</h3>
        <p className="project-description">{project.description}</p>

        <div className="project-tech">
          {project.technologies.slice(0, 4).map((tech, i) => (
            <span className="tech-tag" key={i}>{tech}</span>
          ))}
        </div>

        <div className="project-links">
          {hasLive && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link project-link-primary"
            >
              <FaExternalLinkAlt size={12} /> Demo
            </a>
          )}
          {hasGithub && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link project-link-secondary"
            >
              <FaGithub size={14} /> Code
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const totalTrackWidth = (CARD_WIDTH + CARD_GAP) * projects.length + TRACK_PADDING;
  const maxShift = totalTrackWidth - (typeof window !== "undefined" ? window.innerWidth : 1440);

  const rawX = useTransform(scrollYProgress, [0, 1], ["0px", `-${maxShift}px`]);
  const smoothX = useSpring(rawX, { stiffness: 80, damping: 25, restDelta: 0.001 });

  const containerHeight = `calc(100vh + ${maxShift}px)`;

  return (
    <section className="projects-section" id="projects">
      <div className="projects-header-wrapper">
        <div className="container">
          <div className="section-header">
            <p className="section-label">Portfolio</p>
            <h2 className="section-title">Projects</h2>
          </div>
        </div>
      </div>

      {/* Horizontal scroll — desktop */}
      <div
        className="projects-scroll-container"
        ref={containerRef}
        style={{ height: containerHeight }}
      >
        <div className="projects-sticky-wrapper">
          <motion.div className="projects-track" style={{ x: smoothX }}>
            {projects.map((project, index) => (
              <ProjectCard key={project.title} project={project} index={index} />
            ))}
          </motion.div>
        </div>
      </div>

      {/* Vertical fallback — mobile */}
      <div className="container projects-mobile-grid">
        {projects.map((project, index) => (
          <ProjectCard key={project.title} project={project} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
