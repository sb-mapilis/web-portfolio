import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaTwitter } from "react-icons/fa";

const StickyFooter = () => (
  <footer className="sticky-footer">
    <div className="sticky-footer__links">
      <a
        href="https://github.com/sb-mapilis"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub"
        className="sticky-footer__icon"
      >
        <FaGithub size={18} />
      </a>
      <a
        href="https://www.linkedin.com/in/sakirumatsu/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
        className="sticky-footer__icon"
      >
        <FaLinkedin size={18} />
      </a>
      <a
        href="https://twitter.com/SAtici12"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Twitter"
        className="sticky-footer__icon"
      >
        <FaTwitter size={18} />
      </a>
      <a
        href="mailto:mapilis.sb@gmail.com"
        aria-label="Email"
        className="sticky-footer__icon"
      >
        <FaEnvelope size={18} />
      </a>
    </div>
    <span className="sticky-footer__email">mapilis.sb@gmail.com</span>
  </footer>
);

export default StickyFooter;
