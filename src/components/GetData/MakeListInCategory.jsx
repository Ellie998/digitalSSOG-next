import { Link } from "react-router-dom";
import styles from "./MakeListInCategory.module.css";
import "./MakeListInCategory.css";

import { useLoaderData, useParams } from "react-router-dom";

function MakeListInCategory({ FunctionOrApp }) {
  const params = useParams();
  const keyword = decodeURI(params.categoryName);

  const listObjects = useLoaderData();
  let selectedCategoryObject = { ...listObjects[0] };

  listObjects?.map((categoryObject) => {
    if (categoryObject.category === keyword) {
      selectedCategoryObject = categoryObject;
    }
  });

  if (keyword === undefined) {
    selectedCategoryObject = { ...listObjects[0] };
  }

  return (
    <ol className={styles.MakeListInCategory}>
      <li id="categoryIndex">
        <p>기능 이름</p>
      </li>
      {selectedCategoryObject.objects?.map((functionObject) => (
        <li className="functionAndAppList" key={Math.random()}>
          <Link to={"/description/" + functionObject.name}>
            <p>{functionObject.name}</p>
          </Link>
        </li>
      ))}
    </ol>
  );
}

export default MakeListInCategory;
