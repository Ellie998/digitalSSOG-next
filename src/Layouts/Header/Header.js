import { Link } from "react-router-dom";

import classes from "./Header.module.css";
import logo from "./logo3.png";

function Header() {
  return (
    <header className={classes.header}>
      <nav className={classes.nav1}>
        <Link to="/">
          <img
            src={logo}
            className="App-logo"
            alt="logo"
            width="6rem"
            height="fit-content"
          />
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
