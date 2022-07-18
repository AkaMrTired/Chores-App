/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from "react";
import "../styles/AddChoreForm.css";
import axios from "axios";
import { useUserAuth } from "../context/UserAuthContext";

const AddChoreForm = () => {
  const { familyID } = useUserAuth();
  const initialState = {
    fields: {
      name: "",
      price: "",
      status: "U",
      familyID,
    },
  };
  const [fields, setFields] = useState(initialState.fields);
  const handleFieldChange = (event) => {
    event.preventDefault();
    setFields({ ...fields, [event.target.name]: event.target.value });
  };
  const handleStatusSelect = (event) => {
    event.preventDefault();
    setFields({ ...fields, status: event.target.value });
  };

  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:3300/chores", fields)
      .then((response) => {
        if (response.status === "404") {
          setSuccessMessage("an error ocurred, try again");
        } else {
          setSuccessMessage(
            `Success, you have added a chore. You can make another, or return to your dashboard`
          );
        }
      })
      .catch((e) => {
        console.log(".catch=", e);
        setSuccessMessage("an error occurred", e);
      });
    setFields(initialState.fields);
  };

  return (
    <div>
      <h1>Add a chore</h1>
      <div>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Chore name</label>
          <input
            type="text"
            name="name"
            required
            placeholder="e.g. hoover the lounge"
            value={fields.name}
            onChange={handleFieldChange}
          />
          <label htmlFor="price">Chore price in pounds</label>
          <input
            type="text"
            name="price"
            required
            placeholder="e.g. 5"
            value={fields.price}
            onChange={handleFieldChange}
          />
          <p>Select if your chore will be available or unavailable to begin</p>

          <button
            type="button"
            className={fields.status === "A" ? "selected" : ""}
            name="available"
            value="A"
            onClick={handleStatusSelect}
          >
            Available
          </button>

          <button
            type="button"
            name="Unavailable"
            className={fields.status === "U" ? "selected" : ""}
            value="U"
            onClick={handleStatusSelect}
          >
            Unavailable
          </button>

          <button type="submit">Save chore</button>
        </form>
      </div>
      <div>{successMessage && successMessage}</div>
      <div>
        <button type="button">
          <a href="/parentdashboard">Back To Dashboard</a>
        </button>
      </div>
    </div>
  );
};

export default AddChoreForm;
