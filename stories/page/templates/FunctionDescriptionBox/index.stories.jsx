import FunctionDescriptionBox from ".";

export default {
  component: FunctionDescriptionBox,
};

export const Primary = {
  args: {
    functionMethods: [
      {
        methodAppName: "기본",
        howto: [
          {
            methodNum: 1,
            methodTitle: "메시지 어플에서 메시지 보내기",
            methodContent: [
              "메시지 어플을 터치한다.",
              "메시지 작성 아이콘을 터치한 후, 1:1 대화 아이콘을 터치한다.",
              "저장된 연락처 중에서 메시지를 보내려는 사람을 클릭한다.",
              "메시지를 작성하고, 작성 후에는 전송 버튼을 누른다. 전송한 메시지와 전송된 시간이 우측에 표시되면 메시지 전송 성공!",
            ],
          },
          {
            methodNum: 2,
            methodTitle: "수신된 메시지를 통해 메시지 보내기",
            methodContent: [
              "메시지 어플을 터치한다.",
              "메시지 목록 중에서 메시지를 보내려는 사람의 메시지를 터치한다.",
              "메시지를 작성하고, 작성 후에는 전송 버튼을 누른다. 전송한 메시지와 전송된 시간이 우측에 표시되면 메시지 전송 성공!",
            ],
          },
        ],
      },
    ],
  },
};
