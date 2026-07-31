import Home from "./component/Home";
import Projects from "./component/Projects";
import StickyFooter from "./component/StickyFooter";
import useScrollSpy from "./component/useScrollSpy";
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
      <div className="scroll-container">
        <Home />
        <Projects />
      </div>
      <StickyFooter />
    </>
  );
}

export default App;
