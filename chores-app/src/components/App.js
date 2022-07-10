import React, { useState } from "react";
import "../styles/App.css";
import {
  BrowserRouter as Router,
  Routes as Switch,
  Route,
} from "react-router-dom";
import Nav from "./Nav";
import HomePage from "./HomePage";
import SignUpForm from "./SignUpForm";
import NewMemberForm from "./NewMemberForm";
import NewMemberSignUp from "./NewMemberSignUp";
import ParentDashboard from "./ParentDashboard";
import AddChoreForm from "./AddChoreForm";

const App = () => {
  const [availableChores, setAvailableChores] = useState([]);
  return (
    <div className="App">
      <Nav />
      <div id="app-container">
        <Router>
          <Switch>
            <Route exact path="/" element={<HomePage />} />

            <Route exact path="/signup" element={<SignUpForm />} />

            <Route exact path="/newmember" element={<NewMemberForm />} />
            <Route
              exact
              path="/parentdashboard"
              element={<ParentDashboard availableChores={availableChores} />}
            />

            <Route
              exact
              path="/addchore"
              element={<AddChoreForm setAvailableChores={setAvailableChores} />}
            />

            <Route
              exact
              path="/newmembersignup"
              element={<NewMemberSignUp />}
            />
          </Switch>
        </Router>
      </div>
    </div>
  );
};

export default App;
