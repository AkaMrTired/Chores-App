import React from "react";
import "../styles/Nav.css";
import { useNavigate } from "react-router-dom";
import logo from "../images/dosh-logo.png";
import { useUserAuth } from "../context/UserAuthContext";
import LogOut from "./LogOut";

const Nav = () => {
  const navigate = useNavigate();
  const { user } = useUserAuth();

  const userRole = localStorage.getItem("userRole");

  const navigateHome = (event) => {
    event.preventDefault();
    if (!user) {
      navigate("/");
    } else if (userRole === '"parent"') {
      navigate("/parentdashboard");
    } else {
      navigate("/childdashboard");
    }
  };

  return (
    <div className="nav-container">
      <div id="nav-bar" className="nav-bar">
        <div className="logo-container">
          <button type="button" onClick={navigateHome}>
            <img src={logo} alt="app logo" className="logo" />
          </button>
        </div>
        <div className="nav-links-container active">{user && <LogOut />}</div>
      </div>
    </div>
  );
};

export default Nav;
