/* eslint-disable react/prop-types */

import MyLink from "component/client/MyLink/index";
import NoteParagraph from "../NoteParagraph/index";

// eslint-disable-next-line react/prop-types
const CategoryContentLine = async ({ functionObject, tabName }) => {
  const res = await fetch(
    `https://mydigitalssog-web-default-rtdb.firebaseio.com/description/${tabName}/${functionObject}.json`,
    { cache: "no-cache" }
  );
  const data = await res.json();

  return (
    <>
      <MyLink href={"/description/" + data.title?.replaceAll(" ", "-")}>
        <NoteParagraph content={data.title.slice(2)} />
      </MyLink>
    </>
  );
};

export default CategoryContentLine;
