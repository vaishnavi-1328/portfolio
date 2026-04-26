import { FaBook, FaExternalLinkAlt } from "react-icons/fa";
import { publications } from "../data/content";

const Publications = () => {
  return (
    <section className="publications-section" id="publications">
      <div className="container">
        <div className="section-header">
          <p className="section-label">Research</p>
          <h2 className="section-title">Publications</h2>
        </div>

        <div className="publications-list">
          {publications.map((pub, index) => (
            <div
              className="publication-card"
              key={pub.title}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="publication-icon">
                <FaBook size={20} />
              </div>
              <div className="publication-content">
                <h3 className="publication-title">{pub.title}</h3>
                <p className="publication-meta">
                  {pub.publisher} · {pub.year}
                </p>
                <a
                  href={pub.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="publication-link"
                >
                  View Publication <FaExternalLinkAlt size={10} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Publications;
