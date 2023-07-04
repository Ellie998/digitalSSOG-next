import { useSearchParams } from "next/navigation";
import MakeMethodList from "./MakeMethodList";
import classes from "./MakeAppList.module.css";
import { useEffect, useState } from "react";

function MakeAppList({
  functionMethods,
  appName,
  methodId,
  descriptionId,
  setAppName,
  setMethodId,
  setDescriptionId,
}) {
  //   const searchParams = useSearchParams();
  //   const paramAppName = searchParams.get("appName");
  // const [appName, setAppName] = useState(paramAppName);

  return (
    <ol className={classes.listWrap}>
      <p className={classes.extraInfoWrap}>
        <i className="bi bi-info-circle-fill"></i> 아래 글씨를 눌러보세요
      </p>
      {functionMethods?.map((functionMethodObject) => (
        <li key={Math.random()}>
          <details
            open={
              appName === functionMethodObject.methodAppName ? true : false
            }>
            <summary
              data-tooltip-left="클릭!"
              className={classes.fontSize_1_2rem}>
              {functionMethodObject.methodAppName} 어플
            </summary>
            <MakeMethodList
              functionMethodObject={functionMethodObject}
              methodId={methodId}
              descriptionId={descriptionId}
              appName={appName}
              setAppName={setAppName}
              setMethodId={setMethodId}
              setDescriptionId={setDescriptionId}
            />
          </details>
        </li>
      ))}
    </ol>
  );
}

export default MakeAppList;
