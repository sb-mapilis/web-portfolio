import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import translation from "../assets/translation.webp";
import project from "../assets/project.webp";
import garden from "../assets/freeStonemason.webp";

const projects = [
  {
    image: garden,
    alt: "Free Stonemason website",
    title: "Free Stonemason",
    url: "https://freestonemason.pl/",
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion", "Cloudflare Pages"],
    description:
      "A responsive business website for a Polish stonemasonry company. Multilingual (PL, EN, DE), project galleries, Google Maps, contact forms, and SEO-focused architecture.",
  },
  {
    image: translation,
    alt: "Translation website",
    title: "Translation Website",
    url: "https://deniz-atici.netlify.app/",
    stack: ["React", "Vite", "Sass", "AOS", "Swiper"],
    description:
      "A clean portfolio site showcasing translation and localization projects. Scroll animations, a Swiper carousel, and a multilingual-ready layout built with Vite and Sass.",
  },
  {
    image: project,
    alt: "Country Info website",
    title: "Country Info",
    url: "https://infocountryhub.netlify.app/",
    stack: ["React", "React Router", "Sass", "REST Countries API"],
    description:
      "A responsive web app displaying country details worldwide. Search, region filtering, dark mode, dynamic routing, and smooth loading states — built with React 19.",
  },
];

const Projects = () => (
  <div id="projects" className="projects-container">
    <h2 className="projects-title">Projects</h2>

    <div className="projects-grid">
      {projects.map(({ image, alt, title, url, stack, description }) => (
        <div key={title} className="project-card">
          <div className="project-card__image">
            <img src={image} alt={alt} />
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="project-card__overlay"
              aria-label={`Visit ${title}`}
            >
              <FaExternalLinkAlt size={22} />
            </a>
          </div>

          <div className="project-card__body">
            <h3 className="project-card__title">
              <a href={url} target="_blank" rel="noopener noreferrer">
                {title}
              </a>
            </h3>

            <p className="project-card__desc">{description}</p>

            <ul className="project-card__stack">
              {stack.map((tech) => (
                <li key={tech}>{tech}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default Projects;
