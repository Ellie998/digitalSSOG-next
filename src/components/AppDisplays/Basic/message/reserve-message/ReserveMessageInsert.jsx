import { useState } from "react";
import classes from "./ReserveMessageInsert.module.css";

function ReserveMessageInsert() {
  const [inputClicked, setInputClicked] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [clockIsClicked, setClockIsClicked] = useState(false);
  const [backdropClicked, setBackdropClicked] = useState(false);

  function inputClickHandler(event) {
    setInputClicked(true);
  }
  function inputOutHandler(event) {
    setInputClicked(false);
  }
  function inputChangeHandler(event) {
    setInputValue(event.target.value);
  }
  function submitHandler() {
    setIsSubmitted(true);
  }
  function clockBtnClickHandler() {
    setClockIsClicked(true);
    setBackdropClicked(false);
  }
  function backdropClickHandler() {
    setBackdropClicked(true);
  }
  return (
    <>
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
            <div>오전 10:12</div>
            <div>어디에 계신가요?</div>
          </div>
          <div className={classes.getMessage}>
            <div>사거리 앞에 있습니다.</div>
            <div>오전 10:13</div>
          </div>
          {isSubmitted && (
            <div className={classes.resMessage}>
              <div
                onClick={clockBtnClickHandler}
                className={classes.resMessageClock}>
                <i class="bi bi-clock"></i>
              </div>
              <div>{isSubmitted && inputValue}</div>
            </div>
          )}
        </div>
        {!isSubmitted && (
          <div className={classes.resInfo}>
            <div>예약 전송: 2023년 06월 11일 (일) 오후 2:00 </div>
            <div>
              {/* <i className="bi bi-dash-lg"></i> */}
              <i className="bi bi-dash-circle-fill"></i>
            </div>
          </div>
        )}
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
                onChange={inputChangeHandler}
                readOnly={isSubmitted ? true : false}
                value={isSubmitted ? "" : inputValue}></input>
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
            <div
              className={classes.sendIcon}
              data-tooltip="클릭!"
              onClick={submitHandler}>
              <i className="bi bi-send"></i>
            </div>
          )}
        </div>
      </section>
      {clockIsClicked && !backdropClicked && (
        <>
          <div class={classes.backdrop} onClick={backdropClickHandler}>
            {" "}
          </div>
          <div class={classes.resSet}>
            <div>이 메시지는 06월 11일 (일) 오후 2:00에 전송됩니다.</div>
            <div className={classes.resSetNav}>
              <div>지금 보내기</div>
              <div>삭제</div>
              <div>편집</div>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default ReserveMessageInsert;
