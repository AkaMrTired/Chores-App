/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import axios from "axios";

const AddNewMemberForm = () => {
  const familyID = localStorage.getItem("familyID");

  const initialState = {
    fields: {
      email: "",
      name: "",
      role: "Choose a role",
    },
  };
  const [fields, setFields] = useState(initialState.fields);
  const [roleError, setRoleError] = useState();
  const [message, setMessage] = useState();
  const sendEmail = () => {
    const initialLink = `http://localhost:3000/newmembersignup?name=${fields.name}&email=${fields.email}`;
    const noSpacesLink = initialLink.replace(/\s+/g, "");
    const emailParams = {
      link: noSpacesLink,
      email: fields.email,
    };
    axios
      .post(`http://localhost:3300/family/${familyID}/users`, {
        name: fields.name,
        role: fields.role,
        email: fields.email,
      })
      .then(() => {
        return emailjs.send(
          process.env.REACT_APP_EMAIL_SERVICE_ID,
          process.env.REACT_APP_EMAIL_TEMPLATE_ID,
          emailParams,
          process.env.REACT_APP_EMAIL_PUBLIC_KEY
        );
      })
      .then(() => {
        setMessage("Invite sent, add another or return to dashboard");
        setFields(initialState.fields);
      })
      .catch(() => {
        setMessage(`uh oh, it looks like there was an error`);
      });
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
    setMessage();
    event.preventDefault();
    setFields({ ...fields, [event.target.name]: event.target.value });
    setRoleError();
  };

  return (
    <div className="sign-up-container">
      <h1>Invite New Member</h1>
      <div>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name </label>
          <input
            name="name"
            required
            type="text"
            placeholder="e.g Timmy"
            value={fields.name}
            onChange={handleFieldChange}
          />
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
          <button type="submit" className="btn btn-fill_purple">
            Send Invite!
          </button>

          {!!message && <p>{message}</p>}
        </form>
      </div>
      <div className="back-btn-wrapper">
        <button type="button" className="btn btn-stroke_purple">
          <a href="/parentdashboard">Back To Dashboard</a>
        </button>
      </div>
    </div>
  );
};

export default AddNewMemberForm;
