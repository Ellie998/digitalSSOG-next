/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import Home from "stories/phone/Apps/Basic/Home";
import Error from "stories/phone/organisms/Main/Error";
import Default from "stories/phone/organisms/Main/Default";

import Main from "stories/phone/Apps/KakaoTalk/templates/Main";
import Chat from "stories/phone/Apps/KakaoTalk/templates/Chat";
import ETCSetting from "stories/phone/Apps/KakaoTalk/templates/ETCSetting";
import ETCSetting_lab from "stories/phone/Apps/KakaoTalk/templates/ETCSetting_lab";
import ChatSetting from "stories/phone/Apps/KakaoTalk/templates/ChatSetting";

function Chats({ functionName, methodId, descriptionId }) {
  //

  const functionName_reserveMessage = "예약 문자 발송";
  const functionName_kakaotalk_groubChatLeave_rejectInvitation =
    "그룹채팅방 초대거부 및 나가기";
  const functionName_kakaotalk_groubChatLock =
    "그룹채팅방 채팅 입력창 잠금하기";
  const functionName_kakaotalk_groubChatLeave_quietly =
    "그룹채팅방 조용히 나가기";

  let choicedComponent = <Default />;

  switch (functionName.replaceAll("-", " ")) {
    case functionName_reserveMessage:
      choicedComponent = [
        <Home key="mainApps" appName_kakaotalk />,
        <Main key="KakaoAppMain" defaultTab_chat target_chat />,
        <Chat key="Chat1" target_optionBtn />,
        <Chat key="Chat2" open_option target_reserveMessage />,
        <Chat key="Chat3" open_optionSetting target_reserveMessage />,
        //
        <Chat key="Chat4" open_alert target_optionBtn />,
        <Chat key="Chat5" open_option target_reserveMessage />,
        <Chat key="Chat6" reopen_optionSetting target_reserveMessage />,
      ][descriptionId];

      break;

    case functionName_kakaotalk_groubChatLeave_rejectInvitation:
      choicedComponent = [
        <Home key="mainApps" appName_kakaotalk />,
        <Main key="KakaoAppMain" defaultTab_chat target_groupChat />,
        <Chat key="Chat1" chatType_group target_menu />,
        <Chat key="Chat2" chatType_group open_menu target_setting />,
        <ChatSetting
          key="ChatSetting1"
          target_groubChatLeave_rejectInvitation
        />,
        <ChatSetting
          key="ChatSetting2"
          target_groubChatLeave_rejectInvitation
          open_modal
        />,
        //
        <Main key="KakaoAppMain" defaultTab_chat />,
      ][descriptionId];

      break;
    case functionName_kakaotalk_groubChatLock:
      choicedComponent = [
        <Home key="mainApps" appName_kakaotalk />,
        <Main key="KakaoAppMain" defaultTab_chat target_groupChat />,
        <Chat key="Chat1" chatType_group target_menu />,
        <Chat key="Chat2" chatType_group open_menu target_setting />,
        <ChatSetting key="ChatSetting" target_groubChatLock target_backBtn />,
        <Chat key="Chat4" chatType_group inputLocked={true} />,
        <Chat key="Chat5" chatType_group />,
      ][descriptionId];

      break;
    case functionName_kakaotalk_groubChatLeave_quietly:
      choicedComponent = [
        <Home key="mainApps" appName_kakaotalk />,
        <Main key="KakaoAppMain" defaultTab_ETC target_setting />,
        <ETCSetting key="ETCSetting1" target_lab />,
        <ETCSetting_lab key="ETCSetting_lab" target_groubChatLeave_quietly />,
        <ETCSetting key="ETCSetting2" target_backBtn />,
        //
        <Main key="KakaoAppMain1" defaultTab_chat target_groupChat />,
        <Chat key="Chat1" chatType_group target_menu />,
        <Chat key="Chat2" open_menu chatType_group target_leave_quietly />,
        <Chat key="Chat3" open_modal chatType_group target_leave_quietly />,
        <Main key="KakaoAppMain2" defaultTab_chat />,
      ][descriptionId];

      break;
    default:
      choicedComponent = <Error />;
  }

  return choicedComponent;
}

export default Chats;
