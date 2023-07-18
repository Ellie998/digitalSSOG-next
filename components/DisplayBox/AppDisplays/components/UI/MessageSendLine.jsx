import { useState } from "react";
import FlexContent from "../list/FlexContent";
import classes from "./MessageSendLine.module.css";
import Icon from "./Icon";

export default function MessageSendLine({
  className,
  navOption_focused,
  navOption_blured,
  setMessageContent,
  sendBtn,
  sendBtn_default,
  input,
  children,
  sendBtnTriger,
  onSendBtnClickHandler,
  // setEnteredMessage,
  onClick,

  id,
}) {
  const [enteredMessage, setEnteredMessage] = useState("");
  const [inputClicked, setInputClicked] = useState(false);

  function inputClickHandler(event) {
    setInputClicked(true);
    setMessageContent("");
  }
  function sendBtnClickHandler(event) {
    setMessageContent(enteredMessage);
    setEnteredMessage("");
    onSendBtnClickHandler();
  }

  function inputOutHandler(event) {
    setInputClicked(false);
  }
  function inputChangeHandler(event) {
    setEnteredMessage(event.target.value);
  }

  return (
    <div className={`mt-auto ${className}`}>
      <div className={`flex h-[24px]`}>
        {/* navOption_blured  */}
        {!inputClicked && navOption_blured && (
          <FlexContent
            items={navOption_blured.content}
            className="text-sm"></FlexContent>
        )}
        {/* navOption_focused */}
        {(inputClicked || !navOption_blured) && (
          <FlexContent
            items={navOption_focused.content}
            className="text-sm"></FlexContent>
        )}
        {/* input */}
        <div className={`${classes.inputBox} ${input.className}`}>
          <>
            <div>
              <input
                onClick={input.onClick}
                onFocus={inputClickHandler}
                onBlur={inputOutHandler}
                onChange={inputChangeHandler}
                value={enteredMessage}></input>
            </div>
            <div>
              <Icon name="emoji-smile" />
            </div>
          </>
        </div>
        {/* send btn changed */}
        {!enteredMessage && !sendBtnTriger && (
          <div
            className={`${classes.soundIcon} ${sendBtn_default.className}`}
            onClick={sendBtnClickHandler}>
            {!sendBtn_default.content && <Icon name="soundwave"></Icon>}
            {sendBtn_default.content && sendBtn_default.content}
          </div>
        )}
        {/* send btn default */}
        {(enteredMessage || sendBtnTriger) && (
          <div
            className={`${classes.sendIcon} ${sendBtn.className}`}
            onClick={sendBtnClickHandler}>
            {!sendBtn.content && <Icon name="send"></Icon>}
            {sendBtn.content && sendBtn.content}
          </div>
        )}
      </div>
      {children}
    </div>
  );
}
