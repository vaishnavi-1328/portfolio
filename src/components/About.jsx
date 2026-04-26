import { FaBriefcase, FaGraduationCap } from "react-icons/fa";
import { experience, education } from "../data/content";

const About = () => {
  return (
    <section className="about-section" id="about">
      <div className="container">
        <div className="section-header">
          <p className="section-label">Background</p>
          <h2 className="section-title">About Me</h2>
        </div>

        <div className="about-grid">
          {/* Experience */}
          <div className="experience-block" data-aos="fade-up">
            <h3 className="block-title">
              <FaBriefcase /> Experience
            </h3>
            {experience.map((exp, index) => (
              <div className="timeline-item" key={index}>
                <div className="timeline-role">{exp.role}</div>
                <div className="timeline-company">
                  {exp.company} · {exp.location} · {exp.period}
                </div>
                <ul className="timeline-description">
                  {exp.description.map((desc, i) => (
                    <li key={i}>{desc}</li>
                  ))}
                </ul>
                <div className="tech-tags">
                  {exp.technologies.map((tech, i) => (
                    <span className="tech-tag" key={i}>{tech}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Education */}
          <div className="education-block" data-aos="fade-up" data-aos-delay="100">
            <h3 className="block-title">
              <FaGraduationCap /> Education
            </h3>
            {education.map((edu, index) => (
              <div className="timeline-item" key={index}>
                <div className="timeline-role">{edu.degree}</div>
                <div className="timeline-company">
                  {edu.institution} · {edu.period}
                </div>
                <p className="timeline-description">
                  GPA: {edu.gpa} · Coursework: {edu.courses.join(", ")}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
