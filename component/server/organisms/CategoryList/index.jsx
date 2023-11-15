import styled from "./index.module.css";
import CategoryName from "component/server/atoms/CategoryName/index";

// eslint-disable-next-line react/prop-types
const CategoryList = async ({ tabName }) => {
  const res = await fetch(
    "https://mydigitalssog-web-default-rtdb.firebaseio.com/description.json",
    { cache: "no-cache" }
  );
  const data = await res.json();

  // const icons = ["🌱", "🔥", "📞", "❤️", "⚙️"];

  return (
    <>
      <p className={styled.listIndex}>카테고리</p>
      <ul className={styled.container}>
        {Object.values(data).map((category, i) => (
          <CategoryName
            key={i}
            name={category.name?.replace(" ", "-")}
            tabName={tabName}
            icon={category.icon}>
            {category.name}
          </CategoryName>
        ))}
      </ul>
    </>
  );
};

export default CategoryList;
