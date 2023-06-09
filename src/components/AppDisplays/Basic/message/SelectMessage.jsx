import classes from "./MessageAppMain.module.css";
import { NavLink } from "react-router-dom";

function SelectMessage({ functionName, appName }) {
  return (
    <section className={classes.AppMain}>
      <div className={classes.messageTitle}>
        <h1>읽지 않은 메시지 1개</h1>
        <div>보기</div>
      </div>
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
      <ul className={classes.messageLists}>
        <li data-tooltip="클릭!">
          <div className={classes.firstNameBox}>홍</div>
          <NavLink to={`/description/${functionName}/${appName}/2`}>
            <div className={classes.nameBox}>홍길동</div>
            <div className={classes.time}>오전 8:03</div>
            <div className={`${classes.message} ${classes.longMessage}`}>
              안녕하세요, 홍길동입니다. 전화 바랍니다.
            </div>
            <div className={classes.alert}>1</div>
          </NavLink>
        </li>
      </ul>

      <section className={classes.messagePlus}>
        <li>
          <i className="bi bi-envelope-plus"></i>
        </li>
      </section>
    </section>
  );
}

export default SelectMessage;
