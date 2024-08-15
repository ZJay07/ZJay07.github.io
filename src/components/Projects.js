// src/components/Projects.js
import React from 'react';
import './Projects.css';

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>
      <div className="project-list">
        <div className="project">
          <h3>Personal Linter</h3>
          <li>Created a personal linter using AST and the Please build tool, utilized in new personal projects and shared with friends.</li>
          <li>Implemented a custom rule to enforce a consistent naming convention for variables and functions.</li>
          <li>Currently on pip, downloable using `pip install jay_lint`</li>
        </div>
        <div className="project">
          <h3>Bias Mitigation in AI-Generated STEM Images</h3>
          <li>Optimised stable diffusion model using Genetic Algorithms, resulting in a 20% increase in female representation and a 
          balanced skin tone distribution in images of STEM professionals. </li>
          <li>Reduced bias scores by 49% for individual images and 33% for group images overall. </li>
          <li>Won UCL Computer Science EDI award for promoting inclusivity and tolerance through advance AI techniques.</li>
        </div>
        {/* Add more projects as needed */}
      </div>
    </section>
  );
};

export default Projects;
