import { useParams, useSearchParams } from "next/navigation";

import MainApps from "./MainApps";
import AppMainError from "./AppMainError";
// call
import CallAppMain from "../AppDisplays/Basic/call/CallAppMain";
import AnswerCall from "../AppDisplays/Basic/call/AnswerCall";
import CallConnected from "../AppDisplays/Basic/call/CallConnected";
import VideoCallConnected from "../AppDisplays/Basic/call/VideoCallConnected";
//kakao
import KakaoAppMain from "../AppDisplays/Kakaotalk/KakaoAppMain";
import KakaoProfileDetail from "../AppDisplays/Kakaotalk/KakaoProfileDetail";
// message
import MessageAppMain from "../AppDisplays/Basic/message/MessageAppMain";
import Message from "../AppDisplays/Basic/message/Message";
import MessageWithOption from "../AppDisplays/Basic/message/reserve-message/MessageWithOption";
import UnreadMessage from "../AppDisplays/Basic/message/seeMessage/UnreadMessage";
import SelectPerson from "../AppDisplays/Basic/message/SelectPerson";
import ResendSuccess from "../AppDisplays/Basic/message/resend-message/ResendSuccess";
import SendResend from "../AppDisplays/Basic/message/resend-message/SendResend";
import SetReservation from "../AppDisplays/Basic/message/reserve-message/SetReservation";
//file
import SelectFile from "../AppDisplays/Basic/file/SelectFile";
import ChoiceImgs from "../AppDisplays/Basic/gallery/ChoiceImgs";
import KakaoChatRoom from "../AppDisplays/Kakaotalk/KakaoChatRoom";
import KakaoSettingPage from "../AppDisplays/Kakaotalk/KakaoSettingPage";

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

function AppMain({ appName, methodId, descriptionId }) {
  const params = useParams();
  const functionName = decodeURI(params.functionName);
  const searchParams = useSearchParams();

  const nextDescriptionId = +descriptionId + 1;
  const urlContent = `/description/${functionName}/?appName=${appName}&methodId=${methodId}&descriptionId=${nextDescriptionId.toString()}`;
  console.log(methodId);
  console.log(descriptionId);
  let choicedComponent = <div></div>;

  switch (functionName) {
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
      if (descriptionId === "0") {
        choicedComponent = <MainApps navLinkTriger={appName_kakaotalk} />;
      } else if (descriptionId === "1") {
        choicedComponent = (
          <KakaoAppMain tab="chat" navTriger="chatList_group"></KakaoAppMain>
        );
      } else if (descriptionId === "2") {
        choicedComponent = <KakaoChatRoom inputLocked={false} />;
      } else if (descriptionId === "3") {
        choicedComponent = (
          <KakaoSettingPage navTriger="leaveOutBtn_inviteReject" />
        );
      } else if (descriptionId === "4") {
        choicedComponent = <KakaoAppMain tab="chat" navTriger="" />;
      }
      break;
    case functionName_kakaotalk_groubChatLock:
      if (descriptionId === "0") {
        choicedComponent = <MainApps navLinkTriger={appName_kakaotalk} />;
      } else if (descriptionId === "1") {
        choicedComponent = (
          <KakaoAppMain tab="chat" navTriger="chatList_group"></KakaoAppMain>
        );
      } else if (descriptionId === "2") {
        choicedComponent = <KakaoChatRoom inputLocked={false} />;
      } else if (descriptionId === "3") {
        choicedComponent = <KakaoSettingPage navTriger="backBtn" />;
      } else if (descriptionId === "4") {
        choicedComponent = <KakaoChatRoom inputLocked={true} />;
      }
      break;
    default:
      choicedComponent = <AppMainError />;
  }

  return choicedComponent;
}

export default AppMain;
