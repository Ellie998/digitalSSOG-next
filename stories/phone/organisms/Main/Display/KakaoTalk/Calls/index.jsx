/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import Home from "stories/phone/Apps/Basic/Home/index";
import Error from "stories/phone/organisms/Main/Error/index";
import Default from "stories/phone/organisms/Main/Default/index";
// call

import CallConnected from "stories/phone/Apps/KakaoTalk/templates/CallConnected/index";

import Main from "stories/phone/Apps/KakaoTalk/templates/Main/index";
import Profile from "stories/phone/Apps/KakaoTalk/templates/Profile/index";
import { useContext, useState } from "react";
import UrlContext from "components/page_context/UrlContext";
import Setting_ProfileName from "stories/phone/Apps/KakaoTalk/templates/Setting_ProfileName/index";
import AnswerCall from "stories/phone/Apps/KakaoTalk/templates/AnswerCall/index";
import Chat from "stories/phone/Apps/KakaoTalk/templates/Chat/index";
import VideoCallConnected from "stories/phone/Apps/KakaoTalk/templates/VideoCallConnected/index";
import TargetBox from "stories/phone/atoms/TargetBox/index";
import FriendSetting from "stories/phone/Apps/KakaoTalk/templates/FriendSetting/index";
import FriendList from "stories/phone/Apps/KakaoTalk/templates/FriendList/index";

function Calls({ functionName, methodId, descriptionId }) {
  const {
    functionName_makeCall,
    functionName_getCall,
    functionName_changeName,
    functionName_makeVideoCall,
    functionName_deleteContact,
  } = useContext(UrlContext);

  let choicedComponent = <Default />;
  const [name, setName] = useState("영희");

  switch (functionName.replaceAll("-", " ")) {
    case functionName_makeCall:
      choicedComponent = [
        <Home key="mainApps" appName_kakaotalk />,
        <Main
          key="KakaoAppMain"
          tab={{ friend: true }}
          target_friend={{ profile: true }}
        />,
        <Profile key="Profile" target={{ call: true }} />,
        <CallConnected key="callConnected" />,
      ][descriptionId];

      break;
    case functionName_getCall:
      choicedComponent = [
        <AnswerCall key="1" content={{ name: "영희" }} />,
        <CallConnected key="callConnected" />,
      ][descriptionId];
      break;
    case functionName_makeVideoCall:
      if (methodId === "1")
        choicedComponent = [
          <Home key="mainApps" appName_kakaotalk />,
          <Main
            key="KakaoAppMain"
            tab={{ friend: true }}
            target_friend={{ profile: true }}
          />,
          <Profile key="Profile" target={{ videoCall: true }} />,
          <VideoCallConnected key="connected1" open={{ modal: true }} />,
          <VideoCallConnected key="connected2" />,
        ][descriptionId];

      if (methodId === "2")
        choicedComponent = [
          <Home key="mainApps" appName_kakaotalk />,
          <Main
            key="KakaoAppMain"
            tab={{ chat: true }}
            target_chat={{ chat: true }}
          />,
          <Chat key="chat1" target={{ optionBtn: true }} />,
          <Chat
            key="chat2"
            target={{ option_call: true }}
            open={{ option: true, chat: true }}
          />,
          <Chat
            key="chat3"
            target={{ option_videoCall: true }}
            open={{ modal: true, chat: true }}
          />,
          <VideoCallConnected key="connected1" open={{ modal: true }} />,
          <VideoCallConnected key="connected2" />,
        ][descriptionId];

      break;
    case functionName_changeName:
      if (methodId === "1") {
        choicedComponent = [
          <Home key={"1"} appName_kakaotalk={true} />,
          <Main
            key={"2"}
            tab={{ friend: true }}
            target_friend={{ profile: true }}
          />,
          <Profile key={"3"} target={{ name: true }} />,
          <Setting_ProfileName
            key="4"
            content={{ name: name, setName: setName }}
          />,
          <Profile key={"5"} content={{ name: name }} />,
        ][descriptionId];
      }
      if (methodId === "2") {
        choicedComponent = [
          <Home key={"1"} appName_kakaotalk={true} />,
          <Main
            key={"2"}
            tab={{ friend: true }}
            target_friend={{ person1: true }}
          />,
          <Main
            key={"2"}
            tab={{ friend: true }}
            target_friend={{ modal_nameChange: true }}
            open_friend={{ friendModal: true }}
          />,
          <Setting_ProfileName
            key="4"
            content={{ name: name, setName: setName }}
          />,
          <Profile key={"5"} content={{ name: name }} />,
        ][descriptionId];
      }
      break;
    case functionName_deleteContact:
      if (methodId === "1") {
        choicedComponent = [
          <Home key={"1"} appName_kakaotalk={true} />,
          <Main
            key={"2"}
            tab={{ friend: true }}
            target_friend={{ person1: true }}
          />,
          <Main
            key={"3"}
            tab={{ friend: true }}
            target_friend={{ modal_hide: true }}
            open_friend={{ friendModal: true }}
          />,
          <Main
            key={"4"}
            tab={{ friend: true }}
            open_friend={{ modal: true }}
            content={{
              modal: {
                title: "친구목록에서 숨김",
                subTitle: (
                  <>
                    {`숨긴 친구는 설정>친구>숨김친구 관리에서 친구목록으로 복귀할 수 있습니다.`}
                    <br />
                    상대방에게 더 이상 메시지를 받지 않으시려면 숨긴친구
                    관리에서 차단해주세요.
                  </>
                ),
                button1: (
                  <div style={{ color: "rgb(8, 119, 255)" }}>다시보지않음</div>
                ),
                button2: (
                  <TargetBox
                    style={{ color: "rgb(8, 119, 255)" }}
                    condition={true}>
                    숨김
                  </TargetBox>
                ),
              },
            }}
          />,
          <Main
            key={"5"}
            tab={{ friend: true }}
            target_friend={{ setting: true, settingFriend: true }}
          />,
          <FriendSetting key="6" target={{ hideFriend: true }} />,
          <FriendList
            key="7"
            header={"숨김친구 관리"}
            target={{ person1: true, info: true }}
            info={{
              content: (
                <div
                  style={{
                    border: "1px solid rgb(207, 207, 207)",
                    borderRadius: "12px",
                    padding: "2px 4px",
                    width: "fit-content",
                  }}>
                  관리
                </div>
              ),
            }}
          />,
          <FriendList
            key="8"
            header={"숨김친구 관리"}
            target={{ person1: true, info: true }}
            info={{
              content: (
                <div
                  style={{
                    border: "1px solid rgb(207, 207, 207)",
                    borderRadius: "12px",
                    padding: "2px 4px",
                    width: "fit-content",
                  }}>
                  관리
                </div>
              ),
            }}
            open={{ modal: true, person1: true }}
            content={{
              modal: {
                title: "숨김친구 관리",
                children: (
                  <div style={{ marginLeft: "8px", fontSize: "14px" }}>
                    <TargetBox style={{ padding: "2px 0" }}>
                      친구목록으로 복귀
                    </TargetBox>
                    <TargetBox style={{ padding: "2px 0" }}>차단</TargetBox>
                    <TargetBox condition={true} style={{ padding: "2px 0" }}>
                      삭제
                    </TargetBox>
                  </div>
                ),
              },
            }}
          />,
          <FriendList
            key="9"
            header={"숨김친구 관리"}
            info={{
              content: (
                <div
                  style={{
                    border: "1px solid rgb(207, 207, 207)",
                    borderRadius: "12px",
                    padding: "2px 4px",
                    width: "fit-content",
                  }}>
                  관리
                </div>
              ),
            }}
            open={{ modal: true, person1: true }}
            content={{
              modal: {
                subTitle: (
                  <>
                    선택한 친구를 삭제합니다.
                    <br />
                    모바일 연락처에 등록되어 있어도 카카오톡 친구로 추가되지
                    않습니다.
                    <br />
                    상대방이 보낸 메시지는 받을 수 있습니다.
                  </>
                ),
                children: (
                  <div
                    style={{
                      marginLeft: "8px",
                      fontSize: "14px",
                      display: "flex",
                      justifyContent: "right",
                      alignItems: "center",
                    }}>
                    <TargetBox
                      style={{ padding: "2px 0", color: "rgb(0, 128, 255)" }}>
                      취소
                    </TargetBox>
                    <TargetBox
                      condition={true}
                      style={{
                        padding: "2px 0",
                        marginLeft: "10px",
                        color: "rgb(0, 128, 255)",
                      }}>
                      확인
                    </TargetBox>
                  </div>
                ),
              },
            }}
          />,
          <FriendList
            key="9"
            header={"숨김친구 관리"}
            info={{
              content: (
                <div
                  style={{
                    border: "1px solid rgb(207, 207, 207)",
                    borderRadius: "12px",
                    padding: "2px 4px",
                    width: "fit-content",
                  }}>
                  관리
                </div>
              ),
            }}
            open={{ person1: false }}
          />,
        ][descriptionId];
      }

      break;

    default:
      choicedComponent = <Error />;
  }

  return choicedComponent;
}

export default Calls;
