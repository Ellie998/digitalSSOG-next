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
  open = { topModal: false },
  target = {
    profile: false,
    chat: false,
    groupChat: false,
    setting: false,
    newChat: false,
  },
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
        <FriendTab target={target} tab={tab.friend} />
      )}
      {clickedTabName === "chat" && (
        <ChatTab target={target} open={open} tab={tab.chat} />
      )}
      {clickedTabName === "openChat" && (
        <OpenChatTab target={target} tab={tab.openChat} />
      )}
      {clickedTabName === "shopping" && (
        <ShoppingTab target={target} tab={tab.shopping} />
      )}
      {clickedTabName === "ETC" && <ETCTab target={target} tab={tab.ETC} />}

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
