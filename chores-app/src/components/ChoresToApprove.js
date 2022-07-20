import React, { useEffect } from "react";
import axios from "axios";
import ChoreCard from "./ChoreCard";
import { useUserAuth } from "../context/UserAuthContext";

const ChoresToApprove = () => {
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
      <h2>These are the completed chores for you to approve</h2>
      <span>
        When you accept a chore is done, the child will get the reward in their
        account
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
        <button type="button">
          <a href="/parentdashboard">Back To Dashboard</a>
        </button>
      </div>
    </div>
  );
};
export default ChoresToApprove;
