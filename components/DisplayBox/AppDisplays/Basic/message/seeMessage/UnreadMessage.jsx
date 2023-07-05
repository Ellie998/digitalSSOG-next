import { useContext } from "react";
import Link from "next/link";

import { PageContext } from "../../../../sections/AppMain";
import classes from "./UnreadMessage.module.css";
import UrlContext from "../../../../../page_context/UrlContext";

function UnreadMessage() {
  const { methodId, urlContent, functionName, functionName_seeMessage } =
    useContext(UrlContext);

  return (
    <>
      <section className={classes.layout}>
        {functionName === functionName_seeMessage && methodId === "2" && (
          <div className={classes.header}>
            <div>읽지 않은 메시지</div>
            <div>
              <i className="bi bi-three-dots-vertical"></i>
            </div>
          </div>
        )}

        <div className={classes.main_messageList}>
          <div className={classes.message_firstName}>홍</div>
          <Link
            href={
              functionName === functionName_seeMessage && methodId === "2"
                ? urlContent
                : ""
            }
            data-tooltip={
              functionName === functionName_seeMessage && methodId === "2"
                ? `클릭!`
                : null
            }>
            <div className={classes.message_name}>홍길동</div>
            <div className={classes.message_time}>오전 8:03</div>
            <div className={classes.message_content}>
              결혼식 장소 정보입니다...
            </div>
            {functionName === functionName_seeMessage && (
              <div className={classes.message_alert}>1</div>
            )}
          </Link>
        </div>
      </section>
    </>
  );
}

export default UnreadMessage;
