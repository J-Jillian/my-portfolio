import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import ChatToggle from "./components/Chat/ChatToggle";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/" element={<ChatToggle />}></Route>
      </Routes>
      <ChatToggle />
    </>
  );
}

export default App;
