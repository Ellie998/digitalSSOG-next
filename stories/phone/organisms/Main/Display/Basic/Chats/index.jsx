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
import { useContext } from "react";
import UrlContext from "components/page_context/UrlContext";
import Gallery from "stories/phone/Apps/Basic/Gallery/index";

function Chats({ functionName, methodId, descriptionId }) {
  const {
    functionName_sendMessage,
    functionName_seeMessage,
    functionName_resendMessage,
    functionName_reserveMessage,
    functionName_sendImg,
    functionName_sendAudio,
    functionName_sendPhoneNum,
    functionName_messageDelete,
  } = useContext(UrlContext);

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
            target={{ chat: true, person1: true }}
          />,
          <Chat key="Message" content={{ name: "영희" }} />,
        ][descriptionId];
      }
      if (methodId === "4") {
        choicedComponent = [
          <Home key="mainApps" appName_call />,
          <CallMain
            key="CallMain"
            targetTab={"최근기록"}
            target={{ chat: true, person1: true }}
          />,
          <Chat key="Message" content={{ name: "영희" }} />,
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
        <Chat key="Message" target_resend open={{ contentOption: true }} />,
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
      if (methodId === "1") {
        choicedComponent = [
          <Home key="mainApps" appName_message />,
          <Main key="MessageAppMain" target_sendMessage />,
          <SelectPerson key="SelectPerson" target_person1 />,
          <Chat key="Message1" target_sendImgBtn />,
          <Chat key="Message2" open_imgOption target_sendImg />,
        ][descriptionId];
      }
      if (methodId === "2") {
        choicedComponent = [
          <Home key="mainApps" appName_message />,
          <Main key="MessageAppMain" target_sendMessage />,
          <SelectPerson key="SelectPerson" target_person1 />,
          <Chat key="Message1" open_option={methodId === "2"} target_sendImg />,
          <SelectFile key="SelectFile" target_sendImg />,
          <ChoiceImgs key="ChoiceImgs" />,
          <Chat key="Message2" open_optionInfo target_sendImg />,
        ][descriptionId];
      }
      if (methodId === "3") {
        choicedComponent = [
          <Home key="home" app={{ gallery: true }} />,
          <Gallery key="gallery1" target_imgTab={{ shareBtn: true }} />,
          <Gallery key="gallery2" open={{ shareOption: true }} />,
        ][descriptionId];
      }
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

    case functionName_messageDelete:
      if (methodId === "1") {
        choicedComponent = [
          <Home key="mainApps" appName_message />,
          <Main key="MessageAppMain" target_seeMessage />,
          <Chat key="Message1" target={{ message: true }} />,
          <Chat
            key="Message1"
            open={{ chat: true, contentOption: true }}
            target_option={{ delete: true }}
          />,
          <Chat key="Message1" open={{ chat: true, selectMode: true }} />,
          <Chat key="Message1" open={{ chat: false }} />,
        ][descriptionId];
      }

      break;

    default:
      choicedComponent = <Error />;
  }

  return choicedComponent;
}

export default Chats;
