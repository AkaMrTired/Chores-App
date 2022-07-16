import React, { useEffect, useState } from "react";
import "../styles/App.css";
import {
  BrowserRouter as Router,
  Routes as Switch,
  Route,
} from "react-router-dom";
import axios from "axios";
import Nav from "./Nav";
import HomePage from "./HomePage";
import SignUpForm from "./SignUpForm";
import AddNewMemberForm from "./AddNewMemberForm";
import NewMemberSignUp from "./NewMemberSignUp";
import ParentDashboard from "./ParentDashboard";
import AddChoreForm from "./AddChoreForm";
import ChildDashboard from "./ChildDashboard";
import FindAvailableChores from "./FindAvailableChores";
import ChoresToApprove from "./ChoresToApprove";

const App = () => {
  const user = {
    userID: 123,
    familyID: 1234,
    // this will be in context!!
  };
  const [chores, setChores] = useState([
    { _id: 123, name: "test", price: 1, status: "T", choreID: 1, owner: 1 },
    { _id: 1234, name: "test", price: 1, status: "P", choreID: 2, owner: 2 },
    { _id: 12345, name: "test", price: 1, status: "U", choreID: 3, owner: 3 },
    { _id: 123456, name: "test", price: 1, status: "A", choreID: 4, owner: 4 },
  ]);
  useEffect(() => {
    axios
      .get(`http://localhost:3300/family/${user.familyID}/chores`)
      .then((response) => {
        setChores(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, [user.familyID]);
  // need to watch incase this doesn't call the updated chores from the DB when the parent edits.

  return (
    <div className="App">
      <Nav />

      <div id="app-container">
        <Router>
          <Switch>
            <Route
              exact
              path="/"
              element={<HomePage />}
              // within the login (rendered in the homepage) the user email/password will be verified and axios request made; with the result body, setUserDetails will be used to set the userID and familyID
            />

            <Route exact path="/signup" element={<SignUpForm />} />

            <Route exact path="/newmember" element={<AddNewMemberForm />} />
            <Route
              exact
              path="/parentdashboard"
              element={<ParentDashboard chores={chores} />}
            />

            <Route exact path="/addchore" element={<AddChoreForm />} />

            <Route
              exact
              path="/newmembersignup"
              element={<NewMemberSignUp />}
            />

            <Route
              exact
              path="/childdashboard"
              element={<ChildDashboard chores={chores} />}
            />

            <Route
              exact
              path="/findchore"
              element={<FindAvailableChores chores={chores} />}
            />

            <Route
              exact
              path="/approvechores"
              element={<ChoresToApprove chores={chores} />}
            />
          </Switch>
        </Router>
      </div>
    </div>
  );
};

export default App;
