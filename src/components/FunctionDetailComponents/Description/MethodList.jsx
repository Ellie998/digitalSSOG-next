import classes from "./MethodList.module.css";
import MethodDescriptionList from "./MethodDescriptionList";

function MethodList({ functionMethodObject, appName, methodId }) {
  return (
    <ol className={classes.listWrap}>
      {functionMethodObject.howto.length !== 1 &&
        functionMethodObject.howto?.map((functionMethod) => (
          <li key={Math.random()}>
            <details
              open={
                +methodId === functionMethod.methodNum &&
                functionMethodObject.methodAppName === appName
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
              <MethodDescriptionList
                functionMethod={functionMethod}
                appName={appName}
                methodNum={functionMethod.methodNum}
              />
            </details>
          </li>
        ))}
      {functionMethodObject.howto.length === 1 && (
        <MethodDescriptionList
          functionMethod={functionMethodObject.howto[0]}
          appName={appName}
          methodNum={functionMethodObject.howto[0].methodNum}
        />
      )}
    </ol>
  );
}

export default MethodList;
