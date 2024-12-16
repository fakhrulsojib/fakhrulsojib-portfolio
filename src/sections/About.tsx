import React from "react";
import "./About.css";
import portfolioData from "../assets/data/portfolio.json";

const About: React.FC = () => {
  const { heading, paragraphs } = portfolioData.about;

  return (
    <section id="about" className="about">
      <div className="about-content">
        <h2>{heading}</h2>
        {paragraphs.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
    </section>
  );
};

export default About;
