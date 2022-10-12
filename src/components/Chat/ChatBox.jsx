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

    message: "Hi! I’m Jillian Bot 🤖",

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

    message: "Hi {previousValue}, How can I help you today?",

    trigger: "issues",
  },

  {
    id: "issues",

    options: [
      {
        value: "Get in touch",

        label: "Get in touch",

        trigger: "Get in touch",
      },

      {
        value: "Send me a message",
        label: "Send me a message",
        trigger: "Send me a message",
      },
    ],
  },

  {
    id: "Get in touch",

    message: "Please sed a mail to:Judith.mediosdigitales@gmail.com",

    end: true,
  },

  {
    id: "Send me a message",

    message: "Thanks for your message, I'm going to reach you, ASAP",

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
