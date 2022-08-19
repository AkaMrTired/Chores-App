import React from "react";
import "../styles/App.css";
import {
  BrowserRouter as Router,
  Routes as Switch,
  Route,
} from "react-router-dom";
import { useUserAuth } from "../context/UserAuthContext";
import HomePage from "./HomePage";
import SignUpForm from "./SignUpForm";
import AddNewMemberForm from "./AddNewMemberForm";
import NewMemberSignUp from "./NewMemberSignUp";
import ParentDashboard from "./ParentDashboard";
import AddChoreForm from "./AddChoreForm";
import ChildDashboard from "./ChildDashboard";
import FindAvailableChores from "./FindAvailableChores";
import ChoresToApprove from "./ChoresToApprove";
import ListOfChildren from "./ListOfChildren";
import Nav from "./Nav";

const App = () => {
  const { chores } = useUserAuth();

  const familyID = localStorage.getItem("familyID");
  const userID = localStorage.getItem("userID");
  const userRole = localStorage.getItem("userRole");

  return (
    <div className="App">
      <div id="app-container" className="app-container">
        <Router>
          <Nav userRole={userRole} />
          <Switch>
            <Route
              exact
              path="/"
              element={<HomePage />}
              // future development - ensure user is redirected to homepage unless they are logged in (!user=>"/" https://v5.reactrouter.com/web/example/auth-workflow)
            />

            <Route exact path="/signup" element={<SignUpForm />} />

            <Route
              exact
              path="/newmember"
              element={<AddNewMemberForm familyID={familyID} />}
            />
            <Route
              exact
              path="/parentdashboard"
              element={<ParentDashboard key={chores} />}
            />
            <Route
              exact
              path="/listofchildren"
              element={<ListOfChildren familyID={familyID} />}
            />

            <Route
              exact
              path="/addchore"
              element={<AddChoreForm familyID={familyID} />}
            />

            <Route
              exact
              path="/newmembersignup"
              element={<NewMemberSignUp />}
            />

            <Route
              exact
              path="/childdashboard"
              element={
                <ChildDashboard
                  userID={userID}
                  familyID={familyID}
                  key={chores}
                />
              }
              // the key prop means the component will re-render when the chores array is updated
            />

            <Route
              exact
              path="/findchore"
              element={
                <FindAvailableChores
                  key={chores}
                  familyID={familyID}
                  userID={userID}
                />
              }
            />

            <Route
              exact
              path="/approvechores"
              element={
                <ChoresToApprove
                  familyID={familyID}
                  userID={userID}
                  key={chores}
                />
              }
            />
          </Switch>
        </Router>
      </div>
    </div>
  );
};

export default App;
