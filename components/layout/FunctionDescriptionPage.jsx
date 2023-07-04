"use client";

import { useEffect, useState } from "react";
import { useParams, useSearchParams } from "next/navigation";

import MakeAppList from "../../components/FunctionDescription/MakeAppList";
import DisplayBox from "../DisplayBox/DisplayBox";
import NoScrollLink from "../NoScrollLink";

import classes from "./FunctionDescriptionPage.module.css";
const data = require("/public/data/functionData.json");

function FunctionDescriptionPage() {
  const [detailFunctionObject, setData] = useState([]);
  const params = useParams();
  const functionName = decodeURI(params.functionName);
  //
  const searchParams = useSearchParams();
  const paramAppName = searchParams.get("appName");
  const parmaMethodId = searchParams.get("methodId");
  const paramDescriptionId = searchParams.get("descriptionId");
  const [appName, setAppName] = useState(paramAppName);
  const [methodId, setMethodId] = useState(parmaMethodId);
  const [descriptionId, setDescriptionId] = useState(paramDescriptionId);
  // fetch(functionDataURL)
  //   .then((response) => response.json())
  //   .then((data) => {
  //     data.forEach((categoryObject) => {
  //       if (
  //         categoryObject.category !== "new" &&
  //         categoryObject.category !== "hot"
  //       ) {
  //         categoryObject.objects?.forEach((ObjectInArray) => {
  //           if (ObjectInArray.name === functionName) {
  //             setData(ObjectInArray);
  //             return;
  //           }
  //         });
  //       }
  //     });
  //   });

  useEffect(() => {
    data.forEach((categoryObject) => {
      if (
        categoryObject.category !== "new" &&
        categoryObject.category !== "hot"
      ) {
        categoryObject.objects?.forEach((ObjectInArray) => {
          if (ObjectInArray.name.slice(2) === functionName) {
            setData(ObjectInArray);
            return;
          }
        });
      }
    });
  }, []);
  useEffect(() => {}, [appName, methodId, descriptionId]);

  return (
    <PageContext.Provider
      value={{
        functionName: functionName,
        realFunctionName: functionName,
        appName: appName,
        methodId: methodId,
        descriptionId: descriptionId,
        urlContent: urlContent,
        //
        functionName_makeCall: functionName_makeCall,
        functionName_getCall: functionName_getCall,
        functionName_makeVideoCall: functionName_makeVideoCall,
        functionName_sendMessage: functionName_sendMessage,
        functionName_seeMessage: functionName_seeMessage,
        functionName_resendMessage: functionName_resendMessage,
        functionName_reserveMessage: functionName_reserveMessage,
        functionName_sendImg: functionName_sendImg,
        functionName_sendAudio: functionName_sendAudio,
        functionName_sendPhoneNum: functionName_sendPhoneNum,
        //
        functionName_kakaotalk_groubChatLeave_RejectInvitation:
          functionName_kakaotalk_groubChatLeave_RejectInvitation,
        functionName_kakaotalk_groubChatLock:
          functionName_kakaotalk_groubChatLock,
        //
        appName_basic: appName_basic,
        appName_kakaotalk: appName_kakaotalk,
        appName_message: appName_message,
        appName_call: appName_call,
      }}>
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
                    <NoScrollLink
                      href={`/description/${functionName}/?appName=${appName}&methodId=0&descriptionId=0`}>
                      {appName}
                    </NoScrollLink>
                  </li>
                ))}
              </ul>
            </li>
          </ul>
        </section>
        <section className={classes.main}>
          <h2>
            <b className={classes.title}>{detailFunctionObject.name}</b> 기능
            실행 방법
          </h2>
          <MakeAppList
            functionMethods={detailFunctionObject.method}
            appName={appName}
            methodId={methodId}
            descriptionId={descriptionId}
            setAppName={setAppName}
            setMethodId={setMethodId}
            setDescriptionId={setDescriptionId}
          />
          <div className={classes.displayBox}>
            <p className={classes.subTitle}>
              ❗️ 학습에 도움을 드리기 위해 실제 스마트폰의 모습을 본따 만든
              화면입니다.
            </p>
            <DisplayBox
              appName={appName}
              methodId={methodId}
              descriptionId={descriptionId}></DisplayBox>
            <div className={classes.flexWrap}></div>
          </div>
        </section>
      </main>
    </PageContext.Provider>
  );
}

export default FunctionDescriptionPage;
