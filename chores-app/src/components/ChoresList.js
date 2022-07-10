import React from "react";

import PropTypes from "prop-types";

const ChoresList = ({ availableChores }) => {
  return (
    <div className="container">
      <h1>Chores</h1>
      <button type="button">
        <a href="/addchore">Add new chore +</a>
        {/* mapping function to go through the chores list and render them. */}
      </button>
      <p>{availableChores}</p>
    </div>
  );
};

// need to update proptypes when we know what the data looks like
ChoresList.propTypes = {
  availableChores: PropTypes.arrayOf(PropTypes.text).isRequired,
};
export default ChoresList;
