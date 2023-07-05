import MakeMethodList from "./MakeMethodList";
import classes from "./MakeAppList.module.css";
import { useContext } from "react";
import UrlContext from "../page_context/UrlContext";

function MakeAppList({ functionMethods }) {
  const { myAppName } = useContext(UrlContext);

  return (
    <ol className={classes.listWrap}>
      <p className={classes.extraInfoWrap}>
        <i className="bi bi-info-circle-fill"></i> 아래 글씨를 눌러보세요
      </p>
      {functionMethods?.map((functionMethodObject) => (
        <li key={Math.random()}>
          <details
            open={
              myAppName === functionMethodObject.methodAppName ? true : false
            }>
            <summary
              data-tooltip-left="클릭!"
              className={classes.fontSize_1_2rem}>
              {functionMethodObject.methodAppName} 어플
            </summary>
            <MakeMethodList functionMethodObject={functionMethodObject} />
          </details>
        </li>
      ))}
    </ol>
  );
}

export default MakeAppList;
