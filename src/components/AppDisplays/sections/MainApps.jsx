import styles from "./AppMain.module.css";
import { NavLink } from "react-router-dom";

function MainApps({ functionName, appName }) {
  const realFunctionName = functionName.slice(2);
  return (
    <section className={styles.AppMain}>
      <section className={styles.mainApps}>
        <div>
          <div
            className={styles.kakaoApp}
            data-tooltip={
              appName === "카카오톡" &&
              functionName.slice(2) === "전화걸기(발신)"
                ? `클릭!`
                : null
            }>
            <NavLink
              to={
                appName === "카카오톡" &&
                functionName.slice(2) === "전화걸기(발신)"
                  ? `/description/${functionName}/${appName}/1`
                  : null
              }>
              <i className="bi bi-chat-fill"></i>
            </NavLink>
          </div>
        </div>
      </section>
      <section className={styles.mainNavApps}>
        <div className={styles.wigetApps}>
          <div
            data-tooltip={
              appName === "기본" &&
              (realFunctionName === "전화걸기(발신)" ||
                realFunctionName === "영상통화 발신")
                ? `클릭!`
                : null
            }>
            <NavLink
              to={
                appName === "기본" &&
                (realFunctionName === "전화걸기(발신)" ||
                  realFunctionName === "영상통화 발신")
                  ? `/description/${functionName}/${appName}/1`
                  : null
              }>
              <i className="bi bi-telephone"></i>
            </NavLink>
          </div>
          <div>
            <i className="bi bi-camera"></i>
          </div>
          <div>
            <i className="bi bi-clock"></i>
          </div>
          <div>
            <i className="bi bi-browser-chrome"></i>
          </div>
          <div
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
            <NavLink
              to={
                appName === "기본" &&
                (realFunctionName === "문자 발신" ||
                  realFunctionName === "문자 수신" ||
                  realFunctionName === "예약 문자 발송" ||
                  realFunctionName === "문자 전달" ||
                  realFunctionName === "이미지, 동영상 전송" ||
                  realFunctionName === "오디오 전송" ||
                  realFunctionName === "연락처 공유")
                  ? `/description/${functionName}/${appName}/1`
                  : null
              }>
              <i className="bi bi-chat-dots"></i>
            </NavLink>
          </div>
        </div>
      </section>
    </section>
  );
}

export default MainApps;
