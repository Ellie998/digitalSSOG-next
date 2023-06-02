import { Link, useLoaderData, useParams } from "react-router-dom";

import logo from "./logo2.png";
import classes from "./Header.module.css";
import { useState } from "react";

function Header() {
  const data = useLoaderData();
  const params = useParams();
  const [isHovered, setIsHovered] = useState(false);

  // const categorys = [
  //   "🔔 new",
  //   "👑 hot",
  //   "📞 전화, 문자",
  //   "👥 sns",
  //   "👥 sns",
  //   "👥 sns",
  //   "👥 sns",
  //   "👥 sns",
  //   "👥 sns",
  //   "👥 sns",
  //   "👥 sns",
  //   "👥 sns",
  // ];

  function hoverHandler(event) {
    setIsHovered(true);
  }
  function leaveHandler(event) {
    setIsHovered(false);
  }

  return (
    <header className={classes.header}>
      <nav className={classes.nav1}>
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
                        <p>{functionData.name}</p>
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
