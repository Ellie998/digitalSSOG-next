import { useState } from "react";
import classes from "./BasicMessage.module.css";
import { NavLink } from "react-router-dom";

function BasicMessage({ functionName, appName }) {
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
        <div className={classes.appTitle}>Messages</div>
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
        <div className={classes.contentLists}>
          <div className={classes.firstNameBox}>홍</div>
          <div className={classes.nameBox}>홍길순</div>
          <div className={classes.time}>오전 8:03</div>
          <div className={`${classes.message} ${classes.longMessage}`}>
            결혼식 장소 정보입니다...
          </div>
        </div>

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
              <div>1:1 대화</div>
              <div>
                <i className="bi bi-chat"></i>
              </div>
            </div>
            <div>
              <div>그룹 채팅</div>
              <div>
                <i className="bi bi-people"></i>
              </div>
            </div>
            <div>
              <div>단체 문자</div>
              <div>
                <i className="bi bi-wechat"></i>
              </div>
            </div>
            <div onClick={chatXBtnClickHandler}>
              <div>
                <i className="bi bi-x-lg"></i>
              </div>
            </div>
          </section>
        </>
      )}
    </>
  );
}

export default BasicMessage;
