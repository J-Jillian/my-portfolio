import React from "react";
import heroImg from "../assets/hero.jpg";
import "../style/hero.css";

const Hero = () => {
  return (
    <>
      <div className="hero"></div>
      <img src={heroImg} className="hero-img" alt="website-img" />
    </>
  );
};

export default Hero;
