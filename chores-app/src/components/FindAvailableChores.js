import React from "react";
import PropTypes from "prop-types";
import ChoreCard from "./ChoreCard";

const FindAvailableChores = ({ chores }) => {
  const takeButton = () => {
    // this will assign the user ID to the chore.userId & update the chore.status to T
  };

  return (
    <div className="container">
      <h3>These chores are available!</h3>
      {/* mapping function to go through the chores list and render them where. */}
      {chores
        .filter((chore) => chore.status === "A")
        .map((chore) => (
          <ChoreCard
            key={chore._id}
            name={chore.name}
            price={chore.price}
            takeButton={takeButton}
          />
        ))}
      <div>
        <button type="button">
          <a href="/childdashboard">Back To Dashboard</a>
        </button>
      </div>
    </div>
  );
};

// we will need to edit the prop validation when we know what the data looks like.

FindAvailableChores.propTypes = {
  chores: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.number,
      name: PropTypes.string,
      price: PropTypes.string,
      status: PropTypes.string,
    })
  ).isRequired,
};
export default FindAvailableChores;
