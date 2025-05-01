import Home from "./component/Home";
import CornerLines from "./component/CornerLines";
import Projects from "./component/Projects";
import useScrollSpy from "./component/useScrollSpy";
import Contact from "./component/Contact";
import { useEffect } from "react";

function App() {
  useScrollSpy(["profile", "projects"]);
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const target = document.querySelector(hash);
      if (target) {
        setTimeout(() => {
          target.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }, 100);
      }
    }
  }, []);

  return (
    <>
      <CornerLines />
      <div className="scroll-container">
        <Home />
        <Projects />
        <Contact />
      </div>
    </>
  );
}

export default App;
