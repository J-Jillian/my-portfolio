import React from "react";
import "../style/floatbtn.css";
import { BsChatDots } from "react-icons/bs";

const FloatBtn = () => {
  return (
    <div className="bnt-container">
      <div className="btn-float">
        <a href="/">
          <BsChatDots className="chat-btn" />
        </a>
      </div>
    </div>
  );
};

export default FloatBtn;
