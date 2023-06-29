import { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { PageContext } from "../sections/AppMain";
import classes from "./KakaoChatRoom.module.css";
import ChoiceImg from "../Basic/components/ChoiceImg";
import MakeList from "../Basic/components/MakeList";

function KakaoChatRoom() {
  const {
    appName,
    urlContent,
    realFunctionName,
    methodId,
    //
    functionName_resendMessage,
    functionName_reserveMessage,
    functionName_sendAudio,
    functionName_sendPhoneNum,
    functionName_sendImg,
    //
    appName_basic,
  } = useContext(PageContext);
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
      <div className={classes.main_headers} onClick={backClickHandler}>
        <MakeList
          listStyle={"flex_spaceBetween"}
          leftFlexItem={[
            {
              classeName: "title",
              content: <i className="bi bi-arrow-left"></i>,
            },
            { classeName: "title--bold", content: "그룹채팅" },
            { classeName: "title", content: "2" },
          ]}
          rightFlexItem={[
            {
              className: "",
              content: <i className="bi bi-search"></i>,
            },
            {
              className: "",
              content: <i className="bi bi-list"></i>,
            },
          ]}></MakeList>
      </div>
      <div
        className={`${classes.messages} ${
          plusClicked ? classes.messagesSmall : ""
        }
        ${imgBtnClicked || inputClicked ? classes["messagesSmall--2to4"] : ""}`}
        onClick={backClickHandler}>
        <div className={classes.getMessage}>
          <div onPointerDown={mouseOverHandler}>
            결혼식 주소입니다. <br></br>OO특별시 OO구 <br></br>
            OO로 OOO번길 O, OOO 컨벤션
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

        {isOvered && (
          <div className={classes.options}>
            <div>삭제</div>
            <div>답장</div>
            <div>글자 복사</div>
            <div>텍스트 선택</div>

            <NavLink
              data-tooltip={
                appName === appName_basic &&
                realFunctionName === functionName_resendMessage
                  ? "클릭!"
                  : null
              }
              to={
                appName === appName_basic &&
                realFunctionName === functionName_resendMessage
                  ? urlContent
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
        className={`${classes.appNav} ${plusClicked ? classes.appNavSmall : ""}
        ${imgBtnClicked ? classes["appNavSmall--6to7"] : ""}`}>
        {!plusClicked && (
          <div className={classes.navOptions}>
            <div onClick={plusBtnClickHandler}>
              <i className="bi bi-plus"></i>
            </div>
          </div>
        )}
        {plusClicked && (
          <div className={classes.navOption}>
            <i className="bi bi-x"></i>
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
            <i className="bi bi-hash"></i>
          </div>
        )}
        {(enteredMessage || choicedImgs.length !== 0) && (
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
                <i className="bi bi-image"></i>
              </div>
              <div>앨범</div>
            </div>
            <div>
              <div className={classes.iconWrap}>
                <i className="bi bi-camera"></i>
              </div>
              <div>카메라</div>
            </div>
            <div>
              <div className={classes.iconWrap}>
                <i className="bi bi-box2-heart"></i>
              </div>
              <div>선물하기</div>
            </div>
            <div>
              <div className={classes.iconWrap}>
                <i className="bi bi-telephone"></i>
              </div>
              <div>통화하기</div>
            </div>
          </div>
          <div className={classes.optionRow}>
            <div>
              <div className={classes.iconWrap}>
                <i className="bi bi-cash-coin"></i>
              </div>
              <div>송금</div>
            </div>
            <div>
              <div className={classes.iconWrap}>
                <i className="bi bi-stopwatch"></i>
              </div>
              <div>예약 메시지</div>
            </div>
            <div>
              <div className={classes.iconWrap}>
                <i className="bi bi-calendar-date"></i>
              </div>
              <div>일정</div>
            </div>
            <div>
              <div className={classes.iconWrap}>
                <i className="bi bi-geo-alt"></i>
              </div>
              <div>지도</div>
            </div>
          </div>
          <div className={classes.optionRow}>
            <div>
              <div className={classes.iconWrap}>
                <i className="bi bi-fullscreen"></i>
              </div>
              <div>캡처</div>
            </div>

            <div>
              <div className={classes.iconWrap}>
                <i className="bi bi-mic"></i>
              </div>
              <div>음성메시지</div>
            </div>
            <div>
              <div className={classes.iconWrap}>
                <i className="bi bi-person-badge"></i>
              </div>
              <div>연락처</div>
            </div>
            <div>
              <div className={classes.iconWrap}>
                <i className="bi bi-paperclip"></i>
              </div>
              <div>파일</div>
            </div>
          </div>
          <div className={classes.optionRow}>
            <div>
              <div className={classes.iconWrap}>
                <i className="bi bi-music-note-beamed"></i>
              </div>
              <div>뮤직</div>
            </div>
            <div>
              <div className={classes.iconWrap}>
                <i className="bi bi-broadcast-pin"></i>
              </div>
              <div>라이브톡</div>
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

export default KakaoChatRoom;
