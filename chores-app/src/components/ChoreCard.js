/* eslint-disable react/prop-types */
// not all props required all the time
import React, { useState } from "react";
import axios from "axios";
import PropTypes from "prop-types";
import EditChore from "./EditChore";

import { useUserAuth } from "../context/UserAuthContext";

const ChoreCard = ({ name, price, status, component, choreID, owner }) => {
  const [editing, setEditing] = useState(false);
  const { setChores } = useUserAuth();
  const familyID = localStorage.getItem("familyID");
  const userID = localStorage.getItem("userID");

  const editButton = (event) => {
    event.preventDefault();
    setEditing(true);
  };

  const deleteButton = (event) => {
    event.preventDefault();
    axios
      .delete(`http://localhost:3300/family/${familyID}/chores/${choreID}`)
      .then((response) => {
        console.log("success", response);
        return axios.get(`http://localhost:3300/family/${familyID}/chores`);
      })
      .then((response) => {
        setChores(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

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
  const takeButton = (event) => {
    // this will assign the user ID to the chore.owner & update the chore.status to T

    event.preventDefault();
    axios
      .patch(`http://localhost:3300/family/${familyID}/chores/${choreID}`, {
        status: "T",
        owner: userID,
      })
      .then((response) => {
        console.log("success", response);
        return axios.get(`http://localhost:3300/family/${familyID}/chores`);
      })
      .then((response) => {
        setChores(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
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
    <div>
      <div>{name}</div>
      <div>£{price}</div>
      {!!status && <div>{status}</div>}
      {component === "ParentDashboard" && (
        <button type="button" onClick={editButton}>
          Edit
        </button>
      )}
      {component === "ParentDashboard" && (
        <button type="button" onClick={deleteButton}>
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
  );
};

ChoreCard.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

export default ChoreCard;
