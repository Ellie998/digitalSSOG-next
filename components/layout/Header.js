import Link from "next/link";
import Image from "next/image";
import classes from "./Header.module.css";
import logo from "../../app/logo.png";
// import logo from "../../public/assets/logo.png";

function Header() {
  return (
    <header className={classes.header}>
      <nav className={classes.nav1}>
        <Link href="/">
          <Image
            src={logo}
            className="App-logo"
            alt="logo"
            width="96px"
            height="30px"
          />
        </Link>
        <ul>
          {/* <li>
            <Link href="/function">Function</Link>
          </li>
          <li>
            <Link href="/app">App</Link>
          </li> */}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
