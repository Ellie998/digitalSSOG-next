import classes from "./MakeDescriptionList.module.css";

import NoScrollLink from "../NoScrollLink";
import { useContext, useEffect, useState } from "react";
import UrlContext from "../page_context/UrlContext";
import { useSearchParams } from "next/navigation";

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
    functionName,
    setAppName,
    setMethodId,
    setDescriptionId,
    urlChangeDetecter,
  } = useContext(UrlContext);
  /**appName is string, methodId is string, desctiptionId is string */
  const { appName, methodId, descriptionId } = urlChangeDetecter();

  // function listClickHandler() {
  //   setAppName(dataAppName);
  //   setMethodId(dataMethodId);
  //   setDescriptionId(num.toString());
  //   setDescriptionPageId(num.toString());
  //   setMethodPageId(dataMethodId);
  // }
  // const [descriptionPageId, setDescriptionPageId] = useState(descriptionId);
  // const [methodPageId, setMethodPageId] = useState(methodId);

  return (
    <ol className={classes.listWrap}>
      {functionMethod.methodContent?.map((methodDescription) => (
        <li
          key={methodDescription}
          className={
            // methodPageId === dataMethodId &&
            // descriptionPageId === num.toString()
            appName == dataAppName &&
            +methodId === dataMethodId &&
            +descriptionId === num
              ? classes.list_active
              : classes.list
          }>
          {/* // onClick={() => {
          //   listClickHandler;
          // }}> */}
          <NoScrollLink
            href={`/description/${functionName}/?appName=${dataAppName}&methodId=${dataMethodId}&descriptionId=${num.toString()}`}>
            {numEmogi[num++]} {methodDescription}
          </NoScrollLink>
        </li>
      ))}
    </ol>
  );
}

export default MakeDescriptionList;
