/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from "react";
import "../styles/AddChoreForm.css";

const AddChoreForm = () => {
  const initialState = {
    fields: {
      name: "",
      price: "",
      status: "U",
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

  const [successMessage, setSuccessmessage] = useState("");

  const handleSubmit = (event) => {
    // need to add functionality to send fields to the DB
    //    axios
    // .post("localhost:3300/chores", fields)
    // .then((response) => {
    //   console.log(response.status);
    // })
    // .catch(() => {
    //   console.log(404);
    // });
    event.preventDefault();
    setSuccessmessage(
      `Success, you have added a chore. You can make another, or return to your dashboard`
    );
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