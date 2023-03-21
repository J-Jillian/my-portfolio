import React from "react";
import { useState } from "react";
import Project from "./Project";
import "../../style/project.css";

const Projects = () => {
  // https://www.youtube.com/watch?v=U07wzhfu66M
  const [projects, setProjects] = useState([
    {
      id: 1,
      name: "Dumb Ways to Die",
      category: "Vanilla JS App",
      img: "url",
      description:
        "This game was inspired by Dumb Ways to Die, an advertising campaign by the McCann Melbourne agency for Metro Trains, responsible for Melbourne's rail transport network. It aimed to promote safety near train tracks.",
      url1: "https://j-jillian.github.io/Memory-game/",
      url2: "https://github.com/J-Jillian/Memory-game",
    },
    {
      id: 2,
      name: "Make The Difference",
      category: "React App",
      description:
        "Fundraising campaign web App a complete build with MERN stack implementing mantine.dev library for the front-end UI, it was a full CRUD where you could add campaigns with your authentication user provider.",
      img: "logo",
      url1: "https://make-the-difference.netlify.app/",
      url2: "https://github.com/J-Jillian/Campaign-App-Server",
    },
    {
      id: 3,
      name: "Real Estate App",
      category: "React App / Bootstrap ",
      img: "",
      description:
        "This is a Real Estate Site Project fully responsive, build with MERN Stack and Bootstarp. You can search houses using given search filter. You can view full details of house by clicking it.",
      url1: "https://make-the-difference.netlify.app/signup",
      url2: "https://github.com/J-Jillian/Campaign-App-Server",
    },
    {
      id: 4,
      name: "Sustainable Travel",
      category: "React App / Tailwind ",
      description:
        "Travel agency web App a complete build with MERN stack implementing tailwind library for Front-end UI, that offers you an opportunity to book unique tour guides for sustainable travel around the world",
      img: "logo",
      url1: "https://make-the-difference.netlify.app/signup",
      url2: "https://github.com/J-Jillian/travel-agency-appp",
    },
    {
      id: 5,
      name: "Picnic Company",
      category: "React App",
      description:
        "A peoject I worked on as a freelance, for Picnic in the Hamptons services, a web App a build with MERN stack and Ant Design library for the UI.",
      img: "logo",
      url1: "https://make-the-difference.netlify.app/signup",
      url2: "https://github.com/J-Jillian/picnic-company-app",
    },
    {
      id: 6,
      name: "My Calendar",
      category: "Vanilla JS App",
      description:
        "Calendar build without using an additional packages. Date and time picker written in pure JavaScript and css.",
      img: "logo",
      url1: "https://j-jillian.github.io/Calendar/",
      url2: "https://github.com/J-Jillian/Calendar",
    },
  ]);

  return (
    <>
      <div className="Projects-container">
        <ul>
          {projects.map((project) => {
            return (
              <Project
                key={project.id}
                name={project.name}
                category={project.category}
                description={project.description}
                url1={project.url1}
                url2={project.url2}
              />
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default Projects;
