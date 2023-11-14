import CategoryContentLine from "component/server/atoms/CategoryContentLine/index";

const CategoryContentList = async ({ tabName }) => {
  const res = await fetch(
    `https://mydigitalssog-web-default-rtdb.firebaseio.com/description/${tabName}.json`,
    { cache: "no-cache" }
  );
  const data = await res.json();

  return (
    <ol>
      {Object.keys(data)?.map(
        (categoryData, i) =>
          typeof data[categoryData] === "object" && (
            <CategoryContentLine
              key={i}
              functionObject={categoryData}
              tabName={tabName}
            />
          )
      )}
    </ol>
  );
};

export default CategoryContentList;
