import Home from "./component/Home";
import Projects from "./component/Projects";
import StickyFooter from "./component/StickyFooter";
import { useEffect, useState } from "react";

function App() {
  const [activeSlide, setActiveSlide] = useState(() =>
    window.location.hash === "#projects" ? 1 : 0,
  );

  useEffect(() => {
    const syncSlideWithHash = () =>
      setActiveSlide(window.location.hash === "#projects" ? 1 : 0);
    window.addEventListener("hashchange", syncSlideWithHash);
    return () => window.removeEventListener("hashchange", syncSlideWithHash);
  }, []);

  const navigateToSlide = (slide) => {
    setActiveSlide(slide);
    window.history.replaceState(null, "", slide === 1 ? "#projects" : "#profile");
  };

  return (
    <>
      <div className="bubble-field">
        {Array.from({ length: 15 }, (_, index) => (
          <span key={index} />
        ))}
      </div>
      <nav className="navbar-menu" aria-label="Main navigation">
        <a
          href="#profile"
          className="navbar-item"
          onClick={(event) => {
            event.preventDefault();
            navigateToSlide(0);
          }}
        >
          Profile
        </a>
        <a
          href="#projects"
          className="navbar-item"
          onClick={(event) => {
            event.preventDefault();
            navigateToSlide(1);
          }}
        >
          Projects
        </a>
      </nav>
      <div className="carousel-viewport">
        <div
          className="carousel-track"
          style={{ transform: activeSlide === 1 ? "translateX(-50%)" : "translateX(0)" }}
        >
          <Home />
          <Projects />
        </div>
      </div>
      <nav className="slide-dots" aria-label="Page navigation">
        <button
          type="button"
          aria-label="Go to home"
          aria-current={activeSlide === 0 ? "page" : undefined}
          className={activeSlide === 0 ? "is-active" : ""}
          onClick={() => navigateToSlide(0)}
        />
        <button
          type="button"
          aria-label="Go to projects"
          aria-current={activeSlide === 1 ? "page" : undefined}
          className={activeSlide === 1 ? "is-active" : ""}
          onClick={() => navigateToSlide(1)}
        />
      </nav>
      <StickyFooter />
    </>
  );
}

export default App;
