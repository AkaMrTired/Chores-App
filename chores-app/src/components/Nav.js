import React from "react";
import { BrowserRouter as Routes } from "react-router-dom";
import { useUserAuth } from "../context/UserAuthContext";

const userRole = localStorage.getItem("userRole");

// eslint-disable-next-line react/prop-types
const Nav = () => {
  const { logOut, user } = useUserAuth();
  const handleLogOut = async (e) => {
    e.preventDefault();
    await logOut();
    localStorage.removeItem("userID");
    localStorage.removeItem("userRole");
    localStorage.removeItem("familyID");
  };
  return (
    <Routes>
      <div id="nav-bar">
        <ul>
          <li>
            <a
              href={
                userRole === "parent" ? "/parentdashboard" : "/childdashboard"
              }
            >
              Home
            </a>
          </li>
          <li>
            <a href="/signup">Sign Up</a>
          </li>
        </ul>
      </div>
      {user && (
        <button type="button" onClick={handleLogOut}>
          <a href="/">Log out</a>
        </button>
      )}
    </Routes>
  );
};

export default Nav;
