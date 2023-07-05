import { useContext, useState } from "react";
import Link from "next/link";

import { PageContext } from "../../../sections/AppMain";
import classes from "./MessageAppMain.module.css";
import UrlContext from "../../../../page_context/UrlContext";

function MessageAppMain() {
  const {
    appName,
    methodId,
    urlContent,
    functionName,
    //
    functionName_seeMessage,
    functionName_sendImg,
    functionName_sendMessage,
    functionName_sendAudio,
    functionName_sendPhoneNum,
    functionName_resendMessage,
    functionName_reserveMessage,
    //
    appName_basic,
  } = useContext(UrlContext);
  const [isClicked, setIsClicked] = useState(false);
  const [isXClicked, setIsXClicked] = useState(true);

  function chatBtnClickHandler() {
    setIsClicked(true);
    setIsXClicked(false);
  }
  function chatXBtnClickHandler() {
    setIsClicked(false);
    setIsXClicked(true);
  }

  return (
    <>
      <section className={classes.AppMain}>
        {(functionName === functionName_sendMessage ||
          functionName === functionName_sendImg ||
          functionName === functionName_sendAudio ||
          functionName === functionName_sendPhoneNum) && (
          <div className={classes.appTitle}>Messages</div>
        )}
        {functionName === functionName_seeMessage && methodId === "2" && (
          <div className={classes.appTitle} data-tooltip={`클릭!`}>
            <Link href={urlContent}>
              <div>읽지 않은 메시지 1개</div>
              <div>보기</div>
            </Link>
          </div>
        )}
        <div className={classes.appETCLists}>
          <div>
            <i className="bi bi-funnel-fill"></i>
          </div>
          <div>
            <i className="bi bi-search"></i>
          </div>
          <div>
            <i className="bi bi-three-dots-vertical"></i>
          </div>
        </div>
        <div className={classes.appCategoryLists}>
          <div>전체</div>
          <div>
            <i className="bi bi-plus"></i>
          </div>
        </div>
        {(functionName === functionName_sendMessage ||
          functionName === functionName_resendMessage ||
          functionName === functionName_seeMessage ||
          functionName === functionName_sendImg ||
          functionName === functionName_sendAudio ||
          functionName === functionName_sendPhoneNum) && (
          <div className={classes.contentLists}>
            <div className={classes.firstNameBox}>홍</div>
            <Link
              href={
                (functionName === functionName_sendMessage &&
                  methodId === "2") ||
                functionName === functionName_resendMessage ||
                (functionName === functionName_seeMessage && methodId === "1")
                  ? urlContent
                  : ""
              }
              data-tooltip={
                (functionName === functionName_sendMessage &&
                  methodId === "2") ||
                functionName === functionName_resendMessage ||
                (functionName === functionName_seeMessage && methodId === "1")
                  ? `클릭!`
                  : null
              }>
              <div className={classes.nameBox}>홍길동</div>
              <div className={classes.time}>오전 8:03</div>
              <div className={`${classes.message} ${classes.longMessage}`}>
                결혼식 장소 정보입니다...
              </div>
              {functionName === functionName_seeMessage && (
                <div className={classes.alert}>1</div>
              )}
            </Link>
          </div>
        )}

        {isXClicked && (
          <div className={classes.messagePlus}>
            <i
              className="bi bi-envelope-plus"
              onClick={chatBtnClickHandler}></i>
          </div>
        )}
      </section>
      {isClicked && (
        <>
          <div
            className={classes.backdropLight}
            onClick={chatXBtnClickHandler}></div>
          <section className={`${classes.wigetApps} `}>
            <div>
              <Link
                data-tooltip={
                  appName === appName_basic &&
                  (functionName === functionName_sendMessage ||
                    functionName === functionName_reserveMessage ||
                    functionName === functionName_sendImg ||
                    functionName === functionName_sendAudio ||
                    functionName === functionName_sendPhoneNum)
                    ? `클릭!`
                    : ""
                }
                href={
                  appName === appName_basic &&
                  (functionName === functionName_sendMessage ||
                    functionName === functionName_reserveMessage ||
                    functionName === functionName_sendImg ||
                    functionName === functionName_sendAudio ||
                    functionName === functionName_sendPhoneNum)
                    ? urlContent
                    : null
                }>
                <div>1:1 대화</div>
                <div>
                  <i className="bi bi-chat"></i>
                </div>
              </Link>
            </div>
            <div>
              <Link>
                <div>그룹 채팅</div>
                <div>
                  <i className="bi bi-people"></i>
                </div>
              </Link>
            </div>
            <div>
              <Link>
                <div>단체 문자</div>
                <div>
                  <i className="bi bi-wechat"></i>
                </div>
              </Link>
            </div>
            <div onClick={chatXBtnClickHandler}>
              <Link>
                <div></div>
                <div>
                  <i className="bi bi-x-lg"></i>
                </div>
              </Link>
            </div>
          </section>
        </>
      )}
    </>
  );
}

export default MessageAppMain;
