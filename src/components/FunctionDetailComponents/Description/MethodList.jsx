import classes from "./MethodList.module.css";
import MethodDescriptionList from "./MethodDescriptionList";

function MethodList({ functionMethodObject, appName, methodId }) {
  return (
    <ol className={classes.MethodList}>
      {functionMethodObject.howto?.map((functionMethod) => (
        <li key={Math.random()}>
          <details open={+methodId === functionMethod.methodNum ? true : false}>
            <summary>
              방법
              {`${functionMethod.methodNum} ${
                functionMethod.methodTitle ? functionMethod.methodTitle : ""
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
    </ol>
  );
}

export default MethodList;
