import { Link, BrowserRouter as Routes } from "react-router-dom";

const Nav = () => {
  return (
    <Routes>
      <div id="nav-bar">
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/signup">Sign Up</a>
          </li>
        </ul>
      </div>
    </Routes>
  );
};

export default Nav;
