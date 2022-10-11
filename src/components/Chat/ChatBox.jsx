import React from "react";
import { ThemeProvider } from "styled-components";
import ChatBot from "react-simple-chatbot";
import "../../style/chatbox.css";

// all available props
const theme = {
  background: "#f5f8fb",
  fontFamily: "Helvetica Neue",
  headerBgColor: "#C8013F",
  headerFontColor: "#fff",
  headerFontSize: "15px",
  botBubbleColor: "#C8013F",
  botFontColor: "#fff",
  userBubbleColor: "#fff",
  userFontColor: "#4a4a4a",
};

const steps = [
  {
    id: "Greet",

    message: "Hello, Welcome to our shop",

    trigger: "Done",
  },

  {
    id: "Done",

    message: "Please enter your name!",

    trigger: "waiting1",
  },

  {
    id: "waiting1",

    user: true,

    trigger: "Name",
  },

  {
    id: "Name",

    message: "Hi {previousValue}, Please select your issue",

    trigger: "issues",
  },

  {
    id: "issues",

    options: [
      {
        value: "React",

        label: "React",

        trigger: "React",
      },

      { value: "Angular", label: "Angular", trigger: "Angular" },
    ],
  },

  {
    id: "React",

    message:
      "Thanks for letting your React issue, Our team will resolve your issue ASAP",

    end: true,
  },

  {
    id: "Angular",

    message:
      "Thanks for letting your Angular issue, Our team will resolve your issue ASAP",

    end: true,
  },
];

const ChatBox = () => (
  <div className="chatbot-container">
    <ThemeProvider theme={theme}>
      <ChatBot steps={steps} />;
    </ThemeProvider>
  </div>
);

export default ChatBox;
