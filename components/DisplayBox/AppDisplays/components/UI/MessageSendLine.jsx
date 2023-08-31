/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from "react";

import classes from "./MessageSendLine.module.css";

import Flex from "stories/phone/atoms/Flex";
import Icon from "stories/phone/atoms/Icon";

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
  defaultEnteredMessage,
  onClick,

  id,
}) {
  const [enteredMessage, setEnteredMessage] = useState(
    defaultEnteredMessage ? defaultEnteredMessage : ""
  );
  const [inputClicked, setInputClicked] = useState(false);

  function inputClickHandler(event) {
    setInputClicked(true);
    setMessageContent("");
  }
  function sendBtnClickHandler(event) {
    setMessageContent(enteredMessage);
    setEnteredMessage("");
    onSendBtnClickHandler && onSendBtnClickHandler();
  }

  function inputOutHandler(event) {
    setInputClicked(false);
  }
  function inputChangeHandler(event) {
    setEnteredMessage(event.target.value);
  }

  return (
    <div className={`mt-auto ${className}`}>
      <div className={`flex h-[24px] items-center`}>
        {/* navOption_blured  */}
        {!inputClicked && navOption_blured && (
          <Flex
            style={{ fontSize: "0.875rem", width: "fit-content" }}
            items={navOption_blured.content}></Flex>
        )}
        {/* navOption_focused */}
        {(inputClicked || !navOption_blured) && (
          <Flex
            style={{ fontSize: "0.875rem", width: "fit-content" }}
            items={navOption_focused.content}></Flex>
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
            {!sendBtn_default.content && (
              <Icon name="soundwave" style={{ padding: "4px" }}></Icon>
            )}
            {sendBtn_default.content && sendBtn_default.content}
          </div>
        )}
        {/* send btn default */}
        {(enteredMessage || sendBtnTriger) && (
          <div
            className={`${classes.sendIcon} ${sendBtn.className}`}
            onClick={sendBtnClickHandler}>
            {!sendBtn.content && (
              <Icon name="send" style={{ padding: "4px " }}></Icon>
            )}
            {sendBtn.content && sendBtn.content}
          </div>
        )}
      </div>
      {children}
    </div>
  );
}
