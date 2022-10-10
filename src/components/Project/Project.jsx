import React from "react";
import { BsFillEyeFill } from "react-icons/bs";
import { TbCode } from "react-icons/tb";

import "../../style/project.css";

const Project = (props) => {
  return (
    <>
      <li>
        <h2>{props.name}</h2>
        <h6>{props.category}</h6>
        <p>{props.description}</p>
        <div className="icon-container">
          <a>
            View project
            <BsFillEyeFill className="icon" />
          </a>
          <a>
            View code
            <TbCode className="icon" />
          </a>
        </div>
      </li>
    </>
  );
};

export default Project;
