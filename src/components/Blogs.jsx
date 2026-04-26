import { useState } from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import { blogs } from "../data/content";

const blogGradients = [
  "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
  "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
  "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
  "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
];

const BlogCard = ({ blog, index }) => {
  const [imageError, setImageError] = useState(false);
  const hasImage = blog.image && !imageError;

  return (
    <a
      href={blog.link}
      target="_blank"
      rel="noopener noreferrer"
      className="blog-card"
      data-aos="fade-up"
      data-aos-delay={index * 100}
    >
      <div
        className="blog-thumbnail"
        style={{ background: hasImage ? "var(--bg-secondary)" : blogGradients[index % blogGradients.length] }}
      >
        {hasImage ? (
          <img
            src={blog.image}
            alt={blog.title}
            onError={() => setImageError(true)}
          />
        ) : (
          <span>{blog.title.split(" ").map(w => w[0]).join("").slice(0, 2)}</span>
        )}
      </div>
      <div className="blog-content">
        <h3 className="blog-title">{blog.title}</h3>
        <span className="blog-link-text">
          Read on Medium <FaExternalLinkAlt size={10} />
        </span>
      </div>
    </a>
  );
};

const Blogs = () => {
  return (
    <section className="blogs-section" id="blogs">
      <div className="container">
        <div className="section-header">
          <p className="section-label">Writing</p>
          <h2 className="section-title">Blog Posts</h2>
        </div>

        <div className="blogs-grid">
          {blogs.map((blog, index) => (
            <BlogCard key={blog.title} blog={blog} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blogs;
