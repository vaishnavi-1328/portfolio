import { useState } from "react";
import { FaGithub, FaExternalLinkAlt, FaBriefcase } from "react-icons/fa";
import { projects } from "../data/content";

const ProjectCard = ({ project, index }) => {
  const [imageError, setImageError] = useState(false);
  const hasGithub = project.github && project.github !== "#" && project.github !== "";
  const hasLive = project.live && project.live !== "#" && project.live !== "";
  const isInternshipWork = !hasGithub && !hasLive;
  const hasImage = project.image && project.image !== "" && !imageError;

  return (
    <div className={`project-card ${!hasImage ? "project-card-no-image" : ""}`} data-aos="fade-up" data-aos-delay={index * 50}>
      {hasImage && (
        <div
          className="project-thumbnail"
          style={{ background: "var(--bg-secondary)" }}
        >
          <img
            src={project.image}
            alt={project.title}
            onError={() => setImageError(true)}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        </div>
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
  return (
    <section className="projects-section" id="projects">
      <div className="container">
        <div className="section-header">
          <p className="section-label">Portfolio</p>
          <h2 className="section-title">Projects</h2>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
