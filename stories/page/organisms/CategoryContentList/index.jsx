/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

import { useEffect, useState } from "react";

import CategoryContentLine from "stories/page/atoms/CategoryContentLine/index";

const data = require("/public/data/functionData.json");

// eslint-disable-next-line react/prop-types, no-unused-vars
const CategoryContentList = ({ tabName }) => {
  const [selectedCategoryObject, setSelectedCategoryObject] = useState({});

  useEffect(() => {
    data.forEach((categoryObject) => {
      setSelectedCategoryObject({});
      data.forEach((categoryObject) => {
        if (categoryObject.category === tabName?.replaceAll("-", " ")) {
          setSelectedCategoryObject(categoryObject);
        }
      });
    });
  }, [tabName]);

  return (
    <ol>
      {selectedCategoryObject.objects?.map((functionObject, i) => (
        <CategoryContentLine key={i} functionObject={functionObject} />
      ))}
    </ol>
  );
};

export default CategoryContentList;
