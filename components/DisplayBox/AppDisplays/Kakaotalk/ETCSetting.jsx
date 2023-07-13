import { useState } from "react";

import classes from "./ETCSetting.module.css";
import TargetContent from "../components/TargetContent";
import StackedList_Profile from "../components/list/StackedList_Profile";
import Switch from "../components/UI/Switch";
import NoScrollBar from "../components/layout/NoScrollBar";
import Modal_contents from "../components/layout/Modal_contents";
import AppHeader from "../components/layout/AppHeader";
import BackBtn from "../components/UI/BackBtn";

import StackedList from "../components/list/StackedList";
import StackedListWrap from "../components/list/StackedListWrap";

function ETCSetting({ navTriger }) {
  const [choicedModal, setChoicedModal] = useState("");
  const [choicedSetting, setChoicedSetting] = useState("");
  const [checkedContent, setCheckedContent] = useState("");

  const laboratoryMenuContents = [
    //      title: "실험실 이용하기",
    {
      theme: "#fff200",
      title: "실험실 이용하기",
    },
    //       title: "톡 음성모드",
    {
      title: "톡 음성모드",
      subTitle: "사용안함",
    },
    //       title: "말풍선 번역",
    {
      theme: "#fff200",
      title: "말풍선 번역",
      subTitle:
        "카카오톡에서 사용하는 언어와 다른 언어의 말풍선을 길게 눌러 번역할 수 있습니다.",
    },
    //       title: "채팅방 조용히 나가기",
    {
      targetOption: navTriger === "groubChatLeave_quietly",
      theme: "#fff200",
      title: "채팅방 조용히 나가기",
      subTitle: `그룹채팅방에서 나가기 시, 조용히 나가기를 선택할 수 있습니다.
        조용히 나가는 경우 채팅방에 나간 기록이 표시되지 않습니다.`,
    },
    //      title: "빠른 공감하기",
    {
      theme: "#fff200",
      title: "빠른 공감하기",
      subTitle: `말풍선을 빠르게 두 번 탭해 하트 공감을 날릴 수 있습니다.`,
    },
    //       title: "인앱브라우저 앱 화면 분리",
    {
      theme: "#fff200",
      title: "인앱브라우저 앱 화면 분리",
      subTitle: `채팅방에 전달된 URL 확인 시 사용중인 채팅방과 분리된 화면으로
      오픈됩니다. <br />
      브라우저를 닫지 않고 화면 전환을 통해 채팅방의 대화 내용을
      확인할 수 있어요.`,
    },
    //       title: "키워드 알림 모아보기",
    {
      theme: "#fff200",
      title: "키워드 알림 모아보기",
      subTitle: `등록된 키워드에 해당하는 메시지만 모아볼 수 있습니다.`,
    },
  ];

  const settingMenuContents1 = [
    // 개인/보안
    {
      profile: "lock",
      title: "개인/보안",
    },
    // 친구
    {
      profile: "person",
      title: "친구",
    },
    // 알림
    {
      profile: "bell",
      title: "알림",
    },
    // 화면
    {
      profile: "brightness-low",
      title: "화면",
    },
    // 기본테마
    {
      profile: "palette",
      title: "기본테마",
    },
    // 채팅
    {
      profile: "chat",
      title: "채팅",
    },
    // 통화
    {
      profile: "telephone",
      title: "통화",
    },
    // 언어
    {
      profile: "globe",
      title: "언어",
      subTitle: "시스템 기본 언어",
    },
    // 실험실
    {
      targetOption: navTriger === "groubChatLeave_quietly",
      onClick: () => setChoicedSetting("experimentRoom"),
      profile: "lightbulb",
      title: "실험실",
    },
    // 기타
    {
      profile: "three-dots",
      title: "기타",
    },
  ];
  const settingMenuContents2 = [
    // 공지사항
    {
      profile: "megaphone",
      title: "공지사항",
    },
    // 카톡 안녕 가이드
    {
      profile: "emoji-smile",
      title: "카톡 안녕 가이드",
    },

    // 고객센터/운영정책
    {
      profile: "question-circle",
      title: "고객센터/운영정책",
    },

    // 언어
    {
      profile: "globe",
      title: "앱 관리",
      subTitle: "10.2.8",
    },
  ];

  return (
    <NoScrollBar height="305px">
      {choicedModal !== "" && (
        <Modal_contents
          onClickBackDrop={() => {
            setChoicedModal("");
            setIsChecked(false);
          }}
          title={{ content: "초대 거부 및 나가기" }}
          subTitle={{
            content: (
              <>
                초대를 거부하고 채팅방을 나갑니다.
                <br />
                이후 이 채팅방에 다시 입장할 수 없습니다. <br />
                대화 내용을 포함한 채팅방의 정보는 모두 삭제됩니다.
              </>
            ),
          }}
          cancelButton={{
            content: "취소",
            className: "text-blue-600",
          }}
          submitButton={{
            targetOption:
              isChecked && navTriger === "groubChatLeave_rejectInvitation",
            isNextDescriptionLink: true,
            content: "나가기",
          }}>
          <TargetContent targetOption={!isChecked}>
            <Checkbox
              id="info_config"
              onChange={() => {
                navTriger === "groubChatLeave_rejectInvitation" && isChecked
                  ? setIsChecked(false)
                  : setIsChecked(true);
              }}
              label={{ content: "위 내용을 모두 확인하였습니다." }}></Checkbox>
          </TargetContent>
        </Modal_contents>
      )}
      {/* 실험실 */}
      {choicedSetting !== "" && (
        <>
          <AppHeader
            leftItem={[
              <BackBtn
                targetOption={checkedContent === "switch3"}
                onClick={() => {
                  setChoicedSetting("");
                  setChoicedModal("");
                }}></BackBtn>,
              "실험실",
            ]}
          />
          <div className={`${classes.groupProfileWrap} py-1`}>
            <div className={classes["iconWrap_background--yellow"]}>
              <i className="bi bi-lightbulb"></i>
            </div>
          </div>
          <StackedList
            className="border-none mb-2"
            title={{ content: "카카오 실험실", className: "text-center py-2" }}
            subTitle={{
              className: "text-center",
              content: (
                <>
                  출시 준비 중인 새로운 기능을 먼저 이용해 볼 수 있습니다.
                  <br />
                  실험실 기능은 원하실 때 끄고 켜실 수 있습니다.
                </>
              ),
            }}></StackedList>

          <StackedListWrap>
            {laboratoryMenuContents?.map((data, i) => (
              <TargetContent
                key={i}
                targetOption={
                  data.targetOption && checkedContent !== `switch${i}`
                }
                isWidthFull>
                <Switch
                  className=""
                  theme={data.theme}
                  title={data.title}
                  subTitle={data.subTitle}
                  setCheckedSwitch={data.targetOption && setCheckedContent}
                  id={`switch${i}`}></Switch>
              </TargetContent>
            ))}
          </StackedListWrap>

          <div className="display_subTitle--light py-2">
            실험실 기능은 바람처럼 나타났다 소리없이 사라질 수 있습니다.
          </div>
        </>
      )}
      {/* setting page */}
      {choicedSetting === "" && (
        <>
          <AppHeader
            leftItem={[
              <BackBtn
                targetOption={checkedContent !== ""}
                isNavTriger={true}
                onClick={() => {
                  setChoicedSetting("");
                  setChoicedModal("");
                }}></BackBtn>,
              "설정",
            ]}
          />
          {/* 나 */}
          <StackedListWrap>
            <StackedList_Profile
              className="h-8"
              profile={{
                className: "bg-kakaoPurple ",
                content: <i className="text-white bi bi-person-fill"></i>,
              }}
              title={{
                className: "ml-2",
                content: "나",
              }}
              info={{
                className: "borderGray",
                content: "프로필 관리",
              }}
              subTitle={{
                className: "col-end-7 ml-2",
                content: "+82 10-0000-0000",
              }}
              subInfo={{}}></StackedList_Profile>
          </StackedListWrap>
          {/*  settingMenuContents1 */}
          <StackedListWrap>
            {settingMenuContents1?.map((menu, i) => (
              <TargetContent
                key={i}
                targetOption={menu.targetOption && checkedContent === ""}
                onClick={menu.onClick}>
                <StackedList_Profile
                  className="hover:bg-gray-100 h-10"
                  profile={{
                    className: "",
                    content: (
                      <i className={`text-base bi bi-${menu.profile}`}></i>
                    ),
                  }}
                  title={{
                    className: "text-xs display_subTitle",
                    content: menu.title,
                  }}
                  subTitle={
                    menu.subTitle
                      ? { content: menu.subTitle, className: "ml-2" }
                      : undefined
                  }></StackedList_Profile>
              </TargetContent>
            ))}
          </StackedListWrap>
          {/*  settingMenuContents2 */}
          <StackedListWrap>
            {settingMenuContents2?.map((menu, i) => (
              <TargetContent
                key={i}
                targetOption={menu.targetOption && checkedContent === ""}
                onClick={menu.onClick}>
                <StackedList_Profile
                  className="hover:bg-gray-100 h-10"
                  profile={{
                    className: "",
                    content: (
                      <i className={`text-base bi bi-${menu.profile}`}></i>
                    ),
                  }}
                  title={{
                    className: "text-xs display_subTitle",
                    content: menu.title,
                  }}
                  subTitle={
                    menu.subTitle
                      ? { content: menu.subTitle, className: "ml-2" }
                      : undefined
                  }></StackedList_Profile>
              </TargetContent>
            ))}
          </StackedListWrap>
        </>
      )}
    </NoScrollBar>
  );
}

export default ETCSetting;
