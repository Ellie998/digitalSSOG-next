/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import Home from "stories/phone/Apps/Basic/Home/index";
import Error from "stories/phone/organisms/Main/Error/index";
import Default from "stories/phone/organisms/Main/Default/index";
// call

import AnswerCall from "stories/phone/Apps/Basic/Call/templates/AnswerCall/index";
import CallConnected from "stories/phone/Apps/KakaoTalk/templates/CallConnected/index";

import Main from "stories/phone/Apps/KakaoTalk/templates/Main/index";
import Profile from "stories/phone/Apps/KakaoTalk/templates/Profile/index";

function Calls({ functionName, methodId, descriptionId }) {
  //
  const functionName_makeCall = "전화걸기(발신)";
  const functionName_getCall = "전화받기(수신)";

  let choicedComponent = <Default />;

  switch (functionName.replaceAll("-", " ")) {
    case functionName_makeCall:
      choicedComponent = [
        <Home key="mainApps" appName_kakaotalk />,
        <Main key="KakaoAppMain" defaultTab_friend target_profile />,
        <Profile key="Profile" target={{ call: true }} />,
        <CallConnected key="callConnected" />,
      ][descriptionId];

      break;
    case functionName_getCall:
      choicedComponent = [
        <AnswerCall key="answerCall" appName_kakaotalk />,
        <CallConnected key="callConnected" />,
      ][descriptionId];

      break;

    default:
      choicedComponent = <Error />;
  }

  return choicedComponent;
}

export default Calls;
