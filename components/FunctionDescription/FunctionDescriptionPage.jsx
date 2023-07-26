"use client";
import { useContext, useEffect, useState } from "react";

import MakeAppList from "./MakeAppList";
import DisplayBox from "../DisplayBox/DisplayBox";
import UrlContext from "../page_context/UrlContext";
import classes from "./FunctionDescriptionPage.module.css";
import ShareContainer from "../share/ShareContainer";

const data = require("/public/data/functionData.json");

function FunctionDescriptionPage() {
  const { functionName, setMyAppName, setMyMethodId, setMyDescriptionId } =
    useContext(UrlContext);
  const [detailFunctionObject, setData] = useState([]);

  useEffect(() => {
    data.forEach((categoryObject) => {
      if (
        categoryObject.category !== "new" &&
        categoryObject.category !== "hot"
      ) {
        categoryObject.objects?.forEach((ObjectInArray) => {
          if (
            ObjectInArray.name.slice(2) ===
            functionName.replace("%2C", ",").replaceAll("-", " ")
          ) {
            setData(ObjectInArray);
            return;
          }
        });
      }
    });
  }, []);

  return (
    <main>
      <section className={classes.main_header}>
        <h1 className="title">
          <b>{detailFunctionObject.name}</b> 기능 소개
        </h1>
        <ul>
          <li className={classes.listBox}>
            <h2 className="h2">특징</h2>

            {typeof detailFunctionObject.charateristic === "object" ? (
              detailFunctionObject.charateristic.map((charDescription) => (
                <p key={Math.random()} className="leading-7">
                  {charDescription}
                </p>
              ))
            ) : (
              <p className={classes.lineHeight}>
                {detailFunctionObject.charateristic}
              </p>
            )}
          </li>
          <li className={classes.listBox}>
            <h2 className="h2">관련 어플</h2>
            <ul>
              {detailFunctionObject.app?.map((dataAppName) => (
                <li
                  key={Math.random()}
                  className="leading-7 hover:underline-offset-auto"
                  onClick={() => {
                    innerWidth > 850 &&
                      scrollTo({ top: 720, behavior: "smooth" });
                    innerWidth < 851 &&
                      innerWidth > 800 &&
                      scrollTo({ top: 600, behavior: "smooth" });
                    innerWidth < 801 &&
                      scrollTo({ top: 900, behavior: "smooth" });
                    innerWidth < 501 &&
                      scrollTo({ top: 1050, behavior: "smooth" });
                    setMyAppName(dataAppName);
                    setMyMethodId("1");
                    setMyDescriptionId("0");
                  }}>
                  {dataAppName}
                </li>
              ))}
            </ul>
          </li>
        </ul>
      </section>
      <section className={classes.main}>
        <h2 className="title">
          <b>{detailFunctionObject.name}</b> 기능 실행 방법
        </h2>
        <MakeAppList functionMethods={detailFunctionObject.method} />
        <div className={classes.displayBox}>
          <p className="subTitle w-56 hover:text-gray-900">
            ❗️ 학습에 도움을 드리기 위해 실제 스마트폰의 모습을 본따 만든
            화면입니다.
            <br />
            ❗️ 스마트폰 기종에 따라 화면 모습에 차이가 있을 수 있습니다.
          </p>
          <DisplayBox></DisplayBox>
          <div className={classes.flexWrap}></div>
        </div>
      </section>
      <ShareContainer />
    </main>
  );
}

export default FunctionDescriptionPage;
