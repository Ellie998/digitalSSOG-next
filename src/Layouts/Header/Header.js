import { Link } from "react-router-dom";

import logo from "./logo2.png";
import classes from "./Header.module.css";

function Header() {
  return (
    <header className={classes.header}>
      <nav>
        <Link to="/">
          <img src={logo} className="App-logo" alt="logo" />
        </Link>
        <ul>
          <li>
            <Link to="/function">Function</Link>
          </li>
          <li>
            <Link to="/app">App</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
