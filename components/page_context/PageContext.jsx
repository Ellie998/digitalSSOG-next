import { createContext } from "react";

export default PageContext = createContext({
  functionName: "",
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
