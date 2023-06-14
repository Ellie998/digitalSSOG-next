import { useParams } from "react-router-dom";

import MainApps from "./MainApps";
import CallAppMain from "../Basic/call/CallAppMain";

import KakaoAppMain from "../Kakaotalk/KakaoAppMain";
import KakaoProfileMain from "../Kakaotalk/KakaoProfileMain";
import KakaoProfileDetail from "../Kakaotalk/KakaoProfileDetail";

import AnswerCall from "../Basic/call/AnswerCall";
import CallConnected from "../Basic/call/CallConnected";

import SelectPerson from "../Basic/message/SelectPerson";

import ResendSuccess from "../Basic/message/resend-message/ResendSuccess";
import SendResend from "../Basic/message/resend-message/SendResend";

import SetReservation from "../Basic/message/reserve-message/SetReservation";
import MessageWithOption from "../Basic/message/reserve-message/MessageWithOption";
import MessageAppMain from "../Basic/message/MessageAppMain";
import Message from "../Basic/message/Message";
import SelectFile from "../Basic/file/SelectFile";
import ChoiceImgs from "../Basic/gallery/ChoiceImgs";
import VideoCallConnected from "../Basic/call/VideoCallConnected";

function AppMain() {
  const params = useParams();

  const functionName = params.functionName;
  const appName = params.appName;
  const descriptionId = params.descriptionId;

  let choicedComponent = <div></div>;
  // call
  function makeACall() {
    if (appName === "기본") {
      if (descriptionId === "0") {
        choicedComponent = (
          <MainApps appName={appName} functionName={functionName} />
        );
      } else if (descriptionId === "1") {
        choicedComponent = (
          <CallAppMain appName={appName} functionName={functionName} />
        );
      } else if (descriptionId === "2") {
        choicedComponent = (
          <CallConnected appName={appName} functionName={functionName} />
        );
      } else {
        choicedComponent = <div></div>;
      }
    } else if (appName === "카카오톡") {
      if (descriptionId === "0") {
        choicedComponent = (
          <MainApps appName={appName} functionName={functionName} />
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
        choicedComponent = <CallConnected />;
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
  function makeAVideoCall() {
    if (appName === "기본") {
      if (descriptionId === "0") {
        choicedComponent = (
          <MainApps appName={appName} functionName={functionName} />
        );
      } else if (descriptionId === "1") {
        choicedComponent = (
          <CallAppMain appName={appName} functionName={functionName} />
        );
      } else if (descriptionId === "2") {
        choicedComponent = (
          <VideoCallConnected appName={appName} functionName={functionName} />
        );
      } else {
        choicedComponent = <div></div>;
      }
    }
  }
  // message
  function sendMessage() {
    if (appName === "기본") {
      if (descriptionId === "0") {
        choicedComponent = (
          <MainApps appName={appName} functionName={functionName} />
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
          <Message appName={appName} functionName={functionName}></Message>
        );
      }
    }
  }
  function seeMessage() {
    if (appName === "기본") {
      if (descriptionId === "0") {
        choicedComponent = (
          <MainApps appName={appName} functionName={functionName} />
        );
      } else if (descriptionId === "1") {
        choicedComponent = (
          <MessageAppMain
            appName={appName}
            functionName={functionName}></MessageAppMain>
        );
      } else if (descriptionId === "2") {
        choicedComponent = (
          <Message appName={appName} functionName={functionName}></Message>
        );
      }
    }
  }
  function resendMessage() {
    if (appName === "기본") {
      if (descriptionId === "0") {
        choicedComponent = (
          <MainApps appName={appName} functionName={functionName} />
        );
      } else if (descriptionId === "1") {
        choicedComponent = (
          <MessageAppMain
            appName={appName}
            functionName={functionName}></MessageAppMain>
        );
      } else if (descriptionId === "2") {
        choicedComponent = (
          <Message appName={appName} functionName={functionName}></Message>
        );
      } else if (descriptionId === "3") {
        choicedComponent = (
          <SelectPerson
            appName={appName}
            functionName={functionName}></SelectPerson>
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
  function reserveMessage() {
    if (appName === "기본") {
      if (descriptionId === "0") {
        choicedComponent = (
          <MainApps appName={appName} functionName={functionName} />
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
          <Message appName={appName} functionName={functionName}></Message>
        );
      } else if (descriptionId === "4") {
        choicedComponent = (
          <SetReservation
            appName={appName}
            functionName={functionName}></SetReservation>
        );
      } else if (descriptionId === "5") {
        choicedComponent = (
          <MessageWithOption
            appName={appName}
            functionName={functionName}></MessageWithOption>
        );
      }
    }
  }

  function sendImg() {
    if (appName === "기본") {
      if (descriptionId === "0") {
        choicedComponent = (
          <MainApps appName={appName} functionName={functionName} />
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
            functionName={functionName}
            descriptionId={descriptionId}></SelectPerson>
        );
      } else if (descriptionId === "3") {
        choicedComponent = (
          <Message appName={appName} functionName={functionName}></Message>
        );
      } else if (descriptionId === "4") {
        choicedComponent = (
          <SelectFile
            appName={appName}
            functionName={functionName}></SelectFile>
        );
      } else if (descriptionId === "5") {
        choicedComponent = (
          <ChoiceImgs
            appName={appName}
            functionName={functionName}></ChoiceImgs>
        );
      } else if (descriptionId === "6") {
        choicedComponent = (
          <MessageWithOption
            appName={appName}
            functionName={functionName}></MessageWithOption>
        );
      }
    }
  }
  function sendAudio() {
    if (appName === "기본") {
      if (descriptionId === "0") {
        choicedComponent = (
          <MainApps appName={appName} functionName={functionName} />
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
            functionName={functionName}
            descriptionId={descriptionId}></SelectPerson>
        );
      } else if (descriptionId === "3") {
        choicedComponent = (
          <Message appName={appName} functionName={functionName}></Message>
        );
      } else if (descriptionId === "4") {
        choicedComponent = (
          <SelectFile
            appName={appName}
            functionName={functionName}></SelectFile>
        );
      } else if (descriptionId === "5") {
        choicedComponent = (
          <MessageWithOption
            appName={appName}
            functionName={functionName}></MessageWithOption>
        );
      }
    }
  }
  function sendNumber() {
    if (appName === "기본") {
      if (descriptionId === "0") {
        choicedComponent = (
          <MainApps appName={appName} functionName={functionName} />
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
            functionName={functionName}
            descriptionId={descriptionId}></SelectPerson>
        );
      } else if (descriptionId === "3") {
        choicedComponent = (
          <Message appName={appName} functionName={functionName}></Message>
        );
      } else if (descriptionId === "4") {
        choicedComponent = (
          <SelectPerson
            appName={appName}
            functionName={functionName}
            descriptionId={descriptionId}></SelectPerson>
        );
      } else if (descriptionId === "5") {
        choicedComponent = (
          <MessageWithOption
            appName={appName}
            functionName={functionName}></MessageWithOption>
        );
      }
    }
  }

  switch (functionName.slice(2)) {
    case "전화걸기(발신)":
      makeACall();
      break;
    case "전화받기(수신)":
      answerTheCall();
      break;
    case "영상통화 발신":
      makeAVideoCall();
      break;
    case "":
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
    case "예약 문자 발송":
      reserveMessage();
      break;
    case "이미지, 동영상 전송":
      sendImg();
      break;
    case "오디오 전송":
      sendAudio();
      break;
    case "연락처 공유":
      sendNumber();
      break;
    default:
      console.log(`작성중인 기능입니다.  ${functionName}.`);
  }
  return choicedComponent;
}

export default AppMain;
