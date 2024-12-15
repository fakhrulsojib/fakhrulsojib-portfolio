import React from "react";
import "./About.css";

const About: React.FC = () => {
  return (
    <section id="about" className="about">
      <div className="about-content">
        <h2>About Me</h2>
        <p>
          Hi, I'm [Your Name], a [Your Profession] passionate about building
          elegant and efficient solutions. I specialize in [list your key
          skills/technologies].
        </p>
        <p>
          With [X years] of experience, I've worked on projects ranging from
          [example projects] to [other example projects].
        </p>
      </div>
    </section>
  );
};

export default About;
