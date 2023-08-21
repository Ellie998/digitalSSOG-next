"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

import classes from "./FunctionList.module.css";
import H2 from "stories/page/atoms/H2";
import SubTitle from "stories/page/atoms/SubTitle";

import IndexFunctionsPostit from "stories/page/organisms/IndexFunctionsPostit";

function FunctionList() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [tabName, setTabName] = useState(searchParams.get("tab"));
  let temp = 0;

  useEffect(() => {
    window.onpopstate = function () {
      const url = decodeURI(window.location);
      if (temp === 1) {
        return;
      }
      if (url.includes("=")) {
        const tabNameFromUrl = url.split("=");
        setTabName(tabNameFromUrl[1]);
      } else {
        router.push(url, { scroll: false });
      }
      temp++;
    };
  }, []);

  return (
    <section className={`${classes.layout} ${classes.note}`}>
      <div className={classes.noteHoles}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div className={classes.noteContent}>
        <H2>스마트 기기로 사용 가능한 기능들</H2>
        <SubTitle>
          카테고리를 누르면 카테고리에 속하는 기능들을 볼 수 있습니다.
        </SubTitle>
        <IndexFunctionsPostit tabName={tabName} setTabName={setTabName} />
      </div>
    </section>
  );
}

export default FunctionList;
