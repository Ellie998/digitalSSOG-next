import { useSearchParams } from "next/navigation";
import MakeMethodList from "./MakeMethodList";
import classes from "./MakeAppList.module.css";

function MakeAppList({ functionMethods }) {
  const searchParams = useSearchParams();
  const appName = searchParams.get("appName");
  return (
    <ol className={classes.listWrap}>
      <p className={classes.extraInfoWrap}>
        <i className="bi bi-info-circle-fill"></i> 아래 글씨를 눌러보세요
      </p>
      {functionMethods?.map((functionMethodObject) => (
        <li key={Math.random()}>
          <details
            open={
              appName === functionMethodObject.methodAppName ? true : false
            }>
            <summary
              data-tooltip-left="클릭!"
              className={classes.fontSize_1_2rem}>
              {functionMethodObject.methodAppName} 어플
            </summary>
            <MakeMethodList functionMethodObject={functionMethodObject} />
          </details>
        </li>
      ))}
    </ol>
  );
}

export default MakeAppList;
