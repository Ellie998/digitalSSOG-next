/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import Home from "stories/phone/Apps/Basic/Home/index";
import Error from "stories/phone/organisms/Main/Error/index";
import Default from "stories/phone/organisms/Main/Default/index";
// call

import Main from "stories/phone/Apps/KakaoTalk/templates/Main/index";

import { useContext } from "react";
import UrlContext from "components/page_context/UrlContext";

import ETCSetting from "stories/phone/Apps/KakaoTalk/templates/ETCSetting/index";
import Setting_Display from "stories/phone/Apps/KakaoTalk/templates/Settings/Setting_Display/index";
import Setting_FontSize from "stories/phone/Apps/KakaoTalk/templates/Settings/Setting_FontSize/index";

function Settings({ functionName, methodId, descriptionId }) {
  const { functionName_controlFontSize } = useContext(UrlContext);

  let choicedComponent = <Default />;

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
          <Setting_Display key="setting_display" target={{ fontSize: true }} />,
          <Setting_FontSize key="settig_fontsize" />,
        ][descriptionId];
      break;
    default:
      choicedComponent = <Error />;
  }

  return choicedComponent;
}

export default Settings;
