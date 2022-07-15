/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from "react";
import "../styles/AddChoreForm.css";
import PropTypes from "prop-types";

const EditChore = ({ setEditing, name, price, status, choreID }) => {
  const initialState = {
    fields: {
      name,
      price,
      status,
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
  const cancelEdit = (event) => {
    event.preventDefault();
    setEditing(false);
  };

  const handleSubmit = (event) => {
    console.log(fields);
    console.log(`http://localhost:3300/family/:familyID/chores/${choreID}`);
    // need to add functionality to send fields to the DB
    //    axios
    // .patch(`http://localhost:3300/family/:familyID/chores/${choreID}`, fields)
    // .then((response) => {
    //   console.log(response.status);
    // })
    // .catch(() => {
    //   console.log(404);
    // });
    event.preventDefault();
    setEditing(false);
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
            placeholder={fields.name}
            value={fields.name}
            onChange={handleFieldChange}
          />
          <label htmlFor="price">Chore price in pounds</label>
          <input
            type="text"
            name="price"
            required
            placeholder={fields.price}
            value={fields.price}
            onChange={handleFieldChange}
          />
          <p>Status of the chore:</p>

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

          <button
            type="button"
            className={fields.status === "T" ? "selected" : ""}
            name="available"
            value="T"
            onClick={handleStatusSelect}
          >
            Taken/ assigned
          </button>
          <button
            type="button"
            className={fields.status === "P" ? "selected" : ""}
            name="available"
            value="P"
            onClick={handleStatusSelect}
          >
            Pending approval
          </button>
          <div>
            <button type="submit">Save chore</button>
            <button type="button" onClick={cancelEdit}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

EditChore.propTypes = {
  setEditing: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  status: PropTypes.string.isRequired,
  choreID: PropTypes.number.isRequired,
};
export default EditChore;
