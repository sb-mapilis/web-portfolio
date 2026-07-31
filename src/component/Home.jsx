import React, { useState, useEffect } from "react";

const ROLES = ["Full Stack Developer", "React Enthusiast", "Problem Solver"];

function Home() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = ROLES[roleIndex];
    let timeout;

    if (!deleting && displayed.length < current.length) {
      timeout = setTimeout(
        () => setDisplayed(current.slice(0, displayed.length + 1)),
        80,
      );
    } else if (!deleting && displayed.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 1800);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 45);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setRoleIndex((i) => (i + 1) % ROLES.length);
    }

    return () => clearTimeout(timeout);
  }, [displayed, deleting, roleIndex]);

  return (
    <div id="profile" className="home-container">
      {/* ── Nav ── */}
      <nav className="navbar-menu">
        <a href="#profile" className="navbar-item">
          Profile
        </a>
        <a href="#projects" className="navbar-item">
          Projects
        </a>
      </nav>

      {/* ── Hero ── */}
      <div className="hero">
        <div className="hero-text">
          <span className="hero-greeting">Hey there! 👋</span>

          <h1 className="hero-name">Sarah Atici</h1>

          <p className="hero-role">
            <span className="hero-role-text">{displayed}</span>
            <span className="hero-cursor" aria-hidden="true">
              |
            </span>
          </p>

          <p className="hero-bio">
            Self-taught web developer with ~3 years of hands-on experience.
            Started with a 404 error, turned it into a full-on obsession with
            code. I enjoy slow mornings, falling leaves 🍂, and hot coffee ☕.
          </p>

          <div className="hero-stack">
            {[
              "JavaScript",
              "TypeScript",
              "React",
              "Node.js",
              "Next.js",
              "Sass",
            ].map((t) => (
              <span key={t} className="hero-tag">
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
