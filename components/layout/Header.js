import Link from "next/link";

import classes from "./Header.module.css";
import Image from "next/image";
import img from "../../public/assets/images/logo.png";

function Header() {
  return (
    <header className={classes.header}>
      <nav className={classes.nav1}>
        <Link href="/">
          <Image src={img} alt="logo" />
          {/* <img
            src="/assets/images/logo.png"
            className="App-logo"
            alt="logo"
            width={96}
            height={30}
          /> */}
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
