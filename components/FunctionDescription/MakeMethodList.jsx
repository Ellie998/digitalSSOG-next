import { useContext } from "react";
import MakeDescriptionList from "./MakeDescriptionList";
import UrlContext from "../page_context/UrlContext";
import classes from "./MakeMethodList.module.css";

function MakeMethodList({ functionMethodObject }) {
  const { myAppName, myMethodId } = useContext(UrlContext);
  const methodAppName = functionMethodObject.methodAppName;

  return (
    <ol className={classes.listWrap}>
      {functionMethodObject.howto.length !== 1 &&
        functionMethodObject.howto?.map((functionMethod) => (
          <li key={Math.random()}>
            <details
              open={
                +myMethodId === functionMethod.methodNum &&
                myAppName === methodAppName
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
                dataAppName={methodAppName}
                dataMethodId={functionMethod.methodNum}
              />
            </details>
          </li>
        ))}
      {functionMethodObject.howto.length === 1 && (
        <MakeDescriptionList
          functionMethod={functionMethodObject.howto[0]}
          dataAppName={methodAppName}
          dataMethodId={functionMethodObject.howto[0].methodNum}
        />
      )}
    </ol>
  );
}

export default MakeMethodList;
