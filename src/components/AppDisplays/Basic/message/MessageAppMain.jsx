import { useState } from "react";
import classes from "./MessageAppMain.module.css";
import { NavLink } from "react-router-dom";

function MessageAppMain({ functionName, appName }) {
  const [isClicked, setIsClicked] = useState(false);
  const [isXClicked, setIsXClicked] = useState(true);
  const realFunctionName = functionName.slice(2);

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
        {realFunctionName === "문자 발신" && (
          <div className={classes.appTitle}>Messages</div>
        )}
        {realFunctionName === "문자 수신" && (
          <div className={classes.appTitle}>
            <div>읽지 않은 메시지 1개</div>
            <div>보기</div>
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
        {(realFunctionName === "문자 발신" ||
          realFunctionName === "문자 전달" ||
          realFunctionName === "문자 수신") && (
          <div className={classes.contentLists}>
            <div className={classes.firstNameBox}>홍</div>
            <NavLink
              to={
                realFunctionName === "문자 전달" ||
                realFunctionName === "문자 수신"
                  ? `/description/${functionName}/${appName}/2`
                  : null
              }
              data-tooltip={realFunctionName === "문자 전달" ? `클릭!` : null}>
              <div className={classes.nameBox}>홍길동</div>
              <div className={classes.time}>오전 8:03</div>
              <div className={`${classes.message} ${classes.longMessage}`}>
                결혼식 장소 정보입니다...
              </div>
              {realFunctionName === "문자 수신" && (
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
          <div className={classes.backdropLight}></div>
          <section className={`${classes.wigetApps} `}>
            <div>
              <NavLink
                data-tooltip={
                  appName === "기본" &&
                  (realFunctionName === "문자 발신" ||
                    realFunctionName === "예약 문자 발송")
                    ? `클릭!`
                    : null
                }
                to={
                  appName === "기본" &&
                  (realFunctionName === "문자 발신" ||
                    realFunctionName === "예약 문자 발송")
                    ? `/description/${functionName}/${appName}/2`
                    : null
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
