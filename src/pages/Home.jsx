import React from "react";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import "../style/home.css";

const Home = () => {
  return (
    <>
      <Navbar />
      <div>
        <div className="hero-container">
          <h1>
            Hi. I’m
            <br />
            Jillian.
            <br />
            <span>SW Developer.</span>
          </h1>
          <p>
            I'm also a Digital Designer, with a great passion for technology.
          </p>
        </div>
        <Hero />
      </div>
    </>
  );
};

export default Home;
