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
      <h2>My Family</h2>
      <button type="button" className="btn btn-narrow btn-stroke_white">
        <a href="/newmember">+ Invite new member</a>
      </button>
      <button type="button" className="btn btn-narrow btn-fill_purple">
        <a href="/listofchildren">View Children</a>
      </button>
      <h2>Chores</h2>
      <div className="btn-container">
        <button type="button" className="btn btn-narrow btn-stroke_white">
          <a href="/addchore">+ Add new chore</a>
        </button>
        <button type="button" className="btn btn-fill_peach">
          <a href="/approvechores">Manage chores pending approval</a>
        </button>
      </div>
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
      <div />
    </div>
  );
};

export default ParentDashboard;
