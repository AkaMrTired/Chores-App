/* eslint-disable react/prop-types */
import React, { useState, useEffect } from "react";
import axios from "axios";
import ChoreCard from "./ChoreCard";
import { useUserAuth } from "../context/UserAuthContext";
import "../styles/ChildDashboard.css";

const ChildDashboard = ({ userID, familyID }) => {
  const { chores, setChores } = useUserAuth();
  useEffect(() => {
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
  const [requestedAmount, setRequestedAmount] = useState();
  const handleRequest = () => {
    // handle request function should POST the requested amount to the DB and reset the input field so it is blank again.
  };
  const handleFieldChange = (event) => {
    event.preventDefault();
    setRequestedAmount(event.target.value);
    console.log(requestedAmount);
  };
  console.log("userID", userID, "chores", chores);
  return (
    <div className="container child-dashboard-container">
      <h1>Dashboard</h1>
      <h2>
        Balance £0
        {
          // FUTURE DEVELOPMENT: to get this from the DB.
        }
      </h2>

      <form onSubmit={handleRequest}>
        <label htmlFor="requestedamount">
          Cash in your hard work - £
          <input
            type="number"
            name="requestedamount"
            onChange={handleFieldChange}
          />
        </label>
        <button type="submit" className="btn btn-fill_purple">
          Request Amount
        </button>
      </form>

      <div className="container my-chores-container">
        <h1>My Chores</h1>
        <button type="button" className="btn btn-narrow btn-stroke_purple">
          <a href="/findchore">Find a new chore!</a>
        </button>
        {chores
          // eslint-disable-next-line eqeqeq
          .filter((chore) => chore.owner == userID && chore.status == "T")
          .map((chore) => (
            <ChoreCard
              familyID={familyID}
              userID={userID}
              key={chore.choreID}
              name={chore.name}
              price={chore.price}
              choreID={chore.choreID}
              choreOwner={chore.owner}
              component="ChildDashboard"
            />
          ))}
      </div>
    </div>
  );
};

export default ChildDashboard;
