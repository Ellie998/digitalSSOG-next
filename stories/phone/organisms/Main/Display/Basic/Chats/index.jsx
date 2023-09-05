/* eslint-disable react/prop-types */

import Home from "stories/phone/Apps/Basic/Home/index";
import Error from "stories/phone/organisms/Main/Error/index";
import Default from "stories/phone/organisms/Main/Default/index";
// message
import Main from "stories/phone/Apps/Basic/Message/templates/Main/index";
import Chat from "stories/phone/Apps/Basic/Message/templates/Chat/index";
import Unread from "stories/phone/Apps/Basic/Message/templates/Unread/index";
import SelectPerson from "stories/phone/Apps/Basic/Message/templates/SelectPerson/index";
import SelectFile from "stories/phone/Apps/Basic/Message/templates/SelectFile/index";
import ChoiceImgs from "stories/phone/Apps/Basic/Message/templates/ChoiceImgs/index";
//
import { default as CallMain } from "stories/phone/Apps/Basic/Call/templates/Main/index";

function Chats({ functionName, methodId, descriptionId }) {
  const functionName_sendMessage = "문자 발신";
  const functionName_seeMessage = "문자 수신";
  const functionName_resendMessage = "문자 전달";
  const functionName_reserveMessage = "예약 문자 발송";
  const functionName_sendImg = "이미지, 동영상 전송";
  const functionName_sendAudio = "오디오 전송";
  const functionName_sendPhoneNum = "연락처 공유";

  let choicedComponent = <Default />;

  switch (functionName) {
    case functionName_sendMessage:
      if (methodId === "1") {
        choicedComponent = [
          <Home key="mainApps" appName_message />,
          <Main key="MessageAppMain" target_sendMessage />,
          <SelectPerson key="SelectPerson" target_person1 />,
          <Chat key="Message" />,
        ][descriptionId];
      }
      if (methodId === "2") {
        choicedComponent = [
          <Home key="mainApps" appName_message />,
          <Main key="MessageAppMain" target_seeMessage />,
          <Chat key="Message" />,
        ][descriptionId];
      }
      if (methodId === "3") {
        choicedComponent = [
          <Home key="mainApps" appName_call />,
          <CallMain
            key="CallMain"
            targetTab={"연락처"}
            target={{ chat: true }}
          />,
          <Chat key="Message" />,
        ][descriptionId];
      }

      break;
    case functionName_seeMessage:
      choicedComponent =
        methodId === "1"
          ? [
              <Home key="mainApps" appName_message />,
              <Main key="MessageAppMain" target_seeMessage />,
              <Chat key="Message" />,
            ][descriptionId]
          : [
              <Home key="mainApps" appName_message />,
              <Main key="MessageAppMain" target_unreadMessage />,
              <Unread key="UnreadMessage" />,
              <Chat key="Message" />,
            ][descriptionId];

      break;
    case functionName_resendMessage:
      choicedComponent = [
        <Home key="mainApps" appName_message />,
        <Main key="MessageAppMain" target_seeMessage />,
        <Chat key="Message" target_resend />,
        <SelectPerson key="SelectPerson" target_person2 />,
        <Chat key="Message" target_resend message_fill />,
      ][descriptionId];

      break;
    case functionName_reserveMessage:
      choicedComponent = [
        <Home key="mainApps" appName_message />,
        <Main key="MessageAppMain" target_sendMessage />,
        <SelectPerson key="SelectPerson" target_person1 />,
        <Chat key="Message" open_option target_reserveMessage />,
        <Chat key="Message" open_modal target_reserveMessage />,
        //
        <Chat key="Message" open_optionInfo target_reserveMessage />,
        <Chat
          key="Message"
          open_modal
          modal_optionSetting
          target_reserveMessage
        />,
      ][descriptionId];

      break;
    case functionName_sendImg:
      choicedComponent =
        methodId === "1"
          ? [
              <Home key="mainApps" appName_message />,
              <Main key="MessageAppMain" target_sendMessage />,
              <SelectPerson key="SelectPerson" target_person1 />,
              <Chat key="Message1" target_sendImgBtn />,
              <Chat key="Message2" open_imgOption target_sendImg />,
            ][descriptionId]
          : [
              <Home key="mainApps" appName_message />,
              <Main key="MessageAppMain" target_sendMessage />,
              <SelectPerson key="SelectPerson" target_person1 />,
              <Chat
                key="Message1"
                open_option={methodId === "2"}
                target_sendImg
              />,
              <SelectFile key="SelectFile" target_sendImg />,
              <ChoiceImgs key="ChoiceImgs" />,
              <Chat key="Message2" open_optionInfo target_sendImg />,
            ][descriptionId];

      break;
    case functionName_sendAudio:
      choicedComponent = [
        <Home key="mainApps" appName_message />,
        <Main key="MessageAppMain" target_sendMessage />,
        <SelectPerson key="SelectPerson" target_person1 />,
        <Chat key="Message" open_option target_sendAudio />,
        <SelectFile key="SelectFile" target_sendAudio />,
        <Chat key="Message" open_optionInfo target_sendAudio />,
      ][descriptionId];

      break;
    case functionName_sendPhoneNum:
      choicedComponent = [
        <Home key="mainApps" appName_message />,
        <Main key="MessageAppMain" target_sendMessage />,
        <SelectPerson key="SelectPerson1" target_person1 />,
        <Chat key="Message1" open_option target_sendPhoneNum />,
        <SelectPerson key="SelectPerson2" target_person2 />,
        <Chat key="Message2" open_optionInfo target_sendPhoneNum />,
      ][descriptionId];

      break;

    default:
      choicedComponent = <Error />;
  }

  return choicedComponent;
}

export default Chats;
