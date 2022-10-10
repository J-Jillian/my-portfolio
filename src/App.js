import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Navbar from "./components/Navbar";
import Wip from "./pages/Wip";
import { useEffect, useState } from "react";
import Parallaxhero from "./components/Parallaxhero";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/wip" element={<Wip />}></Route>
        <Route path="/parallax" element={<Parallaxhero />}></Route>
      </Routes>
    </>
  );
}

export default App;
