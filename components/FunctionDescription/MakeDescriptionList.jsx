import Link from "next/link";
import classes from "./MakeDescriptionList.module.css";
import { useParams, useRouter } from "next/navigation";
import NoScrollLink from "../NoScrollLink";

const numEmogi = [
  " 0️⃣",
  " 1️⃣",
  " 2️⃣",
  " 3️⃣",
  "4️⃣",
  "5️⃣",
  " 6️⃣",
  " 7️⃣",
  " 8️⃣",
  " 9️⃣",
  "🔟",
];

function MakeDescriptionList({
  functionMethod,
  appName,
  methodId,
  setAppName,
  setMethodId,
  setDescriptionId,
}) {
  let num = 0;
  const params = useParams();
  const router = useRouter();

  return (
    <ol className={classes.listWrap}>
      {functionMethod.methodContent?.map((methodDescription) => (
        <li
          key={methodDescription}
          className="list-hover description-list"
          onClick={() => {
            setAppName(appName);
            setMethodId(methodId.toString());
            setDescriptionId(num.toString());
          }}>
          <NoScrollLink
            href={`/description/${
              params.functionName
            }/?appName=${appName}&methodId=${methodId.toString()}&descriptionId=${num.toString()}`}>
            {numEmogi[num++]} {methodDescription}
          </NoScrollLink>
        </li>
      ))}
    </ol>
  );
}

export default MakeDescriptionList;
