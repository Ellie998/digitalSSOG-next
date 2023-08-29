import Main from ".";

export default {
  component: Main,
};

export const Default = {
  args: {},
};
export const Target키패드Tab = {
  args: { targetTab: "키패드" },
};
export const Target연락처Tab = {
  args: { targetTab: "연락처" },
};
export const Target최근기록Tab = {
  args: { targetTab: "최근기록" },
};
export const target_videoCall = {
  args: { target_videoCall: true, targetTab: "키패드" },
};
export const target_Call = {
  args: { target_Call: true, targetTab: "키패드" },
};
