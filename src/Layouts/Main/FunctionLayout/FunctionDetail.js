import classes from "./FunctionDetail.module.css";
import MethodAppList from "../../../components/FunctionDetailComponents/Description/MethodAppList";

import { useEffect, useState } from "react";
import { useLoaderData, useParams, Link, Outlet } from "react-router-dom";

function FunctionDetail() {
  const data = useLoaderData();

  const params = useParams();
  const functionName = params.functionName;

  const [detailFunctionObject, setData] = useState([]);

  useEffect(() => {
    data.forEach((categoryObject) => {
      if (
        categoryObject.category !== "new" &&
        categoryObject.category !== "hot"
      ) {
        categoryObject.objects?.forEach((ObjectInArray) => {
          if (ObjectInArray.name === functionName) {
            setData(ObjectInArray);
          }
        });
      }
    });
  }, [data, functionName]);

  return (
    <main>
      <section className={classes.main_header}>
        <h1 className={classes.title}>
          <b>{detailFunctionObject.name}</b> 기능 소개
        </h1>
        <ul>
          <li className={classes.listBox}>
            <h2>특징</h2>
            <p>{detailFunctionObject.charateristic}</p>
          </li>
          <li className={classes.listBox}>
            <h2>관련 어플</h2>
            <ul>
              {detailFunctionObject.app?.map((appName) => (
                <li key={Math.random()}>
                  <Link
                    to={
                      "/description/" + functionName + "/" + appName + "/0/0"
                    }>
                    {appName}
                  </Link>
                </li>
              ))}
            </ul>
          </li>
        </ul>
      </section>
      <section className={classes.main}>
        <h2>
          <b className={classes.title}>{detailFunctionObject.name}</b> 기능 실행
          방법
        </h2>
        <MethodAppList functionMethods={detailFunctionObject.method} />
        <div className={classes.displayBox}>
          <p className={classes.subTitle}>
            ❗️ 학습에 도움을 드리기 위해 실제 스마트폰의 모습을 본따 만든
            화면입니다.
          </p>
          <Outlet />
          <div className={classes.flexWrap}>
            {/* <div className={classes.btn}>이전 화면</div>
            <div className={classes.btn}>다음 화면</div> */}
          </div>
        </div>
      </section>
    </main>
  );
}

export default FunctionDetail;
