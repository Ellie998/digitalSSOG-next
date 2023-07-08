import { useContext, useState } from "react";

import classes from "./MessageAppMain.module.css";
import UrlContext from "../../../../page_context/UrlContext";
import NextDescriptionLink from "../../components/NextDescriptionLink";
import MakeList from "../../components/MakeList";

function MessageAppMain() {
  const {
    myAppName,
    myMethodId,
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
        {functionName === functionName_seeMessage && myMethodId === "2" && (
          <div className={classes.appTitle} tooltip={`클릭!`}>
            <NextDescriptionLink nextOption={true}>
              <div>읽지 않은 메시지 1개</div>
              <div className={classes.appTitle_btn}>보기</div>
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
            <NextDescriptionLink
              nextOption={
                (functionName === functionName_sendMessage &&
                  myMethodId === "2") ||
                functionName === functionName_resendMessage ||
                (functionName === functionName_seeMessage && myMethodId === "1")
              }>
              <MakeList
                listStyle="grid_twoLine"
                item1={{
                  className: "iconWrap_background--grey",
                  content: "홍",
                }}
                item2={{
                  className: "title",
                  content: "홍길동",
                }}
                subItem2={{
                  className: "subTitle",
                  content: "결혼식 장소 정보입니다...",
                }}
                item3={{
                  classeName: "info",
                  content: "오전 8:03",
                }}
                subItem3={{
                  className: "subInfo",
                  content: functionName === functionName_seeMessage ? "1" : "",
                }}></MakeList>
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
          <section className={`${classes.wigetApps}`}>
            <NextDescriptionLink
              nextOption={
                myAppName === appName_basic &&
                (functionName === functionName_sendMessage ||
                  functionName === functionName_reserveMessage ||
                  functionName === functionName_sendImg ||
                  functionName === functionName_sendAudio ||
                  functionName === functionName_sendPhoneNum)
              }>
              <div className={classes.wigetAppWrap}>
                <div>1:1 대화</div>
                <div className={classes.wigetIconWrap}>
                  <i className="bi bi-chat"></i>
                </div>
              </div>
            </NextDescriptionLink>
            <NextDescriptionLink>
              <div className={classes.wigetAppWrap}>
                <div>그룹 채팅</div>
                <div className={classes.wigetIconWrap}>
                  <i className="bi bi-people"></i>
                </div>
              </div>
            </NextDescriptionLink>
            <NextDescriptionLink>
              <div className={classes.wigetAppWrap}>
                <div>단체 문자</div>
                <div className={classes.wigetIconWrap}>
                  <i className="bi bi-wechat"></i>
                </div>
              </div>
            </NextDescriptionLink>
            <NextDescriptionLink>
              <div
                className={classes.wigetAppWrap}
                onClick={chatXBtnClickHandler}>
                <div></div>
                <div className={classes.wigetIconWrap}>
                  <i className="bi bi-x-lg"></i>
                </div>
              </div>
            </NextDescriptionLink>
          </section>
        </>
      )}
    </>
  );
}

export default MessageAppMain;
