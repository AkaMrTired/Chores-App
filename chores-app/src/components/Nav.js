import React from "react";
import "../styles/Nav.css";
import logo from "../images/dosh-logo.png";
import { useUserAuth } from "../context/UserAuthContext";
import LogOut from "./LogOut";

const Nav = () => {
  const { user } = useUserAuth();
  return (
    <div className="nav-container">
      <div id="nav-bar" className="nav-bar">
        <div className="logo-container">
          <img src={logo} alt="app logo" className="logo" />
        </div>
        <div className="nav-links-container active">{user && <LogOut />}</div>
      </div>
    </div>
  );
};

export default Nav;
