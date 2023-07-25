import Link from "next/link";
import classes from "./MakeCategory.module.css";

function MakeCategory({ FunctionOrApp, ListObjects, onLinkClick, tabName }) {
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
      {categoryNames.map((categoryName, i) => {
        return (
          <li key={categoryName}>
            <Link
              scroll={false}
              onClick={onLinkClick}
              href={{ query: { tab: categoryName.replace(" ", "-") } }}
              className={
                tabName === categoryName.replace(" ", "-")
                  ? classes.clicked
                  : ""
              }
              id={categoryName.replace("%20", "-")}>
              {categoryName !== categoryNames[categoryNames.length - 1]
                ? `${icons[i]} ${categoryName} ,`
                : `${icons[i]} ${categoryName}`}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

export default MakeCategory;
