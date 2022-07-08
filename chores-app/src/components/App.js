import "../styles/App.css";
import "./server.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./Nav";
import HomePage from "./HomePage";
import Login from "./Login";
import SignUpForm from "./SignUpForm";

const App = () => {
  return (
    <div className="App">
      <Nav />
      <div id="app-container">
        <Router>
          <Routes>
            <Route exact path="/" element={<HomePage />} />

            <Route exact path="/login" element={<Login />} />

            <Route exact path="signup" element={<SignUpForm />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
};

export default App;
