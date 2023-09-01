import Chats from "./index";

//
const functionName_sendMessage = "문자 발신";
const functionName_seeMessage = "문자 수신";
const functionName_resendMessage = "문자 전달";
const functionName_reserveMessage = "예약 문자 발송";
const functionName_sendImg = "이미지, 동영상 전송";
const functionName_sendAudio = "오디오 전송";
const functionName_sendPhoneNum = "연락처 공유";

export default {
  component: Chats,
  args: {
    methodId: 1,
    descriptionId: 1,
  },
  argTypes: {
    methodId: {
      options: [1, 2, 3],
      control: { type: "radio" },
    },
    descriptionId: {
      options: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
      control: { type: "radio" },
    },
  },
};

export const sendMessage = {
  args: {
    functionName: functionName_sendMessage,
  },
};
export const seeMessage = {
  args: {
    functionName: functionName_seeMessage,
  },
};
export const resendMessage = {
  args: {
    functionName: functionName_resendMessage,
  },
};
export const reserveMessage = {
  args: {
    functionName: functionName_reserveMessage,
  },
};
export const sendImg = {
  args: {
    functionName: functionName_sendImg,
  },
};
export const sendAudio = {
  args: {
    functionName: functionName_sendAudio,
  },
};
export const sendPhoneNum = {
  args: {
    functionName: functionName_sendPhoneNum,
  },
};
