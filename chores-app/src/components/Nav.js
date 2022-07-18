import React from "react";
import { BrowserRouter as Routes } from "react-router-dom";
import "../styles/Nav.css";
import logo from "../images/dosh-logo.png";

const Nav = () => {
  return (
    <Routes>
      <div className="nav-container">
        <div id="nav-bar" className="nav-bar">
          <div className="logo-container">
            <img src={logo} alt="app logo" className="logo" />
          </div>
          <div className="nav-links-container active">
            <ul className="nav-links">
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/signup">Sign Up</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Routes>
  );
};

export default Nav;
