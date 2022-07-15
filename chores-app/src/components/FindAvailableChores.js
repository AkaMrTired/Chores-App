import React from "react";
import PropTypes from "prop-types";
import ChoreCard from "./ChoreCard";

const FindAvailableChores = ({ chores }) => {
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
            component="FindAvailableChores"
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
      price: PropTypes.number,
      status: PropTypes.string,
    })
  ).isRequired,
};
export default FindAvailableChores;
