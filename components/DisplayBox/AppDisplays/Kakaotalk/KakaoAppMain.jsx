import { useState } from "react";

import TargetContent from "../components/TargetContent";

import StackedList_Profile from "../components/list/StackedList_Profile";
import StackedListWrap from "../components/list/StackedListWrap";
import AppHeader from "../components/layout/AppHeader";
import Tab from "../components/layout/Tab";
import NoScrollBar from "../components/layout/NoScrollBar";
import Icon from "../components/UI/Icon";

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
      <NoScrollBar height="240px">
        {/* Header start */}
        {tabName === "friend" && (
          <AppHeader
            leftItem={[<div className="text-sm font-bold">친구</div>]}
            rightItem={[
              <Icon name="search" className="text-sm" />,
              <Icon name="person-plus" className="ml-1 text-sm" />,
              <Icon name="music-note-beamed" className="ml-1 text-sm" />,
              <Icon name="gear" className="ml-1 text-sm" />,
            ]}></AppHeader>
        )}
        {tabName === "chat" && (
          <AppHeader
            leftItem={[<div className="text-sm font-bold">채팅</div>]}
            rightItem={[
              <Icon name="search" className="text-sm" />,
              <Icon name="plus-circle" className="ml-1 text-sm" />,
              <Icon name="gear" className="ml-1 text-sm" />,
            ]}></AppHeader>
        )}
        {tabName === "openChat" && (
          <AppHeader
            leftItem={[<div className="text-sm font-bold">오픈채팅</div>]}
            rightItem={[
              <Icon name="plus-circle" className=" text-sm" />,
              <Icon name="chat" className="ml-1 text-sm" />,
              <Icon name="gear" className="ml-1 text-sm" />,
            ]}></AppHeader>
        )}
        {tabName === "shopping" && (
          <AppHeader
            leftItem={[<div className="text-sm font-bold">쇼핑</div>]}
            rightItem={[
              <Icon name="bag-check" className="text-sm" />,
              <Icon name="gear" className="ml-1 text-sm" />,
            ]}></AppHeader>
        )}
        {tabName === "ETC" && (
          <AppHeader
            leftItem={[<div className="text-sm font-bold">더보기</div>]}
            rightItem={[
              <Icon name="search" className="text-sm" />,
              <Icon name="upc-scan" className="ml-1 text-sm" />,
              <TargetContent
                targetOption={tab === "ETC" && navTriger === "setting"}
                isNextDescriptionLink={true}>
                <Icon name="gear" className="ml-1 text-sm" />
              </TargetContent>,
            ]}></AppHeader>
        )}
        {/* ------Header end---- */}
        {/* main start */}
        {tabName === "friend" && (
          <>
            <StackedListWrap>{friendListContents[0]}</StackedListWrap>
            <StackedListWrap
              className="border-none"
              listTitle={{ content: "친구 2" }}>
              {friendListContents[1]}
              <TargetContent
                targetOption={navTriger === "profile_friend"}
                isNextDescriptionLink={true}>
                {friendListContents[2]}
              </TargetContent>
            </StackedListWrap>
          </>
        )}
        {tabName === "chat" && (
          <>
            {navTriger === "chatList_group" && (
              <TargetContent
                targetOption={navTriger === "chatList_group"}
                isNextDescriptionLink={true}>
                {chatListContents[0]}
              </TargetContent>
            )}
            {chatListContents[1]}
            {chatListContents[2]}
          </>
        )}
        {tabName === "openChat" && <></>}
        {tabName === "shopping" && <></>}
        {tabName === "ETC" && <></>}
        {/* -------main end------ */}
      </NoScrollBar>

      {/* tab start */}
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
      {/* ------tab end------ */}
    </>
  );
}

export default KakaoAppMain;
