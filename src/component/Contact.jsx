import React from "react";
import { FaGithub, FaTwitter, FaLinkedin, FaEnvelope } from "react-icons/fa";

const socialLinks = [
  { icon: FaGithub, href: "https://github.com/saki1994", ariaLabel: "Github" },
  {
    icon: FaTwitter,
    href: "https://twitter.com/SAtici12",
    ariaLabel: "Twitter",
  },
  {
    icon: FaLinkedin,
    href: "https://www.linkedin.com/in/sakirumatsu/",
    ariaLabel: "LinkedIn",
  },
  {
    icon: FaEnvelope,
    href: "mailto:ZqZo6@example.com",
    ariaLabel: "Email",
  },
];

const Contact = () => {
  return (
    <div id="contact" className="contact-container">
      <h3 className="contact-title">Contact</h3>
      <p>
        I would love to hear from you. You can message me on whatsApp, twitter,
        e-mail me to get in touch. You can also find me on Github. Let's get to
        know each other!
      </p>
      <div className="icon-container">
        {socialLinks.map((link, index) => (
          <a
            key={index}
            className="icon-link"
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={link.ariaLabel}
          >
            <link.icon size={25} className="icon-style" />
          </a>
        ))}
      </div>
    </div>
  );
};

export default Contact;
