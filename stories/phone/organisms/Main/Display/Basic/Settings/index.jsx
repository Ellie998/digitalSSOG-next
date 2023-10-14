/* eslint-disable react/prop-types */

import Home from "stories/phone/Apps/Basic/Home/index";
import Error from "stories/phone/organisms/Main/Error/index";
import Default from "stories/phone/organisms/Main/Default/index";

import { useContext } from "react";
import UrlContext from "components/page_context/UrlContext";

function Settings({ functionName, methodId, descriptionId }) {
  const { functionName_controlFontSize } = useContext(UrlContext);

  let choicedComponent = <Default />;

  switch (functionName) {
    case functionName_controlFontSize:
      if (methodId === "1") {
        choicedComponent = [
          <Home key="mainApps" target_action={{ openAlertBar: true }} />,
          <Home
            key="mainApps2"
            open={{ alertBar: true }}
            target_alertBar={{ setting: true }}
          />,
        ][descriptionId];
      }
      if (methodId === "2") {
        choicedComponent = [
          <Home key="mainApps" target_action={{ openApps: true }} />,
          <Home
            key="mainApps2"
            open={{ apps: true }}
            target_apps={{ searchBox: true }}
          />,
        ][descriptionId];
      }

      break;

    default:
      choicedComponent = <Error />;
  }

  return choicedComponent;
}

export default Settings;
