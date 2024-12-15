import React from "react";
import "./Projects.css";

const Projects: React.FC = () => {
  const projects = [
    { title: "Project 1", description: "A cool project", link: "#" },
    { title: "Project 2", description: "Another cool project", link: "#" },
    { title: "Project 3", description: "Yet another project", link: "#" },
  ];

  return (
    <section id="projects" className="projects">
      <h2>My Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="projects-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
