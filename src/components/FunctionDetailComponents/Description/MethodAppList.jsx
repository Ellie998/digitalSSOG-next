import classes from "./MethodAppList.module.css";
import MethodList from "./MethodList";
import { useParams } from "react-router-dom";

function MethodAppList({ functionMethods }) {
  const params = useParams();
  const methodId = params.methodId;

  return (
    <ol className={classes.MethodAppList}>
      <p>화면을 보고싶은 목차를 click!</p>
      {functionMethods?.map((functionMethodObject) => (
        <li key={Math.random()}>
          <details
            open={
              params.appName === functionMethodObject.methodAppName
                ? true
                : false
            }>
            <summary data-tooltip-left="클릭!">
              {functionMethodObject.methodAppName} 어플
            </summary>
            <MethodList
              functionMethodObject={functionMethodObject}
              appName={functionMethodObject.methodAppName}
              methodId={methodId}
            />
          </details>
        </li>
      ))}
    </ol>
  );
}

export default MethodAppList;
