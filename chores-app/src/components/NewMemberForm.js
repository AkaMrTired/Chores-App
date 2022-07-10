/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from "react";
import emailjs from "@emailjs/browser";

const NewMemberForm = () => {
  const initialState = {
    fields: {
      role: "Choose a role",
      email: "",
    },
  };
  const [fields, setFields] = useState(initialState.fields);
  const [roleError, setRoleError] = useState();
  const [message, setMessage] = useState();
  const sendEmail = async () => {
    try {
      const emailParams = {
        // TO DO: add logic to create the correct link
        link: "placeholder.com",
        email: fields.email,
      };
      // TO DO: add some axios code to go here to send the field data to the database
      await emailjs.send(
        process.env.REACT_APP_EMAIL_SERVICE_ID,
        process.env.REACT_APP_EMAIL_TEMPLATE_ID,
        emailParams,
        process.env.REACT_APP_EMAIL_PUBLIC_KEY
      );
      setMessage("Invite sent, add another or return to dashboard");
      setFields(initialState.fields);
    } catch (error) {
      setMessage(`uh oh, it looks like there was an error: ${error}`);
    }
  };

  const handleSubmit = (event) => {
    if (fields.role !== "Choose a role") {
      event.preventDefault();
      sendEmail();
    } else {
      event.preventDefault();
      setRoleError("Please select a role for the person you are inviting");
    }
  };

  const handleFieldChange = (event) => {
    event.preventDefault();
    setFields({ ...fields, [event.target.name]: event.target.value });
    setRoleError();
  };

  return (
    <div className="sign-up-container">
      <h1>Invite New Member</h1>
      <div>
        <form onSubmit={handleSubmit}>
          <label htmlFor="role">Role</label>
          <select
            required
            name="role"
            value={fields.role}
            onChange={handleFieldChange}
          >
            <option value="Choose a role">Choose a Role</option>

            <option value="parent">Parent</option>
            <option value="child">Child</option>
          </select>
          {!!roleError && <p>{roleError}</p>}
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
          {!!message && <p>{message}</p>}
        </form>
      </div>
      <div>
        <button type="button">
          <a href="/dashboard">Back To Dashboard</a>
        </button>
      </div>
    </div>
  );
};

export default NewMemberForm;
