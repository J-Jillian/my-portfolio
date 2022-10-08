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
        <img src={props.img} alt="Project-card" />
        <p>{props.description}</p>
        <div className="icon-container">
          <BsFillEyeFill className="icon" />
          <TbCode className="icon" />
        </div>
      </li>
    </>
  );
};

export default Project;
