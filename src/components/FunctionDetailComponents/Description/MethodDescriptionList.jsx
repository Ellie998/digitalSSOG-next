import { NavLink, useParams } from "react-router-dom";
import styles from "./MethodDescriptionList.module.css";

const numEmogi = [
  " 0️⃣",
  " 1️⃣",
  " 2️⃣",
  " 3️⃣",
  "4️⃣",
  "5️⃣",
  " 6️⃣",
  " 7️⃣",
  " 8️⃣",
  " 9️⃣",
  "🔟",
];

function MethodDescriptionList({ functionMethod, appName, methodNum }) {
  let num = 0;
  const params = useParams();

  return (
    <ol className={styles.methodDescriptionList}>
      {functionMethod.methodContent?.map((methodDescription) => (
        <li
          data-tooltip-midleft="클릭시 화면이 표시됩니다."
          key={methodDescription}
          className="list-hover description-list">
          <NavLink
            to={`/description/${params.functionName}/${appName}/${methodNum}/${num}`}
            style={({ isActive }) => {
              return { fontWeight: isActive ? "bold" : "" };
            }}>
            {numEmogi[num++]} {methodDescription}
          </NavLink>
        </li>
      ))}
    </ol>
  );
}

export default MethodDescriptionList;
