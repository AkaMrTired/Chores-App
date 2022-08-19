/* eslint-disable react/prop-types */
import React, { useEffect } from "react";
import axios from "axios";
import ChoreCard from "./ChoreCard";
import { useUserAuth } from "../context/UserAuthContext";
import "../styles/ChoresToApprove.css";

const ChoresToApprove = ({ familyID }) => {
  const { chores, setChores } = useUserAuth();
  useEffect(() => {
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
    <div className="container approve-chores-container">
      <h2>These are the completed chores for you to approve</h2>
      <span>
        When you accept a chore is done, the child will get the reward in their
        account.
      </span>
      <span>
        If you click reject, it will be added back onto their todo list
      </span>

      {/* mapping function to go through the chores list and render the pending chores, it would be nice to add who is doing the chore in the future */}
      {chores
        .filter((chore) => chore.status === "P")
        .map((chore) => (
          <ChoreCard
            key={chore._id}
            name={chore.name}
            price={chore.price}
            choreOwner={chore.owner}
            choreID={chore.choreID}
            component="ChoresToApprove"
          />
        ))}
      <div>
        <button type="button" className="btn btn-narrow btn-stroke_purple">
          <a href="/parentdashboard">Back To Dashboard</a>
        </button>
      </div>
    </div>
  );
};
export default ChoresToApprove;
