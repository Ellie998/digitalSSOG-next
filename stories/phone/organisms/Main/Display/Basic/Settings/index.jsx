/* eslint-disable react/prop-types */

import Home from "stories/phone/Apps/Basic/Home/index";
import Error from "stories/phone/organisms/Main/Error/index";
import Default from "stories/phone/organisms/Main/Default/index";

import { useContext } from "react";
import UrlContext from "components/page_context/UrlContext";

function Calls({ functionName, methodId, descriptionId }) {
  const { functionName_controlFontSize } = useContext(UrlContext);

  let choicedComponent = <Default />;

  switch (functionName) {
    case functionName_controlFontSize:
      if (methodId === "1") {
        choicedComponent = [<Home key="mainApps" />][descriptionId];
      }

      break;

    default:
      choicedComponent = <Error />;
  }

  return choicedComponent;
}

export default Calls;
