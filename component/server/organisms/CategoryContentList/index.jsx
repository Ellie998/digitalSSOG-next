import CategoryContentLine from "component/server/atoms/CategoryContentLine/index";

const CategoryContentList = async ({ tabName }) => {
  const res = await fetch(
    `https://mydigitalssog-web-default-rtdb.firebaseio.com/description/${tabName}.json`,
    { cache: "no-cache" }
  );
  const data = await res.json();

  return (
    <>
      <p className={" font-light pb-2 min-w-max tracking-[1.5rem]"}>
        기능 목록
      </p>
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
    </>
  );
};

export default CategoryContentList;
