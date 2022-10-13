import React from "react";
import { BsFillEyeFill } from "react-icons/bs";
import { TbCode } from "react-icons/tb";

import "../../style/project.css";

const Project = (props) => {
  return (
    <>
      <li className="list-project-item">
        <h2>{props.name}</h2>
        <h6>{props.category}</h6>
        <p className="projects-p">{props.description}</p>
        <div className="icon-container">
          <div className="icon-item">
            <a href={props.url1}>
              <BsFillEyeFill size={30} className="icon" />
            </a>
          </div>
          <div className="icon-item">
            <a href={props.url2}>
              <TbCode size={30} className="icon" />
            </a>
          </div>
        </div>
      </li>
    </>
  );
};

export default Project;
