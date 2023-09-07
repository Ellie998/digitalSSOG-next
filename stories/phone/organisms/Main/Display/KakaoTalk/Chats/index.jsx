/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useContext } from "react";
import UrlContext from "components/page_context/UrlContext";

import Home from "stories/phone/Apps/Basic/Home/index";
import Error from "stories/phone/organisms/Main/Error/index";
import Default from "stories/phone/organisms/Main/Default/index";

import Main from "stories/phone/Apps/KakaoTalk/templates/Main/index";
import Chat from "stories/phone/Apps/KakaoTalk/templates/Chat/index";
import ETCSetting from "stories/phone/Apps/KakaoTalk/templates/ETCSetting/index";
import ETCSetting_lab from "stories/phone/Apps/KakaoTalk/templates/ETCSetting_lab/index";
import ChatSetting from "stories/phone/Apps/KakaoTalk/templates/ChatSetting/index";
import Profile from "stories/phone/Apps/KakaoTalk/templates/Profile/index";
import SelectPerson from "stories/phone/Apps/KakaoTalk/templates/SelectPerson/index";

function Chats({ functionName, methodId, descriptionId }) {
  //
  const {
    functionName_seeMessage,
    functionName_sendMessage,
    functionName_reserveMessage,
    functionName_resendMessage,
    //
    functionName_kakaotalk_groubChatLeave_rejectInvitation,
    functionName_kakaotalk_groubChatLock,
    functionName_kakaotalk_groubChatLeave_quietly,
    functionName_groupChat,
    functionName_leaveChat,
  } = useContext(UrlContext);

  let choicedComponent = <Default />;

  switch (functionName.replaceAll("-", " ")) {
    case functionName_seeMessage:
      if (methodId === "1") {
        choicedComponent = [
          <Home key="mainApps" appName_kakaotalk />,
          <Main key="Main" tab={{ chat: true }} target={{ chat: true }} />,
          <Chat key="chat" />,
        ][descriptionId];
      }
      break;
    case functionName_sendMessage:
      if (methodId === "1") {
        choicedComponent = [
          <Home key="mainApps" appName_kakaotalk />,
          <Main key="Main" tab={{ friend: true }} target={{ profile: true }} />,
          <Profile key="Profile" target={{ chat: true }} />,
          <Chat key="chat" />,
        ][descriptionId];
      }
      if (methodId === "2") {
        choicedComponent = [
          <Home key="mainApps" appName_kakaotalk />,
          <Main key="Main" tab={{ chat: true }} target={{ chat: true }} />,
          <Chat key="chat" />,
        ][descriptionId];
      }

      break;
    case functionName_reserveMessage:
      choicedComponent = [
        <Home key="mainApps" appName_kakaotalk />,
        <Main key="Main" tab={{ chat: true }} target={{ chat: true }} />,
        <Chat key="Chat1" target={{ optionBtn: true }} />,
        <Chat
          key="Chat2"
          open={{ option: true }}
          target={{ reserveMessage: true }}
        />,
        <Chat
          key="Chat3"
          open={{ optionSetting: true }}
          target={{ reserveMessage: true }}
        />,
        //
        <Chat
          key="Chat4"
          open={{ alert: true }}
          target={{ optionBtn: true }}
        />,
        <Chat
          key="Chat5"
          open={{ option: true }}
          target={{ reserveMessage: true }}
        />,
        <Chat
          key="Chat6"
          reopen={{ optionSetting: true }}
          target={{ reserveMessage: true }}
        />,
      ][descriptionId];

      break;
    case functionName_resendMessage:
      if (methodId === "1") {
        choicedComponent = [
          <Home key="mainApps" appName_kakaotalk />,
          <Main key="Main" tab={{ chat: true }} target={{ chat: true }} />,
          <Chat
            key="chat1"
            target={{ chatOption: true, resend: true }}
            open={{ chat: true }}
          />,
          <Chat
            key="chat2"
            open={{ shareModal: true, chat: true }}
            share={{ friend2: true }}
          />,
          <Chat key="chat3" open={{ topAlert: true, chat: true }} />,
        ][descriptionId];
      }
      if (methodId === "2") {
        choicedComponent = [
          <Home key="mainApps" appName_kakaotalk />,
          <Main key="Main" tab={{ chat: true }} target={{ chat: true }} />,
          <Chat
            key="chat1"
            target={{ chatOption: true, resend: true }}
            open={{ chat: true }}
          />,
          <Chat
            key="chat2"
            open={{ shareModal: true, chat: true }}
            share={{ shareOut: true }}
          />,
          <Chat key="chat3" open={{ shareModal_default: true, chat: true }} />,
          <SelectPerson
            key="selectPerson"
            header={"공유 대상 선택"}
            target={{ person2: true }}
          />,
          <Chat
            key="chat4"
            content={{ chatName: "철수", sendChatContent: "좋은 아침^^" }}
            open={{ chat: false, sendedChat: true }}
          />,
        ][descriptionId];
      }
      break;
    //
    case functionName_kakaotalk_groubChatLeave_rejectInvitation:
      choicedComponent = [
        <Home key="mainApps" appName_kakaotalk />,
        <Main
          key="Main"
          tab={{ chat: true }}
          content={{
            name: "김대리",
            chat: "퇴사합니다.",
            num: "3",
            chatName: "그룹채팅",
          }}
          target={{ groupChat: true }}
        />,
        <Chat
          key="Chat1"
          content={{
            name: "김대리",
            chat: "퇴사합니다.",
            num: "3",
            chatName: "그룹채팅",
          }}
          target={{ menu: true }}
        />,
        <Chat
          key="Chat2"
          content={{
            name: "김대리",
            chat: "퇴사합니다.",
            num: "3",
            chatName: "그룹채팅",
          }}
          open={{ menu: true }}
          target={{ setting: true }}
        />,
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
        <Main key="Main" tab={{ chat: true }} />,
      ][descriptionId];

      break;
    case functionName_kakaotalk_groubChatLock:
      choicedComponent = [
        <Home key="mainApps" appName_kakaotalk />,
        <Main key="Main" tab={{ chat: true }} target={{ groupChat: true }} />,
        <Chat
          key="Chat1"
          content={{
            name: "김대리",
            chat: "퇴사합니다.",
            num: "3",
            chatName: "그룹채팅",
          }}
          target={{ menu: true }}
        />,
        <Chat
          key="Chat2"
          content={{
            name: "김대리",
            chat: "퇴사합니다.",
            num: "3",
            chatName: "그룹채팅",
          }}
          open={{ menu: true }}
          target={{ setting: true }}
        />,
        <ChatSetting key="ChatSetting" target_groubChatLock target_backBtn />,
        <Chat
          key="Chat4"
          content={{
            name: "김대리",
            chat: "퇴사합니다.",
            num: "3",
            chatName: "그룹채팅",
          }}
          inputLocked={true}
        />,
        <Chat
          key="Chat5"
          content={{
            name: "김대리",
            chat: "퇴사합니다.",
            num: "3",
            chatName: "그룹채팅",
          }}
        />,
      ][descriptionId];

      break;
    case functionName_kakaotalk_groubChatLeave_quietly:
      choicedComponent = [
        <Home key="mainApps" appName_kakaotalk />,
        <Main key="Main" tab={{ ETC: true }} target={{ setting: true }} />,
        <ETCSetting key="ETCSetting1" target_lab />,
        <ETCSetting_lab key="ETCSetting_lab" target_groubChatLeave_quietly />,
        <ETCSetting key="ETCSetting2" target_backBtn />,
        //
        <Main key="Main1" tab={{ chat: true }} target={{ groupChat: true }} />,
        <Chat
          key="Chat1"
          content={{
            name: "김대리",
            chat: "퇴사합니다.",
            num: "3",
            chatName: "그룹채팅",
          }}
          target={{ menu: true }}
        />,
        <Chat
          key="Chat2"
          content={{
            name: "김대리",
            chat: "퇴사합니다.",
            num: "3",
            chatName: "그룹채팅",
          }}
          open={{ menu: true }}
          target={{ leave_quietly: true }}
        />,
        <Chat
          key="Chat3"
          content={{
            name: "김대리",
            chat: "퇴사합니다.",
            num: "3",
            chatName: "그룹채팅",
          }}
          open={{ modal: true }}
          target={{ leave_quietly: true }}
        />,
        <Main key="Main2" tab={{ chat: true }} />,
      ][descriptionId];
      break;
    case functionName_groupChat:
    case functionName_leaveChat:
      if (methodId === "1")
        choicedComponent = [
          <Home key="mainApps" appName_kakaotalk />,
          <Main
            key="Main1"
            tab={{ chat: true }}
            target={{ groupChat: true }}
          />,
          <Main
            key="Main2"
            tab={{ chat: true }}
            target={{ groupChat: true, leaveChat: true }}
            open={{ optionModal: true }}
          />,
          <Main
            key="Main3"
            tab={{ chat: true }}
            target={{ groupChat: true, leaveChat: true }}
            open={{ modal: true }}
          />,
          <Main key="Main4" tab={{ chat: true }} />,
        ][descriptionId];

      break;

    default:
      choicedComponent = <Error />;
  }

  return choicedComponent;
}

export default Chats;
