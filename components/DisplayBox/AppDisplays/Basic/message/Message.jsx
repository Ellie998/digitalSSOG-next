import { useContext, useState } from "react";
import classes from "./Message.module.css";
import ChoiceImg from "../../components/ChoiceImg";
import UrlContext from "../../../../page_context/UrlContext";
import TargetContent from "../../components/TargetContent";

function Message() {
  const {
    myAppName,
    myMethodId,
    functionName,
    //
    functionName_resendMessage,
    functionName_reserveMessage,
    functionName_sendAudio,
    functionName_sendPhoneNum,
    functionName_sendImg,
    //
    appName_basic,
  } = useContext(UrlContext);
  const [inputClicked, setInputClicked] = useState(false);
  const [sendBtnClicked, setSendBtnClicked] = useState(false);
  const [messageContent, setMessageContent] = useState("");
  const [enteredMessage, setEnteredMessage] = useState("");
  const [plusClicked, setPlusClicked] = useState(false);
  const [imgBtnClicked, setImgBtnClicked] = useState(false);
  const [isOvered, setIsOvered] = useState(false);
  // Choice IMG
  const [choicedImgs, setChoicedImgs] = useState([]);
  const [sendImgs, setSendImgs] = useState([]);

  function mouseOverHandler(event) {
    setTimeout(() => {
      setIsOvered(true);
    }, 1000);
  }

  function backClickHandler() {
    setIsOvered(false);
    setPlusClicked(false);
    setImgBtnClicked(false);
  }

  function inputClickHandler(event) {
    setInputClicked(true);
    setSendBtnClicked(false);
  }
  function sendBtnClickHandler(event) {
    setMessageContent(enteredMessage);
    setSendBtnClicked(true);
    setEnteredMessage("");
    setImgBtnClicked(false);
    setSendImgs([...choicedImgs]);
    setChoicedImgs([]);
  }

  function inputOutHandler(event) {
    setInputClicked(false);
  }
  function inputChangeHandler(event) {
    setEnteredMessage(event.target.value);
  }
  function plusBtnClickHandler() {
    setPlusClicked(true);
    setImgBtnClicked(false);
    setChoicedImgs([]);
    setSendBtnClicked(false);
  }
  function imgNavBtnClickHandler() {
    setImgBtnClicked(true);
    setPlusClicked(false);
    setMessageContent("");
    setSendBtnClicked(false);
    setChoicedImgs([]);
  }

  // OPTION IMG CLICKED
  function imgCheckHandler(event) {
    let updatedValue;
    updatedValue = event.target.id;
    event.target.checked === true &&
      setChoicedImgs((prevObject) => [...prevObject, updatedValue]);

    event.target.checked === false &&
      setChoicedImgs((prevObject) => {
        prevObject = prevObject.filter((item) => item !== updatedValue);
        return [...prevObject];
      });
  }
  function deleteBtnHandler(event) {
    if (event.target.tagName === "I") {
      const deleteItem = event.target.parentNode.dataset.deleteitemid;
      setChoicedImgs((prevObject) => {
        prevObject = prevObject.filter((item) => item !== deleteItem);
        return [...prevObject];
      });
    } else {
      const deleteItem = event.target.dataset.deleteitemid;
      setChoicedImgs((prevObject) => {
        prevObject = prevObject.filter((item) => item !== deleteItem);
        return [...prevObject];
      });
    }
  }

  return (
    <div className={classes.layout}>
      <div className={classes.main_header} onClick={backClickHandler}>
        <div className={classes.firstNameBox}>홍</div>
        <div className={classes.nameBox}>홍길동</div>
        <div>
          <i className="bi bi-three-dots-vertical"></i>
        </div>
      </div>
      <div
        className={`${classes.messages} ${
          plusClicked ? classes.messagesSmall : ""
        }
        ${imgBtnClicked || inputClicked ? classes["messagesSmall--2to4"] : ""}`}
        onClick={backClickHandler}>
        <div className={classes.getMessage}>
          <div onPointerDown={mouseOverHandler}>
            <TargetContent
              targetOption={
                !isOvered &&
                sendImgs.length === "0" &&
                myAppName === appName_basic &&
                functionName === functionName_resendMessage
              }>
              결혼식 주소입니다. <br></br>OO특별시 OO구 <br></br>
              OO로 OOO번길 O, OOO 컨벤션
            </TargetContent>
          </div>
          <div>오전 8:03</div>
        </div>
        {!messageContent && sendBtnClicked && (
          <div className={classes.sendMessage}>
            <div>오전 9:54</div>
            <div style={{ display: "none" }}></div>
            <div className={classes.imgBox}></div>
          </div>
        )}
        {messageContent && sendImgs.length !== 0 && sendBtnClicked && (
          <div className={classes.sendMessage}>
            <div className={classes.imgBox}></div>
            <div style={{ display: "none" }}></div>
          </div>
        )}
        {messageContent && sendBtnClicked && (
          <div className={classes.sendMessage}>
            <div>오전 9:54</div>
            <div>{messageContent}</div>
          </div>
        )}
        {/* message clicke option */}
        {isOvered && (
          <div className={classes.options}>
            <div>삭제</div>
            <div>답장</div>
            <div>글자 복사</div>
            <div>텍스트 선택</div>
            {/* 전달 */}
            <TargetContent
              targetOption={
                myAppName === appName_basic &&
                functionName === functionName_resendMessage
              }
              isNextDescriptionLink={true}>
              전달
            </TargetContent>
            <div>공유</div>
            <div>별표하기</div>
          </div>
        )}
      </div>
      {/* input nav */}
      <div
        className={`${classes.appNav} ${plusClicked ? classes.appNavSmall : ""}
        ${imgBtnClicked ? classes["appNavSmall--6to7"] : ""}`}>
        {!inputClicked && (
          <div className={classes.navOptions}>
            <div onClick={imgNavBtnClickHandler}>
              <TargetContent
                targetOption={
                  !imgBtnClicked &&
                  sendImgs.length === 0 &&
                  myAppName === appName_basic &&
                  functionName === functionName_sendImg &&
                  myMethodId === "1"
                }>
                <i className="bi bi-image"></i>
              </TargetContent>
            </div>
            <div>
              <i className="bi bi-camera"></i>
            </div>
            <div onClick={plusBtnClickHandler}>
              <TargetContent
                targetOption={
                  !plusClicked &&
                  myAppName === appName_basic &&
                  (functionName === functionName_reserveMessage ||
                    (functionName === functionName_sendImg &&
                      myMethodId === "2") ||
                    functionName == functionName_sendAudio ||
                    functionName == functionName_sendPhoneNum)
                }>
                <i className="bi bi-plus"></i>
              </TargetContent>
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
        {!enteredMessage && choicedImgs.length === 0 && (
          <div className={classes.soundIcon}>
            <i className="bi bi-soundwave"></i>
          </div>
        )}
        {(enteredMessage || choicedImgs.length !== 0) && (
          <div className={classes.sendIcon} onClick={sendBtnClickHandler}>
            <i className="bi bi-send"></i>
          </div>
        )}
      </div>
      {imgBtnClicked && choicedImgs.length >= 1 && (
        <div className={classes.optionInfoWrap}>
          {choicedImgs?.map((item) => (
            <div className={classes.optionImgWrap} key={Math.random()}>
              <div className={classes.imgBox}>{item.slice(3, 4)}</div>
              <div
                className={classes.deleteBtn}
                onClick={deleteBtnHandler}
                data-deleteitemid={item}>
                <i className="bi bi-dash-circle"></i>
              </div>
            </div>
          ))}
        </div>
      )}
      {plusClicked && (
        <div className={`${classes["optionBox_background--grey"]} `}>
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
              <TargetContent
                targetOption={
                  myAppName === appName_basic &&
                  functionName === functionName_reserveMessage
                }
                isNextDescriptionLink={true}>
                <div className={classes.iconWrap}>
                  <i className="bi bi-clock"></i>
                </div>
                <div>메시지 예약</div>
              </TargetContent>
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
              <TargetContent
                targetOption={
                  myAppName === appName_basic &&
                  functionName === functionName_sendImg &&
                  myMethodId === "2"
                }
                isNextDescriptionLink={true}>
                <div className={classes.iconWrap}>
                  <i className="bi bi-card-image"></i>
                </div>
                <div>이미지</div>
              </TargetContent>
            </div>
            <div>
              <TargetContent
                targetOption={
                  myAppName === appName_basic &&
                  functionName === functionName_sendImg &&
                  myMethodId === "2"
                }
                isNextDescriptionLink={true}>
                <div className={classes.iconWrap}>
                  <i className="bi bi-play-btn"></i>
                </div>
                <div>동영상</div>
              </TargetContent>
            </div>
            <div>
              <TargetContent
                targetOption={
                  myAppName === appName_basic &&
                  functionName === functionName_sendAudio
                }
                isNextDescriptionLink={true}>
                <div className={classes.iconWrap}>
                  <i className="bi bi-music-note"></i>
                </div>
                <div>오디오</div>
              </TargetContent>
            </div>
          </div>
          <div className={classes.optionRow}>
            <div>
              <TargetContent
                targetOption={
                  myAppName === appName_basic &&
                  functionName === functionName_sendPhoneNum
                }
                isNextDescriptionLink={true}>
                <div className={classes.iconWrap}>
                  <i className="bi bi-person"></i>
                </div>
                <div>연락처</div>
              </TargetContent>
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
      {imgBtnClicked && (
        <div className={classes.optionBox}>
          <ChoiceImg
            onImgCheckHandler={imgCheckHandler}
            choicedImgs={choicedImgs}
          />
        </div>
      )}
    </div>
  );
}

export default Message;
