import React from "react";
import "./Hero.css";

const Hero: React.FC = () => {
  return (
    <section id="hero" className="hero">
      <div className="hero-content">
        <h1>Welcome to My Portfolio</h1>
        <p>I’m [Your Name], a passionate [Your Profession].</p>
        <a href="#contact" className="hero-button">
          Contact Me
        </a>
      </div>
    </section>
  );
};

export default Hero;
