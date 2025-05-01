import React from "react";

const Projects = () => {
  return (
    <div id="projects" className="projects-container">
      <h2 className="projects-title">Projects</h2>
      <div className="projects">
        <div className="project-card">
          <div className="img-container">
            <img src="/src/assets/project.webp" alt="Project website" />
          </div>
          <div className="project-info">
            <h3>
              <a
                href="https://infocountryhub.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Country Info
              </a>
            </h3>
            <p>
              <strong>Tech:</strong> React, React Router, Sass, REST Countries
              API
            </p>
            <p>
              A sleek and responsive web app that displays detailed info about
              countries worldwide. Users can search, filter by region, and view
              individual country details. Features include dark mode, dynamic
              routing, and smooth loading states with spinners. Built with React
              19 and styled using Sass for a clean, modern UI.
            </p>
          </div>
        </div>
        <div className="project-card">
          <div className="img-container">
            <img src="/src/assets/translation.webp" alt="translation website" />
          </div>
          <div className="project-info">
            <h3>
              <a
                href="https://deniz-atici.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Translation Website
              </a>
            </h3>
            <p>
              <strong>Tech:</strong> React, Vite, Sass, AOS, Swiper
            </p>
            <p>
              A clean and responsive portfolio site built to showcase
              translation and localization projects. Includes scroll animations,
              a Swiper-based carousel, and a layout designed for multilingual
              content. Built with performance in mind using Vite and styled with
              Sass for a modern, polished UI.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
