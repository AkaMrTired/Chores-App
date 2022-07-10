import React from "react";
import PropTypes from "prop-types";
import ChoresList from "./ChoresList";

const ParentDashboard = ({ availableChores }) => {
  return (
    <div className="container">
      <h1>Dashboard</h1>
      <button type="button">
        <a href="/newmember">+ Invite new member</a>
      </button>
      <ChoresList availableChores={availableChores} />
    </div>
  );
};

// we will need to edit the prop validation when we know what the data looks like.

ParentDashboard.propTypes = {
  availableChores: PropTypes.arrayOf(PropTypes.text).isRequired,
};
export default ParentDashboard;
