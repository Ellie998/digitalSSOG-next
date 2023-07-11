import Link from "next/link";
import { useEffect, useState } from "react";

// import { functionDataURL } from "../../components/data.js";
const data = require("/public/data/functionData.json");
import classes from "./MakeListInCategory.module.css";

function MakeListInCategory({ FunctionOrApp, tabName }) {
  const [selectedCategoryObject, setSelectedCategoryObject] = useState({});

  useEffect(() => {
    data.forEach((categoryObject) => {
      setSelectedCategoryObject({});
      data.forEach((categoryObject) => {
        if (categoryObject.category === tabName) {
          setSelectedCategoryObject(categoryObject);
        }
      });
    });
  }, [tabName]);

  return (
    <>
      <ol className={classes.MakeListInCategory}>
        {selectedCategoryObject.objects?.map((functionObject) => (
          <li key={Math.random()}>
            <Link href={"/description/" + functionObject.name.slice(2)}>
              <p>{functionObject.name.slice(2)}</p>
            </Link>
          </li>
        ))}
      </ol>
    </>
  );
}

export default MakeListInCategory;
