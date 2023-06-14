import styles from "./CallAppMain.module.css";
import { useState } from "react";
import { NavLink } from "react-router-dom";

function CallAppMain({ appName, functionName }) {
  const [clickedNum, changeNum] = useState("");
  const realFunctionName = functionName.slice(2);

  function onchangeClickNum(event) {
    if (event.target.innerText && event.target.nodeName === "DIV") {
      // console.dir(event.target);
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
    <section className={styles.CallAppMain}>
      <div className={styles.callNum}>{clickedNum}</div>
      <div className={styles.callBtns}>
        <ul onClick={onchangeClickNum}>
          <li>
            <div>1</div>
            <div>2</div>
            <div>3</div>
          </li>
          <li>
            <div>4</div>
            <div>5</div>
            <div>6</div>
          </li>
          <li>
            <div>7</div>
            <div>8</div>
            <div>9</div>
          </li>
          <li>
            <div>*</div>
            <div>0</div>
            <div>#</div>
          </li>
        </ul>
      </div>
      <div className={styles.navSection}>
        <ul>
          <NavLink
            data-tooltip={
              appName === "기본" && realFunctionName === "영상통화 발신"
                ? `클릭!`
                : null
            }
            to={
              appName === "기본" && realFunctionName === "영상통화 발신"
                ? `/description/${functionName}/${appName}/2`
                : null
            }>
            <li>
              <i className="bi bi-camera-video"></i>
            </li>
          </NavLink>
          <li>
            <NavLink
              data-tooltip={
                appName === "기본" && realFunctionName === "전화걸기(발신)"
                  ? `클릭!`
                  : null
              }
              to={
                appName === "기본" && realFunctionName === "전화걸기(발신)"
                  ? `/description/${functionName}/${appName}/2`
                  : null
              }>
              <div>
                <i className="bi bi-telephone"></i>
              </div>
            </NavLink>
          </li>
          <li>
            <i className="bi bi-arrow-left-short" onClick={onDeleteNum}></i>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default CallAppMain;
