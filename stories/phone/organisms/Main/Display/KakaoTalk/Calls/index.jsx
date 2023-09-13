/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import Home from "stories/phone/Apps/Basic/Home/index";
import Error from "stories/phone/organisms/Main/Error/index";
import Default from "stories/phone/organisms/Main/Default/index";
// call

import CallConnected from "stories/phone/Apps/KakaoTalk/templates/CallConnected/index";

import Main from "stories/phone/Apps/KakaoTalk/templates/Main/index";
import Profile from "stories/phone/Apps/KakaoTalk/templates/Profile/index";
import { useContext, useState } from "react";
import UrlContext from "components/page_context/UrlContext";
import Setting_ProfileName from "stories/phone/Apps/KakaoTalk/templates/Setting_ProfileName/index";
import AnswerCall from "stories/phone/Apps/KakaoTalk/templates/AnswerCall/index";
import Chat from "stories/phone/Apps/KakaoTalk/templates/Chat/index";
import VideoCallConnected from "stories/phone/Apps/KakaoTalk/templates/VideoCallConnected/index";

function Calls({ functionName, methodId, descriptionId }) {
  const {
    functionName_makeCall,
    functionName_getCall,
    functionName_changeName,
    functionName_makeVideoCall,
  } = useContext(UrlContext);

  let choicedComponent = <Default />;
  const [name, setName] = useState("영희");

  switch (functionName.replaceAll("-", " ")) {
    case functionName_makeCall:
      choicedComponent = [
        <Home key="mainApps" appName_kakaotalk />,
        <Main
          key="KakaoAppMain"
          tab={{ friend: true }}
          friendTarget={{ profile: true }}
        />,
        <Profile key="Profile" target={{ call: true }} />,
        <CallConnected key="callConnected" />,
      ][descriptionId];

      break;
    case functionName_getCall:
      choicedComponent = [
        <AnswerCall key="1" content={{ name: "영희" }} />,
        <CallConnected key="callConnected" />,
      ][descriptionId];
      break;
    case functionName_makeVideoCall:
      if (methodId === "1")
        choicedComponent = [
          <Home key="mainApps" appName_kakaotalk />,
          <Main
            key="KakaoAppMain"
            tab={{ friend: true }}
            friendTarget={{ profile: true }}
          />,
          <Profile key="Profile" target={{ videoCall: true }} />,
          <VideoCallConnected key="connected1" open={{ modal: true }} />,
          <VideoCallConnected key="connected2" />,
        ][descriptionId];

      if (methodId === "2")
        choicedComponent = [
          <Home key="mainApps" appName_kakaotalk />,
          <Main
            key="KakaoAppMain"
            tab={{ chat: true }}
            target={{ chat: true }}
          />,
          <Chat key="chat1" target={{ optionBtn: true }} />,
          <Chat
            key="chat2"
            target={{ option_call: true }}
            open={{ option: true, chat: true }}
          />,
          <Chat
            key="chat3"
            target={{ option_videoCall: true }}
            open={{ modal: true, chat: true }}
          />,
          <VideoCallConnected key="connected1" open={{ modal: true }} />,
          <VideoCallConnected key="connected2" />,
        ][descriptionId];

      break;
    case functionName_changeName:
      if (methodId === "1") {
        choicedComponent = [
          <Home key={"1"} appName_kakaotalk={true} />,
          <Main
            key={"2"}
            tab={{ friend: true }}
            friendTarget={{ profile: true }}
          />,
          <Profile key={"3"} target={{ name: true }} />,
          <Setting_ProfileName
            key="4"
            content={{ name: name, setName: setName }}
          />,
          <Profile key={"5"} content={{ name: name }} />,
        ][descriptionId];
      }
      if (methodId === "2") {
        choicedComponent = [
          <Home key={"1"} appName_kakaotalk={true} />,
          <Main
            key={"2"}
            tab={{ friend: true }}
            friendTarget={{ person1: true }}
          />,
          <Main
            key={"2"}
            tab={{ friend: true }}
            friendTarget={{ modal_nameChange: true }}
            friendOpen={{ friendModal: true }}
          />,
          <Setting_ProfileName
            key="4"
            content={{ name: name, setName: setName }}
          />,
          <Profile key={"5"} content={{ name: name }} />,
        ][descriptionId];
      }
      break;

    default:
      choicedComponent = <Error />;
  }

  return choicedComponent;
}

export default Calls;
