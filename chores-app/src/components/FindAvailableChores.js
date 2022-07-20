import React, { useEffect } from "react";
import axios from "axios";
import ChoreCard from "./ChoreCard";
import { useUserAuth } from "../context/UserAuthContext";

const FindAvailableChores = () => {
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
      <h3>These chores are available!</h3>
      {/* mapping function to go through the chores list and render them where. */}
      {chores
        .filter((chore) => chore.status === "A")
        .map((chore) => (
          <ChoreCard
            key={chore._id}
            name={chore.name}
            price={chore.price}
            choreID={chore.choreID}
            component="FindAvailableChores"
          />
        ))}
      <div>
        <button type="button">
          <a href="/childdashboard">Back To Dashboard</a>
        </button>
      </div>
    </div>
  );
};

export default FindAvailableChores;
