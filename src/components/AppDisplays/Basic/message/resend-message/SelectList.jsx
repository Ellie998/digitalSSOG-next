import classes from "../MessageAppMain.module.css";
import { NavLink } from "react-router-dom";

function SelectList({ functionName, appName }) {
  return (
    <section className={classes.AppMain}>
      <div className={classes.messageTitle}>
        <h1>Messages</h1>
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
            <div className={classes.nameBox}>홍길순</div>
            <div className={classes.time}>오전 8:03</div>
            <div className={`${classes.message} ${classes.longMessage}`}>
              결혼식 장소 정보입니다...
            </div>
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

export default SelectList;
