/* eslint-disable react/prop-types */
import React, { useEffect } from "react";
import axios from "axios";
import ChoreCard from "./ChoreCard";
import { useUserAuth } from "../context/UserAuthContext";
import "../styles/FindAvailableChores.css";

const FindAvailableChores = ({ familyID, userID }) => {
  const { chores, setChores } = useUserAuth();
  useEffect(() => {
    if (familyID) {
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
    <div className="container find-chore-container">
      <h1>These chores are available!</h1>
      {chores
        .filter((chore) => chore.status === "A")
        .map((chore) => (
          <ChoreCard
            key={chore._id}
            name={chore.name}
            price={chore.price}
            choreOwner={chore.owner}
            choreID={chore.choreID}
            userID={userID}
            component="FindAvailableChores"
          />
        ))}
      <div>
        <button type="button" className="btn btn-narrow btn-stroke_white">
          <a href="/childdashboard">Back To Dashboard</a>
        </button>
      </div>
    </div>
  );
};

export default FindAvailableChores;
