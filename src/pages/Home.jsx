import React from "react";
import Navbar from "../components/Navbar";
import Parallaxhero from "../components/Parallaxhero";
import Projects from "../components/Project/Projects";

import "../style/home.css";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="hero-container">
        <Parallaxhero />
        <Parallaxhero />
        <Parallaxhero />
        <div className="home-content">
          <div></div>
          <h1>
            Hi. I’m
            <br />
            Jillian.
            <br />
            <span>SW Developer.</span>
          </h1>
          <p className="slogan-p">
            I'm also a Digital Designer, with a great passion for technology.
          </p>
          <div className="projects-container">
            <Projects />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
