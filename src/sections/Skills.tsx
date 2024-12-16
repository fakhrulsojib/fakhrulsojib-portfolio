// Skills.tsx
import React from "react";
import "./Skills.css";
import portfolioData from "../assets/data/portfolio.json";

const Skills: React.FC = () => {
  const skills = portfolioData.skills; // Access skills array correctly

  return (
    <section id="skills" className="skills">
      <h2>My Skills</h2>
      <div className="skills-list">
        {skills.map((skill) => (
          <div key={skill.name} className="skill">
            {" "}
            {/* Use skill.name as key */}
            <h3>{skill.name}</h3>
            <p>{skill.level}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
