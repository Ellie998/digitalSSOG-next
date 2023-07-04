import { useSearchParams } from "next/navigation";
import MakeDescriptionList from "./MakeDescriptionList";
// import data from "../public/data/functionData.json";
import classes from "./MakeMethodList.module.css";

function MakeMethodList({
  functionMethodObject,
  appName,
  methodId,
  descriptionId,
  setAppName,
  setMethodId,
  setDescriptionId,
}) {
  const searchParams = useSearchParams();
  // const methodId = searchParams.get("methodId");
  // const appName = searchParams.get("appName");

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
                appName={functionMethodObject.methodAppName}
                methodId={functionMethod.methodNum}
                setAppName={setAppName}
                setMethodId={setMethodId}
                setDescriptionId={setDescriptionId}
              />
            </details>
          </li>
        ))}
      {functionMethodObject.howto.length === 1 && (
        <MakeDescriptionList
          functionMethod={functionMethodObject.howto[0]}
          appName={functionMethodObject.methodAppName}
          methodId={functionMethodObject.howto[0].methodNum}
          setAppName={setAppName}
          setMethodId={setMethodId}
          setDescriptionId={setDescriptionId}
        />
      )}
    </ol>
  );
}

export default MakeMethodList;
