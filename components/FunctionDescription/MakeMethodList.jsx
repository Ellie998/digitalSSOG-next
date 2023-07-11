import { useContext } from "react";
import MakeDescriptionList from "./MakeDescriptionList";
import UrlContext from "../page_context/UrlContext";

function MakeMethodList({ functionMethodObject }) {
  const { myAppName, myMethodId } = useContext(UrlContext);
  const methodAppName = functionMethodObject.methodAppName;

  return (
    <ol>
      {functionMethodObject.howto.length !== 1 &&
        functionMethodObject.howto?.map((functionMethod) => (
          <li className="ml-4 mb-4" key={Math.random()}>
            <details
              open={
                +myMethodId === functionMethod.methodNum &&
                myAppName === methodAppName
                  ? true
                  : false
              }>
              <summary className="mb-1">
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
