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

import VideoCallConnected from "stories/phone/Apps/KakaoTalk/templates/VideoCallConnected/index";
import ETCSetting from "stories/phone/Apps/KakaoTalk/templates/ETCSetting/index";

function Settings({ functionName, methodId, descriptionId }) {
  const { functionName_controlFontSize } = useContext(UrlContext);

  let choicedComponent = <Default />;
  const [name, setName] = useState("영희");

  switch (functionName.replaceAll("-", " ")) {
    case functionName_controlFontSize:
      if (methodId === "1")
        choicedComponent = [
          <Home key="mainApps" appName_kakaotalk />,
          <Main
            key="KakaoAppMain"
            tab={{ ETC: true }}
            target_ETC={{ setting: true }}
          />,
          <ETCSetting key="etc_setting" target={{ display: true }} />,
        ][descriptionId];
      break;
    default:
      choicedComponent = <Error />;
  }

  return choicedComponent;
}

export default Settings;
