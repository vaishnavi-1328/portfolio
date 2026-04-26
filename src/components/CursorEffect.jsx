import { useState, useEffect } from "react";

const CursorEffect = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseOver = (e) => {
      if (e.target.closest("a, button, .clickable, .project-card, .blog-card, .skill-category")) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [isVisible]);

  if (typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches) {
    return null;
  }

  return (
    <>
      <div
        className="cursor-glow"
        style={{
          position: "fixed",
          left: position.x,
          top: position.y,
          width: isHovering ? "60px" : "40px",
          height: isHovering ? "60px" : "40px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(168, 85, 247, 0.15) 0%, transparent 70%)",
          transform: "translate(-50%, -50%)",
          pointerEvents: "none",
          zIndex: 9998,
          transition: "width 0.2s ease, height 0.2s ease",
          opacity: isVisible ? 1 : 0,
        }}
      />
      <div
        className="cursor-dot"
        style={{
          position: "fixed",
          left: position.x,
          top: position.y,
          width: isHovering ? "12px" : "8px",
          height: isHovering ? "12px" : "8px",
          borderRadius: "50%",
          background: "var(--primary)",
          transform: "translate(-50%, -50%)",
          pointerEvents: "none",
          zIndex: 9999,
          transition: "width 0.15s ease, height 0.15s ease, background 0.15s ease",
          opacity: isVisible ? 1 : 0,
          boxShadow: isHovering
            ? "0 0 20px rgba(168, 85, 247, 0.6), 0 0 40px rgba(168, 85, 247, 0.3)"
            : "0 0 10px rgba(168, 85, 247, 0.4)",
        }}
      />
    </>
  );
};

export default CursorEffect;
