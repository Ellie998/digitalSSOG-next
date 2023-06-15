import { useState, useContext } from "react";
import { NavLink } from "react-router-dom";

import { PageContext } from "../../sections/AppMain";
import classes from "./CallAppMain.module.css";

function CallAppMain() {
  const { appName, urlContent, realFunctionName } = useContext(PageContext);
  const [clickedNum, changeNum] = useState("");

  function onchangeClickNum(event) {
    if (event.target.innerText && event.target.nodeName === "DIV") {
      if (
        (!clickedNum.includes("-") && clickedNum.length === 3) ||
        clickedNum === "02"
      ) {
        changeNum(clickedNum + "-" + event.target.innerText);
      } else if (
        (clickedNum.length === 6 && clickedNum.slice(0, 2) === "02") ||
        (clickedNum.length === 8 && clickedNum.slice(0, 2) === "01") ||
        (clickedNum.length === 7 && clickedNum.slice(0, 2) !== "02")
      ) {
        changeNum(clickedNum + "-" + event.target.innerText);
      } else if (clickedNum.length > 20) {
        changeNum("");
      } else {
        changeNum(clickedNum + event.target.innerText);
      }
    }
  }

  function onDeleteNum() {
    changeNum(clickedNum.slice(0, clickedNum.length - 1));
  }

  return (
    <section className={classes.layout}>
      <div className={classes.main_title}>{clickedNum}</div>
      <div className={classes.main_optionBox} onClick={onchangeClickNum}>
        <div className={classes.main_optionRow}>
          <div>1</div>
          <div>2</div>
          <div>3</div>
        </div>
        <div className={classes.main_optionRow}>
          <div>4</div>
          <div>5</div>
          <div>6</div>
        </div>
        <div className={classes.main_optionRow}>
          <div>7</div>
          <div>8</div>
          <div>9</div>
        </div>
        <div className={classes.main_optionRow}>
          <div>*</div>
          <div>0</div>
          <div>#</div>
        </div>
      </div>
      <div className={classes.navLayout}>
        <NavLink
          data-tooltip={
            appName === "기본" && realFunctionName === "영상통화 발신"
              ? `클릭!`
              : null
          }
          to={
            appName === "기본" &&
            realFunctionName === "영상통화 발신" &&
            `${urlContent}`
          }>
          <div>
            <i className="bi bi-camera-video"></i>
          </div>
        </NavLink>
        <div>
          <NavLink
            data-tooltip={
              appName === "기본" && realFunctionName === "전화걸기(발신)"
                ? `클릭!`
                : null
            }
            to={
              appName === "기본" &&
              realFunctionName === "전화걸기(발신)" &&
              `${urlContent}`
            }>
            <div>
              <i className="bi bi-telephone"></i>
            </div>
          </NavLink>
        </div>
        <div>
          <i className="bi bi-arrow-left-short" onClick={onDeleteNum}></i>
        </div>
      </div>
    </section>
  );
}

export default CallAppMain;
