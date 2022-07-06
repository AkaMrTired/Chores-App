import '../styles/App.css';
import './server.js';
import { BrowserRouter as Router, Routes ,Route } from 'react-router-dom';
import HomePage from './HomePage';
import Login from './Login';
import SignUp from './SignUp';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>

          <Route path="/" element={<HomePage />} />

          <Route path="/login" element={<Login />} />

          <Route path="signup" element={<SignUp />} />

        </Routes>
      </Router>
    </div>
  );
}

export default App;
