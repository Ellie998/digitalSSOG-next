import Link from "next/link";
import Image from "next/image";
import classes from "./Header.module.css";
import logo from "../../public/assets/images/logo.png";

function Header() {
  return (
    <header className={classes.header}>
      <nav className={classes.nav1}>
        <Link href="/">
          <Image src={logo} alt="디지털쏙 로고" />
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
