import React from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "../style/navbar.css";
import { useState } from "react";
import { ImLinkedin } from "react-icons/im";
import { GrGithub } from "react-icons/gr";
import { FaBehanceSquare } from "react-icons/fa";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleOnclick = () => setClick(!click);

  return (
    <header className="header">
      <nav className="navbar">
        <div className="nav-container">
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <a href="/" className="nav-link">
                Work
              </a>
            </li>
            <li className="nav-item">
              <a href="/about" className="nav-link">
                About
              </a>
            </li>

            <li className="nav-item">
              <a href="/chatbot" className="nav-link">
                Contact
              </a>
            </li>
          </ul>
        </div>

        <div className="container-socail-icons">
          <ImLinkedin className="social-icons" />
          <GrGithub className="social-icons" />
          <FaBehanceSquare className="social-icons" />
        </div>

        <div className="hamburger" onClick={handleOnclick}>
          {click ? <FaTimes size={20} /> : <FaBars size={20} />}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
