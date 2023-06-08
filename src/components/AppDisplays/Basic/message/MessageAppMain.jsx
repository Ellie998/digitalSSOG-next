import { useState } from "react";
import classes from "./MessageAppMain.module.css";
import { NavLink } from "react-router-dom";

function MessageMain({ functionName, appName }) {
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
    <section className={classes.AppMain}>
      <h1 className={classes.messageTitle}>Message</h1>
      <ul className={classes.messageETCLists}>
        <li>
          <i className="bi bi-funnel-fill"></i>
        </li>
        <li>
          <i className="bi bi-search"></i>
        </li>
        <li>
          <i className="bi bi-three-dots-vertical"></i>
        </li>
      </ul>
      <ul className={classes.messageCategoryLists}>
        <li>전체</li>
        <li>
          <i className="bi bi-plus"></i>
        </li>
      </ul>
      <ul className={classes.messageLists}></ul>
      {isXClicked && (
        <section className={classes.messagePlus}>
          <li>
            <i
              className="bi bi-envelope-plus"
              onClick={chatBtnClickHandler}></i>
          </li>
        </section>
      )}
      {isClicked && (
        <section className={classes.appNav}>
          <ul className={classes.wigetApps}>
            <li>
              <NavLink
                to={`/description/${functionName}/${appName}/2`}
                data-tooltip="클릭!">
                <p>1:1 대화</p>
                <i className="bi bi-chat"></i>
              </NavLink>
            </li>
            <li>
              <p>그룹 채팅</p>
              <i className="bi bi-people"></i>
            </li>
            <li>
              <p>단체 문자</p>
              <i className="bi bi-wechat"></i>
            </li>
            <li onClick={chatXBtnClickHandler}>
              <i className="bi bi-x-lg"></i>
            </li>
          </ul>
        </section>
      )}
    </section>
  );
}

export default MessageMain;
