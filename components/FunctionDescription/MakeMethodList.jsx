import { useSearchParams } from "next/navigation";
import MakeDescriptionList from "./MakeDescriptionList";
// import data from "../public/data/functionData.json";
import classes from "./MakeMethodList.module.css";
import { useContext } from "react";
import UrlContext from "../page_context/UrlContext";

function MakeMethodList({ functionMethodObject }) {
  const { urlChangeDetecter } = useContext(UrlContext);
  const { appName, methodId } = urlChangeDetecter();

  return (
    <ol className={classes.listWrap}>
      {functionMethodObject.howto.length !== 1 &&
        functionMethodObject.howto?.map((functionMethod) => (
          <li key={Math.random()}>
            <details
              open={
                +methodId === functionMethod.methodNum &&
                appName === functionMethodObject.methodAppName
                  ? true
                  : false
              }>
              <summary>
                방법
                {` ${functionMethod.methodNum}${
                  functionMethod.methodTitle
                    ? `) ${functionMethod.methodTitle}`
                    : ""
                }`}
              </summary>
              <MakeDescriptionList
                functionMethod={functionMethod}
                dataAppName={functionMethodObject.methodAppName}
                dataMethodId={functionMethod.methodNum}
              />
            </details>
          </li>
        ))}
      {functionMethodObject.howto.length === 1 && (
        <MakeDescriptionList
          functionMethod={functionMethodObject.howto[0]}
          dataAppName={functionMethodObject.methodAppName}
          dataMethodId={functionMethodObject.howto[0].methodNum}
        />
      )}
    </ol>
  );
}

export default MakeMethodList;
