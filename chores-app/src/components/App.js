import React, { useEffect, useState } from "react";
import "../styles/App.css";
import {
  BrowserRouter as Router,
  Routes as Switch,
  Route,
} from "react-router-dom";
import axios from "axios";
import { useUserAuth } from "../context/UserAuthContext";
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
  const [chores, setChores] = useState([]);
  const { familyID } = useUserAuth();

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
    }
  }, [familyID]);

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
