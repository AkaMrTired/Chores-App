/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from "react";

const Login = () => {
  const initialState = {
    fields: {
      name: "",
      password: "",
    },
  };
  const [fields, setFields] = useState(initialState.fields);

  const logIn = () => {
    // some axios code to go here to send the field data to the database & verify it!
    // currently the fields will reset but we can change this so we change the page to be the parent's home page once verification completes
    setFields(initialState.fields);
  };
  const handleFieldChange = (event) => {
    event.preventDefault();
    setFields({ ...fields, [event.target.name]: event.target.value });
  };
  return (
    <div className="container">
      <h1>Login</h1>
      <form onSubmit={logIn}>
        <label htmlFor="name">Full Name </label>
        <input
          name="name"
          required
          type="text"
          placeholder="e.g. Joan Smith"
          value={fields.name}
          onChange={handleFieldChange}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          required
          placeholder="*******"
          value={fields.password}
          onChange={handleFieldChange}
        />
        <button type="submit">Log in</button>
      </form>
    </div>
  );
};

export default Login;
