/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import StackedList_Profile from "stories/phone/molecules/StackedList_Profile";
import Icon from "stories/phone/atoms/Icon";
import NoScrollBar from "components/DisplayBox/AppDisplays/components/layout/NoScrollBar";
import AppHeader from "components/DisplayBox/AppDisplays/components/layout/AppHeader";
import TargetContent from "components/DisplayBox/AppDisplays/components/TargetContent";
import StackedListWrap from "components/DisplayBox/AppDisplays/components/list/StackedListWrap";

function FriendTab({
  // eslint-disable-next-line react/prop-types
  target = { profile: false },
}) {
  const friendListContents = [
    <StackedList_Profile
      key="jinsu"
      profile={{
        style: { backgroundColor: "var(--kakao-skyblue)" },
        content: (
          <Icon
            name="person-fill"
            style={{ color: "var(--kakao-profilePerson)" }}
          />
        ),
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
        content: (
          <Icon
            name="person-fill"
            style={{ color: "var(--kakao-profilePerson)" }}
          />
        ),
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
        content: (
          <Icon
            name="person-fill"
            style={{ color: "var(--kakao-profilePerson)" }}
          />
        ),
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
    <NoScrollBar height="240px">
      <AppHeader
        leftItem={[<div className="text-sm font-bold">친구</div>]}
        rightItem={[
          <Icon name="search" className="text-sm" />,
          <Icon name="person-plus" className="ml-1 text-sm" />,
          <Icon name="music-note-beamed" className="ml-1 text-sm" />,
          <Icon name="gear" className="ml-1 text-sm" />,
        ]}></AppHeader>

      <>
        <StackedListWrap>{friendListContents[0]}</StackedListWrap>
        <StackedListWrap
          className="border-none"
          listTitle={{ content: "친구 2" }}>
          {friendListContents[1]}
          <TargetContent
            targetOption={target.profile}
            isNextDescriptionLink={true}>
            {friendListContents[2]}
          </TargetContent>
        </StackedListWrap>
      </>
    </NoScrollBar>
  );
}

export default FriendTab;
