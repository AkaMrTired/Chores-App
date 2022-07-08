import React from "react";
import { Link } from "react-router-dom";
import Login from "./Login";

const HomePage = () => {
  return (
    <div className="container">
      <h1>Home Page</h1>
      <Login />
      <p>Not yet a member?</p>
      <button type="button">
        <Link to="/signup">Sign Up!</Link>
      </button>
    </div>
  );
};
export default HomePage;
