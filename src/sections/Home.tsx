import React from "react";
// import "./Home.css";
import portfolioData from "../assets/data/portfolio.json";
import "animate.css";

const Home: React.FC = () => {
  const { heading, name, tagline, resumeLink } = portfolioData.home;

  return (
    <section id="home" className="home">
      <div className="section-content">
        <h1 className="section-heading">
          {heading}
          <div className="home-name">{name}</div>
        </h1>
        <div className="animate__animated animate__bounce">
          <h2 className="home-tagline">{tagline}</h2>
        </div>
        <a href={resumeLink} target="_blank" className="home-button">
          Resume
        </a>
      </div>
    </section>
  );
};

export default Home;
