import React, { useState } from "react";
// import FloatBtn from "./FloatBtn";
import { BsChatDots } from "react-icons/bs";
import ChatBox from "./ChatBox";
import "../../style/chatbox.css";

const ChatToggle = () => {
  const [toggle, setToggle] = useState(false);

  // const handleClick = () => {
  //   setToggle(!toggle);
  // };

  return (
    <>
      <div className="chatbot-container">
        {toggle === true ? <ChatBox /> : ""}
        <div className="cont"></div>

        <button
          onClick={() => setToggle((prevState) => !prevState)}
          className="chatbtn"
        >
          <BsChatDots className="chat-icon" />
        </button>
      </div>
    </>
  );
};

export default ChatToggle;
