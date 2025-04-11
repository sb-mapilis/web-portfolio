import React, { useRef, useEffect } from "react";
  
function Home() {
  

  return (
    <div id="profile" className="home-container">

<nav className="navbar-menu"> 
          <a href="#profile" className="navbar-item">
            Profile
          </a>
          <a href="#projects" className="navbar-item">
            Projects
          </a>
          <a href="#contact" className="navbar-item">
            Contact
          </a> 
      </nav> 
        
        <div className="content-section">
        <p>Hey there! 👋 Welcome to my little corner of the internet.</p>

<p>
  I'm <strong>Sarah Atici</strong>, a curious and self-taught web developer with about 3 years of hands-on building, 
  fixing, and googling my way through the tech world.
  It all started with a 404 error on my company's site — one of those “huh, 
  I wonder how this works” moments that spiraled into a full-on obsession with code.
</p>

<p>
  Outside of code, I enjoy slow mornings, falling leaves 🍂, and the quiet joy of hot coffee ☕.
   Oh, and Stack Overflow is basically my second brain.
</p>

       </div>
 
    </div>
  );
}

export default Home;
