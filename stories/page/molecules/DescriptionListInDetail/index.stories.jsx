import DescriptionListInDetail from ".";

export default {
  component: DescriptionListInDetail,
};

export const Default = {
  args: {
    sm: false,
    open: false,
    summary: "summary 내용(해당 method의 appName)",
    dataName: "기본",
    data: {
      methodNum: 1,
      methodTitle: "",
      methodContent: [
        "전화가 걸려오면 통화 버튼을 스와이프한다.",
        "전화 연결 화면이 나오면 귀에 스피커를 가져다댄다.",
      ],
    },
  },
};
export const SmallVersion = {
  args: {
    sm: true,
    open: false,
    summary: "summary 내용(해당 method의 appName)",
    dataName: "기본",
    data: {
      methodNum: 1,
      methodTitle: "",
      methodContent: [
        "전화가 걸려오면 통화 버튼을 스와이프한다.",
        "전화 연결 화면이 나오면 귀에 스피커를 가져다댄다.",
      ],
    },
  },
};
