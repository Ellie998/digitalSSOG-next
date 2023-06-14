import styles from "./MethodList.module.css";
import MethodDescriptionList from "./MethodDescriptionList";

function MethodList({ functionMethodObject, appName }) {
  return (
    <ol className={styles.MethodList}>
      {functionMethodObject.howto?.map((functionMethod) => (
        <li key={Math.random()}>
          <p>방법 {functionMethod.methodNum}</p>
          <MethodDescriptionList
            functionMethod={functionMethod}
            appName={appName}
            methodNum={functionMethod.methodNum}
          />
        </li>
      ))}
    </ol>
  );
}

export default MethodList;
