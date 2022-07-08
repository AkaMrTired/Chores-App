import "../styles/App.css";
import {
  BrowserRouter as Router,
  Routes as Switch,
  Route,
} from "react-router-dom";
import React from "react";
import Nav from "./Nav";
import HomePage from "./HomePage";
import SignUpForm from "./SignUpForm";

const App = () => {
  return (
    <div className="App">
      <Nav />
      <div id="app-container">
        <Router>
          <Switch>
            <Route exact path="/" element={<HomePage />} />

            <Route exact path="/signup" element={<SignUpForm />} />
          </Switch>
        </Router>
      </div>
    </div>
  );
};

export default App;
