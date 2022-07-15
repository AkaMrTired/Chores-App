/* eslint-disable react/prop-types */
// not all props required all the time
import React from "react";
import PropTypes from "prop-types";

const ChoreCard = ({
  name,
  price,
  status,
  editButton,
  deleteButton,
  acceptButton,
  rejectButton,
  doneButton,
  takeButton,
}) => {
  return (
    <div>
      <div>{name}</div>
      <div>£{price}</div>
      {!!status && <div>{status}</div>}
      {!!editButton && (
        <button type="button" onClick={editButton}>
          Edit
        </button>
      )}
      {!!deleteButton && (
        <button type="button" onClick={deleteButton}>
          Delete
        </button>
      )}
      {!!acceptButton && (
        <button type="button" onClick={acceptButton}>
          Accept
        </button>
      )}
      {!!rejectButton && (
        <button type="button" onClick={rejectButton}>
          Reject
        </button>
      )}
      {!!doneButton && (
        <button type="button" onClick={doneButton}>
          Done
        </button>
      )}
      {!!takeButton && (
        <button type="button" onClick={takeButton}>
          Take
        </button>
      )}
    </div>
  );
};
ChoreCard.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
};

export default ChoreCard;
