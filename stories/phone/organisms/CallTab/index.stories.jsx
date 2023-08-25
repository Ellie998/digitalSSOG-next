import CallTab from ".";

export default {
  component: CallTab,
};

export const Default = {
  args: {},
};
export const 키패드Tab = {
  args: { targetTab: "키패드", clickedTapName: "키패드" },
};
export const 연락처Tab = {
  args: { targetTab: "연락처", clickedTapName: "연락처" },
};
export const 최근기록Tab = {
  args: { targetTab: "최근기록", clickedTapName: "최근기록" },
};
