import { useEffect, useState } from "react";

import classes from "./KakaoChatRoom.module.css";
import TargetContent from "../components/TargetContent";
import AppHeader from "../components/layout/AppHeader";
import BackBtn from "../components/UI/BackBtn";
import ChatList from "../components/UI/ChatList";
import StackedList_Profile from "../components/list/StackedList_Profile";
import FlexContent from "../components/list/FlexContent";
import MessageSendLine from "../components/UI/MessageSendLine";
import Icon from "../components/UI/Icon";
import NoScrollBar from "../components/layout/NoScrollBar";
import Grid_4x4 from "../components/layout/Grid_4x4";
import StackedListWrap from "../components/list/StackedListWrap";
import Modal_contents from "../components/layout/Modal_contents";
import Checkbox from "../components/UI/Checkbox";

import DownUp from "../components/UI/DownUp";
import Button from "../components/UI/Button";
import Alert from "../components/UI/Alert";

function KakaoChatRoom({
  inputLocked,
  target_sendImg,
  target_sendAudio,
  target_sendPhoneNum,
  target_resend,
  chatType_group,
  chatType_1to1,
  optionOpen,
  menuOpen,
  target_reserveMessage,
  target_leave_quietly,
  target_leave,
  target_setting,
}) {
  //message
  const [messageContent, setMessageContent] = useState("");
  const [isOvered, setIsOvered] = useState(false);
  // input nav
  const [isPlusClicked, setIsPlusClicked] = useState(false);
  const [isInputLocked, setIsInputLocked] = useState(false);

  // setting
  const [isMenuBtnClicked, setIsMenuBtnClicked] = useState(false);
  const [isLeaveBtnClicked, setIsLeaveBtnClicked] = useState(false);

  // modal
  const [isCheckbox, setIsCheckbox] = useState(false);
  const [choicedModal, setChoicedModal] = useState("");
  const [isOptionSettingOpened, setIsOptionSettingOpened] = useState(false);

  // option setting
  const [optionInput, setOptionInput] = useState("");
  const [isAlertOpen, setIsAlertOpen] = useState(false);

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
    setIsOptionSettingOpened(false);
    setOptionInput("");
  }

  function sendBtnClickHandler(event) {}

  function plusBtnClickHandler() {
    setIsPlusClicked(true);
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
      targetOption: target_reserveMessage,
      onClick: () => {
        setIsOptionSettingOpened(true);
        setIsPlusClicked(false);
      },
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

  let date = new Date();

  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();
  let hour = date.getHours();
  let minute = date.getMonth();

  if (month < 10) month = "0" + month;
  if (day < 10) day = "0" + day;
  if (hour < 10) hour = "0" + hour;
  if (minute < 10) minute = "0" + minute;

  let today = `${year}-${month}-${day}T${hour}:${minute}`;

  return (
    <>
      <NoScrollBar
        height={`${!isPlusClicked ? "280px" : "150px"}`}
        className={`bg-[#b2c6d9] p-1`}
        onClick={backClickHandler}>
        <AppHeader
          onClick={backClickHandler}
          className={`bg-[#b2c6da] h-[35px]`}
          leftItem={[
            <BackBtn></BackBtn>,
            <div className="text-sm ml-1 font-bold align-middle">
              {chatType_group && "그룹채팅"}
              {chatType_1to1 && "영희"}
            </div>,
            <div className="text-sm ml-1 align-middle">
              {chatType_group && "3"}
            </div>,
          ]}
          rightItem={[
            <Icon name="search" className={`text-sm m-1 align-middle`} />,
            <TargetContent
              onClick={menuBtnClickHandler}
              targetOption={menuOpen && !isMenuBtnClicked}>
              <Icon name="list" className={`text-sm mx-1 align-middle`} />
            </TargetContent>,
          ]}></AppHeader>
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
        {messageContent && (
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
        {/* alert */}
        {isAlertOpen && (
          <Alert
            setIsAlertOpen={setIsAlertOpen}
            className={`top-[160px]`}
            content="메시지를 예약했습니다."
            icon={{
              name: "chat-fill",
              className: " bg-kakaoYellow text-[#3e3404]",
            }}
          />
        )}
      </NoScrollBar>

      {/* input line */}
      {!isInputLocked && (
        <MessageSendLine
          navOption_focused={{
            content: [
              !isPlusClicked ? (
                <TargetContent
                  targetOption={optionOpen && !isPlusClicked && !isAlertOpen}>
                  <Icon onClick={plusBtnClickHandler} name="plus-lg" />
                </TargetContent>
              ) : (
                <Icon onClick={() => setIsPlusClicked(false)} name="x-lg" />
              ),
            ],
          }}
          input={{}}
          onSendBtnClickHandler={sendBtnClickHandler}
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
            {["채팅방 서랍", "톡캘린더", "뮤직", "톡게시판"].map((item, i) => (
              <StackedListWrap
                key={i}
                listTitle={{
                  content: item,
                  className: "text-xs font-bold text-gray-700 ml-1",
                }}
              />
            ))}
            <StackedListWrap
              className={`border-none`}
              listTitle={{
                content: "대화상대",
                className: "text-xs font-bold text-gray-700 ml-1 mb-1",
              }}>
              <StackedList_Profile
                className="mb-2"
                profile={{
                  className: "bg-gray-200",
                  content: <Icon name="plus-lg" className={`text-blue-600`} />,
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
                  content: <Icon name="person-fill" className={`text-white`} />,
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
                  content: <Icon name="person-fill" className={`text-white`} />,
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
                  content: <Icon name="person-fill" className={`text-white`} />,
                }}
                title={{
                  className: "text-xs",
                  content: "사장님",
                }}
              />
            </StackedListWrap>
            <div className={classes.sideMenuNavWrap}>
              <FlexContent
                className=""
                items={[
                  <TargetContent
                    targetOption={
                      isMenuBtnClicked &&
                      (target_leave_quietly || target_leave) &&
                      choicedModal === ""
                    }>
                    <Icon
                      onClick={() => {
                        setIsLeaveBtnClicked(true);
                        setChoicedModal("groubChatLeave_quietly");
                      }}
                      name="box-arrow-right"
                    />
                  </TargetContent>,
                  <FlexContent
                    className=""
                    items={[
                      <Icon name="bell-fill" className={`text-sm `} />,
                      <Icon name="star" className={`text-sm m-1`} />,
                      <TargetContent
                        targetOption={target_setting}
                        isNextDescriptionLink={true}>
                        <Icon name="gear" className={`text-sm m-1`} />
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
        <Modal_contents
          modalClassName={`mt-5`}
          className={`mt-10`}
          onClickBackDrop={() => setChoicedModal("")}
          title={{ content: "채팅방 나가기" }}
          subTitle={{
            content: (
              <>
                나가기를 하면 대화내용이 모두 삭제되고
                <br />
                채팅 목록에서도 삭제됩니다.
              </>
            ),
          }}
          cancelButton={{ content: "취소", className: "text-blue-500" }}
          submitButton={{
            content: "나가기",
            className: "text-blue-500",
            targetOption: isCheckbox && (target_leave_quietly || target_leave),
            isNextDescriptionLink: true,
          }}>
          {target_leave_quietly && (
            <TargetContent className="my-1" targetOption={!isCheckbox}>
              <Checkbox
                label={{ content: "조용히 나가기" }}
                onChange={(e) => {
                  isCheckbox ? setIsCheckbox(false) : setIsCheckbox(true);
                }}
                id="info_config"
              />
            </TargetContent>
          )}
        </Modal_contents>
      )}
      {/* setting option */}
      {isOptionSettingOpened && (
        <DownUp
          downUpClassName={`mt-[20px]`}
          className={``}
          onClickBackDrop={backClickHandler}>
          <StackedListWrap
            className={``}
            listTitle={{
              content: (
                <TargetContent
                  targetOption={target_reserveMessage && optionInput === ""}>
                  <input
                    placeholder="메시지 입력"
                    className="w-full"
                    onChange={(e) => {
                      setOptionInput(e.target.value);
                    }}
                  />
                </TargetContent>
              ),
              className: "text-sm text-gray-300 font-bold cursor-pointer ",
            }}
          />
          <FlexContent
            className={`my-0.5`}
            items={[
              <div className={`text-xs text-gray-400`}>일시</div>,
              <input
                className={`text-2xs cursor-pointer`}
                type="datetime-local"
                defaultValue={today}
              />,
            ]}
          />
          <FlexContent
            className={`my-0.5 py-0.5`}
            items={[
              <div className={`text-xs text-gray-400`}>발송 대상</div>,
              <div className={`text-xs cursor-pointer`}>영희</div>,
            ]}
          />
          <FlexContent
            className={`my-0.5 py-0.5`}
            items={[
              <div className={`text-xs text-gray-400`}>미리 알림</div>,
              <div className={`text-xs cursor-pointer`}>알림 받지 않음</div>,
            ]}
          />
          <div className={`text-2xs text-gray-400 my-0.5`}>
            <Icon
              name="info-circle"
              className={`text-2xs text-gray-400 mr-1`}
            />
            예약 메시지가 많을 경우, 약간의 시간 오차가 발생할 수 있습니다.
          </div>
          <FlexContent
            className={`mb-1 mt-4`}
            items={[
              <Button
                btnColor={`#efefef`}
                className={`text-2xs font-bold`}
                width={`70px`}
                content={"예약 목록 보기"}
              />,
              <TargetContent
                targetOption={target_reserveMessage && optionInput !== ""}
                isNextDescriptionLink={true}>
                <Button
                  btnColor={`${optionInput === "" ? "#fafafa" : "#fff200"}`}
                  className={`text-2xs font-bold`}
                  width={`70px`}
                  textColor={`${optionInput === "" ? "#b7b7b7" : ""}`}
                  content={"예약하기"}
                  onClick={() => {
                    setIsAlertOpen(true);
                    setIsOptionSettingOpened(false);
                  }}
                />
              </TargetContent>,
            ]}
          />
        </DownUp>
      )}
    </>
  );
}

export default KakaoChatRoom;
