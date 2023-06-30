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
  const [menuBtnClicked, setMenuBtnClicked] = useState(false);
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
  function menuBtnClickHandler() {
    setMenuBtnClicked(true);
  }
  function backdropClickHandler() {
    setMenuBtnClicked(false);
  }

  return (
    <div className={classes.layout}>
      {/* header nav */}
      <div className={classes.main_header} onClick={backClickHandler}>
        <MakeList
          listStyle={"flex_spaceBetween"}
          leftFlexItem={[
            {
              className: "title",
              content: <i className="bi bi-arrow-left"></i>,
            },
            { className: "title--bold", content: "그룹채팅" },
            { className: "title", content: "3" },
          ]}
          rightFlexItem={[
            {
              className: "",
              content: <i className="bi bi-search"></i>,
            },
            {
              className: "",
              content: <i className="bi bi-list"></i>,
              onClick: menuBtnClickHandler,
            },
          ]}></MakeList>
      </div>
      {/* message List */}
      <div
        className={`${classes.messages} ${
          plusClicked ? classes.messagesSmall : ""
        }`}
        onClick={backClickHandler}>
        <div className={classes.getMessageWrap}>
          <MakeList
            listStyle={"grid_twoLine--auto"}
            item1={{
              className: "iconWrap_background--blue",
              content: <i className="bi bi-person-fill"></i>,
            }}
            subItem1={{}}
            item2={{
              className: "",
              content: "김대리",
            }}
            subItem2={{
              className: "background-white",
              content: "퇴사합니다.",
            }}
            subItem3={{
              className: "timeStamp",
              content: "오전 9:00",
            }}></MakeList>
        </div>
        {!messageContent && sendBtnClicked && (
          <div className={classes.sendMessageWrap}>
            <div className={classes.timeStamp}>오전 9:54</div>
            <div style={{ display: "none" }}></div>
            <div className={classes.imgBox}></div>
          </div>
        )}
        {messageContent && sendImgs.length !== 0 && sendBtnClicked && (
          <div className={classes.sendMessageWrap}>
            <div className={classes.imgBox}></div>
            <div style={{ display: "none" }}></div>
          </div>
        )}
        {messageContent && sendBtnClicked && (
          <div className={classes.sendMessageWrap}>
            <div className={classes.timeStamp}>오전 9:54</div>
            <div className={classes.sendMessage}>{messageContent}</div>
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
      {/* Nav */}
      <div
        className={`${classes.appNav} ${
          plusClicked ? classes.appNavSmall : ""
        }`}>
        {!plusClicked && (
          <div className={classes.navOptions}>
            <div onClick={plusBtnClickHandler}>
              <i className="bi bi-plus-lg"></i>
            </div>
          </div>
        )}
        {plusClicked && (
          <div
            className={classes.navOption}
            onClick={() => setPlusClicked(false)}>
            <i className="bi bi-x-lg"></i>
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
              <i className="bi bi-send-fill"></i>
            </div>
          </NavLink>
        )}
      </div>
      {/* Option Box */}
      {plusClicked && (
        <div className={`${classes["optionBox"]} `}>
          <div className={classes.optionRow}>
            <div>
              <div
                className={classes.iconWrap}
                style={{ backgroundColor: "rgb(155,203,92)" }}>
                <i className="bi bi-image"></i>
              </div>
              <div>앨범</div>
            </div>
            <div>
              <div
                className={classes.iconWrap}
                style={{ backgroundColor: "rgb(102,142,207)" }}>
                <i className="bi bi-camera"></i>
              </div>
              <div>카메라</div>
            </div>
            <div>
              <div
                className={classes.iconWrap}
                style={{ backgroundColor: "rgb(239,102,108)" }}>
                <i className="bi bi-box2-heart"></i>
              </div>
              <div>선물하기</div>
            </div>
            <div>
              <div
                className={classes.iconWrap}
                style={{ backgroundColor: "rgb(83,197,117)" }}>
                <i className="bi bi-telephone"></i>
              </div>
              <div>통화하기</div>
            </div>
          </div>
          <div className={classes.optionRow}>
            <div>
              <div
                className={classes.iconWrap}
                style={{ backgroundColor: "rgb(88,96,107)" }}>
                <i className="bi bi-cash-coin"></i>
              </div>
              <div>송금</div>
            </div>
            <div>
              <div
                className={classes.iconWrap}
                style={{ backgroundColor: "rgb(144,123,238)" }}>
                <i className="bi bi-stopwatch"></i>
              </div>
              <div>예약 메시지</div>
            </div>
            <div>
              <div
                className={classes.iconWrap}
                style={{ backgroundColor: "rgb(78,166,243)" }}>
                <i className="bi bi-calendar-date"></i>
              </div>
              <div>일정</div>
            </div>
            <div>
              <div
                className={classes.iconWrap}
                style={{ backgroundColor: "rgb(189,158,131)" }}>
                <i className="bi bi-geo-alt"></i>
              </div>
              <div>지도</div>
            </div>
          </div>
          <div className={classes.optionRow}>
            <div>
              <div
                className={classes.iconWrap}
                style={{ backgroundColor: "rgb(81,181,159)" }}>
                <i className="bi bi-fullscreen"></i>
              </div>
              <div>캡처</div>
            </div>

            <div>
              <div
                className={classes.iconWrap}
                style={{ backgroundColor: "rgb(247,153,85)" }}>
                <i className="bi bi-mic"></i>
              </div>
              <div>음성메시지</div>
            </div>
            <div>
              <div
                className={classes.iconWrap}
                style={{ backgroundColor: "rgb(102,150,246)" }}>
                <i className="bi bi-person-badge"></i>
              </div>
              <div>연락처</div>
            </div>
            <div>
              <div
                className={classes.iconWrap}
                style={{ backgroundColor: "rgb(214,143,229)" }}>
                <i className="bi bi-paperclip"></i>
              </div>
              <div>파일</div>
            </div>
          </div>
          <div className={classes.optionRow}>
            <div>
              <div
                className={classes.iconWrap}
                style={{ backgroundColor: "rgb(120,190,128)" }}>
                <i className="bi bi-music-note-beamed"></i>
              </div>
              <div>뮤직</div>
            </div>
            <div>
              <div
                className={classes.iconWrap}
                style={{ backgroundColor: "rgb(221,68,83)" }}>
                <i className="bi bi-broadcast-pin"></i>
              </div>
              <div>라이브톡</div>
            </div>
          </div>
        </div>
      )}
      {/* Side Menu */}
      {menuBtnClicked && (
        <div className={classes.sideMenuWrap}>
          <div
            className={classes.backdrop}
            onClick={backdropClickHandler}></div>
          <div className={classes.sideMenuBox}>
            <div className={classes.sideMenuContentWrap}>
              <div className={classes.sideTitle}>채팅방 서랍</div>
            </div>
            <div className={classes.sideMenuContentWrap}>
              <div className={classes.sideTitle}>톡캘린더</div>
            </div>
            <div className={classes.sideMenuContentWrap}>
              <div className={classes.sideTitle}>뮤직</div>
            </div>
            <div className={classes.sideMenuContentWrap}>
              <div className={classes.sideTitle}>톡게시판</div>
            </div>
            <div className={classes.sideMenuContentWrap}>
              <div className={classes.sideTitle}>대화상대</div>
              <MakeList
                listStyle={"grid_oneLine"}
                item1={{
                  className: "iconWrap_background--grey",
                  content: (
                    <i
                      className="bi bi-plus-lg"
                      style={{ color: "rgb(41, 112, 236)" }}></i>
                  ),
                }}
                item2={{
                  className: "color_blue",
                  content: "대화상대 초대",
                }}></MakeList>
              <MakeList
                listStyle={"grid_oneLine"}
                item1={{
                  className: "iconWrap_background--skyBlue",
                  content: <i className="bi bi-person-fill"></i>,
                }}
                item2={{
                  className: "color_black--bold",
                  content: "나",
                }}></MakeList>
              <MakeList
                listStyle={"grid_oneLine"}
                item1={{
                  className: "iconWrap_background--blue",
                  content: <i className="bi bi-person-fill"></i>,
                }}
                item2={{
                  className: "color_black",
                  content: "김대리",
                }}></MakeList>
              <MakeList
                listStyle={"grid_oneLine"}
                item1={{
                  className: "iconWrap_background--purple",
                  content: <i className="bi bi-person-fill"></i>,
                }}
                item2={{
                  className: "color_black",
                  content: "사장님",
                }}></MakeList>
            </div>
            <div className={classes.sideMenuNavWrap}>
              <MakeList
                listStyle={"flex_spaceBetween"}
                leftFlexItem={[
                  {
                    className: "",
                    content: <i className="bi bi-box-arrow-right"></i>,
                  },
                ]}
                rightFlexItem={[
                  {
                    className: "",
                    content: <i className="bi bi-bell-fill"></i>,
                  },
                  {
                    className: "",
                    content: <i className="bi bi-star"></i>,
                  },
                  {
                    className: "",
                    content: (
                      <NavLink to={urlContent}>
                        <i className="bi bi-gear"></i>
                      </NavLink>
                    ),
                  },
                ]}></MakeList>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default KakaoChatRoom;
