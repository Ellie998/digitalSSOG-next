import Main from ".";

export default {
  component: Main,
};

export const Default = {
  args: {
    items: [{ id: "키패드" }, { id: "연락처" }, { id: "최근기록" }],
    styles: "",
    setClickedTab: () => {},
    targetTab: "",
    clickedTab: "",
    clickedColor: "",
    clickEvent: "",
  },
};
export const UnderBarEvent = {
  args: {
    items: [
      { id: "키패드", clicked: "키패드 클릭됨" },
      { id: "연락처" },
      { id: "최근기록" },
    ],
    styles: "",
    setClickedTab: () => {},
    targetTab: "키패드",
    clickedTab: "키패드",
    clickedColor: "rgb(22, 163, 74)",
    clickEvent: "underBar",
  },
};
