/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import StackedList_Profile from "components/DisplayBox/AppDisplays/components/list/StackedList_Profile";
import Icon from "stories/phone/atoms/Icon/index";
import NoScrollBar from "components/DisplayBox/AppDisplays/components/layout/NoScrollBar";

import TargetContent from "components/DisplayBox/AppDisplays/components/TargetContent";
import TargetBox from "stories/phone/atoms/TargetBox/index";
import ChatHeader from "stories/phone/Apps/KakaoTalk/organisms/ChatHeader/index";

const ChatTab = ({
  target = { chat: false, groupChat: false, newChat: false },
  open = { topModal: false },
}) => {
  const chatListContents = [
    <StackedList_Profile
      className="h-8 mb-1"
      profile={{
        className: "bg-kakaoPurple",
        content: (
          <Icon
            name="person-fill"
            style={{ color: "var(--kakao-profilePerson)" }}
          />
        ),
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
        content: "좋은 아침^^",
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
        content: (
          <Icon
            name="person-fill"
            style={{ color: "var(--kakao-profilePerson)" }}
          />
        ),
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
        <ChatHeader target={target} open={open}></ChatHeader>

        <>
          {target.groupChat && (
            <TargetContent
              targetOption={target.groupChat}
              isNextDescriptionLink={true}>
              {chatListContents[0]}
            </TargetContent>
          )}
          {target.chat && (
            <TargetContent
              targetOption={target.chat}
              isNextDescriptionLink={true}>
              {chatListContents[1]}
            </TargetContent>
          )}
          {chatListContents[2]}
        </>
      </NoScrollBar>
    </>
  );
};

export default ChatTab;
