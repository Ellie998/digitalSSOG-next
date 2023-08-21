/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import classes from "./MakeCategory.module.css";
import CategoryName from "stories/page/atoms/CategoryName";

function MakeCategory({ FunctionOrApp, ListObjects, setTabName, tabName }) {
  const categorys = [
    "🌱 새로운 기능",
    "🔥 인기있는 기능",
    "📞 전화와 문자",
    "❤️ sns",
  ];
  const icons = ["🌱", "🔥", "📞", "❤️"];
  const categoryNames = ["새로운 기능", "인기있는 기능", "전화와 문자", "sns"];

  return (
    <ul className={classes.layout}>
      <li>
        <p className="font-bold">카테고리 : </p>
      </li>
      {categoryNames.map((categoryName, i) => (
        <CategoryName
          key={categoryName}
          name={categoryName.replace(" ", "-")}
          setTabName={setTabName}
          tabName={tabName}>
          {categoryName !== categoryNames[categoryNames.length - 1]
            ? `${icons[i]} ${categoryName} ,`
            : `${icons[i]} ${categoryName}`}
        </CategoryName>
      ))}
    </ul>
  );
}

export default MakeCategory;
