import classes from "./MakeList.module.css";
import { NavLink, useLocation } from "react-router-dom";

function MakeList({ FunctionOrApp, ListObjects }) {
  const url = useLocation();
  const params = url.search.slice(1);
  const keyword = decodeURI(params);

  const categorys = ["🌱 new", "🔥 hot", "📞 전화, 문자", "❤️ sns"];

  return (
    <ul className={classes.layout}>
      <li>
        <h3>카테고리 : </h3>
      </li>
      {categorys.map((categoryName) => {
        let categoryRealName = categoryName.slice(3, categoryName.length);
        return (
          <li key={categoryRealName}>
            <NavLink
              to={`/?${categoryRealName}`}
              className={keyword === categoryRealName ? classes.clicked : ""}>
              {categoryName !== categorys[categorys.length - 1]
                ? `${categoryName} ,`
                : categoryName}
            </NavLink>
          </li>
        );
      })}
    </ul>
  );
}

export default MakeList;
