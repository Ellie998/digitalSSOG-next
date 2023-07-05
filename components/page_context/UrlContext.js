import { createContext } from "react";

const UrlContext = createContext({
  functionName: "",
  appName: "",
  methodId: "",
  descriptionId: "",
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
  //
  appName_basic: "",
  appName_kakaotalk: "",
  appName_call: "",
  appName_message: "",
  //
});

export default UrlContext;
