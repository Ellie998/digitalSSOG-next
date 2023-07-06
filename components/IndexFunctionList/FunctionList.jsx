"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import MakeCategory from "./MakeCategory";
import MakeListInCategory from "./MakeListInCategory";
import classes from "./FunctionList.module.css";

function FunctionList() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [tabName, setTabName] = useState(searchParams.get("tab"));
  let temp = 0;

  /**function for change query in home page */
  function linkClickHandler(e) {
    e.preventDefault();
    const tabName = e.target.id.slice(3);
    window.history.pushState("", "", `/?tab=${tabName}`);
    setTabName(tabName);
  }
  // when back or forehead btn clicked, function trigered in descriotion page
  window.onpopstate = function (e) {
    const url = decodeURI(window.location);
    if (temp === 1) {
      return;
    }
    if (url.includes("=")) {
      const tabNameFromUrl = url.split("=");
      setTabName(tabNameFromUrl[1]);
    } else {
      const urlTemp = url.replaceAll("%2F", "/");
      router.push(urlTemp, { scroll: false });
    }
    temp++;
  };
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
        <h1 className={classes.title}>스마트 기기로 사용 가능한 기능들</h1>
        <div className={classes.subTitle}>
          카테고리를 누르면 카테고리에 속하는 기능들을 볼 수 있습니다.
        </div>
        <div className={`${classes.postIt_note}`}>
          <MakeCategory
            onLinkClick={linkClickHandler}
            tabName={tabName}
            FunctionOrApp={"function"}></MakeCategory>

          <MakeListInCategory
            tabName={tabName}
            FunctionOrApp={"function"}></MakeListInCategory>
        </div>
      </div>
    </section>
  );
}

export default FunctionList;
