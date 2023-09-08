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

function Calls({ functionName, methodId, descriptionId }) {
  const {
    functionName_makeCall,
    functionName_getCall,
    functionName_changeName,
  } = useContext(UrlContext);

  let choicedComponent = <Default />;
  const [name, setName] = useState("영희");

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
    case functionName_changeName:
      if (methodId === "1") {
        choicedComponent = [
          <Home key={"1"} appName_kakaotalk={true} />,
          <Main key={"2"} tab={{ friend: true }} target={{ profile: true }} />,
          <Profile key={"3"} target={{ name: true }} />,
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
