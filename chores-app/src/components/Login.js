/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from "react";

const Login = () => {
  const initialState = {
    fields: {
      email: "",
      password: "",
    },
  };
  const [fields, setFields] = useState(initialState.fields);

  const logIn = (event) => {
    // some axios code to go here to send the field data to the database & verify it!
    // currently the fields will reset but we can change this so we change the page to be the parent's home page once verification completes
    event.preventDefault();
    setFields(initialState.fields);
  };
  const handleFieldChange = (event) => {
    event.preventDefault();
    setFields({ ...fields, [event.target.name]: event.target.value });
  };
  return (
    <form onSubmit={logIn}>
      <label htmlFor="email">Your Email</label>
      <input
        type="email"
        name="email"
        required
        placeholder="e.g example@example.com"
        value={fields.email}
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
  );
};

export default Login;
