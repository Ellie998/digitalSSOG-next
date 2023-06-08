import BasicMain from "../Basic/BasicMain";
import CallAppMain from "../Basic/CallAppMain";
import KakaoMain from "../Kakaotalk/KakaoMain";
import KakaoAppMain from "../Kakaotalk/KakaoAppMain";

import CallSuccess from "../Basic/CallSuccess";
import { useParams } from "react-router-dom";
import KakaoProfileMain from "../Kakaotalk/KakaoProfileMain";
import KakaoProfileDetail from "../Kakaotalk/KakaoProfileDetail";
import AnswerCall from "../Basic/AnswerCall";
import CallConnected from "../Basic/CallConnected";

function AppMain() {
  const params = useParams();

  const functionName = params.functionName;
  const appName = params.appName;
  const descriptionId = params.descriptionId;

  let choicedComponent = <div></div>;
  function makeACall() {
    if (appName === "기본") {
      if (descriptionId === "0") {
        choicedComponent = (
          <BasicMain appName={appName} functionName={functionName} />
        );
      } else if (descriptionId === "1") {
        choicedComponent = (
          <CallAppMain appName={appName} functionName={functionName} />
        );
      } else if (descriptionId === "2") {
        choicedComponent = (
          <CallSuccess appName={appName} functionName={functionName} />
        );
      } else {
        choicedComponent = <div></div>;
      }
    } else if (appName === "카카오톡") {
      if (descriptionId === "0") {
        choicedComponent = (
          <KakaoMain appName={appName} functionName={functionName} />
        );
      } else if (descriptionId === "1") {
        choicedComponent = (
          <KakaoAppMain appName={appName} functionName={functionName} />
        );
      } else if (descriptionId === "2") {
        choicedComponent = (
          <KakaoProfileMain
            appName={appName}
            functionName={functionName}></KakaoProfileMain>
        );
      } else if (descriptionId === "3") {
        choicedComponent = (
          <KakaoProfileDetail appName={appName} functionName={functionName} />
        );
      } else if (descriptionId === "4") {
        choicedComponent = (
          <CallSuccess appName={appName} functionName={functionName} />
        );
      } else {
        choicedComponent = <div></div>;
      }
    }
  }

  function answerTheCall() {
    if (appName === "기본") {
      if (descriptionId === "0") {
        choicedComponent = (
          <AnswerCall
            appName={appName}
            functionName={functionName}></AnswerCall>
        );
      } else if (descriptionId === "1") {
        choicedComponent = (
          <CallConnected
            appName={appName}
            functionName={functionName}></CallConnected>
        );
      }
    } else if (appName === "카카오톡") {
      if (descriptionId === "0") {
        choicedComponent = (
          <AnswerCall
            appName={appName}
            functionName={functionName}></AnswerCall>
        );
      } else if (descriptionId === "1") {
        choicedComponent = (
          <CallConnected
            appName={appName}
            functionName={functionName}></CallConnected>
        );
      }
    }
  }

  switch (functionName.slice(3)) {
    case "전화받기":
      answerTheCall();
      break;
    case "전화걸기":
      makeACall();
      break;
    default:
      console.log(`작성중인 기능입니다.  ${functionName}.`);
  }
  return choicedComponent;
}

export default AppMain;
