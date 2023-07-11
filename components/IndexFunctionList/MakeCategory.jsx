import Link from "next/link";
import classes from "./MakeCategory.module.css";

function MakeCategory({ FunctionOrApp, ListObjects, onLinkClick, tabName }) {
  const categorys = [
    "🌱 새로운 기능",
    "🔥 인기있는 기능",
    "📞 전화, 문자",
    "❤️ sns",
  ];

  return (
    <ul className={classes.layout}>
      <li>
        <p className="font-bold">카테고리 : </p>
      </li>
      {categorys.map((categoryName) => {
        let categoryRealName = categoryName.slice(3, categoryName.length);
        return (
          <li key={categoryRealName}>
            <Link
              scroll={false}
              onClick={onLinkClick}
              href={{ query: { tab: categoryRealName } }}
              className={tabName === categoryRealName ? classes.clicked : ""}
              id={categoryName}>
              {categoryName !== categorys[categorys.length - 1]
                ? `${categoryName} ,`
                : categoryName}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

export default MakeCategory;
