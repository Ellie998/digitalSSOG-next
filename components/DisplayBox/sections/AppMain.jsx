import MainApps from "./MainApps";
import AppMainError from "./AppMainError";
// call
import CallAppMain from "../AppDisplays/Basic/call/CallAppMain"; //
import AnswerCall from "../AppDisplays/Basic/call/AnswerCall";
import CallConnected from "../AppDisplays/Basic/call/CallConnected";
import VideoCallConnected from "../AppDisplays/Basic/call/VideoCallConnected";
//kakao
import KakaoAppMain from "../AppDisplays/Kakaotalk/KakaoAppMain";
import KakaoProfileDetail from "../AppDisplays/Kakaotalk/KakaoProfileDetail";
// message
import MessageAppMain from "../AppDisplays/Basic/message/MessageAppMain"; //
import Message from "../AppDisplays/Basic/message/Message";
import UnreadMessage from "../AppDisplays/Basic/message/seeMessage/UnreadMessage";
import SelectPerson from "../AppDisplays/Basic/message/SelectPerson";
import ResendSuccess from "../AppDisplays/Basic/message/resend-message/ResendSuccess";
import SendResend from "../AppDisplays/Basic/message/resend-message/SendResend";
//file
import SelectFile from "../AppDisplays/Basic/file/SelectFile";
import ChoiceImgs from "../AppDisplays/Basic/gallery/ChoiceImgs";
import KakaoChatRoom from "../AppDisplays/Kakaotalk/KakaoChatRoom";
import { useContext } from "react";
import UrlContext from "../../page_context/UrlContext";
import ETCSetting from "../AppDisplays/Kakaotalk/ETCSetting";
import AppMain_default from "./AppMain_default";
import ETCSetting_lab from "../AppDisplays/Kakaotalk/ETCSetting_lab";
import KakaoChatRoom_setting from "../AppDisplays/Kakaotalk/KakaoChatRoom_setting";

function AppMain({}) {
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
    appName_message,
    appName_call,
  } = useContext(UrlContext);

  const appName = myAppName;
  const methodId = myMethodId.toString();
  const descriptionId = myDescriptionId;

  let choicedComponent = <AppMain_default />;

  switch (functionName) {
    case functionName_makeCall:
      if (appName === appName_basic) {
        choicedComponent = [
          <MainApps appName_call />,
          <CallAppMain
            targetTab={["", "키패드", "최근기록", "연락처"][methodId]}
            target_Call
          />,
          <CallConnected appName_basic />,
        ][descriptionId];
      } else if (appName === appName_kakaotalk) {
        choicedComponent = [
          <MainApps appName_kakaotalk />,
          <KakaoAppMain defaultTab_friend target_profile />,
          <KakaoProfileDetail />,
          <CallConnected appName_kakaotalk />,
        ][descriptionId];
      }
      break;
    case functionName_getCall:
      if (appName === appName_basic) {
        choicedComponent = [
          <AnswerCall appName_basic />,
          <CallConnected appName_basic />,
        ][descriptionId];
      } else if (appName === appName_kakaotalk) {
        choicedComponent = [
          <AnswerCall appName_kakaotalk />,
          <CallConnected appName_kakaotalk />,
        ][descriptionId];
      }
      break;
    case functionName_makeVideoCall:
      if (appName === appName_basic) {
        choicedComponent = [
          <MainApps appName_call />,
          <CallAppMain targetTab="키패드" target_videoCall />,
          <VideoCallConnected />,
        ][descriptionId];
      }
      break;
    case functionName_sendMessage:
      choicedComponent =
        methodId === "1"
          ? [
              <MainApps appName_message />,
              <MessageAppMain target_sendMessage />,
              <SelectPerson target_person1 />,
              <Message />,
            ][descriptionId]
          : [
              <MainApps appName_message />,
              <MessageAppMain target_seeMessage />,
              <Message />,
            ][descriptionId];
      break;
    case functionName_seeMessage:
      if (appName === appName_basic) {
        choicedComponent =
          methodId === "1"
            ? [
                <MainApps appName_message />,
                <MessageAppMain target_seeMessage />,
                <Message />,
              ][descriptionId]
            : [
                <MainApps appName_message />,
                <MessageAppMain target_unreadMessage />,
                <UnreadMessage />,
                <Message />,
              ][descriptionId];
      }
      break;
    case functionName_resendMessage:
      if (appName === appName_basic) {
        choicedComponent = [
          <MainApps appName_message />,
          <MessageAppMain target_seeMessage />,
          <Message target_resend />,
          <SelectPerson target_person2 />,
          <SendResend />,
          <ResendSuccess />,
        ][descriptionId];
      }
      break;
    case functionName_reserveMessage:
      if (appName === appName_basic) {
        choicedComponent = [
          <MainApps appName_message />,
          <MessageAppMain target_sendMessage />,
          <SelectPerson target_person1 />,
          <Message optionOpen target_reserveMessage />,
          <Message modalOpen target_reserveMessage />,
          //
          <Message optionInfoOpen target_reserveMessage />,
          <Message modalOpen optionSettingModal target_reserveMessage />,
        ][descriptionId];
      }
      if (appName === appName_kakaotalk) {
        choicedComponent = [
          <MainApps appName_kakaotalk />,
          <KakaoAppMain defaultTab_chat target_chat />,
          <KakaoChatRoom chatType_1to1 target_optionBtn />,
          <KakaoChatRoom chatType_1to1 optionOpen target_reserveMessage />,
          <KakaoChatRoom
            chatType_1to1
            optionSettingOpen
            target_reserveMessage
          />,
          <KakaoChatRoom chatType_1to1 alertOpen target_optionBtn />,
          <KakaoChatRoom chatType_1to1 optionOpen target_reserveMessage />,
          <KakaoChatRoom
            chatType_1to1
            target_reserveMessage
            optionSetting_reopen
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
                <MainApps appName_message />,
                <MessageAppMain target_sendMessage />,
                <SelectPerson target_person1 />,
                <Message target_sendImgBtn />,
                <Message open_imgOption target_sendImg />,
              ][descriptionId]
            : [
                <MainApps appName_message />,
                <MessageAppMain target_sendMessage />,
                <SelectPerson target_person1 />,
                <Message optionOpen={methodId === "2"} target_sendImg />,
                <SelectFile target_sendImg />,
                <ChoiceImgs />,
                <Message optionInfoOpen target_sendImg />,
              ][descriptionId];
      }
      break;
    case functionName_sendAudio:
      if (appName === appName_basic) {
        choicedComponent = [
          <MainApps appName_message />,
          <MessageAppMain target_sendMessage />,
          <SelectPerson target_person1 />,
          <Message target_sendAudio optionOpen />,
          <SelectFile target_sendAudio />,
          <Message optionInfoOpen target_sendAudio />,
        ][descriptionId];
      }
      break;
    case functionName_sendPhoneNum:
      if (appName === appName_basic) {
        choicedComponent = [
          <MainApps appName_message />,
          <MessageAppMain target_sendMessage />,
          <SelectPerson target_person1 />,
          <Message target_sendPhoneNum optionOpen />,
          <SelectPerson target_person2 />,
          <Message optionInfoOpen target_sendPhoneNum />,
        ][descriptionId];
      }
      break;
    case functionName_kakaotalk_groubChatLeave_rejectInvitation:
      choicedComponent = [
        <MainApps appName_kakaotalk />,
        <KakaoAppMain defaultTab_chat target_groupChat />,
        <KakaoChatRoom chatType_group target_menu />,
        <KakaoChatRoom chatType_group menuOpen target_setting />,
        <KakaoChatRoom_setting target_groubChatLeave_rejectInvitation />,
        <KakaoChatRoom_setting
          target_groubChatLeave_rejectInvitation
          openModal
        />,
        //
        <KakaoAppMain defaultTab_chat />,
      ][descriptionId];

      break;
    case functionName_kakaotalk_groubChatLock:
      choicedComponent = [
        <MainApps appName_kakaotalk />,
        <KakaoAppMain defaultTab_chat target_groupChat />,
        <KakaoChatRoom chatType_group target_menu />,
        <KakaoChatRoom chatType_group menuOpen target_setting />,
        <KakaoChatRoom_setting target_groubChatLock target_backBtn />,
        <KakaoChatRoom chatType_group inputLocked={true} />,
        <KakaoChatRoom chatType_group />,
      ][descriptionId];

      break;
    case functionName_kakaotalk_groubChatLeave_quietly:
      choicedComponent = [
        <MainApps appName_kakaotalk />,
        <KakaoAppMain defaultTab_ETC target_setting />,
        <ETCSetting target_lab />,
        <ETCSetting_lab target_groubChatLeave_quietly />,
        <ETCSetting target_backBtn />,
        //
        <KakaoAppMain defaultTab_chat target_groupChat />,
        <KakaoChatRoom chatType_group target_menu />,
        <KakaoChatRoom chatType_group menuOpen target_leave_quietly />,
        <KakaoChatRoom chatType_group modalOpen target_leave_quietly />,
        <KakaoAppMain defaultTab_chat />,
      ][descriptionId];
      break;
    default:
      choicedComponent = <AppMainError />;
  }

  return choicedComponent;
}

export default AppMain;
