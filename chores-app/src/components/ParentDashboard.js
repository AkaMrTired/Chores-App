import React, { useEffect } from "react";
import axios from "axios";
import ChoreCard from "./ChoreCard";
import "../styles/ParentDashboard.css";

import { useUserAuth } from "../context/UserAuthContext";

// eslint-disable-next-line react/prop-types
const ParentDashboard = () => {
  const { chores, setChores } = useUserAuth();
  useEffect(() => {
    const familyID = localStorage.getItem("familyID");
    if (familyID) {
      axios
        .get(`http://localhost:3300/family/${familyID}/chores`)
        .then((response) => {
          setChores(response.data);
        })
        .catch((e) => {
          console.log(e);
        });
    } else {
      console.log("no family ID");
    }
  }, []);
  return (
    <div className="container parent-dashboard-container">
      <h1>Dashboard</h1>
      <button type="button" className="btn btn-stroke_purple btn-narrow">
        <a href="/newmember">+ Invite new member</a>
      </button>
      <button type="button">
        <a href="/listofchildren">My Children</a>
      </button>
      <div className="container parent-dashboard-chores-container">
        <h2>Chores</h2>
        <button type="button" className="btn btn-narrow btn-stroke_white">
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
            choreOwner={chore.owner}
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

export default ParentDashboard;
