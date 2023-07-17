import { useEffect, useState } from "react";

import classes from "./KakaoChatRoom.module.css";
import TargetContent from "../components/TargetContent";
import AppHeader from "../components/layout/AppHeader";
import BackBtn from "../components/UI/BackBtn";
import ChatList from "../components/UI/ChatList";
import StackedList_Profile from "../components/list/StackedList_Profile";
import FlexContent from "../components/list/FlexContent";
import MessageSendLine from "../components/UI/MessageSendLine";
import Icon from "../components/Icon";
import NoScrollBar from "../components/layout/NoScrollBar";
import Grid_4x4 from "../components/layout/Grid_4x4";

function KakaoChatRoom({
  inputLocked,
  navTriger,
  target_sendImg,
  target_sendAudio,
  target_sendPhoneNum,
  target_resend,
}) {
  //message
  const [messageContent, setMessageContent] = useState("");
  const [isOvered, setIsOvered] = useState(false);
  // input nav
  const [enteredMessage, setEnteredMessage] = useState("");
  const [isPlusClicked, setIsPlusClicked] = useState(false);
  const [isInputClicked, setIsInputClicked] = useState(false);
  const [isSendBtnClicked, setIsSendBtnClicked] = useState(false);
  const [isInputLocked, setIsInputLocked] = useState(false);

  // Choice IMG
  const [choicedImgs, setChoicedImgs] = useState([]);
  const [sendImgs, setSendImgs] = useState([]);
  // setting
  const [isMenuBtnClicked, setIsMenuBtnClicked] = useState(false);
  const [isLeaveBtnClicked, setIsLeaveBtnClicked] = useState(false);

  // modal
  const [isCheckbox, setIsCheckbox] = useState(false);
  const [choicedModal, setChoicedModal] = useState("");

  useEffect(() => {
    inputLocked ? setIsInputLocked(true) : setIsInputLocked(false);
  }, [inputLocked]);
  function mouseOverHandler(event) {
    setTimeout(() => {
      setIsOvered(true);
    }, 1000);
  }

  function backClickHandler() {
    setIsOvered(false);
    setIsPlusClicked(false);
  }

  function inputClickHandler(event) {
    setIsInputClicked(true);
    setIsSendBtnClicked(false);
  }
  function sendBtnClickHandler(event) {
    setMessageContent(enteredMessage);
    setIsSendBtnClicked(true);
    setEnteredMessage("");
    setSendImgs([...choicedImgs]);
    setChoicedImgs([]);
  }

  function inputOutHandler(event) {
    setIsInputClicked(false);
  }
  function inputChangeHandler(event) {
    setEnteredMessage(event.target.value);
  }
  function plusBtnClickHandler() {
    setIsPlusClicked(true);
    setChoicedImgs([]);
    setIsSendBtnClicked(false);
  }
  function menuBtnClickHandler() {
    setIsMenuBtnClicked(true);
  }
  function backdropClickHandler() {
    setIsMenuBtnClicked(false);
    setIsLeaveBtnClicked(false);
  }

  const iconClassName = [
    "bg-[#9bcb5c]",
    "bg-[#668ecf]",
    "bg-[#ef666c]",
    "bg-[#53c575]",
    "bg-[#58606b]",
    "bg-[#907bee]",
    "bg-[#4ea6f3]",
    "bg-[#bd9e83]",
    "bg-[#51b59f]",
    "bg-[#f79955]",
    "bg-[#6696f6]",
    "bg-[#d68fe5]",
    "bg-[#78be80]",
    "bg-[#dd4453]",
  ];

  const gridContent = [
    {
      content: "앨범",
      iconName: "image",
    },
    {
      content: "카메라",
      iconName: "camera",
    },
    {
      content: "선물하기",
      iconName: "box2-heart",
    },
    {
      content: "통화하기",
      iconName: "telephone",
    },
    {
      content: "송금",
      iconName: "cash-coin",
    },
    {
      content: "예약 메시지",
      iconName: "stopwatch",
    },
    {
      content: "일정",
      iconName: "calendar-date",
    },
    {
      targetOption: target_sendImg,
      isNextDescriptionLink: true,
      content: "지도",
      iconName: "geo-alt",
    },
    {
      content: "캡처",
      iconName: "fullscreen",
    },
    {
      targetOption: target_sendAudio,
      isNextDescriptionLink: true,
      content: "음성메시지",
      iconName: "mic",
    },
    {
      targetOption: target_sendPhoneNum,
      isNextDescriptionLink: true,
      content: "연락처",
      iconName: "person-badge",
    },
    {
      content: "파일",
      iconName: "paperclip",
    },
    {
      content: "뮤직",
      iconName: "music-note-beamed",
    },
    {
      content: "라이브톡",
      iconName: "broadcast-pin",
    },
  ];

  return (
    <>
      <NoScrollBar height={`${!isPlusClicked ? "280px" : "150px"}`}>
        {/* header nav */}
        <div className={classes.main_header} onClick={backClickHandler}>
          <AppHeader
            leftItem={[
              <BackBtn></BackBtn>,
              <div className="text-sm ml-1 font-bold align-middle">
                그룹채팅
              </div>,
              <div className="text-sm ml-1 align-middle">3</div>,
            ]}
            rightItem={[
              <i className="text-sm m-1 bi bi-search align-middle"></i>,
              <TargetContent
                onClick={menuBtnClickHandler}
                targetOption={
                  (navTriger === "groubChatLeave_quietly" ||
                    navTriger === "groubChatLeave_rejectInvitation" ||
                    navTriger === "groubChatLock") &&
                  !isMenuBtnClicked
                }>
                <i className="text-sm mx-1 bi bi-list align-middle"></i>
              </TargetContent>,
            ]}></AppHeader>
        </div>
        {/* message List */}
        <div
          className={`${classes.messages} ${
            isPlusClicked ? classes.messagesSmall : ""
          }`}
          onClick={backClickHandler}>
          <div className={classes.getMessageWrap}>
            <ChatList
              isGetList={true}
              className=""
              profile={{
                className: "bg-kakaoSkyblue",
                content: <i className="text-kakaoIcon bi bi-person-fill"></i>,
              }}
              name={{ content: "김대리", className: "" }}
              message={{
                className: "bg-white",
                content: "퇴사합니다.",
              }}
              timeStamp={{
                className: "",
                content: "오전 9:00",
              }}
            />
          </div>

          {messageContent && isSendBtnClicked && (
            <ChatList
              isSendList={true}
              className="mt-2"
              message={{
                className: "bg-kakaoYellow",
                content: messageContent,
              }}
              timeStamp={{
                className: "",
                content: "오전 9:54",
              }}
            />
          )}

          {isOvered && (
            <div className={classes.options}>
              <div>삭제</div>
              <div>답장</div>
              <div>글자 복사</div>
              <div>텍스트 선택</div>
              <TargetContent
                targetOption={target_resend}
                isNextDescriptionLink={true}>
                전달
              </TargetContent>

              <div>공유</div>
              <div>별표하기</div>
            </div>
          )}
        </div>
      </NoScrollBar>
      {/* input line */}
      {!isInputLocked && (
        <MessageSendLine
          navOption_focused={{
            content: [
              !isPlusClicked ? (
                <Icon onClick={plusBtnClickHandler} name="plus-lg" />
              ) : (
                <Icon onClick={() => setIsPlusClicked(false)} name="x-lg" />
              ),
            ],
          }}
          input={{}}
          setMessageContent={setMessageContent}
          sendBtn={{ className: "send-fill bg-[#f7e540]" }}
          sendBtn_default={{
            content: <Icon name="hash" />,
          }}></MessageSendLine>
      )}
      {isInputLocked && (
        <FlexContent
          items={[
            !isPlusClicked ? (
              <Icon name="plus-lg" />
            ) : (
              <Icon onClick={() => setIsPlusClicked(false)} name="x-lg" />
            ),
            <div className="px-1 text-2xs ml-1 text-start text-gray-400 leading-4">
              대화에 주의가 필요한 방입니다.
            </div>,
            ,
            <TargetContent targetOption={isInputLocked}>
              <div
                className={classes.sendIcon}
                onClick={() => setIsInputLocked(false)}>
                <Icon name="lock bg-[#f7e540]" />
              </div>
            </TargetContent>,
          ]}
        />
      )}
      {/* Option Box */}
      {isPlusClicked && (
        <NoScrollBar>
          <Grid_4x4
            className={"bg-[#efefef3e]"}
            items={gridContent}
            iconClassName_common={`rounded-full p-[6px] text-white `}
            iconClassName={iconClassName}
          />
        </NoScrollBar>
      )}

      {/* Side Menu */}
      {isMenuBtnClicked && (
        <div className={classes.sideMenuWrap}>
          <div
            className={classes.backdrop}
            onClick={backdropClickHandler}></div>
          <div className={classes.sideMenuBox}>
            <div className={"p-1 border-b border-gray-100"}>
              <div className="text-xs font-bold">채팅방 서랍</div>
            </div>
            <div className={"p-1 border-b border-gray-100"}>
              <div className="text-xs font-bold">톡캘린더</div>
            </div>
            <div className={"p-1 border-b border-gray-100"}>
              <div className="text-xs font-bold">뮤직</div>
            </div>
            <div className={"p-1 border-b border-gray-100"}>
              <div className="text-xs font-bold">톡게시판</div>
            </div>
            <div className={"p-1 "}>
              <div className="text-xs font-bold mb-2">대화상대</div>
              <StackedList_Profile
                className="mb-2"
                profile={{
                  className: "bg-gray-200",
                  content: <i className="text-blue-600 bi bi-plus-lg"></i>,
                }}
                title={{
                  className: "text-blue-600 text-xs",
                  content: "대화 상대 초대",
                }}
              />
              <StackedList_Profile
                className="mb-2"
                profile={{
                  className: "bg-kakaoSkyblue",
                  content: <i className="text-white bi bi-person-fill"></i>,
                }}
                title={{
                  className: "text-xs",
                  content: "나",
                }}
              />
              <StackedList_Profile
                className="mb-2"
                profile={{
                  className: "bg-kakaoBlue",
                  content: <i className="text-white bi bi-person-fill"></i>,
                }}
                title={{
                  className: "text-xs",
                  content: "김대리",
                }}
              />
              <StackedList_Profile
                className="mb-2"
                profile={{
                  className: "bg-kakaoPurple",
                  content: <i className="text-white bi bi-person-fill"></i>,
                }}
                title={{
                  className: "text-xs",
                  content: "사장님",
                }}
              />
            </div>
            <div className={classes.sideMenuNavWrap}>
              <FlexContent
                className=""
                items={[
                  <TargetContent
                    targetOption={
                      isMenuBtnClicked &&
                      navTriger === "groubChatLeave_quietly" &&
                      choicedModal === ""
                    }>
                    <i
                      onClick={() => {
                        setIsLeaveBtnClicked(true);
                        setChoicedModal("groubChatLeave_quietly");
                      }}
                      className="m-1 bi bi-box-arrow-right"
                    />
                  </TargetContent>,
                  <FlexContent
                    className=""
                    items={[
                      <i className="text-sm bi bi-bell-fill" />,
                      <i className="text-sm m-1 bi bi-star" />,
                      <TargetContent
                        targetOption={
                          navTriger === "groubChatLeave_rejectInvitation" ||
                          navTriger === "groubChatLock"
                        }
                        isNextDescriptionLink={true}>
                        <i className="text-sm m-1 bi bi-gear" />
                      </TargetContent>,
                    ]}></FlexContent>,
                ]}
              />
            </div>
          </div>
        </div>
      )}
      {/* Modal */}
      {choicedModal !== "" && (
        <div className={classes.modalWrap}>
          <div
            className={classes.backdrop_modal}
            onClick={() => setChoicedModal("")}></div>
          <div className={classes.modal}>
            <div className="text-sm text-gray-800 font-medium text-start ml-1">
              채팅방 나가기
            </div>
            <div className="px-1 text-2xs ml-1 text-start text-gray-400 leading-4">
              나가기를 하면 대화내용이 모두 삭제되고
              <br />
              채팅 목록에서도 삭제됩니다.
            </div>
            <TargetContent className="my-1" targetOption={!isCheckbox}>
              <label
                className={`${classes.modalRadioWrap} p-1`}
                htmlFor="info_config">
                <input
                  type="checkbox"
                  id="info_config"
                  onChange={(e) => {
                    isCheckbox ? setIsCheckbox(false) : setIsCheckbox(true);
                  }}></input>
                <div className="px-1 text-2xs ml-1 text-start text-gray-400 leading-4">
                  조용히 나가기
                </div>
              </label>
            </TargetContent>
            <div className={classes.modalNavWrap}>
              <div
                className="text-blue-500 text-xs ml-1 font-bold cursor-pointer"
                onClick={() => setChoicedModal("")}>
                취소
              </div>
              <TargetContent
                targetOption={
                  isCheckbox && navTriger === "groubChatLeave_quietly"
                }
                isNextDescriptionLink={true}>
                <div
                  className={
                    "text-gray-400 text-xs ml-1 font-bold cursor-pointer"
                  }>
                  나가기
                </div>
              </TargetContent>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default KakaoChatRoom;
