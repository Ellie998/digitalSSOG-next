import Chats from ".";

const functionName_reserveMessage = "예약 문자 발송";
const functionName_kakaotalk_groubChatLeave_rejectInvitation =
  "그룹채팅방 초대거부 및 나가기";
const functionName_kakaotalk_groubChatLock = "그룹채팅방 채팅 입력창 잠금하기";
const functionName_kakaotalk_groubChatLeave_quietly =
  "그룹채팅방 조용히 나가기";

export default {
  component: Chats,
  args: {
    methodId: 1,
    descriptionId: 0,
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

export const reserveMessage = {
  args: {
    functionName: functionName_reserveMessage,
  },
};
export const groubChatLeave_rejectInvitation = {
  args: {
    functionName: functionName_kakaotalk_groubChatLeave_rejectInvitation,
  },
};
export const groubChatLock = {
  args: {
    functionName: functionName_kakaotalk_groubChatLock,
  },
};
export const groubChatLeave_quietly = {
  args: {
    functionName: functionName_kakaotalk_groubChatLeave_quietly,
  },
};
