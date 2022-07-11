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
import AddNewMemberForm from "./AddNewMemberForm";
import NewMemberSignUp from "./NewMemberSignUp";
import ParentDashboard from "./ParentDashboard";
import AddChoreForm from "./AddChoreForm";

const App = () => {
  const [chores, setChores] = useState([
    { _id: 123, name: "test", price: "1", status: "T" },
  ]);
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

            <Route
              exact
              path="/addchore"
              element={<AddChoreForm setChores={setChores} />}
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
