import React from "react";
import Projects from "../components/Project/Projects";
import Parallaxhero from "../components/Parallaxhero";

import "../style/wip.css";

const Wip = () => {
  return (
    <>
      <div className="wip-container">
        <Parallaxhero />
        <Parallaxhero />
        <div className="wip-content">
          <Projects />
        </div>
      </div>
    </>
  );
};

export default Wip;
