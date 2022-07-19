/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from "react";
// import emailjs from "@emailjs/browser";
import axios from "axios";

const AddNewMemberForm = () => {
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
  const familyID = localStorage.getItem("familyID");
  console.log("familyID in add new member", familyID);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (fields.role === "Choose a role") {
      setRoleError("Please select a role for the person you are inviting");
    } else {
      try {
        axios
          .post(`http://localhost:3300/family/${familyID}/users`, fields)
          .then(() => {
            console.log(
              ` before get http://localhost:3300/family/${familyID}/users`
            );
            return axios.get(`http://localhost:3300/family/${familyID}/users`, {
              email: fields.email,
              // I don't know why this returns an empty array????
            });
          })
          .then((response) => {
            console.log(
              "this is response data after the get request",
              response
            );
          });
      } catch (error) {
        setMessage(`uh oh, it looks like there was an error: ${error}`);
      }

      // const [{ userID }] = response.data;
      // const emailParams = {
      //   // DECIDED TO SIMPLIFY -> user will click on the link and we will match to correct account to patch based on email
      //   link: `http://localhost:3000/newmembersignup?userID=${userID}`,
      //   email: fields.email,
      // };
      // console.log(emailParams);
      // return emailjs.send(
      //   process.env.REACT_APP_EMAIL_SERVICE_ID,
      //   process.env.REACT_APP_EMAIL_TEMPLATE_ID,
      //   emailParams,
      //   process.env.REACT_APP_EMAIL_PUBLIC_KEY
      // );
      // setMessage("Invite sent, add another or return to dashboard");
      // setFields(initialState.fields);
      //     })
      //     .catch((e) => {
      //       console.log(".catch, line 48", e);
      //     });
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
          <label htmlFor="name">Name </label>
          <input
            name="name"
            required
            type="text"
            placeholder="e.g Danny"
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

          <button type="submit">Send Invite!</button>
          {!!message && <p>{message}</p>}
        </form>
      </div>
      <div>
        <button type="button">
          <a href="/parentdashboard">Back To Dashboard</a>
        </button>
      </div>
    </div>
  );
};

export default AddNewMemberForm;
