import axios from "axios";
import React, { useState, useEffect } from "react";

const ListOfChildren = () => {
  const familyID = localStorage.getItem("familyID");
  const [myChildren, setMyChildren] = useState([]);

  useEffect(() => {
    // this can be altered to be a link to each child's profile once the child profile component is created
    axios
      .get(
        `http://localhost:3300/family/users/?familyID=${familyID}&role=child`
      )
      .then((response) => {
        setMyChildren(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);
  return (
    <div>
      {myChildren.map((child) => (
        <div key={child.userID}>{child.name}</div>
      ))}
      <button type="button">
        <a href="/parentdashboard">Back To Dashboard</a>
      </button>
    </div>
  );
};
export default ListOfChildren;
