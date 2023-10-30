import styled from "./index.module.css";
import CategoryName from "component/server/atoms/CategoryName/index";

// eslint-disable-next-line react/prop-types
const CategoryList = () => {
  const icons = ["🌱", "🔥", "📞", "❤️", "⚙️"];
  const categoryNames = [
    "새로운 기능",
    "인기있는 기능",
    "전화와 문자",
    "sns",
    "설정",
  ];

  return (
    <ul className={styled.container}>
      <p className={styled.listIndex}>카테고리 : </p>
      {categoryNames.map((categoryName, i) => (
        <CategoryName key={i} name={categoryName.replace(" ", "-")}>
          {categoryName !== categoryNames[categoryNames.length - 1]
            ? `${icons[i]} ${categoryName} ,`
            : `${icons[i]} ${categoryName}`}
        </CategoryName>
      ))}
    </ul>
  );
};

export default CategoryList;
