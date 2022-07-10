import React from "react";
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
export default ParentDashboard;
