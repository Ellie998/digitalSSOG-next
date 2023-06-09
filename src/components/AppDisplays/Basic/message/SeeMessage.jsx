import classes from "./MessageInsert.module.css";

function SeeMessage({ functionName, appName }) {
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
          <div>
            6월 9일
            <br />
            오전 10:12
          </div>
          <div>어디에 계신가요?</div>
        </div>
        <div className={classes.getMessage}>
          <div>사거리 앞에 있습니다.</div>
          <div>오전 10:13</div>
        </div>
        <div className={classes.getMessage}>
          <div>
            안녕하세요, <br></br>홍길동입니다.<br></br> 전화 바랍니다.
          </div>
          <div>오전 8:03</div>
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

export default SeeMessage;
