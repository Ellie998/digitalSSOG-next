import BasicMain from "../Basic/BasicMain";
import CallAppMain from "../Basic/CallAppMain";
import KakaoMain from "../Kakaotalk/KakaoMain";
import KakaoAppMain from "../Kakaotalk/KakaoAppMain";
import "../display.css";

import CallSuccess from "../Basic/CallSuccess";

// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function AppMain({ pathname }) {
  let choicedComponent = <BasicMain></BasicMain>;

  if (pathname === "0") {
    choicedComponent = <BasicMain />;
  } else if (pathname === "1") {
    choicedComponent = <CallAppMain />;
  } else if (pathname === "2") {
    choicedComponent = <CallSuccess />;
  } else if (pathname === "3") {
    choicedComponent = <KakaoMain />;
  } else if (pathname === "4") {
    choicedComponent = <KakaoAppMain />;
  } else if (pathname === "5") {
    choicedComponent = <CallSuccess />;
  } else {
    choicedComponent = <BasicMain />;
  }
  return choicedComponent;
}

export default AppMain;
