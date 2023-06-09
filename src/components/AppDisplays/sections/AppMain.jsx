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
import SelectPerson from "../Basic/message/send-message/SelectPerson";
import MessageInsert from "../Basic/message/send-message/MessageInsert";
import SendSuccess from "../Basic/message/send-message/SendSuccess";
import SelectMessage from "../Basic/message/see-message/SelectMessage";
import SeeMessage from "../Basic/message/see-message/SeeMessage";
import SelectResend from "../Basic/message/resend-message/SelectResend";
import ResendSuccess from "../Basic/message/resend-message/ResendSuccess";
import SendResend from "../Basic/message/resend-message/SendResend";
import SelectList from "../Basic/message/resend-message/SelectList";
import SelectResendPerson from "../Basic/message/resend-message/SelectResendPerson";

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
        choicedComponent = <CallSuccess />;
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
        choicedComponent = <CallSuccess />;
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
        choicedComponent = <CallConnected></CallConnected>;
      }
    } else if (appName === "카카오톡") {
      if (descriptionId === "0") {
        choicedComponent = (
          <AnswerCall
            appName={appName}
            functionName={functionName}></AnswerCall>
        );
      } else if (descriptionId === "1") {
        choicedComponent = <CallConnected></CallConnected>;
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
          <SendSuccess messageContent={enteredInput}></SendSuccess>
        );
      }
    }
  }

  function seeMessage() {
    if (appName === "기본") {
      if (descriptionId === "0") {
        choicedComponent = (
          <MessageMain
            appName={appName}
            functionName={functionName}></MessageMain>
        );
      } else if (descriptionId === "1") {
        choicedComponent = (
          <SelectMessage
            appName={appName}
            functionName={functionName}></SelectMessage>
        );
      } else if (descriptionId === "2") {
        choicedComponent = <SeeMessage></SeeMessage>;
      }
    }
  }
  function resendMessage() {
    if (appName === "기본") {
      if (descriptionId === "0") {
        choicedComponent = (
          <MessageMain
            appName={appName}
            functionName={functionName}></MessageMain>
        );
      } else if (descriptionId === "1") {
        choicedComponent = (
          <SelectList
            appName={appName}
            functionName={functionName}></SelectList>
        );
      } else if (descriptionId === "2") {
        choicedComponent = (
          <SelectResend
            appName={appName}
            functionName={functionName}></SelectResend>
        );
      } else if (descriptionId === "3") {
        choicedComponent = (
          <SelectResendPerson
            appName={appName}
            functionName={functionName}></SelectResendPerson>
        );
      } else if (descriptionId === "4") {
        choicedComponent = (
          <SendResend
            appName={appName}
            functionName={functionName}></SendResend>
        );
      } else if (descriptionId === "5") {
        choicedComponent = <ResendSuccess></ResendSuccess>;
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
    case "문자 수신":
      seeMessage();
      break;
    case "문자 전달":
      resendMessage();
      break;
    default:
      console.log(`작성중인 기능입니다.  ${functionName}.`);
  }
  return choicedComponent;
}

export default AppMain;
