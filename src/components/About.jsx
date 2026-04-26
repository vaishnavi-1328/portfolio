import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { FaGraduationCap } from "react-icons/fa";
import { experience, education } from "../data/content";

const SPRING = { stiffness: 60, damping: 20, restDelta: 0.001 };

const ExperienceStage = ({ exp, index, globalProgress }) => {
  const count = 5;
  const slotSize = 1 / count;
  const slotStart = index * slotSize;
  const slotEnd = slotStart + slotSize;
  // Phase 1: slotStart → slotMid (logo centered, fading in)
  // Phase 2: slotMid → slotEnd (logo slides right, title + desc appear)
  const slotMid = slotStart + slotSize * 0.45;
  const fadeIn  = slotSize * 0.08;   // how long fade-in takes
  const fadeOut = slotSize * 0.08;
  const slideSpan = slotSize * 0.40; // how long the slide lasts

  // Stage fades in at slot start, holds, fades out at slot end
  const rawStageOpacity = useTransform(
    globalProgress,
    [slotStart, slotStart + fadeIn, slotEnd - fadeOut, slotEnd],
    [0, 1, 1, 0]
  );
  const stageOpacity = useSpring(rawStageOpacity, SPRING);

  // Logo slides right from natural flex-center position
  const rawLogoX = useTransform(
    globalProgress,
    [slotMid, slotMid + slideSpan],
    [0, 260]
  );
  const logoX = useSpring(rawLogoX, SPRING);

  // Title flies up from below logo
  const rawTitleY = useTransform(
    globalProgress,
    [slotMid, slotMid + slideSpan * 0.7],
    [80, 0]
  );
  const titleY = useSpring(rawTitleY, SPRING);

  const rawTitleOpacity = useTransform(
    globalProgress,
    [slotMid, slotMid + slideSpan * 0.3, slotEnd - fadeOut, slotEnd],
    [0, 1, 1, 0]
  );
  const titleOpacity = useSpring(rawTitleOpacity, SPRING);

  // Description flies in from far left (off-screen) so phase 1 shows only logo
  const rawDescX = useTransform(
    globalProgress,
    [slotMid, slotMid + slideSpan * 0.7],
    [-500, 0]
  );
  const descX = useSpring(rawDescX, SPRING);

  const rawDescOpacity = useTransform(
    globalProgress,
    [slotMid, slotMid + slideSpan * 0.3, slotEnd - fadeOut, slotEnd],
    [0, 1, 1, 0]
  );
  const descOpacity = useSpring(rawDescOpacity, SPRING);

  const jobNumber = String(index + 1).padStart(2, "0");

  return (
    <motion.div className="exp-stage" style={{ opacity: stageOpacity }}>
      <div className="exp-bg-number">{jobNumber}</div>

      {/* Description panel — left side, flies in from left */}
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

      {/* Logo block — slides right. Title is child so it moves with logo */}
      <motion.div className="exp-logo-block" style={{ x: logoX }}>
        {exp.logo ? (
          <div className="exp-logo-wrapper">
            <img src={exp.logo} alt={exp.company} />
          </div>
        ) : (
          <div className="logo-fallback-large">DV</div>
        )}

        {/* Title flies up from below the logo */}
        <motion.div
          className="exp-title-block"
          style={{ y: titleY, opacity: titleOpacity }}
        >
          <h2 className="exp-role">{exp.role}</h2>
          <p className="exp-company-name">{exp.company}</p>
          <p className="exp-period">{exp.period} · {exp.location}</p>
        </motion.div>
      </motion.div>
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
      style={{ backgroundColor: bgColor, width, height: "8px", borderRadius }}
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
