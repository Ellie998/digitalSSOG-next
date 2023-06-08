import styles from "./MethodAppList.module.css";
import MethodList from "./MethodList";
import { Link, useParams } from "react-router-dom";

function MethodAppList({ functionMethods }) {
  const params = useParams();
  const functionName = params.functionName;

  return (
    <ol className={styles.MethodAppList}>
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
              <Link
                to={
                  "/description/" +
                  functionName +
                  "/" +
                  functionMethodObject.methodAppName +
                  "/0"
                }>
                {functionMethodObject.methodAppName} 어플
              </Link>
            </summary>
            <MethodList
              functionMethodObject={functionMethodObject}
              appName={functionMethodObject.methodAppName}
            />
          </details>
        </li>
      ))}
    </ol>
  );
}

export default MethodAppList;
