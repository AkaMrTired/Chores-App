import React, { useState } from "react";
import PropTypes from "prop-types";
import ChoreCard from "./ChoreCard";

const ChildDashboard = ({ chores }) => {
  // need to add the functionality to these functions
  const [requestedAmount, setRequestedAmount] = useState();
  const handleRequest = () => {
    // handle request function should the requested amount to the DB and reset the input field so it is blank again.
  };
  const handleFieldChange = (event) => {
    event.preventDefault();
    setRequestedAmount(event.target.value);
    console.log(requestedAmount);
  };

  const doneButton = () => {
    // done button should change the status and owner of the chore in the DB
  };
  return (
    <div className="container">
      <h1>Dashboard</h1>
      <form onSubmit={handleRequest}>
        <label htmlFor="requestedamount">
          £
          <input
            type="number"
            name="requestedamount"
            onChange={handleFieldChange}
          />
        </label>
        <button
          type="submit"
          // onSubmit = POST request to update the DB
        >
          Request Amount
        </button>
      </form>

      <div className="container">
        <h1>My Chores</h1>
        <button type="button">
          <a href="/findchore">Find a new chore!</a>
        </button>
        {/* mapping function to go through the chores list and render them where the user is assigned to the chore e.g. chore.owner===userId */}
        {chores.map((chore) => (
          <ChoreCard
            key={chore._id}
            name={chore.name}
            price={chore.price}
            doneButton={doneButton}
          />
        ))}
      </div>
    </div>
  );
};

// we will need to edit the prop validation when we know what the data looks like.

ChildDashboard.propTypes = {
  chores: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.number,
      name: PropTypes.string,
      price: PropTypes.string,
      status: PropTypes.string,
    })
  ).isRequired,
};
export default ChildDashboard;
