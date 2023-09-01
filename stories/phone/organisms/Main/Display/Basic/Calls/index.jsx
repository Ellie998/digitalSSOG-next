/* eslint-disable react/prop-types */

import Home from "stories/phone/Apps/Basic/Home";
import Error from "stories/phone/organisms/Main/Error";
import Default from "stories/phone/organisms/Main/Default";
// call
import Main from "stories/phone/Apps/Basic/Call/templates/Main";
import AnswerCall from "stories/phone/Apps/Basic/Call/templates/AnswerCall";
import CallConnected from "stories/phone/Apps/Basic/Call/templates/CallConnected";
import VideoCallConnected from "stories/phone/Apps/Basic/Call/templates/VideoCallConnected";

function Calls({ functionName, methodId, descriptionId }) {
  //
  const functionName_makeCall = "전화걸기(발신)";
  const functionName_getCall = "전화받기(수신)";
  const functionName_makeVideoCall = "영상통화 발신";

  let choicedComponent = <Default />;

  switch (functionName) {
    case functionName_makeCall:
      choicedComponent = [
        <Home key="mainApps" appName_call />,
        <Main
          key="callAppMain"
          targetTab={["", "키패드", "최근기록", "연락처"][methodId]}
          target_call
        />,
        <CallConnected key="callConnected" appName_basic />,
      ][descriptionId];

      break;
    case functionName_getCall:
      choicedComponent = [
        <AnswerCall key="answerCall" appName_basic />,
        <CallConnected key="callConnected" appName_basic />,
      ][descriptionId];

      break;
    case functionName_makeVideoCall:
      choicedComponent = [
        <Home key="mainApps" appName_call />,
        <Main key="callAppMain" targetTab="키패드" target_videoCall />,
        <VideoCallConnected key="callConnected" />,
      ][descriptionId];

      break;

    default:
      choicedComponent = <Error />;
  }

  return choicedComponent;
}

export default Calls;
