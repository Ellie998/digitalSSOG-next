/* eslint-disable react/prop-types */
import StackedList_Profile from "stories/phone/molecules/StackedList_Profile/index";
import Icon from "stories/phone/atoms/Icon/index";
import NoScrollBar from "components/DisplayBox/AppDisplays/components/layout/NoScrollBar";
import AppHeader from "components/DisplayBox/AppDisplays/components/layout/AppHeader";

import StackedListWrap from "components/DisplayBox/AppDisplays/components/list/StackedListWrap";
import TargetBox from "stories/phone/atoms/TargetBox/index";

function FriendTab({
  // eslint-disable-next-line react/prop-types
  target = { profile: false },
  tab,
}) {
  const friendListContents = [
    <StackedList_Profile
      key="jinsu"
      profile={{
        style: { backgroundColor: "var(--kakao-skyblue)" },
        content: <Icon name="person-fill" style={{ color: "white" }} />,
      }}
      title={{ content: "진수", className: "" }}
      info={{
        style: {
          border: "1px solid rgb(233,233,233)",
          borderRadius: "0.75rem",
          padding: "0px 3px",
          textAlign: "center",
          overflow: "hidden",
          gridColumnStart: "4",
        },
        hover: {
          backgroundColor: "rgb(208 208 208)",
        },
        content: "상태메시지 올리기.",
      }}
    />,
    <StackedList_Profile
      key="younghee"
      profile={{
        style: { backgroundColor: "var(--kakao-purple)" },
        content: <Icon name="person-fill" style={{ color: "white" }} />,
      }}
      title={{ content: "영희", className: "" }}
      subTitle={{
        className: "",
        content: "행복하세요.",
      }}
    />,
    <StackedList_Profile
      key="cherlsu"
      profile={{
        style: { backgroundColor: "var(--kakao-blue)" },
        content: <Icon name="person-fill" style={{ color: "white" }} />,
      }}
      title={{ content: "철수", className: "" }}
      info={{
        style: {
          border: "1px solid  rgb(173 255 47)",
          borderRadius: "0.75rem",
          padding: "0px 3px",
          textAlign: "center",
          overflow: "hidden",
        },
        hover: {
          backgroundColor: "rgb(208 208 208)",
        },
        content: "애상 - 쿨",
      }}
    />,
  ];

  return (
    <NoScrollBar height="260px">
      <AppHeader
        leftItem={[
          <div key="header_title" className="text-sm font-bold">
            친구
          </div>,
        ]}
        rightItem={[
          <Icon key="search_icon" name="search" />,
          <Icon key="add_friend_icon" name="person-plus" />,
          <Icon key="music_icon" name="music-note-beamed" />,
          <Icon key="setting_icon" name="gear" />,
        ]}></AppHeader>

      <>
        <StackedListWrap>{friendListContents[0]}</StackedListWrap>
        <StackedListWrap
          className="border-none"
          listTitle={{ content: "친구 2" }}>
          <TargetBox condition={target.profile && tab}>
            {friendListContents[1]}
          </TargetBox>
          {friendListContents[2]}
        </StackedListWrap>
      </>
    </NoScrollBar>
  );
}

export default FriendTab;
