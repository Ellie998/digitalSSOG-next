import { Link, useLoaderData, useParams } from "react-router-dom";

import logo from "./logo3.png";
import classes from "./Header.module.css";
import { useState } from "react";

function Header() {
  const data = useLoaderData();
  const params = useParams();
  const [isHovered, setIsHovered] = useState(false);
  const [scrolled, setScrolled] = useState("0%");

  function hoverHandler(event) {
    setIsHovered(true);
  }
  function leaveHandler(event) {
    setIsHovered(false);
  }

  window.addEventListener("scroll", () => {
    const scrolledHeight =
      document.body.scrollTop || document.documentElement.scrollTop;
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    var scrolled = (scrolledHeight / height) * 100;
    setScrolled(scrolled + "%");
  });

  return (
    <header className={classes.header}>
      <div className={classes.scroll_container}>
        <div className={classes.scroll} style={{ width: scrolled }}></div>
      </div>
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
      {/* if functionName Url is exsiting, show Nav */}
      {params.functionName && (
        <nav className={classes.nav2}>
          <ul
            onMouseOver={hoverHandler}
            onMouseLeave={leaveHandler}
            style={
              isHovered
                ? { justifyContent: "" }
                : { justifyContent: "space-around" }
            }>
            {data?.map((categoryObject) => (
              <li key={Math.random()}>
                <p>{categoryObject.category}</p>
                <ul
                  className={classes.list}
                  style={isHovered ? {} : { display: "none" }}>
                  {categoryObject.objects?.map((functionData) => (
                    <li key={Math.random()}>
                      <Link to={`/description/${functionData.name}`}>
                        <p>{functionData.name.slice(3)}</p>
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}

export default Header;
