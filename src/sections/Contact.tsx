// Contact.tsx
import React from "react";
import "./Contact.css";
import portfolioData from "../assets/data/portfolio.json";

const Contact: React.FC = () => {
  const { socialLinks } = portfolioData.contact; // Access socialLinks from portfolioData

  return (
    <section id="contact" className="contact">
      <h2>Connect with Me</h2>
      <div className="social-links">
        {" "}
        {/* Use a div for better styling control */}
        {socialLinks.map((link) => (
          <a
            key={link.name} // Use name as key, assuming it's unique
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
          >
            <span className="social-icon">{link.icon}</span>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Contact;
