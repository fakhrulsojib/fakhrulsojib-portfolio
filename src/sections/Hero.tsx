import React from "react";
import "./Hero.css";
import portfolioData from "../assets/data/portfolio.json";

const Hero: React.FC = () => {
  const { title, tagline, ctaText } = portfolioData.hero;

  return (
    <section id="hero" className="hero">
      <div className="hero-content">
        <h1>{title}</h1>
        <h2>{tagline}</h2>
        <a href="#contact" className="hero-button">
          {ctaText}
        </a>
      </div>
    </section>
  );
};

export default Hero;
