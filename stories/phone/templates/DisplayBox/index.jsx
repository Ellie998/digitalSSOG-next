import { useContext } from "react";
import UrlContext from "components/page_context/UrlContext";
///
import { default as MainApps } from "stories/phone/Apps/Basic/Home";
import { default as AppMainError } from "stories/phone/organisms/Main/Error";
import { default as AppMain_default } from "stories/phone/organisms/Main/Default";
// call
import { default as CallAppMain } from "stories/phone/Apps/Basic/Call/templates/Main";
import AnswerCall from "stories/phone/Apps/Basic/Call/templates/AnswerCall";
import CallConnected from "stories/phone/Apps/Basic/Call/templates/CallConnected";
import VideoCallConnected from "stories/phone/Apps/Basic/Call/templates/VideoCallConnected";
// message
import { default as MessageAppMain } from "stories/phone/Apps/Basic/Message/templates/Main";
import { default as Message } from "stories/phone/Apps/Basic/Message/templates/Chat";
import { default as UnreadMessage } from "stories/phone/Apps/Basic/Message/templates/Unread";
import SelectPerson from "stories/phone/Apps/Basic/Message/templates/SelectPerson";
//kakao
import { default as KakaoAppMain } from "stories/phone/Apps/KakaoTalk/templates/Main";
import { default as KakaoProfileDetail } from "stories/phone/Apps/KakaoTalk/templates/Profile";
import { default as KakaoChatRoom } from "stories/phone/Apps/KakaoTalk/templates/Chat";
import ETCSetting from "stories/phone/Apps/KakaoTalk/templates/ETCSetting";
import ETCSetting_lab from "stories/phone/Apps/KakaoTalk/templates/ETCSetting_lab";
import { default as KakaoChatRoom_setting } from "stories/phone/Apps/KakaoTalk/templates/ChatSetting";
//file
import SelectFile from "stories/phone/Apps/Basic/Message/templates/SelectFile";
import ChoiceImgs from "stories/phone/Apps/Basic/Message/templates/ChoiceImgs";

function DisplayBox() {
  const {
    functionName,
    myAppName,
    myMethodId,
    myDescriptionId,
    //
    functionName_makeCall,
    functionName_getCall,
    functionName_makeVideoCall,
    functionName_sendMessage,
    functionName_seeMessage,
    functionName_resendMessage,
    functionName_reserveMessage,
    functionName_sendImg,
    functionName_sendAudio,
    functionName_sendPhoneNum,
    functionName_kakaotalk_groubChatLeave_rejectInvitation,
    functionName_kakaotalk_groubChatLock,
    functionName_kakaotalk_groubChatLeave_quietly,
    //
    appName_basic,
    appName_kakaotalk,
    // appName_message,
    // appName_call,
  } = useContext(UrlContext);

  const appName = myAppName;
  const methodId = myMethodId.toString();
  const descriptionId = myDescriptionId;

  let choicedComponent = <AppMain_default />;

  switch (functionName.replaceAll("-", " ")) {
    case functionName_makeCall:
      if (appName === appName_basic) {
        choicedComponent = [
          <MainApps key="mainApps" appName_call />,
          <CallAppMain
            key="callAppMain"
            targetTab={["", "키패드", "최근기록", "연락처"][methodId]}
            target_Call
          />,
          <CallConnected key="callConnected" appName_basic />,
        ][descriptionId];
      } else if (appName === appName_kakaotalk) {
        choicedComponent = [
          <MainApps key="mainApps" appName_kakaotalk />,
          <KakaoAppMain key="KakaoAppMain" defaultTab_friend target_profile />,
          <KakaoProfileDetail key="kakaoProfileDetail" />,
          <CallConnected key="callConnected" appName_kakaotalk />,
        ][descriptionId];
      }
      break;
    case functionName_getCall:
      if (appName === appName_basic) {
        choicedComponent = [
          <AnswerCall key="answerCall" appName_basic />,
          <CallConnected key="callConnected" appName_basic />,
        ][descriptionId];
      } else if (appName === appName_kakaotalk) {
        choicedComponent = [
          <AnswerCall key="answerCall" appName_kakaotalk />,
          <CallConnected key="callConnected" appName_kakaotalk />,
        ][descriptionId];
      }
      break;
    case functionName_makeVideoCall:
      if (appName === appName_basic) {
        choicedComponent = [
          <MainApps key="mainApps" appName_call />,
          <CallAppMain key="callAppMain" targetTab="키패드" target_videoCall />,
          <VideoCallConnected key="callConnected" />,
        ][descriptionId];
      }
      break;
    case functionName_sendMessage:
      choicedComponent =
        methodId === "1"
          ? [
              <MainApps key="mainApps" appName_message />,
              <MessageAppMain key="MessageAppMain" target_sendMessage />,
              <SelectPerson key="SelectPerson" target_person1 />,
              <Message key="Message" />,
            ][descriptionId]
          : [
              <MainApps key="mainApps" appName_message />,
              <MessageAppMain key="MessageAppMain" target_seeMessage />,
              <Message key="Message" />,
            ][descriptionId];
      break;
    case functionName_seeMessage:
      if (appName === appName_basic) {
        choicedComponent =
          methodId === "1"
            ? [
                <MainApps key="mainApps" appName_message />,
                <MessageAppMain key="MessageAppMain" target_seeMessage />,
                <Message key="Message" />,
              ][descriptionId]
            : [
                <MainApps key="mainApps" appName_message />,
                <MessageAppMain key="MessageAppMain" target_unreadMessage />,
                <UnreadMessage key="UnreadMessage" />,
                <Message key="Message" />,
              ][descriptionId];
      }
      break;
    case functionName_resendMessage:
      if (appName === appName_basic) {
        choicedComponent = [
          <MainApps key="mainApps" appName_message />,
          <MessageAppMain key="MessageAppMain" target_seeMessage />,
          <Message key="Message" target_resend />,
          <SelectPerson key="SelectPerson" target_person2 />,
          <Message key="Message" target_resend message_fill />,
        ][descriptionId];
      }
      break;
    case functionName_reserveMessage:
      if (appName === appName_basic) {
        choicedComponent = [
          <MainApps key="mainApps" appName_message />,
          <MessageAppMain key="MessageAppMain" target_sendMessage />,
          <SelectPerson key="SelectPerson" target_person1 />,
          <Message key="Message" open_option target_reserveMessage />,
          <Message key="Message" open_modal target_reserveMessage />,
          //
          <Message key="Message" open_optionInfo target_reserveMessage />,
          <Message
            key="Message"
            open_modal
            modal_optionSetting
            target_reserveMessage
          />,
        ][descriptionId];
      }
      if (appName === appName_kakaotalk) {
        choicedComponent = [
          <MainApps key="mainApps" appName_kakaotalk />,
          <KakaoAppMain key="KakaoAppMain" defaultTab_chat target_chat />,
          <KakaoChatRoom key="KakaoChatRoom1" target_optionBtn />,
          <KakaoChatRoom
            key="KakaoChatRoom2"
            open_option
            target_reserveMessage
          />,
          <KakaoChatRoom
            key="KakaoChatRoom3"
            open_optionSetting
            target_reserveMessage
          />,
          //
          <KakaoChatRoom key="KakaoChatRoom4" open_alert target_optionBtn />,
          <KakaoChatRoom
            key="KakaoChatRoom5"
            open_option
            target_reserveMessage
          />,
          <KakaoChatRoom
            key="KakaoChatRoom6"
            reopen_optionSetting
            target_reserveMessage
          />,
        ][descriptionId];

        break;
      }
      break;
    case functionName_sendImg:
      if (appName === appName_basic) {
        choicedComponent =
          methodId === "1"
            ? [
                <MainApps key="mainApps" appName_message />,
                <MessageAppMain key="MessageAppMain" target_sendMessage />,
                <SelectPerson key="SelectPerson" target_person1 />,
                <Message key="Message1" target_sendImgBtn />,
                <Message key="Message2" open_imgOption target_sendImg />,
              ][descriptionId]
            : [
                <MainApps key="mainApps" appName_message />,
                <MessageAppMain key="MessageAppMain" target_sendMessage />,
                <SelectPerson key="SelectPerson" target_person1 />,
                <Message
                  key="Message1"
                  open_option={methodId === "2"}
                  target_sendImg
                />,
                <SelectFile key="SelectFile" target_sendImg />,
                <ChoiceImgs key="ChoiceImgs" />,
                <Message key="Message2" open_optionInfo target_sendImg />,
              ][descriptionId];
      }
      break;
    case functionName_sendAudio:
      if (appName === appName_basic) {
        choicedComponent = [
          <MainApps key="mainApps" appName_message />,
          <MessageAppMain key="MessageAppMain" target_sendMessage />,
          <SelectPerson key="SelectPerson" target_person1 />,
          <Message key="Message" open_option target_sendAudio />,
          <SelectFile key="SelectFile" target_sendAudio />,
          <Message key="Message" open_optionInfo target_sendAudio />,
        ][descriptionId];
      }
      break;
    case functionName_sendPhoneNum:
      if (appName === appName_basic) {
        choicedComponent = [
          <MainApps key="mainApps" appName_message />,
          <MessageAppMain key="MessageAppMain" target_sendMessage />,
          <SelectPerson key="SelectPerson1" target_person1 />,
          <Message key="Message1" open_option target_sendPhoneNum />,
          <SelectPerson key="SelectPerson2" target_person2 />,
          <Message key="Message2" open_optionInfo target_sendPhoneNum />,
        ][descriptionId];
      }
      break;
    case functionName_kakaotalk_groubChatLeave_rejectInvitation:
      if (appName === appName_kakaotalk) {
        choicedComponent = [
          <MainApps key="mainApps" appName_kakaotalk />,
          <KakaoAppMain key="KakaoAppMain" defaultTab_chat target_groupChat />,
          <KakaoChatRoom key="KakaoChatRoom1" chatType_group target_menu />,
          <KakaoChatRoom
            key="KakaoChatRoom2"
            chatType_group
            open_menu
            target_setting
          />,
          <KakaoChatRoom_setting
            key="KakaoChatRoom_setting1"
            target_groubChatLeave_rejectInvitation
          />,
          <KakaoChatRoom_setting
            key="KakaoChatRoom_setting2"
            target_groubChatLeave_rejectInvitation
            open_modal
          />,
          //
          <KakaoAppMain key="KakaoAppMain" defaultTab_chat />,
        ][descriptionId];
      }

      break;
    case functionName_kakaotalk_groubChatLock:
      if (appName === appName_kakaotalk) {
        choicedComponent = [
          <MainApps key="mainApps" appName_kakaotalk />,
          <KakaoAppMain key="KakaoAppMain" defaultTab_chat target_groupChat />,
          <KakaoChatRoom key="KakaoChatRoom1" chatType_group target_menu />,
          <KakaoChatRoom
            key="KakaoChatRoom2"
            chatType_group
            open_menu
            target_setting
          />,
          <KakaoChatRoom_setting
            key="KakaoChatRoom_setting"
            target_groubChatLock
            target_backBtn
          />,
          <KakaoChatRoom
            key="KakaoChatRoom4"
            chatType_group
            inputLocked={true}
          />,
          <KakaoChatRoom key="KakaoChatRoom5" chatType_group />,
        ][descriptionId];
      }
      break;
    case functionName_kakaotalk_groubChatLeave_quietly:
      if (appName === appName_kakaotalk) {
        choicedComponent = [
          <MainApps key="mainApps" appName_kakaotalk />,
          <KakaoAppMain key="KakaoAppMain" defaultTab_ETC target_setting />,
          <ETCSetting key="ETCSetting1" target_lab />,
          <ETCSetting_lab key="ETCSetting_lab" target_groubChatLeave_quietly />,
          <ETCSetting key="ETCSetting2" target_backBtn />,
          //
          <KakaoAppMain key="KakaoAppMain1" defaultTab_chat target_groupChat />,
          <KakaoChatRoom key="KakaoChatRoom1" chatType_group target_menu />,
          <KakaoChatRoom
            key="KakaoChatRoom2"
            open_menu
            chatType_group
            target_leave_quietly
          />,
          <KakaoChatRoom
            key="KakaoChatRoom3"
            open_modal
            chatType_group
            target_leave_quietly
          />,
          <KakaoAppMain key="KakaoAppMain2" defaultTab_chat />,
        ][descriptionId];
      }
      break;
    default:
      choicedComponent = <AppMainError />;
  }

  return choicedComponent;
}

export default DisplayBox;
