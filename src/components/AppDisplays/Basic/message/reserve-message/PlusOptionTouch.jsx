import { useState } from "react";
import classes from "./PlusOptionTouch.module.css";
import { NavLink } from "react-router-dom";

function PlusOptionTouch({ functionName, appName, setInputValue, inputValue }) {
  const [inputClicked, setInputClicked] = useState(false);
  const [plusClicked, setPlusClicked] = useState(false);

  function inputClickHandler(event) {
    setInputClicked(true);
  }
  function inputOutHandler(event) {
    setInputClicked(false);
  }

  function plusBtnClickHandler() {
    setPlusClicked(true);
  }

  return (
    <section className={classes.appMain}>
      <div className={classes.appHeader}>
        <div className={classes.firstNameBox}>홍</div>
        <div className={classes.nameBox}>홍길동</div>
        <div>
          <i className="bi bi-three-dots-vertical"></i>
        </div>
      </div>
      <div
        className={`${classes.messages} ${
          plusClicked && classes.messagesSmall
        }`}>
        <div className={classes.sendMessage}>
          <div>오전 10:12</div>
          <div>어디에 계신가요?</div>
        </div>
        <div className={classes.getMessage}>
          <div>사거리 앞에 있습니다.</div>
          <div>오전 10:13</div>
        </div>
      </div>
      <div
        className={`${classes.appNav} ${plusClicked && classes.appNavSmall}`}>
        {!inputClicked && (
          <div className={classes.navOptions}>
            <div>
              <i className="bi bi-image"></i>
            </div>
            <div>
              <i className="bi bi-camera"></i>
            </div>
            <div data-tooltip="클릭!" onClick={plusBtnClickHandler}>
              <i className="bi bi-plus"></i>
            </div>
            {/* </NavLink> */}
          </div>
        )}
        {inputClicked && (
          <div className={classes.navOption}>
            <i className="bi bi-chevron-right"></i>
          </div>
        )}
        <div className={classes.inputBox}>
          <div>
            <input onFocus={inputClickHandler} onBlur={inputOutHandler}></input>
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
          <div className={classes.sendIcon}>
            <i className="bi bi-send"></i>
          </div>
        )}
      </div>
      {plusClicked && (
        <div className={classes.optionBox}>
          <div className={classes.optionRow}>
            <div>
              <div className={classes.iconWrap}>
                <i className="bi bi-share"></i>
              </div>
              <div>Private Share</div>
            </div>
            <div>
              <div className={classes.iconWrap}>
                <i className="bi bi-map"></i>
              </div>
              <div>네이버지도 위치공유</div>
            </div>
            <div>
              <div className={classes.iconWrap}>
                <i className="bi bi-bank"></i>
              </div>
              <div>신한 SOL송금</div>
            </div>
            <div>
              <div className={classes.iconWrap}>
                <i className="bi bi-bank"></i>
              </div>
              <div>Samsung Pay 선물</div>
            </div>
          </div>
          <div className={classes.optionRow}>
            <div>
              <div className={classes.iconWrap}>
                <i className="bi bi-bank"></i>
              </div>
              <div>토스 송금</div>
            </div>
            <div>
              <div className={classes.iconWrap}>
                <i className="bi bi-send"></i>
              </div>
              <div>빠른 답장 문구</div>
            </div>
            <div data-tooltip="클릭!">
              <NavLink to={`/description/${functionName}/${appName}/4`}>
                <div className={classes.iconWrap}>
                  <i className="bi bi-clock"></i>
                </div>
                <div>메시지 예약</div>
              </NavLink>
            </div>
            <div>
              <div className={classes.iconWrap}>
                <i className="bi bi-chat-left-dots"></i>
              </div>
              <div>제목</div>
            </div>
          </div>
          <div className={classes.optionRow}>
            <div>
              <div className={classes.iconWrap}>
                <i className="bi bi-geo-alt"></i>
              </div>
              <div>위치</div>
            </div>
            <div>
              <div className={classes.iconWrap}>
                <i className="bi bi-card-image"></i>
              </div>
              <div>이미지</div>
            </div>
            <div>
              <div className={classes.iconWrap}>
                <i className="bi bi-play-btn"></i>
              </div>
              <div>동영상</div>
            </div>
            <div>
              <div className={classes.iconWrap}>
                <i className="bi bi-music-note"></i>
              </div>
              <div>오디오</div>
            </div>
          </div>
          <div className={classes.optionRow}>
            <div>
              <div className={classes.iconWrap}>
                <i className="bi bi-person"></i>
              </div>
              <div>연락처</div>
            </div>
            <div>
              <div className={classes.iconWrap}>
                <i className="bi bi-calendar-date"></i>
              </div>
              <div>캘린더</div>
            </div>
            <div>
              <div className={classes.iconWrap}>
                <i className="bi bi-journal"></i>
              </div>
              <div>Samsung Notes</div>
            </div>
            <div>
              <div className={classes.iconWrap}>
                <i className="bi bi-mic"></i>
              </div>
              <div>음성녹음</div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default PlusOptionTouch;
