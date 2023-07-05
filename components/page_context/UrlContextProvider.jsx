import UrlContext from "./UrlContext";
import { useEffect, useState } from "react";
import { useParams, useSearchParams } from "next/navigation";

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

function urlChangeDetecter() {
  const searchParams = useSearchParams();
  const appName = searchParams.get("appName");
  const methodId = searchParams.get("methodId");
  const descriptionId = searchParams.get("descriptionId");
  return { appName: appName, methodId: methodId, descriptionId: descriptionId };
}

export default function UrlContextProvider({ children }) {
  const params = useParams();
  const functionName = decodeURI(params.functionName);
  //
  // const searchParams = useSearchParams();
  // const paramAppName = searchParams.get("appName");
  // const parmaMethodId = searchParams.get("methodId");
  // const paramDescriptionId = searchParams.get("descriptionId");
  // const [appName, setAppName] = useState(paramAppName);
  // const [methodId, setMethodId] = useState(parmaMethodId);
  // const [descriptionId, setDescriptionId] = useState(paramDescriptionId);
  const querys = urlChangeDetecter();
  const appName = querys.appName;
  const methodId = querys.methodId;
  const descriptionId = querys.descriptionId;
  //
  const nextDescriptionId = +descriptionId + 1;
  const urlContent = `/description/${functionName}/?appName=${appName}&methodId=${methodId}&descriptionId=${nextDescriptionId.toString()}`;
  // useEffect(() => {}, [paramAppName, parmaMethodId, paramDescriptionId]);
  return (
    <UrlContext.Provider
      value={{
        functionName: functionName,
        appName: appName,
        methodId: methodId,
        descriptionId: descriptionId,
        // setAppName: setAppName,
        // setMethodId: setMethodId,
        // setDescriptionId: setDescriptionId,
        urlContent: urlContent,
        urlChangeDetecter: urlChangeDetecter,
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
      {children}
    </UrlContext.Provider>
  );
}
