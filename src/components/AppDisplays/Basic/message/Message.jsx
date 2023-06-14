import { useContext, useState } from "react";
import classes from "./Message.module.css";
import { NavLink } from "react-router-dom";
import { PageContext } from "../../sections/AppMain";

function Message() {
  const {
    functionName,
    appName,
    methodId,
    urlContent,
    descriptionId,
    realFunctionName,
  } = useContext(PageContext);
  const [inputClicked, setInputClicked] = useState(false);
  const [sendBtnClicked, setSendBtnClicked] = useState(false);
  const [messageContent, setMessageContent] = useState("");
  const [enteredMessage, setenteredMessage] = useState("");
  const [plusClicked, setPlusClicked] = useState(false);
  const [isOvered, setIsOvered] = useState(false);

  function mouseOverHandler(event) {
    setTimeout(() => {
      setIsOvered(true);
    }, 1000);
  }
  function backClickHandler() {
    setIsOvered(false);
    setPlusClicked(false);
  }

  function inputClickHandler(event) {
    setInputClicked(true);
    setSendBtnClicked(false);
  }
  function sendBtnClickHandler(event) {
    setMessageContent(enteredMessage);
    setSendBtnClicked(true);
    setenteredMessage("");
  }

  function inputOutHandler(event) {
    setInputClicked(false);
  }
  function inputChangeHandler(event) {
    setenteredMessage(event.target.value);
  }
  function plusBtnClickHandler() {
    setPlusClicked(true);
  }

  return (
    <section className={classes.appMain}>
      <div className={classes.appHeader} onClick={backClickHandler}>
        <div className={classes.firstNameBox}>홍</div>
        <div className={classes.nameBox}>홍길동</div>
        <div>
          <i className="bi bi-three-dots-vertical"></i>
        </div>
      </div>
      <div
        className={`${classes.messages} ${
          plusClicked && classes.messagesSmall
        }`}
        onClick={backClickHandler}>
        <div className={classes.getMessage}>
          <div onPointerDown={mouseOverHandler}>
            {/* <div onMouseOver={mouseOverHandler}> */}
            결혼식 주소입니다. <br></br>OO특별시 OO구 <br></br>
            OO로 OOO번길 O, OOO 컨벤션
          </div>
          <div>오전 8:03</div>
        </div>
        {messageContent && sendBtnClicked && (
          <div className={classes.sendMessage}>
            <div>오전 9:54</div>
            <div>{messageContent}</div>
          </div>
        )}

        {isOvered && (
          <div className={classes.options}>
            <div>삭제</div>
            <div>답장</div>
            <div>글자 복사</div>
            <div>텍스트 선택</div>

            <NavLink
              data-tooltip={
                appName === "기본" && realFunctionName === "문자 전달"
                  ? `클릭!`
                  : null
              }
              to={
                appName === "기본" && realFunctionName === "문자 전달"
                  ? `/description/${functionName}/${appName}/3`
                  : null
              }>
              <div>전달</div>
            </NavLink>
            <div>공유</div>
            <div>별표하기</div>
          </div>
        )}
      </div>
      <div
        className={`${classes.appNav} ${plusClicked && classes.appNavSmall}`}
        onClick={plusClicked ? backClickHandler : null}>
        {!inputClicked && (
          <div className={classes.navOptions}>
            <div>
              <i className="bi bi-image"></i>
            </div>
            <div>
              <i className="bi bi-camera"></i>
            </div>
            <div data-tooltip="클릭" onClick={plusBtnClickHandler}>
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
              value={sendBtnClicked ? "" : enteredMessage}></input>
          </div>
          <div>
            <i className="bi bi-emoji-smile"></i>
          </div>
        </div>
        {!enteredMessage && (
          <div className={classes.soundIcon}>
            <i className="bi bi-soundwave"></i>
          </div>
        )}
        {enteredMessage && (
          <NavLink>
            <div
              className={classes.sendIcon}
              onClick={sendBtnClickHandler}
              data-tooltip="클릭!">
              <i className="bi bi-send"></i>
            </div>
          </NavLink>
        )}
      </div>
      {plusClicked && (
        <div className={`${classes.optionBox} `}>
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
            <div>
              <NavLink
                data-tooltip={
                  appName === "기본" && realFunctionName === "예약 문자 발송"
                    ? `클릭!`
                    : null
                }
                to={
                  appName === "기본" && realFunctionName === "예약 문자 발송"
                    ? `/description/${functionName}/${appName}/4`
                    : null
                }>
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
              <NavLink
                data-tooltip={
                  appName === "기본" &&
                  realFunctionName === "이미지, 동영상 전송"
                    ? `클릭!`
                    : null
                }
                to={
                  appName === "기본" &&
                  realFunctionName === "이미지, 동영상 전송"
                    ? `/description/${functionName}/${appName}/4`
                    : null
                }>
                <div className={classes.iconWrap}>
                  <i className="bi bi-card-image"></i>
                </div>
                <div>이미지</div>
              </NavLink>
            </div>
            <div>
              <NavLink
                data-tooltip={
                  appName === "기본" &&
                  realFunctionName === "이미지, 동영상 전송"
                    ? `클릭!`
                    : null
                }
                to={
                  appName === "기본" &&
                  realFunctionName === "이미지, 동영상 전송"
                    ? `/description/${functionName}/${appName}/4`
                    : null
                }>
                <div className={classes.iconWrap}>
                  <i className="bi bi-play-btn"></i>
                </div>
                <div>동영상</div>
              </NavLink>
            </div>
            <div>
              <NavLink
                data-tooltip={
                  appName === "기본" && realFunctionName === "오디오 전송"
                    ? `클릭!`
                    : null
                }
                to={
                  appName === "기본" && realFunctionName === "오디오 전송"
                    ? `/description/${functionName}/${appName}/4`
                    : null
                }>
                <div className={classes.iconWrap}>
                  <i className="bi bi-music-note"></i>
                </div>
                <div>오디오</div>
              </NavLink>
            </div>
          </div>
          <div className={classes.optionRow}>
            <div>
              <NavLink
                data-tooltip={
                  appName === "기본" && realFunctionName === "연락처 공유"
                    ? `클릭!`
                    : null
                }
                to={
                  appName === "기본" && realFunctionName === "연락처 공유"
                    ? `/description/${functionName}/${appName}/4`
                    : null
                }>
                <div className={classes.iconWrap}>
                  <i className="bi bi-person"></i>
                </div>
                <div>연락처</div>
              </NavLink>
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

export default Message;
