import { createContext } from "react";
import { useParams } from "react-router-dom";

import MainApps from "./MainApps";
import AppMainError from "./AppMainError";
// call
import CallAppMain from "../Basic/call/CallAppMain";
import AnswerCall from "../Basic/call/AnswerCall";
import CallConnected from "../Basic/call/CallConnected";
import VideoCallConnected from "../Basic/call/VideoCallConnected";
//kakao
import KakaoAppMain from "../Kakaotalk/KakaoAppMain";
import KakaoProfileDetail from "../Kakaotalk/KakaoProfileDetail";
// message
import MessageAppMain from "../Basic/message/MessageAppMain";
import Message from "../Basic/message/Message";
import MessageWithOption from "../Basic/message/reserve-message/MessageWithOption";
import UnreadMessage from "../Basic/message/seeMessage/UnreadMessage";
import SelectPerson from "../Basic/message/SelectPerson";
import ResendSuccess from "../Basic/message/resend-message/ResendSuccess";
import SendResend from "../Basic/message/resend-message/SendResend";
import SetReservation from "../Basic/message/reserve-message/SetReservation";
//file
import SelectFile from "../Basic/file/SelectFile";
import ChoiceImgs from "../Basic/gallery/ChoiceImgs";
import KakaoChatRoom from "../Kakaotalk/KakaoChatRoom";
import KakaoSettingPage from "../Kakaotalk/KakaoSettingPage";

export const PageContext = createContext({
  functionName: "",
  realFunctionName: "",
  appName: "",
  methodId: "",
  descriptionId: "",
  urlContent: "",
  //
  functionName_makeCall: "",
  functionName_getCall: "",
  functionName_makeVideoCall: "",
  functionName_sendMessage: "",
  functionName_resendMessage: "",
  functionName_reserveMessage: "",
  functionName_sendImg: "",
  functionName_sendAudio: "",
  functionName_sendPhoneNum: "",
  //
  appName_basic: "",
  appName_kakaotalk: "",
  appName_call: "",
  appName_message: "",
});

const appName_basic = "기본";
const appName_call = "전화";
const appName_message = "메시지";
const appName_kakaotalk = "카카오톡";
//
const functionName_makeCall = "전화걸기(발신)";
const functionName_getCall = "전화받기(수신)";
const functionName_makeVideoCall = "영상통화 발신";
const functionName_sendMessage = "문자 발신";
const functionName_seeMessage = "문자 수신";
const functionName_resendMessage = "문자 전달";
const functionName_reserveMessage = "예약 문자 발송";
const functionName_sendImg = "이미지, 동영상 전송";
const functionName_sendAudio = "오디오 전송";
const functionName_sendPhoneNum = "연락처 공유";
const functionName_kakaotalk_groubChatLeave_RejectInvitation =
  "그룹채팅방 초대거부 및 나가기";
const functionName_kakaotalk_groubChatLock = "그룹채팅방 채팅 입력창 잠금하기";

function AppMain() {
  const params = useParams();
  const functionName = params.functionName;
  const realFunctionName = functionName.slice(2);
  const appName = params.appName;
  const methodId = params.methodId;
  const descriptionId = params.descriptionId;
  const urlContent = `/description/${functionName}/${appName}/${methodId}/${
    +descriptionId + 1
  }`;

  let choicedComponent = <div></div>;

  switch (realFunctionName) {
    case functionName_makeCall:
      if (appName === appName_basic) {
        if (descriptionId === "0") {
          choicedComponent = <MainApps navLinkTriger={appName_call} />;
        } else if (descriptionId === "1") {
          choicedComponent = <CallAppMain />;
        } else if (descriptionId === "2") {
          choicedComponent = <CallConnected />;
        } else {
          choicedComponent = <div></div>;
        }
      } else if (appName === appName_kakaotalk) {
        if (descriptionId === "0") {
          choicedComponent = <MainApps navLinkTriger={appName_kakaotalk} />;
        } else if (descriptionId === "1") {
          choicedComponent = (
            <KakaoAppMain tab={"friend"} navTriger="profile_friend" />
          );
        } else if (descriptionId === "2") {
          choicedComponent = <KakaoProfileDetail />;
        } else if (descriptionId === "3") {
          choicedComponent = <CallConnected />;
        } else {
          choicedComponent = <div></div>;
        }
      }
      break;
    case functionName_getCall:
      if (appName === appName_basic) {
        if (descriptionId === "0") {
          choicedComponent = <AnswerCall />;
        } else if (descriptionId === "1") {
          choicedComponent = <CallConnected></CallConnected>;
        }
      } else if (appName === appName_kakaotalk) {
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
    case functionName_makeVideoCall:
      if (appName === appName_basic) {
        if (descriptionId === "0") {
          choicedComponent = <MainApps navLinkTriger={appName_call} />;
        } else if (descriptionId === "1") {
          choicedComponent = <CallAppMain />;
        } else if (descriptionId === "2") {
          choicedComponent = <VideoCallConnected />;
        } else {
          choicedComponent = <div></div>;
        }
      }
      break;
    case functionName_sendMessage:
      if (appName === appName_basic) {
        if (descriptionId === "0") {
          choicedComponent = <MainApps navLinkTriger={appName_message} />;
        } else if (descriptionId === "1") {
          choicedComponent = <MessageAppMain />;
        } else if (descriptionId === "2" && methodId === "1") {
          choicedComponent = <SelectPerson />;
        } else if (
          (descriptionId === "3" && methodId === "1") ||
          (descriptionId === "2" && methodId === "2")
        ) {
          choicedComponent = <Message></Message>;
        }
      }
      break;
    case functionName_seeMessage:
      if (appName === appName_basic) {
        if (methodId === "1") {
          if (descriptionId === "0") {
            choicedComponent = <MainApps navLinkTriger={appName_message} />;
          } else if (descriptionId === "1") {
            choicedComponent = <MessageAppMain />;
          } else if (descriptionId === "2") {
            choicedComponent = <Message />;
          }
        } else if (methodId === "2") {
          if (descriptionId === "0") {
            choicedComponent = <MainApps navLinkTriger={appName_message} />;
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
    case functionName_resendMessage:
      if (appName === appName_basic) {
        if (descriptionId === "0") {
          choicedComponent = <MainApps navLinkTriger={appName_message} />;
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
    case functionName_reserveMessage:
      if (appName === appName_basic) {
        if (descriptionId === "0") {
          choicedComponent = <MainApps navLinkTriger={appName_message} />;
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
    case functionName_sendImg:
      if (appName === appName_basic) {
        if (descriptionId === "0") {
          choicedComponent = <MainApps navLinkTriger={appName_message} />;
        } else if (descriptionId === "1") {
          choicedComponent = <MessageAppMain />;
        } else if (descriptionId === "2") {
          choicedComponent = <SelectPerson />;
        } else if (descriptionId === "3") {
          choicedComponent = <Message />;
        } else if (descriptionId === "4" && methodId === "2") {
          choicedComponent = <SelectFile />;
        } else if (descriptionId === "5" && methodId === "2") {
          choicedComponent = <ChoiceImgs />;
        } else if (descriptionId === "6" && methodId === "2") {
          choicedComponent = <MessageWithOption></MessageWithOption>;
        }
      }
      break;
    case functionName_sendAudio:
      if (appName === appName_basic) {
        if (descriptionId === "0") {
          choicedComponent = <MainApps navLinkTriger={appName_message} />;
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
    case functionName_sendPhoneNum:
      if (appName === appName_basic) {
        if (descriptionId === "0") {
          choicedComponent = <MainApps navLinkTriger={appName_message} />;
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
    case functionName_kakaotalk_groubChatLeave_RejectInvitation:
    case functionName_kakaotalk_groubChatLock:
      if (descriptionId === "0") {
        choicedComponent = <MainApps navLinkTriger={appName_kakaotalk} />;
      } else if (descriptionId === "1") {
        choicedComponent = (
          <KakaoAppMain tab="chat" navTriger="chatList_group"></KakaoAppMain>
        );
      } else if (descriptionId === "2") {
        choicedComponent = <KakaoChatRoom />;
      } else if (descriptionId === "3") {
        choicedComponent = <KakaoSettingPage />;
      } else if (descriptionId === "4") {
        choicedComponent = <KakaoChatRoom />;
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
        //
        functionName_makeCall: functionName_makeCall,
        functionName_getCall: functionName_getCall,
        functionName_makeVideoCall: functionName_makeVideoCall,
        functionName_sendMessage: functionName_sendMessage,
        functionName_seeMessage: functionName_seeMessage,
        functionName_resendMessage: functionName_resendMessage,
        functionName_reserveMessage: functionName_reserveMessage,
        functionName_sendImg: functionName_sendImg,
        functionName_sendAudio: functionName_sendAudio,
        functionName_sendPhoneNum: functionName_sendPhoneNum,
        //
        functionName_kakaotalk_groubChatLeave_RejectInvitation:
          functionName_kakaotalk_groubChatLeave_RejectInvitation,
        functionName_kakaotalk_groubChatLock:
          functionName_kakaotalk_groubChatLock,
        //
        appName_basic: appName_basic,
        appName_kakaotalk: appName_kakaotalk,
        appName_message: appName_message,
        appName_call: appName_call,
      }}>
      {choicedComponent}
    </PageContext.Provider>
  );
}

export default AppMain;
