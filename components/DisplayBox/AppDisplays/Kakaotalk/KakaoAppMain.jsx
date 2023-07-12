import { useContext, useState } from "react";

import classes from "./KakaoAppMain.module.css";
import TargetContent from "../components/TargetContent";

import StackedList_Profile from "../components/list/StackedList_Profile";
import AppHeader from "../components/UI/AppHeader";
import Tab from "../components/UI/Tab";

function KakaoAppMain({ navTriger, tab }) {
  const [tabName, setTabName] = useState(tab === "ETC" ? "friend" : tab);

  const friendListContents = [
    <StackedList_Profile
      className="h-8"
      profile={{
        className: "bg-kakaoSkyblue",
        content: <i className="text-kakaoIcon bi bi-person-fill" />,
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
        content: <i className="text-kakaoIcon bi bi-person-fill" />,
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
        content: <i className="text-kakaoIcon bi bi-person-fill" />,
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
        content: <i className="text-kakaoIcon bi bi-person-fill" />,
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
        content: <i className="text-kakaoIcon bi bi-person-fill" />,
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
        content: <i className="text-kakaoIcon bi bi-person-fill" />,
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
    <>
      <div className={classes.layout}>
        <div className={classes.mainLayout}>
          <div className={classes.main_header}>
            {tabName === "friend" && (
              <AppHeader
                leftItem={[<div className="text-sm font-bold">친구</div>]}
                rightItem={[
                  <i className="bi bi-search" />,
                  <i className="ml-2 bi bi-person-plus" />,
                  <i className="ml-2 bi bi-music-note-beamed" />,
                  <i className="ml-2 bi bi-gear" />,
                ]}></AppHeader>
            )}
            {tabName === "chat" && (
              <AppHeader
                leftItem={[<div className="text-sm font-bold">채팅</div>]}
                rightItem={[
                  <i className="bi bi-search" />,
                  <i key={Math.random()} className="ml-2 bi bi-plus-circle" />,
                  <i className="ml-2 bi bi-gear" />,
                ]}></AppHeader>
            )}
            {tabName === "openChat" && (
              <AppHeader
                leftItem={[<div className="text-sm font-bold">오픈채팅</div>]}
                rightItem={[
                  <i className=" bi bi-plus-circle" />,
                  <i className="ml-2 bi bi-chat" />,

                  <i className="ml-2 bi bi-gear" />,
                ]}></AppHeader>
            )}
            {tabName === "shopping" && (
              <AppHeader
                leftItem={[<div className="text-sm font-bold">쇼핑</div>]}
                rightItem={[
                  <i className=" bi bi-bag-check" />,
                  <i className="ml-2 bi bi-gear" />,
                ]}></AppHeader>
            )}
            {tabName === "ETC" && (
              <AppHeader
                leftItem={[<div className="text-sm font-bold">더보기</div>]}
                rightItem={[
                  <i className=" bi bi-search" />,
                  <i className="ml-2 bi bi-upc-scan" />,
                  <TargetContent
                    targetOption={tab === "ETC" && navTriger === "setting"}
                    isNextDescriptionLink={true}>
                    <i className="ml-2 bi bi-gear" />
                  </TargetContent>,
                ]}></AppHeader>
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
      </div>
      <Tab
        className="bg-neutral-100 shadow-sm"
        setClickedTab={setTabName}
        defaultTab={tab}
        clickedTab={tabName}
        iconItems={[
          {
            tabname: "friend",
            content: "bi bi-person",
            clickedContent: "bi bi-person-fill",
          },
          {
            tabname: "chat",
            content: "bi bi-chat",
            clickedContent: "bi bi-chat-fill",
          },
          {
            tabname: "openChat",
            content: "bi bi-chat-heart",
            clickedContent: "bi bi-chat-heart-fill",
          },
          {
            tabname: "shopping",
            content: "bi bi-handbag",
            clickedContent: "bi bi-handbag-fill",
          },
          {
            tabname: "ETC",
            content: "bi bi-three-dots",
            clickedContent: "bi bi-three-dots",
          },
        ]}></Tab>
    </>
  );
}

export default KakaoAppMain;
