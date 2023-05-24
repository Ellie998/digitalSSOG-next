import { Link } from "react-router-dom";
import styles from "./MakeListInCategory.module.css";
import "./MakeListInCategory.css";

import { useLocation } from "react-router";
import { useLoaderData } from "react-router-dom";

function MakeListInCategory({ FunctionOrApp }) {
  const location = useLocation();
  const keyword = decodeURI(location.pathname.slice(1));

  let selectedCategoryObject;

  const listObjects = useLoaderData();

  listObjects?.map((categoryObject) => {
    if (categoryObject.category === keyword) {
      selectedCategoryObject = categoryObject;
    }
    return 0;
  });

  if (keyword === null) {
    selectedCategoryObject = listObjects[0];
  }
  return (
    <ol className={styles.MakeListInCategory}>
      <li id="categoryIndex">
        <p>기능 이름</p>
      </li>
      {selectedCategoryObject.objects?.map((functionObject) => (
        <li class="functionAndAppList" key={Math.random()}>
          <Link to={"/description/" + functionObject.name}>
            <p>{functionObject.name}</p>
          </Link>
        </li>
      ))}
    </ol>
  );
}

export default MakeListInCategory;
