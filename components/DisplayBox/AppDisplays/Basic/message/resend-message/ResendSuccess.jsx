import classes from "../Message.module.css";

function ResendSuccess() {
  return (
    <section className={classes.layout}>
      <div className={classes.main_header}>
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
        <div className={classes.navOptions}>
          <div>
            <i className="bi bi-image"></i>
          </div>
          <div>
            <i className="bi bi-camera"></i>
          </div>
          <div>
            <i className="bi bi-plus"></i>
          </div>
        </div>

        <div className={classes.inputBox}>
          <div>
            <input></input>
          </div>
          <div>
            <i className="bi bi-emoji-smile"></i>
          </div>
        </div>

        <div className={classes.soundIcon}>
          <i className="bi bi-soundwave"></i>
        </div>
      </div>
    </section>
  );
}

export default ResendSuccess;
