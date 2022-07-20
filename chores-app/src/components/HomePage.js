import React from "react";
import Login from "./Login";

// eslint-disable-next-line react/prop-types
const HomePage = ({ signInWithEmailAndPassword }) => {
  const familyID = localStorage.getItem("familyID");
  const userID = localStorage.getItem("userID");
  const userRole = localStorage.getItem("userRole");
  console.log(
    "local storage to confirm log out cleared data:",
    { familyID },
    { userID },
    { userRole }
  );

  return (
    <div className="container">
      <h1>Home Page</h1>
      <h3>Welcome to Bish Bash Dosh, please log in or sign up below!</h3>
      <Login signInWithEmailAndPassword={signInWithEmailAndPassword} />
      <p>Not yet a member?</p>
      <button type="button">
        <a href="/signup">Sign Up!</a>
      </button>
    </div>
  );
};
export default HomePage;
