import { Link, useLoaderData } from "react-router-dom";
import classes from "./FunctionSidebar.module.css";

const FunctionSidebar = ({ isMenuClicked, isXClicked }) => {
  const data = useLoaderData();

  return (
    <aside
      className={`${classes.aside} ${isMenuClicked ? "" : classes.disable} ${
        isXClicked ? classes.disable : ""
      }`}>
      <h3>카테고리</h3>
      <ul>
        {data?.map((categoryObject) => (
          <li key={Math.random()}>
            <details open>
              <summary>{categoryObject.category}</summary>
              <ul>
                {categoryObject.objects?.map((functionData) => (
                  <li key={Math.random()}>
                    <Link to={`/description/${functionData.name}`}>
                      <p>{functionData.name}</p>
                    </Link>
                  </li>
                ))}
              </ul>
            </details>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default FunctionSidebar;
