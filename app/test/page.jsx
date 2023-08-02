"use client";
// app/page.jsx

export const runtime = "edge";

import MainApps from "components/DisplayBox/sections/MainApps";
// call

import CallAppMain from "components/DisplayBox/AppDisplays/Basic/call/CallAppMain";
import AnswerCall from "components/DisplayBox/AppDisplays/Basic/call/AnswerCall";
import CallConnected from "components/DisplayBox/AppDisplays/Basic/call/CallConnected";
import VideoCallConnected from "components/DisplayBox/AppDisplays/Basic/call/VideoCallConnected";
//kakao
import KakaoAppMain from "components/DisplayBox/AppDisplays/Kakaotalk/KakaoAppMain";
import KakaoProfileDetail from "components/DisplayBox/AppDisplays/Kakaotalk/KakaoProfileDetail";
import KakaoChatRoom from "components/DisplayBox/AppDisplays/Kakaotalk/KakaoChatRoom";
import ETCSetting from "components/DisplayBox/AppDisplays/Kakaotalk/ETCSetting";
import ETCSetting_lab from "components/DisplayBox/AppDisplays/Kakaotalk/ETCSetting_lab";
import KakaoChatRoom_setting from "components/DisplayBox/AppDisplays/Kakaotalk/KakaoChatRoom_setting";
// message
import MessageAppMain from "components/DisplayBox/AppDisplays/Basic/message/MessageAppMain"; //
import Message from "components/DisplayBox/AppDisplays/Basic/message/Message";
import UnreadMessage from "components/DisplayBox/AppDisplays/Basic/message/UnreadMessage";
import SelectPerson from "components/DisplayBox/AppDisplays/Basic/message/SelectPerson";

//file
import SelectFile from "components/DisplayBox/AppDisplays/Basic/file/SelectFile";
import ChoiceImgs from "components/DisplayBox/AppDisplays/Basic/gallery/ChoiceImgs";
//
import AppMain_default from "components/DisplayBox/sections/AppMain_default";
import AppMainError from "components/DisplayBox/sections/AppMainError";
import MyLayout from "../../components/layout/MyLayout";
import DisplayBox from "../../components/DisplayBox/DisplayBox";
import { useState } from "react";

export default function Page() {
  const btns = [
    "MainApps",
    "",
    //
    "CallAppMain",
    "AnswerCall",
    "CallConnected",
    "VideoCallConnected",
    "",
    //
    "KakaoAppMain",
    "KakaoProfileDetail",
    "KakaoChatRoom",
    "KakaoChatRoom_setting",
    "ETCSetting",
    "ETCSetting_lab",
    "",
    //
    "MessageAppMain",
    "Message",
    "UnreadMessage",
    "SelectPerson",
    "",
    //
    "SelectFile",
    "ChoiceImgs",
    "",

    //
    "AppMainError",
    "AppMain_default",
  ];

  const [clickedName, setClickedName] = useState("");
  let component;
  switch (clickedName) {
    case "MainApps":
      component = <MainApps />;
      break;

    case "CallAppMain":
      component = <CallAppMain />;
      break;

    case "AnswerCall":
      component = <AnswerCall />;

      break;

    case "CallConnected":
      component = <CallConnected />;

      break;

    case "VideoCallConnected":
      component = <VideoCallConnected />;

      break;

    case "KakaoAppMain":
      component = <KakaoAppMain />;

      break;

    case "KakaoProfileDetail":
      component = <KakaoProfileDetail />;

      break;

    case "KakaoChatRoom":
      component = <KakaoChatRoom />;

      break;
    case "KakaoChatRoom_setting":
      component = <KakaoChatRoom_setting />;

      break;
    case "ETCSetting":
      component = <ETCSetting />;

      break;

    case "ETCSetting_lab":
      component = <ETCSetting_lab />;

      break;

    case "MessageAppMain":
      component = <MessageAppMain />;

      break;

    case "Message":
      component = <Message />;

      break;

    case "UnreadMessage":
      component = <UnreadMessage />;

      break;

    case "SelectPerson":
      component = <SelectPerson />;

      break;

    case "SelectFile":
      component = <SelectFile />;

      break;

    case "ChoiceImgs":
      component = <ChoiceImgs />;

      break;

    case "AppMainError":
      component = <AppMainError />;

      break;

    case "AppMain_default":
      component = <AppMain_default />;

      break;

    default:
      break;
  }

  return (
    <div className="flex justify-around mt-10">
      <div className="ml-2 mt-4">
        {btns.map((btn) =>
          btn !== "" ? (
            <div
              className={` bg-gray-200 w-fit px-2 py-1 mb-2 cursor-pointer hover:bg-blue-200 rounded-md ${
                btn === clickedName ? "bg-blue-200" : ""
              }`}
              onClick={() => setClickedName(btn)}>
              {btn}
            </div>
          ) : (
            <div className="w-30 h-0.5 mb-2 bg-gray-300"></div>
          )
        )}
      </div>
      <DisplayBox>{component}</DisplayBox>
    </div>
  );
}
