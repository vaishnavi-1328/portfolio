import { FaQuoteLeft } from "react-icons/fa";
import { recommendations } from "../data/content";

const Recommendations = () => {
  return (
    <section className="recommendations-section" id="recommendations">
      <div className="container">
        <div className="section-header">
          <p className="section-label">Testimonials</p>
          <h2 className="section-title">Recommendations</h2>
        </div>

        <div className="recommendations-grid">
          {recommendations.map((rec, index) => (
            <div
              className="recommendation-card"
              key={rec.name}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="quote-icon">
                <FaQuoteLeft />
              </div>
              <p className="recommendation-text">{rec.text}</p>
              <div className="recommendation-author">
                <div className="author-avatar">
                  {rec.name.split(" ").map(n => n[0]).join("")}
                </div>
                <div className="author-info">
                  <h4 className="author-name">{rec.name}</h4>
                  <p className="author-title">{rec.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Recommendations;
