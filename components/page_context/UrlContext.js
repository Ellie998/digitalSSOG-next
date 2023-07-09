import { createContext } from "react";

const UrlContext = createContext({
  functionName: "",
  myAppName: "",
  myMethodId: "",
  myDescriptionId: "",
  setMyAppName: null,
  setMyMethodId: null,
  setMyDescriptionId: null,
  urlContent: "",
  urlChangeDetecter: null,
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
  functionName_kakaotalk_groubChatLeave_rejectInvitation:
    "그룹채팅방 초대거부 및 나가기",
  functionName_kakaotalk_groubChatLock: "그룹채팅방 채팅 입력창 잠금하기",
  functionName_kakaotalk_groubChatLeave_quietly: "그룹채팅방 조용히 나가기",

  //
  appName_basic: "",
  appName_kakaotalk: "",
  appName_call: "",
  appName_message: "",
  //
});

export default UrlContext;
