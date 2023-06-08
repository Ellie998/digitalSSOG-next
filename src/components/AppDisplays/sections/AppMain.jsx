import { useParams } from "react-router-dom";
import { useState } from "react";

import BasicMain from "../Basic/call/BasicMain";
import CallAppMain from "../Basic/call/CallAppMain";
import CallSuccess from "../Basic/call/CallSuccess";

import KakaoMain from "../Kakaotalk/KakaoMain";
import KakaoAppMain from "../Kakaotalk/KakaoAppMain";
import KakaoProfileMain from "../Kakaotalk/KakaoProfileMain";
import KakaoProfileDetail from "../Kakaotalk/KakaoProfileDetail";

import AnswerCall from "../Basic/call/AnswerCall";
import CallConnected from "../Basic/call/CallConnected";

import MessageMain from "../Basic/message/MessageMain";
import MessageAppMain from "../Basic/message/MessageAppMain";
import SelectPerson from "../Basic/message/SelectPerson";
import MessageInsert from "../Basic/message/MessageInsert";
import SendSuccess from "../Basic/message/SendSuccess";

function AppMain() {
  const params = useParams();
  const [enteredInput, setEnteredInput] = useState("");

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

  function sendMessage() {
    if (appName === "기본") {
      if (descriptionId === "0") {
        choicedComponent = (
          <MessageMain
            appName={appName}
            functionName={functionName}></MessageMain>
        );
      } else if (descriptionId === "1") {
        choicedComponent = (
          <MessageAppMain
            appName={appName}
            functionName={functionName}></MessageAppMain>
        );
      } else if (descriptionId === "2") {
        choicedComponent = (
          <SelectPerson
            appName={appName}
            functionName={functionName}></SelectPerson>
        );
      } else if (descriptionId === "3") {
        choicedComponent = (
          <MessageInsert
            appName={appName}
            functionName={functionName}
            setInputValue={setEnteredInput}
            inputValue={enteredInput}></MessageInsert>
        );
      } else if (descriptionId === "4") {
        choicedComponent = (
          <SendSuccess
            appName={appName}
            functionName={functionName}
            messageContent={enteredInput}></SendSuccess>
        );
      }
    }
  }

  switch (functionName.slice(2)) {
    case "전화받기(수신)":
      answerTheCall();
      break;
    case "전화걸기(발신)":
      makeACall();
      break;
    case "문자 발신":
      sendMessage();
      break;
    default:
      console.log(`작성중인 기능입니다.  ${functionName}.`);
  }
  return choicedComponent;
}

export default AppMain;
