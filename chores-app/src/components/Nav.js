import React from "react";
import { BrowserRouter as Routes, Navigate } from "react-router-dom";
import { auth } from "../firebase-config";

// eslint-disable-next-line react/prop-types
const Nav = ({ firebaseUser, signOut }) => {
  const logOut = async (e) => {
    e.preventDefault();
    await signOut(auth);
    return <Navigate to="/" />;
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
      {firebaseUser && (
        <button type="button" onClick={logOut}>
          Sign Out
        </button>
      )}
    </Routes>
  );
};

export default Nav;
