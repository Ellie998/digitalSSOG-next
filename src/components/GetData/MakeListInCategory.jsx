import { Link, useLocation } from "react-router-dom";
import classes from "./MakeListInCategory.module.css";

import { useLoaderData } from "react-router-dom";

function MakeListInCategory({ FunctionOrApp }) {
  const url = useLocation();
  const params = url.search.slice(1);
  const keyword = decodeURI(params);

  const listObjects = useLoaderData();
  let selectedCategoryObject = { ...listObjects[0] };

  selectedCategoryObject = !keyword ? { ...listObjects[0] } : "";
  listObjects?.forEach((categoryObject) => {
    if (categoryObject.category === keyword) {
      selectedCategoryObject = categoryObject;
    }
  });

  return (
    <ol className={classes.MakeListInCategory}>
      <p>기능 이름</p>

      {selectedCategoryObject.objects?.map((functionObject) => (
        <li key={Math.random()}>
          <Link to={"/description/" + functionObject.name}>
            <p>{functionObject.name.slice(3)}</p>
          </Link>
        </li>
      ))}
    </ol>
  );
}

export default MakeListInCategory;
