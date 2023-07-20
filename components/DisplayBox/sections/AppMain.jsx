import MainApps from "./MainApps";
import AppMainError from "./AppMainError";
// call
import CallAppMain from "../AppDisplays/Basic/call/CallAppMain"; //
import AnswerCall from "../AppDisplays/Basic/call/AnswerCall";
import CallConnected from "../AppDisplays/Basic/call/CallConnected";
import VideoCallConnected from "../AppDisplays/Basic/call/VideoCallConnected";
//kakao
import KakaoAppMain from "../AppDisplays/Kakaotalk/KakaoAppMain";
import KakaoProfileDetail from "../AppDisplays/Kakaotalk/KakaoProfileDetail";
// message
import MessageAppMain from "../AppDisplays/Basic/message/MessageAppMain"; //
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
import { useContext } from "react";
import UrlContext from "../../page_context/UrlContext";
import ETCSetting from "../AppDisplays/Kakaotalk/ETCSetting";
import AppMain_default from "./AppMain_default";
import ETCSetting_lab from "../AppDisplays/Kakaotalk/ETCSetting_lab";

function AppMain({}) {
  const {
    functionName,
    myAppName,
    myMethodId,
    myDescriptionId,
    //
    functionName_makeCall,
    functionName_getCall,
    functionName_makeVideoCall,
    functionName_sendMessage,
    functionName_seeMessage,
    functionName_resendMessage,
    functionName_reserveMessage,
    functionName_sendImg,
    functionName_sendAudio,
    functionName_sendPhoneNum,
    functionName_kakaotalk_groubChatLeave_rejectInvitation,
    functionName_kakaotalk_groubChatLock,
    functionName_kakaotalk_groubChatLeave_quietly,
    //
    appName_basic,
    appName_kakaotalk,
    appName_message,
    appName_call,
  } = useContext(UrlContext);

  const appName = myAppName;
  const methodId = myMethodId.toString();
  const descriptionId = myDescriptionId.toString();

  let choicedComponent = <AppMain_default />;

  switch (functionName) {
    case functionName_makeCall:
      if (appName === appName_basic) {
        if (descriptionId === "0") {
          choicedComponent = <MainApps navLinkTriger={appName_call} />;
        } else if (descriptionId === "1") {
          if (methodId === "1") {
            choicedComponent = <CallAppMain targetTab="키패드" target_Call />;
          }
          if (methodId === "2") {
            choicedComponent = <CallAppMain targetTab="최근기록" target_Call />;
          }
          if (methodId === "3") {
            choicedComponent = <CallAppMain targetTab="연락처" target_Call />;
          }
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
            <KakaoAppMain defaultTab={"friend"} target_profile />
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
          choicedComponent = (
            <CallAppMain targetTab="키패드" target_videoCall />
          );
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
          choicedComponent = (
            <MessageAppMain
              target_sendMessage={methodId === "1"}
              target_seeMessage={methodId === "2"}
            />
          );
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
            choicedComponent = <MessageAppMain target_seeMessage />;
          } else if (descriptionId === "2") {
            choicedComponent = <Message />;
          }
        } else if (methodId === "2") {
          if (descriptionId === "0") {
            choicedComponent = <MainApps navLinkTriger={appName_message} />;
          } else if (descriptionId === "1") {
            choicedComponent = <MessageAppMain target_unreadMessage />;
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
          choicedComponent = <MessageAppMain target_seeMessage />;
        } else if (descriptionId === "2") {
          choicedComponent = <Message target_resend />;
        } else if (descriptionId === "3") {
          choicedComponent = <SelectPerson />;
        } else if (descriptionId === "4") {
          choicedComponent = <SendResend></SendResend>;
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
          choicedComponent = <MessageAppMain target_sendMessage />;
        } else if (descriptionId === "2") {
          choicedComponent = <SelectPerson />;
        } else if (descriptionId === "3") {
          choicedComponent = <Message target_reserveMessage optionOpen />;
        } else if (descriptionId === "4") {
          choicedComponent = <SetReservation />;
        } else if (descriptionId === "5") {
          choicedComponent = <MessageWithOption />;
        }
      }
      if (appName === appName_kakaotalk) {
        if (descriptionId === "0") {
          choicedComponent = <MainApps navLinkTriger={appName_kakaotalk} />;
        } else if (descriptionId === "1") {
          choicedComponent = (
            <KakaoAppMain defaultTab="chat" target_chat></KakaoAppMain>
          );
        } else if (descriptionId === "2") {
          choicedComponent = (
            <KakaoChatRoom inputLocked={false} chatType_1to1 target_optionBtn />
          );
        } else if (descriptionId === "3") {
          choicedComponent = (
            <KakaoChatRoom
              inputLocked={false}
              chatType_1to1
              optionOpen
              target_reserveMessage
            />
          );
        } else if (descriptionId === "4") {
          choicedComponent = (
            <KakaoChatRoom
              inputLocked={false}
              chatType_1to1
              optionSettingOpen
              target_reserveMessage
            />
          );
        } else if (descriptionId === "5") {
          choicedComponent = (
            <KakaoChatRoom
              inputLocked={false}
              chatType_1to1
              alertOpen
              target_optionBtn
            />
          );
        } else if (descriptionId === "6") {
          choicedComponent = (
            <KakaoChatRoom
              inputLocked={false}
              chatType_1to1
              optionOpen
              target_reserveMessage
            />
          );
        } else if (descriptionId === "7") {
          choicedComponent = (
            <KakaoChatRoom
              inputLocked={false}
              chatType_1to1
              target_reserveMessage
              optionSetting_reopen
            />
          );
        }
        break;
      }
      break;
    case functionName_sendImg:
      if (appName === appName_basic) {
        if (descriptionId === "0") {
          choicedComponent = <MainApps navLinkTriger={appName_message} />;
        } else if (descriptionId === "1") {
          choicedComponent = <MessageAppMain target_sendMessage />;
        } else if (descriptionId === "2") {
          choicedComponent = <SelectPerson />;
        } else if (descriptionId === "3") {
          choicedComponent = (
            <Message optionOpen={methodId === "2"} target_sendImg />
          );
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
          choicedComponent = <MessageAppMain target_sendMessage />;
        } else if (descriptionId === "2") {
          choicedComponent = <SelectPerson />;
        } else if (descriptionId === "3") {
          choicedComponent = <Message optionOpen target_sendAudio />;
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
          choicedComponent = <MessageAppMain target_sendMessage />;
        } else if (descriptionId === "2") {
          choicedComponent = <SelectPerson />;
        } else if (descriptionId === "3") {
          choicedComponent = <Message optionOpen target_sendPhoneNum />;
        } else if (descriptionId === "4") {
          choicedComponent = <SelectPerson />;
        } else if (descriptionId === "5") {
          choicedComponent = <MessageWithOption />;
        }
      }
      break;
    case functionName_kakaotalk_groubChatLeave_rejectInvitation:
      if (descriptionId === "0") {
        choicedComponent = <MainApps navLinkTriger={appName_kakaotalk} />;
      } else if (descriptionId === "1") {
        choicedComponent = (
          <KakaoAppMain defaultTab="chat" target_groupChat></KakaoAppMain>
        );
      } else if (descriptionId === "2") {
        choicedComponent = (
          <KakaoChatRoom inputLocked={false} chatType_group target_menu />
        );
      } else if (descriptionId === "3") {
        choicedComponent = (
          <KakaoChatRoom
            inputLocked={false}
            chatType_group
            menuOpen
            target_setting
          />
        );
      } else if (descriptionId === "4") {
        choicedComponent = (
          <KakaoSettingPage navTriger="groubChatLeave_rejectInvitation" />
        );
      } else if (descriptionId === "5") {
        choicedComponent = <KakaoAppMain defaultTab="chat" />;
      }
      break;
    case functionName_kakaotalk_groubChatLock:
      if (descriptionId === "0") {
        choicedComponent = <MainApps navLinkTriger={appName_kakaotalk} />;
      } else if (descriptionId === "1") {
        choicedComponent = (
          <KakaoAppMain defaultTab="chat" target_groupChat></KakaoAppMain>
        );
      } else if (descriptionId === "2") {
        choicedComponent = <KakaoChatRoom chatType_group target_menu />;
      } else if (descriptionId === "3") {
        choicedComponent = (
          <KakaoChatRoom chatType_group menuOpen target_setting />
        );
      } else if (descriptionId === "4") {
        choicedComponent = <KakaoSettingPage navTriger="groubChatLock" />;
      } else if (descriptionId === "5") {
        choicedComponent = <KakaoChatRoom chatType_group inputLocked={true} />;
      }
      break;
    case functionName_kakaotalk_groubChatLeave_quietly:
      choicedComponent = [
        <MainApps navLinkTriger={appName_kakaotalk} />,
        <KakaoAppMain defaultTab="ETC" target_setting />,
        <ETCSetting target_lab />,
        <ETCSetting_lab target_groubChatLeave_quietly />,
        <ETCSetting target_backBtn />,
        //
        <KakaoAppMain defaultTab="chat" target_groupChat />,
        <KakaoChatRoom chatType_group target_menu />,
        <KakaoChatRoom chatType_group menuOpen target_leave_quietly />,
        <KakaoChatRoom chatType_group modalOpen target_leave_quietly />,
        <KakaoAppMain defaultTab="chat" />,
      ][descriptionId];
      break;
    default:
      choicedComponent = <AppMainError />;
  }

  return choicedComponent;
}

export default AppMain;
