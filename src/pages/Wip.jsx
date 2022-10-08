import React from "react";
import Projects from "../components/Project/Projects";
import Hero from "../components/Hero";

const Wip = () => {
  return (
    <>
      <div>
        <div className="hero-container">
          <div>
            <Projects />
          </div>
        </div>
        <Hero />
      </div>
    </>
  );
};

export default Wip;
