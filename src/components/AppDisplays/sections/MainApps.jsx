import { useContext } from "react";
import { NavLink } from "react-router-dom";

import { PageContext } from "./AppMain";
import classes from "./AppMain.module.css";

const MainApps = () => {
  const { appName, urlContent, realFunctionName } = useContext(PageContext);

  return (
    <section className={classes.layout}>
      <section className={classes.appLayout}>
        <div className={classes.app_row}>
          <NavLink
            to={
              appName === "카카오톡" &&
              realFunctionName === "전화걸기(발신)" &&
              `${urlContent}`
            }
            data-tooltip={
              appName === "카카오톡" && realFunctionName === "전화걸기(발신)"
                ? `클릭!`
                : null
            }>
            <div>
              <i className="bi bi-chat-fill"></i>
            </div>
          </NavLink>
        </div>
      </section>
      <section className={classes.navAppLayout}>
        <NavLink
          to={
            appName === "기본" &&
            (realFunctionName === "전화걸기(발신)" ||
              realFunctionName === "영상통화 발신") &&
            `${urlContent}`
          }
          data-tooltip={
            appName === "기본" &&
            (realFunctionName === "전화걸기(발신)" ||
              realFunctionName === "영상통화 발신")
              ? `클릭!`
              : null
          }>
          <div>
            <i className="bi bi-telephone"></i>
          </div>
        </NavLink>
        <div>
          <i className="bi bi-camera"></i>
        </div>
        <div>
          <i className="bi bi-clock"></i>
        </div>
        <div>
          <i className="bi bi-browser-chrome"></i>
        </div>
        <NavLink
          to={
            appName === "기본" &&
            (realFunctionName === "문자 발신" ||
              realFunctionName === "문자 수신" ||
              realFunctionName === "예약 문자 발송" ||
              realFunctionName === "문자 전달" ||
              realFunctionName === "이미지, 동영상 전송" ||
              realFunctionName === "오디오 전송" ||
              realFunctionName === "연락처 공유") &&
            `${urlContent}`
          }
          data-tooltip={
            appName === "기본" &&
            (realFunctionName === "문자 발신" ||
              realFunctionName === "문자 수신" ||
              realFunctionName === "예약 문자 발송" ||
              realFunctionName === "문자 전달" ||
              realFunctionName === "이미지, 동영상 전송" ||
              realFunctionName === "오디오 전송" ||
              realFunctionName === "연락처 공유")
              ? `클릭!`
              : null
          }>
          <div>
            <i className="bi bi-chat-dots"></i>
          </div>
        </NavLink>
      </section>
    </section>
  );
};

export default MainApps;
