/* eslint-disable jsx-a11y/label-has-associated-control */
import React from "react";

const Login = () => {
  return (
    <div className="container">
      <h1>Login</h1>
      <form id="login">
        <label>
          Name:
          <input type="text" name="name" />
        </label>
        <label>
          Password:
          <input type="text" password="password" />
        </label>
        <input type="submit" value="Log in" />
      </form>
    </div>
  );
};

export default Login;
