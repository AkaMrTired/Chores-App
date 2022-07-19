import React from "react";
import { BrowserRouter as Routes } from "react-router-dom";
import { useUserAuth } from "../context/UserAuthContext";

// eslint-disable-next-line react/prop-types
const Nav = () => {
  const { logOut, user } = useUserAuth();
  const handleLogOut = async (e) => {
    e.preventDefault();
    await logOut();
    // setFamilyID();
  };
  return (
    <Routes>
      <div id="nav-bar">
        <ul>
          <li>
            <a href="/">Home</a>
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
