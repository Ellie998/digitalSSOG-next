import classes from "../send-message/MessageInsert.module.css";
import { NavLink } from "react-router-dom";

function SendResend({ functionName, appName }) {
  return (
    <section className={classes.appMain}>
      <div className={classes.appHeader}>
        <div className={classes.firstNameBox}>홍</div>
        <div className={classes.nameBox}>홍길동</div>
        <div>
          <i className="bi bi-three-dots-vertical"></i>
        </div>
      </div>
      <div className={classes.messages}></div>
      <div className={classes.appNav}>
        <ul className={classes.navOptions}>
          <li>
            <i className="bi bi-image"></i>
          </li>
          <li>
            <i className="bi bi-camera"></i>
          </li>
          <li>
            <i className="bi bi-plus"></i>
          </li>
        </ul>

        <ul className={classes.inputBox}>
          <li>
            <input
              readOnly
              value="결혼식 주소입니다. OO특별시 OO구 
            OO로 OOO번길 O, OOO 컨벤션"></input>
          </li>
          <li>
            <i className="bi bi-emoji-smile"></i>
          </li>
        </ul>

        <NavLink to={`/description/${functionName}/${appName}/5`}>
          <div className={classes.sendIcon} data-tooltip="클릭!">
            <i className="bi bi-send"></i>
          </div>
        </NavLink>
      </div>
    </section>
  );
}

export default SendResend;
