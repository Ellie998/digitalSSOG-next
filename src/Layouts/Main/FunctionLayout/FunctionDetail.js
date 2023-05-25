import styles from "./FunctionDetail.module.css";
import MethodAppList from "../../../components/FunctionDetailComponents/Description/MethodAppList";

import { useEffect, useState } from "react";
import { useLoaderData, useParams, Link, Outlet } from "react-router-dom";

function FunctionDetail() {
  const params = useParams();
  const data = useLoaderData();

  const functionName = params.functionName;

  const [detailFunctionObject, setData] = useState([]);

  useEffect(() => {
    data.map((categoryObject) =>
      categoryObject.objects?.forEach((ObjectInArray) => {
        if (ObjectInArray.name === functionName) {
          setData(ObjectInArray);
        }
      })
    );
  }, [data, functionName]);

  return (
    <main>
      <section className={styles.functionDetailIntro}>
        <h1>📞 {detailFunctionObject.name} 기능 소개</h1>
        <ul>
          <li className={styles.listStyling}>
            <h2> 기능 특징</h2>
            <p>{detailFunctionObject.charateristic}</p>
          </li>
          <li className={styles.listStyling}>
            <h2>기능을 제공하는 어플</h2>
            <ul>
              {detailFunctionObject.app?.map((appName) => (
                <li key={Math.random()}>
                  <Link to={"/description/" + functionName + "/" + appName}>
                    {appName}
                  </Link>
                </li>
              ))}
            </ul>
          </li>
        </ul>
      </section>
      <section className={styles.functionDetailMain}>
        <div>
          <h2>기능 사용 방법 정리</h2>
          <MethodAppList functionMethods={detailFunctionObject.method} />
          <Outlet />
        </div>
      </section>
    </main>
  );
}

export default FunctionDetail;
