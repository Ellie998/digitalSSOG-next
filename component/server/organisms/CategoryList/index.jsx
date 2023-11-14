import styled from "./index.module.css";
import CategoryName from "component/server/atoms/CategoryName/index";

// eslint-disable-next-line react/prop-types
const CategoryList = async () => {
  const res = await fetch(
    "https://mydigitalssog-web-default-rtdb.firebaseio.com/description.json",
    { cache: "no-cache" }
  );
  const data = await res.json();

  // const icons = ["🌱", "🔥", "📞", "❤️", "⚙️"];

  return (
    <ul className={styled.container}>
      <p className={styled.listIndex}>카테고리 : </p>
      {Object.values(data).map((category, i) => (
        <CategoryName key={i} name={category.name.replace(" ", "-")}>
          {i + 1 !== Object.values(data).length
            ? `${category.icon} ${category.name} ,`
            : `${category.icon} ${category.name}`}
        </CategoryName>
      ))}
    </ul>
  );
};

export default CategoryList;
