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

function Calls({ functionName, methodId, descriptionId }) {
  //
  const functionName_makeCall = "전화걸기(발신)";
  const functionName_getCall = "전화받기(수신)";
  const functionName_makeVideoCall = "영상통화 발신";

  let choicedComponent = <Default />;

  switch (functionName) {
    case functionName_makeCall:
      if (methodId === "1" || methodId === "2" || methodId === "3") {
        choicedComponent = [
          <Home key="mainApps" appName_call />,
          <Main
            key="callAppMain"
            targetTab={["", "키패드", "최근기록", "연락처"][methodId]}
            target={{ call: true }}
          />,
          <CallConnected key="callConnected" />,
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

    default:
      choicedComponent = <Error />;
  }

  return choicedComponent;
}

export default Calls;
