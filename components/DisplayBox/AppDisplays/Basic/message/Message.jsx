import { useState } from "react";
import classes from "./Message.module.css";
import ChoiceFile from "../../components/layout/ChoiceFile";

import TargetContent from "../../components/TargetContent";
import NoScrollBar from "../../components/layout/NoScrollBar";
import StackedList_Profile from "../../components/list/StackedList_Profile";
import Icon from "../../components/UI/Icon";
import ChatList from "../../components/UI/ChatList";
import MessageSendLine from "../../components/UI/MessageSendLine";
import Grid_4x4 from "../../components/layout/Grid_4x4";
import ChoicedFile from "../../components/UI/ChoicedFile";

function Message({
  optionOpen,
  target_sendImg,
  target_resend,
  target_reserveMessage,
  target_sendAudio,
  target_sendPhoneNum,
}) {
  const [sendBtnClicked, setSendBtnClicked] = useState(false);
  const [messageContent, setMessageContent] = useState("");

  const [sendImgs, setSendImgs] = useState([]);
  const [plusClicked, setPlusClicked] = useState(false);
  const [imgBtnClicked, setImgBtnClicked] = useState(false);
  const [isOvered, setIsOvered] = useState(false);
  // Choice IMG
  const [choicedImgs, setChoicedImgs] = useState([]);

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

  function plusBtnClickHandler() {
    setPlusClicked(true);
    setImgBtnClicked(false);
    setSendBtnClicked(false);
    setChoicedImgs([]);
    setSendImgs([]);
  }
  function imgNavBtnClickHandler() {
    setImgBtnClicked(true);
    setPlusClicked(false);
    setMessageContent("");
    setSendBtnClicked(false);
    setChoicedImgs([]);
    setSendImgs([]);
  }

  const gridContent = [
    {
      content: "Private Share",
      iconName: "share",
    },
    {
      content: "네이버지도 위치공유",
      iconName: "map",
    },
    {
      content: "신한 SOL송금",
      iconName: "bank",
    },
    {
      content: "Samsung Pay 선물",
      iconName: "bank",
    },
    {
      content: "토스 송금",
      iconName: "bank",
    },
    {
      content: "빠른 답장 문구",
      iconName: "send",
    },
    {
      targetOption: target_reserveMessage,
      isNextDescriptionLink: true,
      content: "메시지 예약",
      iconName: "clock",
    },
    {
      content: "제목",
      iconName: "chat-left-dots",
    },
    {
      content: "위치",
      iconName: "geo-alt",
    },
    {
      targetOption: target_sendImg && optionOpen,
      isNextDescriptionLink: true,
      content: "이미지",
      iconName: "card-image",
    },
    {
      targetOption: target_sendImg && optionOpen,
      isNextDescriptionLink: true,
      content: "동영상",
      iconName: "play-btn",
    },
    {
      targetOption: target_sendAudio,
      isNextDescriptionLink: true,
      content: "오디오",
      iconName: "music-note",
    },
    {
      targetOption: target_sendPhoneNum,
      isNextDescriptionLink: true,
      content: "연락처",
      iconName: "person",
    },
    {
      content: "캘린더",
      iconName: "calendar-date",
    },
    {
      content: "Samsung Notes",
      iconName: "journal",
    },
    {
      content: "음성녹음",
      iconName: "mic",
    },
  ];

  return (
    <>
      <NoScrollBar
        height={`${plusClicked || imgBtnClicked ? "170px" : "280px"}`}
        className={""}>
        <StackedList_Profile
          onClick={backClickHandler}
          className={`h-[30px]`}
          profile={{ content: "홍", className: "bg-orange-200" }}
          title={{ content: "홍길동", className: "" }}
          info={{
            content: (
              <Icon name={`three-dots-vertical`} className={`text-sm`} />
            ),
            className: "justify-self-end",
          }}></StackedList_Profile>
        <ChatList
          onClick={backClickHandler}
          isGetList
          onPointerDown={mouseOverHandler}
          className={`mb-2`}
          message={{
            className: "bg-gray-200 ml-1",
            content: (
              <TargetContent targetOption={!isOvered && target_resend}>
                결혼식 주소입니다. <br></br>OO특별시 OO구 <br></br>
                OO로 OOO번길 O, OOO 컨벤션
              </TargetContent>
            ),
          }}
          timeStamp={{
            className: "",
            content: "오전 8:03",
          }}></ChatList>

        {!messageContent && sendImgs.length !== 0 && (
          <ChatList
            onClick={backClickHandler}
            isSendList
            message={{
              content: <div className={classes.imgBox}></div>,
              className: "",
            }}
            timeStamp={{ content: "오전 9:54" }}></ChatList>
        )}
        {messageContent && sendImgs.length !== 0 && (
          <>
            <ChatList
              onClick={backClickHandler}
              isSendList
              message={{
                content: <div className={classes.imgBox}></div>,
                className: "",
              }}></ChatList>
            <ChatList
              onClick={backClickHandler}
              isSendList
              message={{
                content: messageContent,
                className: "bg-[#4b8ce5] text-white",
              }}
              timeStamp={{ content: "오전 9:54" }}></ChatList>
          </>
        )}
        {messageContent && sendImgs.length === 0 && (
          <ChatList
            onClick={backClickHandler}
            isSendList
            message={{
              content: messageContent,
              className: "bg-[#4b8ce5] text-white",
            }}
            timeStamp={{ content: "오전 9:54" }}></ChatList>
        )}
        {isOvered && (
          <div className={classes.options}>
            <div>삭제</div>
            <div>답장</div>
            <div>글자 복사</div>
            <div>텍스트 선택</div>
            <TargetContent
              targetOption={isOvered && target_resend}
              isNextDescriptionLink={true}>
              전달
            </TargetContent>
            <div>공유</div>
            <div>별표하기</div>
          </div>
        )}
        {/* selected imgs */}
        {choicedImgs.length !== 0 && (
          <ChoicedFile
            fileType_img
            fileArray={choicedImgs}
            setChoicedFileArray={setChoicedImgs}
          />
        )}
      </NoScrollBar>

      <MessageSendLine
        className={`self-end`}
        navOption_blured={{
          content: [
            // img btn
            <TargetContent
              onClick={imgNavBtnClickHandler}
              targetOption={
                !imgBtnClicked &&
                sendImgs.length === 0 &&
                !optionOpen &&
                target_sendImg
              }>
              <Icon name="image" />
            </TargetContent>,
            // camera btn
            <Icon name="camera" />,
            // plus btn
            <TargetContent
              onClick={plusBtnClickHandler}
              targetOption={!plusClicked && optionOpen}>
              <Icon name="plus" />
            </TargetContent>,
          ],
        }}
        navOption_focused={{
          content: [<Icon name="chevron-right" />],
        }}
        input={{
          className: "bg-[#e3e3e3cc] rounded-xl",
          onClick: backClickHandler,
        }}
        setMessageContent={setMessageContent}
        sendBtn={{ className: "bg-[#b8b8b8cc]" }}
        sendBtn_default={{
          className: "bg-[#e3e3e3cc]",
        }}
        onSendBtnClickHandler={() => {
          setImgBtnClicked(false);
          setSendImgs([...choicedImgs]);
          setChoicedImgs([]);
        }}
        sendBtnTriger={choicedImgs.length !== 0}></MessageSendLine>
      {plusClicked && (
        <NoScrollBar>
          <Grid_4x4
            className={"bg-[#e3e3e3cc]"}
            items={gridContent}
            iconClassName_common={`bg-white rounded-full p-[6px]`}
          />
        </NoScrollBar>
      )}
      {imgBtnClicked && (
        <NoScrollBar className={`ml-1`}>
          <ChoiceFile
            fileType_img
            className={""}
            choiceFile={choicedImgs}
            setChoicedFileArray={setChoicedImgs}
            num="7"
          />
        </NoScrollBar>
      )}
    </>
  );
}

export default Message;
