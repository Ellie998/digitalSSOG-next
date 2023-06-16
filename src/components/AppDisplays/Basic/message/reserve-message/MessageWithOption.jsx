import { useContext, useState } from "react";
import classes from "./MessageWithOption.module.css";
import { PageContext } from "../../../sections/AppMain";

function MessageWithOption() {
  const {
    realFunctionName,
    functionName_reserveMessage,
    functionName_sendImg,
    functionName_sendAudio,
    functionName_sendPhoneNum,
  } = useContext(PageContext);

  const [inputClicked, setInputClicked] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [clockIsClicked, setClockIsClicked] = useState(false);
  const [imgIsClicked, setImgIsClicked] = useState(false);
  const [backdropClicked, setBackdropClicked] = useState(false);
  const [deleteOptionClicked, setDeleteOptionClicked] = useState(false);

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
  function imgClickHandler() {
    setBackdropClicked(false);
    setImgIsClicked(true);
  }

  function backdropClickHandler() {
    setBackdropClicked(true);
    setImgIsClicked(false);
    setClockIsClicked(false);
  }
  function deleteOptionHandler() {
    setDeleteOptionClicked(true);
  }
  return (
    <>
      <section className={classes.layout}>
        <div className={classes.appHeader}>
          <div className={classes["appHeader_firstName"]}>홍</div>
          <div className={classes["appHeader_name"]}>홍길동</div>
          <div>
            <i className="bi bi-three-dots-vertical"></i>
          </div>
        </div>
        <div className={classes.appMain}>
          {/* default messages */}
          <div className={classes["appMain_sendMessageWrap"]}>
            <div className={classes["appMain_sendMessageTime"]}>오전 7:12</div>
            <div className={classes["appMain_sendMessage"]}>
              어디에 계신가요?
            </div>
          </div>
          <div className={classes["appMain_getMessageWrap"]}>
            <div className={classes["appMain_getMessage"]}>
              사거리 앞에 있습니다.
            </div>
            <div className={classes["appMain_getMessageTime"]}>오전 7:13</div>
          </div>
          {/* option messages */}
          {isSubmitted && realFunctionName === functionName_reserveMessage && (
            <div className={classes["appMain_sendMessageWrap--res"]}>
              <div
                onClick={clockBtnClickHandler}
                className={classes["appMain_sendMessage--resIcon"]}>
                <i class="bi bi-clock"></i>
              </div>
              <div className={classes["appMain_sendMessage--res"]}>
                {isSubmitted && inputValue}
              </div>
            </div>
          )}
          {isSubmitted && realFunctionName === functionName_sendImg && (
            <div className={classes["appMain_sendMessageWrap--img"]}>
              <div
                onClick={imgClickHandler}
                className={`${classes["appMain_sendMessageImg"]}`}></div>
              <div className={classes["appMain_sendMessageWrap"]}>
                <div className={classes["appMain_sendMessageTime"]}>
                  오전 9:54
                </div>
                {isSubmitted && inputValue && (
                  <div className={classes["appMain_sendMessage"]}>
                    {inputValue}
                  </div>
                )}
              </div>
            </div>
          )}
          {isSubmitted && realFunctionName === functionName_sendAudio && (
            <div>
              <div className={classes["appMain_sendMessageWrap"]}>
                <div
                  className={`${classes["appMain_sendMessageOptionWrap--flex"]}`}>
                  <div>
                    <i className="bi bi-play"></i>
                  </div>
                  <div>audio.mp3</div>
                </div>
              </div>
              <div className={classes["appMain_sendMessageWrap"]}>
                <div className={classes["appMain_sendMessageTime"]}>
                  오전 9:54
                </div>
                {isSubmitted && inputValue && (
                  <div className={classes["appMain_sendMessage"]}>
                    {inputValue}
                  </div>
                )}
              </div>
            </div>
          )}
          {isSubmitted && realFunctionName === functionName_sendPhoneNum && (
            <div>
              <div className={classes["appMain_sendMessageWrap"]}>
                <div
                  className={`${classes["appMain_sendMessageOptionWrap--flex"]}`}>
                  <div>
                    <i className="bi bi-person"></i>
                  </div>
                  <div>홍길순</div>
                </div>
              </div>
              <div className={classes["appMain_sendMessageWrap"]}>
                <div className={classes["appMain_sendMessageTime"]}>
                  오전 9:54
                </div>
                {isSubmitted && inputValue && (
                  <div className={classes["appMain_sendMessage"]}>
                    {inputValue}
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
        {/* option elements */}
        {realFunctionName === functionName_reserveMessage &&
          !isSubmitted &&
          !deleteOptionClicked && (
            <div className={classes["appMain_messageOptionLayout"]}>
              <div className={classes["appMain_messageOptionContent--res"]}>
                예약 전송: 2023년 06월 11일 (일) 오후 2:00
              </div>
              <div
                className={classes["appMain_messageOptionDeleteBtn"]}
                onClick={deleteOptionHandler}>
                <i className="bi bi-dash-circle-fill"></i>
              </div>
            </div>
          )}
        {realFunctionName === functionName_sendImg &&
          !isSubmitted &&
          !deleteOptionClicked && (
            <div className={classes["appMain_messageOptionLayout"]}>
              <div className={classes["appMain_messageOptionContent--img"]}>
                img
              </div>
              <div
                className={classes["appMain_messageOptionDeleteBtn"]}
                onClick={deleteOptionHandler}>
                <i className="bi bi-dash-circle-fill"></i>
              </div>
            </div>
          )}
        {realFunctionName === functionName_sendAudio &&
          !isSubmitted &&
          !deleteOptionClicked && (
            <div className={classes["appMain_messageOptionLayout"]}>
              <div className={classes["appMain_messageOptionWrap--flex"]}>
                <div>
                  <i className="bi bi-play"></i>
                </div>
                <div>audio.mp3</div>
              </div>
              <div
                className={classes["appMain_messageOptionDeleteBtn"]}
                onClick={deleteOptionHandler}>
                <i className="bi bi-dash-circle-fill"></i>
              </div>
            </div>
          )}
        {realFunctionName === functionName_sendPhoneNum &&
          !isSubmitted &&
          !deleteOptionClicked && (
            <div className={classes["appMain_messageOptionLayout"]}>
              <div className={classes["appMain_messageOptionWrap--grid"]}>
                <div className={classes["appMain_messageOptionIcon--phoneNum"]}>
                  <i className="bi bi-person"></i>
                </div>
                <div
                  className={
                    classes["appMain_messageOptionContent--phoneNumName"]
                  }>
                  홍길순
                </div>
                <div
                  className={classes["appMain_messageOptionContent--phoneNum"]}>
                  010-0000-0000
                </div>
              </div>
              <div
                className={classes["appMain_messageOptionDeleteBtn"]}
                onClick={deleteOptionHandler}>
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
          {realFunctionName === functionName_reserveMessage &&
            ((!inputValue && !isSubmitted) || deleteOptionClicked) && (
              <div className={classes.soundIcon}>
                <i className="bi bi-soundwave"></i>
              </div>
            )}
          {realFunctionName === functionName_sendImg &&
            ((deleteOptionClicked && !inputValue) || isSubmitted) && (
              <div className={classes.soundIcon}>
                <i className="bi bi-soundwave"></i>
              </div>
            )}
          {realFunctionName === functionName_sendAudio &&
            ((deleteOptionClicked && !inputValue) || isSubmitted) && (
              <div className={classes.soundIcon}>
                <i className="bi bi-soundwave"></i>
              </div>
            )}
          {realFunctionName === functionName_sendPhoneNum &&
            ((deleteOptionClicked && !inputValue) || isSubmitted) && (
              <div className={classes.soundIcon}>
                <i className="bi bi-soundwave"></i>
              </div>
            )}
          {realFunctionName === functionName_reserveMessage &&
            inputValue &&
            !deleteOptionClicked && (
              <div
                className={classes.sendIcon}
                data-tooltip="클릭!"
                onClick={submitHandler}>
                <i className="bi bi-send"></i>
              </div>
            )}
          {realFunctionName === functionName_sendImg &&
            ((deleteOptionClicked && inputValue && !isSubmitted) ||
              (!deleteOptionClicked && !isSubmitted)) && (
              <div
                className={classes.sendIcon}
                data-tooltip="클릭!"
                onClick={submitHandler}>
                <i className="bi bi-send"></i>
              </div>
            )}
          {realFunctionName === functionName_sendAudio &&
            ((deleteOptionClicked && inputValue && !isSubmitted) ||
              (!deleteOptionClicked && !isSubmitted)) && (
              <div
                className={classes.sendIcon}
                data-tooltip="클릭!"
                onClick={submitHandler}>
                <i className="bi bi-send"></i>
              </div>
            )}
          {realFunctionName === functionName_sendPhoneNum &&
            ((deleteOptionClicked && inputValue && !isSubmitted) ||
              (!deleteOptionClicked && !isSubmitted)) && (
              <div
                className={classes.sendIcon}
                data-tooltip="클릭!"
                onClick={submitHandler}>
                <i className="bi bi-send"></i>
              </div>
            )}
        </div>
      </section>
      {/* modal backdrop */}
      {clockIsClicked && !backdropClicked && (
        <>
          <div class={classes.backdrop} onClick={backdropClickHandler}></div>
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
      {/* img modal */}
      {imgIsClicked && !backdropClicked && (
        <>
          <div class={classes.backdrop} onClick={backdropClickHandler}></div>
          <div class={` ${classes.imgClicked}`}></div>
        </>
      )}
    </>
  );
}

export default MessageWithOption;
