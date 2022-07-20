import React, { useState, useEffect } from "react";
import axios from "axios";
import ChoreCard from "./ChoreCard";
import { useUserAuth } from "../context/UserAuthContext";

const ChildDashboard = () => {
  const { chores, setChores } = useUserAuth();
  const userID = localStorage.getItem("userID");
  useEffect(() => {
    const familyID = localStorage.getItem("familyID");
    if (familyID) {
      axios
        .get(`http://localhost:3300/family/${familyID}/chores`)
        .then((response) => {
          setChores(response.data);
          console.log("chore in child dash", chores);
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

  return (
    <div className="container">
      <h1>Dashboard</h1>
      <h2>
        Balance £
        {
          // user.balance
        }
      </h2>

      <form onSubmit={handleRequest}>
        <label htmlFor="requestedamount">
          £
          <input
            type="number"
            name="requestedamount"
            onChange={handleFieldChange}
          />
        </label>
        <button type="submit">Request Amount</button>
      </form>

      <div className="container">
        <h1>My Chores</h1>
        <button type="button">
          <a href="/findchore">Find a new chore!</a>
        </button>
        {chores
          .filter((chore) => chore.owner === userID)
          .map((chore) => (
            <ChoreCard
              key={chore.choreID}
              name={chore.name}
              price={chore.price}
              choreID={chore.choreID}
              component="ChildDashboard"
            />
          ))}
      </div>
    </div>
  );
};

export default ChildDashboard;
