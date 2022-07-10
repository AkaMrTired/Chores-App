import React from "react";
import Login from "./Login";

const HomePage = () => {
  return (
    <div className="container">
      <h1>Home Page</h1>
      <h3>Welcome to Bish Bash Dosh, please log in or sign up below!</h3>
      <Login />
      <p>Not yet a member?</p>
      <button type="button">
        <a href="/signup">Sign Up!</a>
      </button>
    </div>
  );
};
export default HomePage;
