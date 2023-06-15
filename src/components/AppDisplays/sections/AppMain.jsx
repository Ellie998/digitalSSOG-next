import { createContext } from "react";
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
import UnreadMessage from "../Basic/message/seeMessage/UnreadMessage";
import AppMainError from "./AppMainError";

export const PageContext = createContext({
  functionName: "",
  realFunctionName: "",
  appName: "",
  methodId: "",
  descriptionId: "",
  urlContent: "",
});

const appName_basic = "기본";
const appName_kakaotalk = "카카오톡";
const functionName_makeACall = "전화걸기(발신)";
const functionName_getACall = "전화받기(수신)";

function AppMain() {
  const params = useParams();
  const functionName = params.functionName;
  const realFunctionName = functionName.slice(2);
  const appName = params.appName;
  const methodId = params.methodId;
  const descriptionId = params.descriptionId;
  const urlContent = `/description/${functionName}/${appName}`;

  let choicedComponent = <div></div>;
  //

  // if (
  //   realFunctionName === functionName_makeACall &&
  //   appName === appName_basic &&
  //   methodId === "1"
  // ) {
  //   choicedComponent =
  //     (descriptionId === "0" && <MainApps />) ||
  //     (descriptionId === "1" && <CallAppMain />) ||
  //     (descriptionId === "2" && <CallConnected />);
  // } else if (
  //   realFunctionName === functionName_makeACall &&
  //   appName === appName_kakaotalk &&
  //   methodId === "1"
  // ) {
  //   choicedComponent =
  //     (descriptionId === "0" && <MainApps />) ||
  //     (descriptionId === "1" && <KakaoAppMain />) ||
  //     (descriptionId === "2" && <KakaoProfileMain />) ||
  //     (descriptionId === "3" && <KakaoProfileDetail />) ||
  //     (descriptionId === "4" && <CallConnected />);
  // } else if (
  //   realFunctionName === functionName_getACall &&
  //   appName === appName_basic &&
  //   methodId === "1"
  // ) {
  // } else if (appName === undefined) {
  //   choicedComponent = (
  //     <div style={{ textAlign: "center", marginTop: "100px" }}>
  //       설명을 누르시면 <br />
  //       화면이 출력됩니다.
  //     </div>
  //   );
  // } else {
  //   choicedComponent = <AppMainError />;
  // }

  switch (realFunctionName) {
    case "전화걸기(발신)":
      if (appName === "기본") {
        if (descriptionId === "0") {
          choicedComponent = <MainApps />;
        } else if (descriptionId === "1") {
          choicedComponent = <CallAppMain />;
        } else if (descriptionId === "2") {
          choicedComponent = <CallConnected />;
        } else {
          choicedComponent = <div></div>;
        }
      } else if (appName === "카카오톡") {
        if (descriptionId === "0") {
          choicedComponent = <MainApps />;
        } else if (descriptionId === "1") {
          choicedComponent = <KakaoAppMain />;
        } else if (descriptionId === "2") {
          choicedComponent = <KakaoProfileMain />;
        } else if (descriptionId === "3") {
          choicedComponent = <KakaoProfileDetail />;
        } else if (descriptionId === "4") {
          choicedComponent = <CallConnected />;
        } else {
          choicedComponent = <div></div>;
        }
      }
      break;
    case "전화받기(수신)":
      if (appName === "기본") {
        if (descriptionId === "0") {
          choicedComponent = <AnswerCall />;
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
      break;
    case "영상통화 발신":
      if (appName === "기본") {
        if (descriptionId === "0") {
          choicedComponent = <MainApps />;
        } else if (descriptionId === "1") {
          choicedComponent = <CallAppMain />;
        } else if (descriptionId === "2") {
          choicedComponent = <VideoCallConnected />;
        } else {
          choicedComponent = <div></div>;
        }
      }
      break;
    case "문자 발신":
      if (appName === "기본") {
        if (descriptionId === "0") {
          choicedComponent = <MainApps />;
        } else if (descriptionId === "1") {
          choicedComponent = <MessageAppMain />;
        } else if (descriptionId === "2") {
          choicedComponent = <SelectPerson />;
        } else if (descriptionId === "3") {
          choicedComponent = <Message></Message>;
        }
      }
      break;
    case "문자 수신":
      if (appName === "기본") {
        if (methodId === "1") {
          if (descriptionId === "0") {
            choicedComponent = <MainApps />;
          } else if (descriptionId === "1") {
            choicedComponent = <MessageAppMain />;
          } else if (descriptionId === "2") {
            choicedComponent = <Message />;
          }
        } else if (methodId === "2") {
          if (descriptionId === "0") {
            choicedComponent = <MainApps />;
          } else if (descriptionId === "1") {
            choicedComponent = <MessageAppMain />;
          } else if (descriptionId === "2") {
            choicedComponent = <UnreadMessage />;
          } else if (descriptionId === "3") {
            choicedComponent = <Message />;
          }
        }
      }
      break;
    case "문자 전달":
      if (appName === "기본") {
        if (descriptionId === "0") {
          choicedComponent = <MainApps />;
        } else if (descriptionId === "1") {
          choicedComponent = <MessageAppMain />;
        } else if (descriptionId === "2") {
          choicedComponent = <Message />;
        } else if (descriptionId === "3") {
          choicedComponent = <SelectPerson />;
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
      break;
    case "예약 문자 발송":
      if (appName === "기본") {
        if (descriptionId === "0") {
          choicedComponent = <MainApps />;
        } else if (descriptionId === "1") {
          choicedComponent = <MessageAppMain />;
        } else if (descriptionId === "2") {
          choicedComponent = <SelectPerson />;
        } else if (descriptionId === "3") {
          choicedComponent = <Message />;
        } else if (descriptionId === "4") {
          choicedComponent = <SetReservation />;
        } else if (descriptionId === "5") {
          choicedComponent = <MessageWithOption />;
        }
      }
      break;
    case "이미지, 동영상 전송":
      if (appName === "기본") {
        if (descriptionId === "0") {
          choicedComponent = <MainApps />;
        } else if (descriptionId === "1") {
          choicedComponent = <MessageAppMain />;
        } else if (descriptionId === "2") {
          choicedComponent = <SelectPerson />;
        } else if (descriptionId === "3") {
          choicedComponent = <Message />;
        } else if (descriptionId === "4") {
          choicedComponent = <SelectFile />;
        } else if (descriptionId === "5") {
          choicedComponent = <ChoiceImgs />;
        } else if (descriptionId === "6") {
          choicedComponent = <MessageWithOption></MessageWithOption>;
        }
      }
      break;
    case "오디오 전송":
      if (appName === "기본") {
        if (descriptionId === "0") {
          choicedComponent = <MainApps />;
        } else if (descriptionId === "1") {
          choicedComponent = <MessageAppMain />;
        } else if (descriptionId === "2") {
          choicedComponent = <SelectPerson />;
        } else if (descriptionId === "3") {
          choicedComponent = <Message />;
        } else if (descriptionId === "4") {
          choicedComponent = <SelectFile />;
        } else if (descriptionId === "5") {
          choicedComponent = <MessageWithOption />;
        }
      }
      break;
    case "연락처 공유":
      if (appName === "기본") {
        if (descriptionId === "0") {
          choicedComponent = <MainApps />;
        } else if (descriptionId === "1") {
          choicedComponent = <MessageAppMain />;
        } else if (descriptionId === "2") {
          choicedComponent = <SelectPerson />;
        } else if (descriptionId === "3") {
          choicedComponent = <Message />;
        } else if (descriptionId === "4") {
          choicedComponent = <SelectPerson />;
        } else if (descriptionId === "5") {
          choicedComponent = <MessageWithOption />;
        }
      }
      break;
    default:
      choicedComponent = <AppMainError />;
  }

  return (
    <PageContext.Provider
      value={{
        functionName: functionName,
        realFunctionName: realFunctionName,
        appName: appName,
        methodId: methodId,
        descriptionId: descriptionId,
        urlContent: urlContent,
      }}>
      {choicedComponent}
    </PageContext.Provider>
  );
}

export default AppMain;
