/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from "react";

const NewMemberForm = () => {
  const initialState = {
    fields: {
      role: "",
      email: "",
    },
  };
  const [fields, setFields] = useState(initialState.fields);

  const inviteMember = () => {
    // some axios code to go here to send the field data to the database
    // also nodemailer logic to send email
    // currently the fields will reset but we can change this so we  change the page to be the parent's home page once this is
    setFields(initialState.fields);
  };
  const handleFieldChange = (event) => {
    event.preventDefault();
    setFields({ ...fields, [event.target.name]: event.target.value });
  };

  return (
    <div className="sign-up-container">
      <h1>Invite New Member</h1>
      <div>
        <form onSubmit={inviteMember}>
          <label htmlFor="role">Role</label>
          <select name="role" onChange={handleFieldChange}>
            <option value="">Choose a Role</option>
            <option value="parent">Parent</option>
            <option value="child">Child</option>
          </select>

          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            required
            placeholder="e.g example@example.com"
            value={fields.email}
            onChange={handleFieldChange}
          />

          <button type="submit">Send Invite!</button>
        </form>
        <button type="button">
          <a href="/dashboard">Back To Dashboard</a>
        </button>
      </div>
    </div>
  );
};

export default NewMemberForm;
