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
          edit
        </button>
      )}
      {!!deleteButton && (
        <button type="button" onClick={deleteButton}>
          delete
        </button>
      )}
      {!!acceptButton && (
        <button type="button" onClick={acceptButton}>
          accept
        </button>
      )}
      {!!rejectButton && (
        <button type="button" onClick={rejectButton}>
          reject
        </button>
      )}
      {!!doneButton && (
        <button type="button" onClick={doneButton}>
          done
        </button>
      )}
      {!!takeButton && (
        <button type="button" onClick={takeButton}>
          take
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