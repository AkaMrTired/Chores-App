/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from "react";
import "../styles/EditChore.css";
import PropTypes from "prop-types";
import axios from "axios";

import { useUserAuth } from "../context/UserAuthContext";

const EditChore = ({
  setEditing,
  name,
  price,
  status,
  choreID,
  owner,
  familyID,
}) => {
  const { setChores } = useUserAuth();
  const initialState = {
    fields: {
      name,
      price,
      status,
      owner,
    },
  };
  const [fields, setFields] = useState(initialState.fields);
  const handleFieldChange = (event) => {
    event.preventDefault();
    setFields({ ...fields, [event.target.name]: event.target.value });
  };
  const handleStatusSelect = (event) => {
    event.preventDefault();
    setFields({ ...fields, status: event.target.value, owner: null });
    console.log(fields);
  };
  const cancelEdit = (event) => {
    event.preventDefault();
    setEditing(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .patch(
        `http://localhost:3300/family/${familyID}/chores/${choreID}`,
        fields
      )
      .then((response) => {
        console.log("success", response);
        setEditing(false);
        return axios.get(`http://localhost:3300/family/${familyID}/chores`);
      })
      .then((response) => {
        setChores(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <div>
      <h1>Edit chore</h1>
      <div>
        <form className="edit-chore-container" onSubmit={handleSubmit}>
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
          <span>Status of the chore </span>
          <span>note: you change the status to taken or pending approval</span>

          <button
            type="button"
            className={
              fields.status === "A"
                ? "selected btn btn-fill_purple"
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
                ? "selected btn btn-fill_purple"
                : "btn btn-fill_purple"
            }
            value="U"
            onClick={handleStatusSelect}
          >
            Unavailable
          </button>

          <button
            type="button"
            className={
              fields.status === "T"
                ? "selected btn btn-fill_purple"
                : "btn btn-fill_purple"
            }
            name="Taken"
            value="T"
          >
            Taken/ assigned
          </button>
          <button
            type="button"
            className={
              fields.status === "P"
                ? "selected btn btn-fill_purple"
                : "btn btn-fill_purple"
            }
            name="Pending Approval"
            value="P"
          >
            Pending approval
          </button>
          <div>
            <button className="btn btn-narrow btn-stroke_white" type="submit">
              Save chore
            </button>
            <button
              className="btn btn-narrow btn-stroke_white"
              type="button"
              onClick={cancelEdit}
            >
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
  owner: PropTypes.number.isRequired,
};
export default EditChore;
