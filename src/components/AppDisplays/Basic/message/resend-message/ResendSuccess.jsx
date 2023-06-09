import classes from "../send-message/MessageInsert.module.css";

function ResendSuccess() {
  return (
    <section className={classes.appMain}>
      <div className={classes.appHeader}>
        <div className={classes.firstNameBox}>홍</div>
        <div className={classes.nameBox}>홍길동</div>
        <div>
          <i className="bi bi-three-dots-vertical"></i>
        </div>
      </div>
      <div className={classes.messages}>
        <div className={classes.sendMessage}>
          <div>오전 9:54</div>
          <div>결혼식 주소입니다. OO특별시 OO구 OO로 OOO번길 O, OOO 컨벤션</div>
        </div>
      </div>
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
            <input></input>
          </li>
          <li>
            <i className="bi bi-emoji-smile"></i>
          </li>
        </ul>

        <div className={classes.soundIcon}>
          <i className="bi bi-soundwave"></i>
        </div>
      </div>
    </section>
  );
}

export default ResendSuccess;
