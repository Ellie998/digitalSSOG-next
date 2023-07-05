import classes from "./MakeDescriptionList.module.css";

import { useContext } from "react";
import UrlContext from "../page_context/UrlContext";

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

function MakeDescriptionList({ functionMethod, dataAppName, dataMethodId }) {
  let num = 0;
  const {
    myAppName,
    myMethodId,
    myDescriptionId,
    setMyAppName,
    setMyMethodId,
    setMyDescriptionId,
  } = useContext(UrlContext);

  function changeUrlQueryStateHandler(e) {
    setMyAppName(dataAppName);
    setMyMethodId(dataMethodId.toString());
    setMyDescriptionId(e.target.dataset.listOrder);
  }
  return (
    <ol className={classes.listWrap}>
      {functionMethod.methodContent?.map((methodDescription) => (
        <li
          key={methodDescription}
          data-list-order={num.toString()}
          className={
            myAppName == dataAppName &&
            +myMethodId === dataMethodId &&
            myDescriptionId === num.toString()
              ? classes.list_active
              : classes.list
          }
          onClick={changeUrlQueryStateHandler}>
          {numEmogi[num++]} {methodDescription}
        </li>
      ))}
    </ol>
  );
}

export default MakeDescriptionList;
