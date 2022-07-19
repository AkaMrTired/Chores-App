/* eslint-disable react/prop-types */
// not all props required all the time
import React, { useState } from "react";
import PropTypes from "prop-types";
import EditChore from "./EditChore";
import "../styles/ChoreCard.css";
// need to add the functionality to these functions; edit button should open an edit view with populated fields based on the chore it was clicked in
// the delete button will remove the chore from the database, and a nice to have would be a "confirm delete".
const ChoreCard = ({ name, price, status, component, choreID, owner }) => {
  const [editing, setEditing] = useState(false);
  const editButton = (event) => {
    event.preventDefault();
    setEditing(true);
  };

  const deleteButton = () => {};

  const acceptButton = () => {
    // Accept:
    // -> chore status goes to Unavailable
    // -> chore.owner resets to null
    // -> money goes into child's balance
  };
  const rejectButton = () => {
    // Reject:
    // -> chore status changes to Taken (which stops it rendering here)
    // -> chore.owner stays as the childID
  };
  const doneButton = () => {
    // done button should change the status and owner of the chore in the DB
  };
  const takeButton = () => {
    // this will assign the user ID to the chore.owner & update the chore.status to T
  };

  if (editing) {
    return (
      <EditChore
        name={name}
        price={price}
        status={status}
        setEditing={setEditing}
        choreID={choreID}
        owner={owner}
      />
    );
  }
  return (
    <div className="chore-card">
      <div className="chore-name">{name}</div>
      <div className="chore-buttons-wrapper">
        <div className="chore-price">£{price}</div>
        {!!status && <div>{status}</div>}
        {component === "ParentDashboard" && (
          <button
            type="button"
            onClick={editButton}
            className="chore-btn chore-btn_pink"
          >
            Edit
          </button>
        )}
        {component === "ParentDashboard" && (
          <button
            type="button"
            onClick={deleteButton}
            className="chore-btn chore-btn_peach"
          >
            Delete
          </button>
        )}
        {component === "ChoresToApprove" && (
          <button type="button" onClick={acceptButton}>
            Accept
          </button>
        )}
        {component === "ChoresToApprove" && (
          <button type="button" onClick={rejectButton}>
            Reject
          </button>
        )}
        {component === "ChildDashboard" && (
          <button type="button" onClick={doneButton}>
            Done
          </button>
        )}
        {component === "FindAvailableChores" && (
          <button type="button" onClick={takeButton}>
            Take
          </button>
        )}
      </div>
    </div>
  );
};

ChoreCard.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

export default ChoreCard;
