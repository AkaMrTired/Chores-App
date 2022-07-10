import React from "react";

const ChoresList = ({ availableChores }) => {
  return (
    <div className="container">
      <h1>Chores</h1>
      <button type="button">
        <a href="/addchore">Add new chore +</a>
        {/* mapping function to go through the chores list and render them. */}
      </button>
    </div>
  );
};
export default ChoresList;
