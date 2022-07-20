/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from "react";
import "../styles/AddChoreForm.css";
import axios from "axios";

const AddChoreForm = () => {
  const familyID = localStorage.getItem("familyID");
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
        <form onSubmit={handleSubmit} className="add-chore-form">
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
          <div className="add-chore-btn-wrapper">
            <button
              type="button"
              className={
                fields.status === "A"
                  ? "selected btn btn-stroke_white"
                  : "btn btn-stroke_white"
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
                  ? "selected btn btn-stroke_white"
                  : "btn btn-stroke_white"
              }
              value="U"
              onClick={handleStatusSelect}
            >
              Unavailable
            </button>
          </div>

          <button type="submit" className="btn btn-fill_purple">
            Save chore
          </button>
        </form>
      </div>
      <div>{successMessage && successMessage}</div>
      <div className="back-btn-wrapper">
        <button type="button" className="btn btn-stroke_purple">
          <a href="/parentdashboard">Back To Dashboard</a>
        </button>
      </div>
    </div>
  );
};

export default AddChoreForm;
