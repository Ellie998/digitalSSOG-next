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
    <ol className="break-keep mb-10">
      {functionMethod.methodContent?.map((methodDescription) => (
        <li
          key={methodDescription}
          data-list-order={num.toString()}
          className={
            myAppName == dataAppName &&
            +myMethodId === dataMethodId &&
            myDescriptionId === num.toString()
              ? "ml-4 mb-2 font-bold leading-6 cursor-pointer"
              : "ml-4 mb-2 leading-6 cursor-pointer"
          }
          onClick={changeUrlQueryStateHandler}>
          {numEmogi[num++]} {methodDescription}
        </li>
      ))}
    </ol>
  );
}
export default MakeDescriptionList;
