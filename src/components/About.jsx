import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FaGraduationCap } from "react-icons/fa";
import { experience, education } from "../data/content";

const ExperienceStage = ({ exp, index, globalProgress }) => {
  const count = 5;
  const slotStart = index / count;
  const slotEnd = (index + 1) / count;
  const slotMid = (slotStart + slotEnd) / 2;
  const buffer = 0.012;

  const stageOpacity = useTransform(
    globalProgress,
    [slotStart, slotStart + buffer * 2, slotEnd - buffer * 2, slotEnd],
    [0, 1, 1, 0]
  );

  // Logo moves from center toward right (px, not %)
  const logoX = useTransform(
    globalProgress,
    [slotMid, slotEnd - buffer],
    [0, 320]
  );

  const descOpacity = useTransform(
    globalProgress,
    [slotMid, slotMid + buffer * 2, slotEnd - buffer * 2, slotEnd],
    [0, 1, 1, 0]
  );

  const descX = useTransform(
    globalProgress,
    [slotMid, slotMid + buffer * 3],
    [-80, 0]
  );

  const jobNumber = String(index + 1).padStart(2, "0");

  return (
    <motion.div className="exp-stage" style={{ opacity: stageOpacity }}>
      <div className="exp-bg-number">{jobNumber}</div>

      {/* Description panel — absolutely positioned left, flies in from off-screen */}
      <motion.div
        className="exp-description-panel"
        style={{ opacity: descOpacity, x: descX }}
      >
        <ul>
          {exp.description.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
        <div className="tech-tags">
          {exp.technologies.map((tech) => (
            <span key={tech} className="tech-tag">{tech}</span>
          ))}
        </div>
      </motion.div>

      {/* Center column: logo + title, logo slides right */}
      <div className="exp-center-content">
        <motion.div style={{ x: logoX }}>
          {exp.logo ? (
            <div className="exp-logo-wrapper">
              <img src={exp.logo} alt={exp.company} />
            </div>
          ) : (
            <div className="logo-fallback">DV</div>
          )}
        </motion.div>

        <div className="exp-title-block">
          <h2 className="exp-role">{exp.role}</h2>
          <p className="exp-company-name">{exp.company}</p>
          <p className="exp-period">{exp.period} · {exp.location}</p>
        </div>
      </div>
    </motion.div>
  );
};

const ProgressDot = ({ globalProgress, index, count }) => {
  const slotStart = index / count;
  const slotEnd = (index + 1) / count;

  const bgColor = useTransform(globalProgress, (v) =>
    v >= slotStart && v < slotEnd ? "#a855f7" : "#2e1a5e"
  );
  const width = useTransform(globalProgress, (v) =>
    v >= slotStart && v < slotEnd ? "24px" : "8px"
  );
  const borderRadius = useTransform(globalProgress, (v) =>
    v >= slotStart && v < slotEnd ? "4px" : "50%"
  );

  return (
    <motion.div
      style={{
        backgroundColor: bgColor,
        width,
        height: "8px",
        borderRadius,
      }}
    />
  );
};

const About = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <section className="about-section" id="about">
      <div className="about-header-wrapper">
        <div className="container">
          <div className="section-header">
            <p className="section-label">Career</p>
            <h2 className="section-title">Work Experience</h2>
          </div>
        </div>
      </div>

      <div
        className="experience-scroll-container"
        ref={containerRef}
        style={{ height: "800vh", position: "relative" }}
      >
        <div className="experience-sticky-stage">
          {experience.map((exp, i) => (
            <ExperienceStage
              key={i}
              exp={exp}
              index={i}
              globalProgress={scrollYProgress}
            />
          ))}
          <div className="exp-progress-dots">
            {experience.map((_, i) => (
              <ProgressDot
                key={i}
                globalProgress={scrollYProgress}
                index={i}
                count={experience.length}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="education-section">
        <div className="container">
          <div className="section-header">
            <p className="section-label">Academic</p>
            <h2 className="section-title">Education</h2>
          </div>
          <div className="education-block" data-aos="fade-up">
            <div className="block-title">
              <FaGraduationCap />
              Education
            </div>
            {education.map((edu, i) => (
              <div key={i} className="timeline-item">
                <div className="timeline-role">{edu.degree}</div>
                <div className="timeline-company">{edu.institution}</div>
                <div className="timeline-description">
                  {edu.period} · GPA: {edu.gpa}
                </div>
                <div className="tech-tags">
                  {edu.courses.map((course) => (
                    <span key={course} className="tech-tag">{course}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
