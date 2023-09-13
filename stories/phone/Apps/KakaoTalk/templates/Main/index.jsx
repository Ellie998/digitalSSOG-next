/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import { useState } from "react";

import Phone from "stories/phone/molecules/Phone/index";
import KakaoTab from "stories/phone/Apps/KakaoTalk/organisms/kakaoTab/index";
import FriendTab from "stories/phone/Apps/KakaoTalk/organisms/FriendTab/index";
import ChatTab from "stories/phone/Apps/KakaoTalk/organisms/ChatTab/index";
import OpenChatTab from "stories/phone/Apps/KakaoTalk/organisms/OpenChatTab/index";
import ShoppingTab from "stories/phone/Apps/KakaoTalk/organisms/ShoppingTab/index";
import ETCTab from "stories/phone/Apps/KakaoTalk/organisms/ETCTab/index";

function Main({
  target_friend = { person1: false, modal_nameChange: false, profile: false },
  target_chat = {
    chat: false,
    groupChat: false,
    newChat: false,
    onMouseDown: false,
    leaveChat: false,

    // profile: false,
    changeName: false,
    modal: false,
  },
  target_openChat = {},
  target_shopping = {},
  target_ETC = { setting: false },
  open_friend = { friendModal: false },
  open_chat = { topModal: false, optionModal: false, groupChat: false },
  content_chat = { groupName: "그룹채팅방1" },
  tab = {
    friend: false,
    chat: false,
    openChat: false,
    shopping: false,
    ETC: false,
  },
}) {
  function matchDefaultTabName() {
    if (tab.friend) return "friend";
    if (tab.chat) return "chat";
    if (tab.openChat) return "openChat";
    if (tab.shopping) return "shopping";
    if (tab.ETC) return "ETC";
    else return "friend";
  }

  const defaultTabName = matchDefaultTabName();
  const [clickedTabName, setClickedTabName] = useState(
    defaultTabName === "ETC" ? "friend" : defaultTabName
  );

  return (
    <Phone>
      {clickedTabName === "friend" && (
        <FriendTab
          target={{ ...target_friend }}
          open={open_friend}
          tab={tab.friend}
        />
      )}
      {clickedTabName === "chat" && (
        <ChatTab
          target={{ ...target_chat }}
          open={open_chat}
          tab={tab.chat}
          content={content_chat}
        />
      )}
      {clickedTabName === "openChat" && (
        <OpenChatTab target={target_openChat} tab={tab.openChat} />
      )}
      {clickedTabName === "shopping" && (
        <ShoppingTab target={target_shopping} tab={tab.shopping} />
      )}
      {clickedTabName === "ETC" && <ETCTab target={target_ETC} tab={tab.ETC} />}

      <KakaoTab
        setClickedTab={setClickedTabName}
        targetTab={defaultTabName}
        clickedTab={clickedTabName}
      />
      {/* ------tab end------ */}
    </Phone>
  );
}

export default Main;
