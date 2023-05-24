import styles from "./MakeMethodListByCategory.module.css";
import MakeMethodListByApp from "./MakeMethodListByApp";
import { useParams } from "react-router-dom";

function MakeMethodListByCategory({ functionMethods }) {
  const params = useParams();

  return (
    <ol className={styles.MakeMethodListByCategory}>
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
              {functionMethodObject.methodAppName}
            </summary>
            <MakeMethodListByApp
              functionMethodObject={functionMethodObject}
              appName={functionMethodObject.methodAppName}
            />
          </details>
        </li>
      ))}
    </ol>
  );
}

export default MakeMethodListByCategory;
