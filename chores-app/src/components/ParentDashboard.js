import React from "react";
import PropTypes from "prop-types";
import ChoreCard from "./ChoreCard";

const ParentDashboard = ({ chores }) => {
  return (
    <div className="container">
      <h1>Dashboard</h1>
      <button type="button">
        <a href="/newmember">+ Invite new member</a>
      </button>
      <div className="container">
        <h1>Chores</h1>
        <button type="button">
          <a href="/addchore">Add new chore +</a>
        </button>
        {/* mapping function to go through the chores list and render them. */}
        {chores.map((chore) => (
          <ChoreCard
            key={chore._id}
            name={chore.name}
            price={chore.price}
            status={chore.status}
            choreID={chore.choreID}
            component="ParentDashboard"
          />
        ))}
      </div>
      <div>
        <button type="button">
          <a href="/approvechores">Manage chores pending approval</a>
        </button>
      </div>
    </div>
  );
};

// we will need to edit the prop validation when we know what the data looks like.

ParentDashboard.propTypes = {
  chores: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.number,
      name: PropTypes.string,
      price: PropTypes.string,
      status: PropTypes.string,
    })
  ).isRequired,
};
export default ParentDashboard;
