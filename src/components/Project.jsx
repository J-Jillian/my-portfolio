import React from "react";
import { BsFillEyeFill } from "react-icons/bs";
import { TbCode } from "react-icons/tb";
import { useState } from "react";
import logo from "../assets/logo.png";

const Project = () => {
  const [projects, setProjects] = useState([
    {
      id: 1,
      name: "Dump Ways to Die",
      category: "Vanilla JS App",
      img: { logo },
    },
    {
      id: 1,
      name: "Make The Difference",
      category: "React App",
      img: { logo },
    },
  ]);

  return (
    <>
      <div className="Projects-containe">
        <ul>
          {projects.map((project) => {
            return (
              <li>
                <h2>Project name</h2>
                <h6>Category</h6>
                <p>Description</p>
                <img src="" alt="" />
                <BsFillEyeFill />
                <TbCode />
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default Project;
