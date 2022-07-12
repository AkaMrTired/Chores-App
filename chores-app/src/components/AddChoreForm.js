/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from "react";

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

  const handleSubmit = () => {
    // need to add functionality to send fields to the DB
    console.log(fields);
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
          <label htmlFor="price">Chore price</label>
          <input
            type="text"
            name="price"
            required
            placeholder="e.g. 5"
            value={fields.price}
            onChange={handleFieldChange}
          />
          {/* <label htmlFor="price">Chore price</label>
          <input
            type="radio"
            name="price"
            required
            placeholder="e.g. 5"
            value={fields.price}
            onChange={handleFieldChange}
          /> */}
          <button type="submit">Save chore</button>
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

export default AddChoreForm;
