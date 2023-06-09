import { useState } from "react";
import classes from "./MessageInsert.module.css";
import { NavLink } from "react-router-dom";

function MessageInsert({ functionName, appName, setInputValue, inputValue }) {
  const [inputClicked, setInputClicked] = useState(false);
  // const [inputValue, setInputValue] = useState("");

  function inputClickHandler(event) {
    setInputClicked(true);
  }
  function inputOutHandler(event) {
    setInputClicked(false);
  }
  function inputChangeHandler(event) {
    setInputValue(event.target.value);
  }
  return (
    <section className={classes.appMain}>
      <div className={classes.appHeader}>
        {/* <div>
          <i className="bi bi-chevron-left"></i>
        </div> */}
        <div className={classes.firstNameBox}>홍</div>
        <div className={classes.nameBox}>홍길동</div>
        <div>
          <i className="bi bi-three-dots-vertical"></i>
        </div>
      </div>
      <div className={classes.messages}>
        <div className={classes.sendMessage}>
          <div>오전 10:12</div>
          <div>어디에 계신가요?</div>
        </div>
        <div className={classes.getMessage}>
          <div>사거리 앞에 있습니다.</div>
          <div>오전 10:13</div>
        </div>
      </div>
      <div className={classes.appNav}>
        {!inputClicked && (
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
        )}
        {inputClicked && (
          <div className={classes.navOption}>
            <i className="bi bi-chevron-right"></i>
          </div>
        )}
        <div className={classes.inputBox}>
          <div>
            <input
              onFocus={inputClickHandler}
              onBlur={inputOutHandler}
              onChange={inputChangeHandler}></input>
          </div>
          <div>
            <i className="bi bi-emoji-smile"></i>
          </div>
        </div>
        {!inputValue && (
          <div className={classes.soundIcon}>
            <i className="bi bi-soundwave"></i>
          </div>
        )}
        {inputValue && (
          <NavLink to={`/description/${functionName}/${appName}/4`}>
            <div className={classes.sendIcon} data-tooltip="클릭!">
              <i className="bi bi-send"></i>
            </div>
          </NavLink>
        )}
      </div>
    </section>
  );
}

export default MessageInsert;
