/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import { useState } from "react";

import Phone from "stories/phone/molecules/Phone";
import KakaoTab from "stories/phone/Apps/KakaoTalk/organisms/kakaoTab";
import FriendTab from "stories/phone/Apps/KakaoTalk/organisms/FriendTab";
import ChatTab from "stories/phone/Apps/KakaoTalk/organisms/ChatTab";
import OpenChatTab from "stories/phone/Apps/KakaoTalk/organisms/OpenChatTab";
import ShoppingTab from "stories/phone/Apps/KakaoTalk/organisms/ShoppingTab";
import ETCTab from "stories/phone/Apps/KakaoTalk/organisms/ETCTab";

function Main({
  open = { topModal: false },
  target = { profile: false, chat: false, groupChat: false, setting: false },
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
      {clickedTabName === "friend" && <FriendTab target={target} />}
      {clickedTabName === "chat" && <ChatTab target={target} open={open} />}
      {clickedTabName === "openChat" && <OpenChatTab target={target} />}
      {clickedTabName === "shopping" && <ShoppingTab target={target} />}
      {clickedTabName === "ETC" && <ETCTab target={target} />}

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
