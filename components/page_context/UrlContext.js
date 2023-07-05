import { createContext } from "react";

const UrlContext = createContext({
  functionName: "",
  appName: "",
  methodId: "",
  descriptionId: "",
  setAppName: null,
  setMethodId: null,
  setDescriptionId: null,
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

  appName_basic: "",
  appName_kakaotalk: "",
  appName_call: "",
  appName_message: "",
  //
  // appName_basic: "기본",
  // appName_call: "전화",
  // appName_message: "메시지",
  // appName_kakaotalk: "카카오톡",
  // //
  // functionName_makeCall: "전화걸기(발신)",
  // functionName_getCall: "전화받기(수신)",
  // functionName_makeVideoCall: "영상통화 발신",
  // functionName_sendMessage: "문자 발신",
  // functionName_seeMessage: "문자 수신",
  // functionName_resendMessage: "문자 전달",
  // functionName_reserveMessage: "예약 문자 발송",
  // functionName_sendImg: "이미지, 동영상 전송",
  // functionName_sendAudio: "오디오 전송",
  // functionName_sendPhoneNum: "연락처 공유",
  // functionName_kakaotalk_groubChatLeave_RejectInvitation:
  //   "그룹채팅방 초대거부 및 나가기",
  // functionName_kakaotalk_groubChatLock: "그룹채팅방 채팅 입력창 잠금하기",
});

export default UrlContext;
