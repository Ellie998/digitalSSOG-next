import { useContext } from "react";
import classes from "./UnreadMessage.module.css";
import { NavLink } from "react-router-dom";
import { PageContext } from "../../../sections/AppMain";

function UnreadMessage() {
  const {
    functionName,
    appName,
    methodId,
    urlContent,
    descriptionId,
    realFunctionName,
  } = useContext(PageContext);

  return (
    <>
      <section className={classes.layout}>
        {realFunctionName === "문자 수신" && methodId === "2" && (
          <div className={classes.header}>
            <div>읽지 않은 메시지</div>
            <div>
              <i className="bi bi-three-dots-vertical"></i>
            </div>
          </div>
        )}

        <div className={classes.main_messageList}>
          <div className={classes.message_firstName}>홍</div>
          <NavLink
            to={
              realFunctionName === "문자 수신" && methodId === "2"
                ? `${urlContent}/2/3`
                : null
            }
            data-tooltip={
              realFunctionName === "문자 수신" && methodId === "2"
                ? `클릭!`
                : null
            }>
            <div className={classes.message_name}>홍길동</div>
            <div className={classes.message_time}>오전 8:03</div>
            <div className={classes.message_content}>
              결혼식 장소 정보입니다...
            </div>
            {realFunctionName === "문자 수신" && (
              <div className={classes.message_alert}>1</div>
            )}
          </NavLink>
        </div>
      </section>
    </>
  );
}

export default UnreadMessage;