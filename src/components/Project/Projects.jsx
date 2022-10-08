import React from "react";
import { useState } from "react";
import Project from "./Project";
import logo from "../../assets/logo.png";

const Projects = () => {
  // https://www.youtube.com/watch?v=U07wzhfu66M
  const [projects, setProjects] = useState([
    {
      id: 1,
      name: "Dumb Ways to Die",
      category: "Vanilla JS App",
      img: "",
      description:
        "This game was inspired by Dumb Ways to Die, an advertising campaign by the McCann Melbourne agency for Metro Trains, responsible for Melbourne's rail transport network. Its aim was to promte safety near train tracks.",
    },
    {
      id: 2,
      name: "Make The Difference",
      category: "React App",
      description:
        "fundraising campaign web App a complete build with MERN stack implementing mantine.dev library for the front-end UI, it was a full CRUD where you could add campaigns with your authentication user provider.",
      img: "logo",
    },
  ]);

  return (
    <>
      <div className="Projects-containe">
        <ul>
          {projects.map((project) => {
            return (
              <Project
                key={project.id}
                name={project.name}
                category={project.category}
                img={personalbar.img}
                description={project.description}
              />
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default Projects;
