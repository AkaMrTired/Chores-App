import React from "react";
import "../styles/App.css";
import {
  BrowserRouter as Router,
  Routes as Switch,
  Route,
} from "react-router-dom";
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
  const chores = [
    // obviously this will need to change to be info from the DB
    { _id: 123, name: "takenChore", price: "1", status: "T" },
    { _id: 1234, name: "availableChore", price: "1", status: "A" },
    { _id: 12345, name: "unavailableChore", price: "1", status: "U" },
    { _id: 123456, name: "pendingApprovalChore", price: "1", status: "P" },
  ];

  return (
    <div className="App">
      <Nav />

      <div id="app-container">
        <Router>
          <Switch>
            <Route exact path="/" element={<HomePage />} />

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
