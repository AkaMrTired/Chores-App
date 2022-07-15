import React from "react";
import PropTypes from "prop-types";
import ChoreCard from "./ChoreCard";

const ChoresToApprove = ({ chores }) => {
  return (
    <div className="container">
      <h2>These are the completed chores for you to approve</h2>
      <p>
        When you accept a chore is done, the child will get the reward in their
        account
      </p>
      <p>If you click reject, it will be added back onto their todo list</p>

      {/* mapping function to go through the chores list and render the pending chores, it would be nice to add who is doing the chore in the future */}
      {chores
        .filter((chore) => chore.status === "P")
        .map((chore) => (
          <ChoreCard
            key={chore._id}
            name={chore.name}
            price={chore.price}
            component="ChoresToApprove"
          />
        ))}
      <div>
        <button type="button">
          <a href="/parentdashboard">Back To Dashboard</a>
        </button>
      </div>
    </div>
  );
};

// we will need to edit the prop validation when we know what the data looks like.

ChoresToApprove.propTypes = {
  chores: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.number,
      name: PropTypes.string,
      price: PropTypes.number,
      status: PropTypes.string,
    })
  ).isRequired,
};
export default ChoresToApprove;
