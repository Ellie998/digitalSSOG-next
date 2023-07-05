import { useContext } from "react";
import MakeDescriptionList from "./MakeDescriptionList";
import UrlContext from "../page_context/UrlContext";
import classes from "./MakeMethodList.module.css";

function MakeMethodList({ functionMethodObject }) {
  const { myAppName, myMethodId } = useContext(UrlContext);
  const methodAppName = functionMethodObject.methodAppName;

  return (
    <ol className={classes.listWrap}>
      {functionMethodObject.howto.length === 1 && (
        <MakeDescriptionList
          functionMethod={functionMethodObject.howto[0]}
          dataAppName={functionMethodObject.methodAppName}
          dataMethodId={functionMethodObject.howto[0].methodNum.toString()}
        />
      )}
      {functionMethodObject.howto.length !== 1 &&
        functionMethodObject.howto?.map((functionMethod) => {
          const methodNum = functionMethod.methodNum.toString();
          const methodTitle = functionMethod.methodTitle;

          <li key={Math.random()}>
            <details
              open={
                myMethodId === methodNum && myAppName === methodAppName
                  ? true
                  : false
              }>
              <summary>
                방법
                {` ${methodNum}${methodTitle ? `) ${methodTitle}` : ""}`}
              </summary>
              <MakeDescriptionList
                functionMethod={functionMethod}
                dataAppName={methodAppName}
                dataMethodId={methodNum}
              />
            </details>
          </li>;
        })}
    </ol>
  );
}

export default MakeMethodList;
