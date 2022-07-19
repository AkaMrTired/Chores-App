import React, { useEffect } from "react";
// import PropTypes from "prop-types";
import axios from "axios";
import ChoreCard from "./ChoreCard";

import { useUserAuth } from "../context/UserAuthContext";

// eslint-disable-next-line react/prop-types
const ParentDashboard = () => {
  const { chores, setChores } = useUserAuth();
  useEffect(() => {
    const familyID = localStorage.getItem("familyID");
    if (familyID) {
      console.log({ familyID });
      axios
        .get(`http://localhost:3300/family/${familyID}/chores`)
        .then((response) => {
          setChores(response.data);
          console.log(chores);
        })
        .catch((e) => {
          console.log(e);
        });
    } else {
      console.log("no family ID");
    }
  }, []);
  return (
    <div className="container">
      <h1>Dashboard</h1>
      <button type="button">
        <a href="/newmember">+ Invite new member</a>
      </button>
      <button type="button">
        <a href="/listofchildren">My Children</a>
      </button>
      <div className="container">
        <h1>Chores</h1>
        <button type="button">
          <a href="/addchore">Add new chore +</a>
        </button>
        {/* mapping function to go through the chores list and render them. */}
        {chores.map((chore) => (
          <ChoreCard
            key={chore.choreID}
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
        <button type="button">
          <a href="/approvechores">Manage chores pending approval</a>
        </button>
      </div>
    </div>
  );
};

// we will need to edit the prop validation when we know what the data looks like.

// ParentDashboard.propTypes = {
//   chores: PropTypes.arrayOf(
//     PropTypes.shape({
//       _id: PropTypes.number,
//       name: PropTypes.string,
//       price: PropTypes.number,
//       status: PropTypes.string,
//       owner: PropTypes.number,
//     })
//   ).isRequired,
// };
export default ParentDashboard;
