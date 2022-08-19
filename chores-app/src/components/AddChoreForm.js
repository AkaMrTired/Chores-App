/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from "react";
import "../styles/AddChoreForm.css";
import axios from "axios";

const AddChoreForm = ({ familyID }) => {
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
      <form onSubmit={handleSubmit} className="add-chore-container">
        <h1>Add a chore</h1>
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
          className={
            fields.status === "A"
              ? "selected btn btn-fill_pink"
              : "btn btn-fill_purple"
          }
          name="available"
          value="A"
          onClick={handleStatusSelect}
        >
          Available
        </button>
        <button
          type="button"
          name="Unavailable"
          className={
            fields.status === "U"
              ? "selected btn btn-fill_pink"
              : "btn btn-fill_purple"
          }
          value="U"
          onClick={handleStatusSelect}
        >
          Unavailable
        </button>
        <div className="add-chore-btn-wrapper">
          <button type="button" className="btn chore-btn btn-stroke_purple">
            <a href="/parentdashboard">Back To Dashboard</a>
          </button>
          <button className="btn chore-btn chore-btn_peach" type="submit">
            Save chore
          </button>
        </div>
      </form>
      <div>{successMessage && successMessage}</div>
    </div>
  );
};

export default AddChoreForm;
