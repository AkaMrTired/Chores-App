/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from "react";
// import emailjs from "@emailjs/browser";

const NewMemberForm = () => {
  const initialState = {
    fields: {
      role: "Choose a role",
      email: "",
    },
  };
  const [fields, setFields] = useState(initialState.fields);
  const [roleError, setRoleError] = useState();
  const [emailParams, setEmailParams] = useState({
    link: "",
    email: "lydia.wallace@outlook.com",
  });
  const [successMessage, setSuccessMessage] = useState();

  const handleSubmit = async (event) => {
    // TO DO: some logic here to insert the correct URL as the link here
    await setEmailParams({
      link: "placeholder.com",
      email: fields.email,
    });

    if (fields.role !== "Choose a role") {
      event.preventDefault();
      console.log(`on submit==> ${emailParams.email}`);
      setSuccessMessage("Invite sent, add another or return to dashboard");
      // TO DO: add some axios code to go here to send the field data to the database
      // emailjs
      //   .send(
      //     process.env.REACT_APP_EMAIL_SERVICE_ID,
      //     process.env.REACT_APP_EMAIL_TEMPLATE_ID,
      //     emailParams,
      //     process.env.REACT_APP_EMAIL_PUBLIC_KEY
      //   )
      //   .then(
      //     setSuccessMessage("Invite sent, add another or return to dashboard")
      //   )
      //   .then(setFields(initialState.fields))
      //   .catch((error) => {
      //     setSuccessMessage(error);
      //   });
    } else {
      event.preventDefault();
      setRoleError("Please select a role for the person you are inviting");
    }
  };

  const handleFieldChange = (event) => {
    event.preventDefault();
    console.log(`on field change ==> ${emailParams.email}`);
    setFields({ ...fields, [event.target.name]: event.target.value });
    setRoleError();
  };

  return (
    <div className="sign-up-container">
      <h1>Invite New Member</h1>
      <div>
        <form onSubmit={handleSubmit}>
          <label htmlFor="role">Role</label>
          <select name="role" value={fields.role} onChange={handleFieldChange}>
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
          {!!successMessage && <p>{successMessage}</p>}
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
