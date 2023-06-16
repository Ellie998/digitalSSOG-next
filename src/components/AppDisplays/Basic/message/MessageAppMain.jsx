import { useContext, useState } from "react";
import classes from "./MessageAppMain.module.css";
import { NavLink } from "react-router-dom";
import { PageContext } from "../../sections/AppMain";

function MessageAppMain() {
  const {
    appName,
    methodId,
    urlContent,
    realFunctionName,
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
  } = useContext(PageContext);
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
        {(realFunctionName === functionName_sendMessage ||
          realFunctionName === functionName_sendImg ||
          realFunctionName === functionName_sendAudio ||
          realFunctionName === functionName_sendPhoneNum) && (
          <div className={classes.appTitle}>Messages</div>
        )}
        {realFunctionName === functionName_seeMessage && methodId === "2" && (
          <div className={classes.appTitle} data-tooltip={`클릭!`}>
            <NavLink to={`${urlContent}`}>
              <div>읽지 않은 메시지 1개</div>
              <div>보기</div>
            </NavLink>
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
        {(realFunctionName === functionName_sendMessage ||
          realFunctionName === functionName_resendMessage ||
          realFunctionName === functionName_seeMessage ||
          realFunctionName === functionName_sendImg ||
          realFunctionName === functionName_sendAudio ||
          realFunctionName === functionName_sendPhoneNum) && (
          <div className={classes.contentLists}>
            <div className={classes.firstNameBox}>홍</div>
            <NavLink
              to={
                realFunctionName === functionName_resendMessage ||
                (realFunctionName === functionName_seeMessage &&
                  methodId === "1" &&
                  `${urlContent}`)
              }
              data-tooltip={
                realFunctionName === functionName_resendMessage ||
                (realFunctionName === functionName_seeMessage &&
                  methodId === "1")
                  ? `클릭!`
                  : null
              }>
              <div className={classes.nameBox}>홍길동</div>
              <div className={classes.time}>오전 8:03</div>
              <div className={`${classes.message} ${classes.longMessage}`}>
                결혼식 장소 정보입니다...
              </div>
              {realFunctionName === functionName_seeMessage && (
                <div className={classes.alert}>1</div>
              )}
            </NavLink>
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
              <NavLink
                data-tooltip={
                  appName === appName_basic &&
                  (realFunctionName === functionName_sendMessage ||
                    realFunctionName === functionName_reserveMessage ||
                    realFunctionName === functionName_sendImg ||
                    realFunctionName === functionName_sendAudio ||
                    realFunctionName === functionName_sendPhoneNum)
                    ? `클릭!`
                    : null
                }
                to={
                  appName === appName_basic &&
                  (realFunctionName === functionName_sendMessage ||
                    realFunctionName === functionName_reserveMessage ||
                    realFunctionName === functionName_sendImg ||
                    realFunctionName === functionName_sendAudio ||
                    realFunctionName === functionName_sendPhoneNum) &&
                  `${urlContent}`
                }>
                <div>1:1 대화</div>
                <div>
                  <i className="bi bi-chat"></i>
                </div>
              </NavLink>
            </div>
            <div>
              <NavLink>
                <div>그룹 채팅</div>
                <div>
                  <i className="bi bi-people"></i>
                </div>
              </NavLink>
            </div>
            <div>
              <NavLink>
                <div>단체 문자</div>
                <div>
                  <i className="bi bi-wechat"></i>
                </div>
              </NavLink>
            </div>
            <div onClick={chatXBtnClickHandler}>
              <NavLink>
                <div></div>
                <div>
                  <i className="bi bi-x-lg"></i>
                </div>
              </NavLink>
            </div>
          </section>
        </>
      )}
    </>
  );
}

export default MessageAppMain;
