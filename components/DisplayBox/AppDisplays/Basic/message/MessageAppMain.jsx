import { useContext, useState } from "react";

import classes from "./MessageAppMain.module.css";
import UrlContext from "../../../../page_context/UrlContext";
import NextDescriptionLink from "../../../../NextDescriptionLink";

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
          <div className={classes.appTitle} tooltip={`클릭!`}>
            <NextDescriptionLink nextOption={true}>
              <div>읽지 않은 메시지 1개</div>
              <div>보기</div>
            </NextDescriptionLink>
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
            <NextDescriptionLink
              nextOption={
                (functionName === functionName_sendMessage &&
                  methodId === "2") ||
                functionName === functionName_resendMessage ||
                (functionName === functionName_seeMessage && methodId === "1")
              }>
              <div className={classes.nameBox}>홍길동</div>
              <div className={classes.time}>오전 8:03</div>
              <div className={`${classes.message} ${classes.longMessage}`}>
                결혼식 장소 정보입니다...
              </div>
              {functionName === functionName_seeMessage && (
                <div className={classes.alert}>1</div>
              )}
            </NextDescriptionLink>
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
              <NextDescriptionLink
                nextOption={
                  appName === appName_basic &&
                  (functionName === functionName_sendMessage ||
                    functionName === functionName_reserveMessage ||
                    functionName === functionName_sendImg ||
                    functionName === functionName_sendAudio ||
                    functionName === functionName_sendPhoneNum)
                }>
                <div>1:1 대화</div>
                <div>
                  <i className="bi bi-chat"></i>
                </div>
              </NextDescriptionLink>
            </div>
            <div>
              <NextDescriptionLink>
                <div>그룹 채팅</div>
                <div>
                  <i className="bi bi-people"></i>
                </div>
              </NextDescriptionLink>
            </div>
            <div>
              <NextDescriptionLink>
                <div>단체 문자</div>
                <div>
                  <i className="bi bi-wechat"></i>
                </div>
              </NextDescriptionLink>
            </div>
            <div onClick={chatXBtnClickHandler}>
              <NextDescriptionLink>
                <div></div>
                <div>
                  <i className="bi bi-x-lg"></i>
                </div>
              </NextDescriptionLink>
            </div>
          </section>
        </>
      )}
    </>
  );
}

export default MessageAppMain;
