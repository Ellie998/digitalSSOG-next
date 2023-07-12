import { useContext, useState } from "react";

import classes from "./KakaoAppMain.module.css";
import MakeList from "../components/MakeList";
import TargetContent from "../components/TargetContent";

import StackedList_Profile from "../components/list/StackedList_Profile";

function KakaoAppMain({ navTriger, tab }) {
  const [tabName, setTabName] = useState(tab === "ETC" ? "friend" : tab);

  const friendListContents = [
    <StackedList_Profile
      className="h-8"
      profile={{
        className: "bg-kakaoSkyblue",
        content: <i className="text-kakaoIcon bi bi-person-fill"></i>,
      }}
      title={{ content: "진수", className: "" }}
      info={{
        className: "borderGray",
        content: "상태메시지 올리기.",
      }}
    />,
    <StackedList_Profile
      className="h-8"
      profile={{
        className: "bg-kakaoPurple",
        content: <i className="text-kakaoIcon bi bi-person-fill"></i>,
      }}
      title={{ content: "영희", className: "" }}
      subTitle={{
        className: "",
        content: "행복하세요.",
      }}
    />,
    <StackedList_Profile
      className="h-8"
      profile={{
        className: "bg-kakaoBlue",
        content: <i className="text-kakaoIcon bi bi-person-fill"></i>,
      }}
      title={{ content: "철수", className: "" }}
      info={{
        className: "borderGreenYellow",
        content: "밤이 깊었네-노..",
      }}
    />,
  ];
  const chatListContents = [
    <StackedList_Profile
      className="h-8 mb-1"
      profile={{
        className: "bg-kakaoPurple",
        content: <i className="text-kakaoIcon bi bi-person-fill"></i>,
      }}
      title={{ content: "그룹채팅방1", className: "col-end-7" }}
      subTitle={{
        className: "",
        content: "퇴사합니다",
      }}
      info={{
        className: "col-start-5 text-end text-neutral-400",
        content: "오전 8:09",
      }}
      subInfo={{}}
    />,
    <StackedList_Profile
      className="h-8 mb-1"
      profile={{
        className: "bg-kakaoPurple",
        content: <i className="text-kakaoIcon bi bi-person-fill"></i>,
      }}
      title={{ content: "영희", className: "" }}
      subTitle={{
        className: "",
        content: "네.",
      }}
      info={{
        className: "col-start-5 text-end text-neutral-400",
        content: "오후 2:05",
      }}
      subInfo={{
        className: "col-start-5 text-center alert--yellow",
        content: "1",
      }}
    />,
    <StackedList_Profile
      className="h-8 mb-1"
      profile={{
        className: "bg-kakaoBlue",
        content: <i className="text-kakaoIcon bi bi-person-fill"></i>,
      }}
      title={{ content: "철수", className: "" }}
      subTitle={{
        className: "col-end-7",
        content: "이모티콘을 보냈습니다.",
      }}
      info={{
        className: "col-start-5 text-end text-neutral-400",
        content: "오전 9:42",
      }}
    />,
  ];

  return (
    <div className={classes.layout}>
      <div className={classes.mainLayout}>
        <div className={classes.main_header}>
          {tabName === "friend" && (
            <MakeList
              listStyle={"flex_spaceBetween"}
              leftFlexItem={[{ className: "title--bold", content: "친구" }]}
              rightFlexItem={[
                {
                  className: "",
                  content: <i className="bi bi-search"></i>,
                },
                {
                  className: "",
                  content: <i className="bi bi-person-plus"></i>,
                },
                {
                  className: "",
                  content: <i className="bi bi-music-note-beamed"></i>,
                },
                {
                  className: "",
                  content: <i className="bi bi-gear"></i>,
                },
              ]}></MakeList>
          )}
          {tabName === "chat" && (
            <MakeList
              listStyle={"flex_spaceBetween"}
              leftFlexItem={[{ className: "title--bold", content: "채팅" }]}
              rightFlexItem={[
                {
                  className: "",
                  content: <i className="bi bi-search"></i>,
                },
                {
                  className: "",
                  content: <i className="bi bi-plus-circle"></i>,
                },
                {
                  className: "",
                  content: <i className="bi bi-gear"></i>,
                },
              ]}></MakeList>
          )}
          {tabName === "openChat" && (
            <MakeList
              listStyle={"flex_spaceBetween"}
              leftFlexItem={[{ className: "title--bold", content: "오픈채팅" }]}
              rightFlexItem={[
                {
                  className: "",
                  content: <i className="bi bi-plus-circle"></i>,
                },
                {
                  className: "",
                  content: <i className="bi bi-chat"></i>,
                },
                {
                  className: "",
                  content: <i className="bi bi-gear"></i>,
                },
              ]}></MakeList>
          )}
          {tabName === "shopping" && (
            <MakeList
              listStyle={"flex_spaceBetween"}
              leftFlexItem={[{ className: "title--bold", content: "쇼핑" }]}
              rightFlexItem={[
                {
                  className: "",
                  content: <i className="bi bi-bag-check"></i>,
                },
                {
                  className: "",
                  content: <i className="bi bi-gear"></i>,
                },
              ]}></MakeList>
          )}
          {tabName === "ETC" && (
            <MakeList
              listStyle={"flex_spaceBetween"}
              leftFlexItem={[{ className: "title--bold", content: "더보기" }]}
              rightFlexItem={[
                {
                  className: "",
                  content: <i className="bi bi-search"></i>,
                },
                {
                  className: "",
                  content: <i className="bi bi-upc-scan"></i>,
                },
                {
                  className: "",
                  content: (
                    <TargetContent
                      targetOption={tab === "ETC" && navTriger === "setting"}
                      isNextDescriptionLink={true}>
                      <i className="bi bi-gear"></i>
                    </TargetContent>
                  ),
                },
              ]}></MakeList>
          )}
        </div>
        {/* main */}
        {tabName === "friend" && (
          <div className={classes.list}>
            <div className={classes.border_topbottom}>
              {friendListContents[0]}
            </div>
            <div className={classes.profile_message}>친구 2</div>
            {friendListContents[1]}
            {
              <TargetContent
                targetOption={navTriger === "profile_friend"}
                isNextDescriptionLink={true}>
                {friendListContents[2]}
              </TargetContent>
            }
          </div>
        )}
        {tabName === "chat" && (
          <div className={classes.list}>
            {navTriger === "chatList_group" && (
              <TargetContent
                targetOption={navTriger === "chatList_group"}
                isNextDescriptionLink={true}>
                {chatListContents[0]}
              </TargetContent>
            )}
            {chatListContents[1]}
            {chatListContents[2]}
          </div>
        )}
        {tabName === "openChat" && <div className={classes.list}></div>}
        {tabName === "shopping" && <div className={classes.list}></div>}
        {tabName === "ETC" && <div className={classes.list}></div>}
      </div>
      <div className={classes.navAppLayout}>
        <div onClick={() => setTabName("friend")}>
          <TargetContent
            targetOption={tab === "friend" && tabName !== "friend"}>
            <i
              className={
                tabName === "friend" ? "bi bi-person-fill" : "bi bi-person"
              }></i>
          </TargetContent>
        </div>
        <div onClick={() => setTabName("chat")}>
          <TargetContent targetOption={tab === "chat" && tabName !== "chat"}>
            <i
              className={
                tabName === "chat" ? "bi bi-chat-fill" : "bi bi-chat"
              }></i>
          </TargetContent>
        </div>
        <div onClick={() => setTabName("openChat")}>
          <TargetContent
            targetOption={tab === "openChat" && tabName !== "openChat"}>
            <i
              className={
                tabName === "openChat"
                  ? "bi bi-chat-heart-fill"
                  : "bi bi-chat-heart"
              }></i>
          </TargetContent>
        </div>
        <div onClick={() => setTabName("shopping")}>
          <TargetContent
            targetOption={tab === "shopping" && tabName !== "shopping"}>
            <i
              className={
                tabName === "shopping" ? "bi bi-handbag-fill" : "bi bi-handbag"
              }></i>
          </TargetContent>
        </div>
        <div onClick={() => setTabName("ETC")}>
          <TargetContent targetOption={tab === "ETC" && tabName !== "ETC"}>
            <i
              className={
                tabName === "ETC" ? "bi bi-three-dots" : "bi bi-three-dots"
              }></i>
          </TargetContent>
        </div>
      </div>
    </div>
  );
}

export default KakaoAppMain;
