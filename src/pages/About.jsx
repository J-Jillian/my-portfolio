import React from "react";

import imgAbout from "../assets/webdev.png";
import "../style/about.css";
import Parallaxhero from "../components/Parallaxhero";

const About = () => {
  return (
    <>
      <div className="about-container">
        <div className="remove-parallax">
          <Parallaxhero />
        </div>
        <div className="about-content">
          <img src={imgAbout} className="profile-img" alt="about-img" />
          <div className="about-section">
            <h2>
              I’m Jillian, Full-Stack Developer with a background in Digital
              Design working remotely in the sunny Málaga, Spain.
            </h2>
            <p className="p-about">
              I define myself as a dynamic and resolutive person, recently
              graduated from the Web Developer Bootcamp, which has been a game
              changer and a completely remote experience where I have gained
              programming experience and skills, it was also an opportunity I
              have the pleasure to share with wonderful people from all over
              Europe.
              <br />
              <br />
              I’ve spent the past 3+ years working across different areas of
              digital design; front-end development, email design, marketing
              site pages, UI/UX, to my current role as a freelance developer.
              <br />
              <br />
              These days my time is spent researching, designing, prototyping,
              and coding.
              <br />
              <br />
              Out of the office you’ll find me dreaming of Yoga, baking
              desserts, and petting my cat.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
