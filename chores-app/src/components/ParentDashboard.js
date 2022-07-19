import React from "react";
import PropTypes from "prop-types";
import ChoreCard from "./ChoreCard";
import "../styles/ParentDashboard.css";

const ParentDashboard = ({ chores }) => {
  return (
    <div className="container parent-dashboard-container">
      <h1>Dashboard</h1>
      <button type="button" className="btn btn-stroke_purple btn-narrow">
        <a href="/newmember">+ Invite new member</a>
      </button>
      <div className="container parent-dashboard-chores-container">
        <h2>Chores</h2>
        <button type="button" className="btn btn-narrow btn-stroke_white">
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
            owner={chore.owner}
            component="ParentDashboard"
          />
        ))}
      </div>
      <div>
        <button type="button" className="btn btn-narrow btn-fill_purple">
          <a href="/approvechores">See pending chores</a>
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
      price: PropTypes.number,
      status: PropTypes.string,
      owner: PropTypes.number,
    })
  ).isRequired,
};
export default ParentDashboard;
