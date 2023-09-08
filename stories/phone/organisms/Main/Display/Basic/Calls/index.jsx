/* eslint-disable react/prop-types */

import Home from "stories/phone/Apps/Basic/Home/index";
import Error from "stories/phone/organisms/Main/Error/index";
import Default from "stories/phone/organisms/Main/Default/index";
// call
import Main from "stories/phone/Apps/Basic/Call/templates/Main/index";
import AnswerCall from "stories/phone/Apps/Basic/Call/templates/AnswerCall/index";
import CallConnected from "stories/phone/Apps/Basic/Call/templates/CallConnected/index";
import VideoCallConnected from "stories/phone/Apps/Basic/Call/templates/VideoCallConnected/index";
// chat
import { default as ChatMain } from "stories/phone/Apps/Basic/Message/templates/Main/index";
import Chat from "stories/phone/Apps/Basic/Message/templates/Chat/index";
import { useContext, useState } from "react";
import UrlContext from "components/page_context/UrlContext";
import ContactInfo from "stories/phone/Apps/Basic/Call/templates/ContactInfo/index";
import Edit_ContactInfo from "stories/phone/Apps/Basic/Call/templates/Edit_ContactInfo/index";

function Calls({ functionName, methodId, descriptionId }) {
  const {
    functionName_makeCall,
    functionName_getCall,
    functionName_makeVideoCall,
    functionName_changeName,
  } = useContext(UrlContext);

  const [name, setName] = useState("영희");

  let choicedComponent = <Default />;

  switch (functionName) {
    case functionName_makeCall:
      if (methodId === "1" || methodId === "2" || methodId === "3") {
        choicedComponent = [
          <Home key="mainApps" appName_call />,
          <Main
            key="callAppMain"
            targetTab={["", "키패드", "최근기록", "연락처"][methodId]}
            target={{ call: true, person1: true }}
          />,
          <CallConnected
            key="callConnected"
            content={{
              name: methodId !== "1" ? "영희" : "홍길동",
              num: "010-0000-0000",
            }}
          />,
        ][descriptionId];
      }
      if (methodId === "4") {
        choicedComponent = [
          <Home key="mainApps" appName_message />,
          <ChatMain key="MessageMain" target_seeMessage />,
          <Chat
            key="Message"
            target={{ call: true }}
            open={{ profile: true }}
          />,
          <CallConnected key="callConnected" />,
        ][descriptionId];
      }

      break;
    case functionName_getCall:
      choicedComponent = [
        <AnswerCall key="answerCall" appName_basic />,
        <CallConnected key="callConnected" />,
      ][descriptionId];

      break;
    case functionName_makeVideoCall:
      choicedComponent = [
        <Home key="mainApps" appName_call />,
        <Main
          key="callAppMain"
          targetTab="키패드"
          target={{ videoCall: true }}
        />,
        <VideoCallConnected key="callConnected" />,
      ][descriptionId];

      break;
    case functionName_changeName:
      choicedComponent = [
        <Home key="mainApps" appName_call />,
        <Main
          key="callAppMain"
          targetTab="연락처"
          target={{ info: true, person1: true }}
        />,
        <ContactInfo key="contactInfo" target={{ edit: true }} />,
        <Edit_ContactInfo
          key="edit_info"
          state={{ setName: setName, name: name }}
        />,
        <ContactInfo key="contactInfo" content={{ name: name }} />,
      ][descriptionId];

      break;

    default:
      choicedComponent = <Error />;
  }

  return choicedComponent;
}

export default Calls;
