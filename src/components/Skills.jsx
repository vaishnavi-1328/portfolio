import { skills } from "../data/content";

const Skills = () => {
  return (
    <section className="skills-section" id="skills">
      <div className="container">
        <div className="section-header">
          <p className="section-label">Expertise</p>
          <h2 className="section-title">Technical Skills</h2>
        </div>

        <div className="skills-grid">
          {Object.entries(skills).map(([category, skillList], index) => (
            <div
              className="skill-category"
              key={category}
              data-aos="fade-up"
              data-aos-delay={index * 50}
            >
              <h3 className="skill-category-title">{category}</h3>
              <div className="skill-list">
                {skillList.map((skill) => (
                  <span className="skill-item" key={skill}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
