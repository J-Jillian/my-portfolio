import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import FloatBtn from "./components/FloatBtn";
import { Segment } from "semantic-ui-react";
import ChatBox from "./components/ChatBox";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/chatbot" element={<About />}></Route>
      </Routes>
      <Segment floated="right">
        <FloatBtn />
        <ChatBox />
      </Segment>
    </>
  );
}

export default App;
