import React from "react";
import "./Contact.css";

const socialLinks = [
  { name: "GitHub", url: "https://github.com", icon: "🐙" },
  { name: "LinkedIn", url: "https://linkedin.com", icon: "🔗" },
  { name: "Twitter", url: "https://twitter.com", icon: "🐦" },
];

const Contact: React.FC = () => {
  return (
    <section id="contact" className="contact">
      <h2>Connect with Me</h2>
      <p>You can find me on these platforms:</p>
      <ul className="social-links">
        {socialLinks.map((link, index) => (
          <li key={index} className="social-item">
            <a
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              <span className="social-icon">{link.icon}</span>
              {link.name}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Contact;
