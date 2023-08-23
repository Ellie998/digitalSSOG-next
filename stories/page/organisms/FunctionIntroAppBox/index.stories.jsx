import FunctionIntroAppBox from ".";

export default {
  component: FunctionIntroAppBox,
};

export const Default = {
  args: { app: [""] },
};
export const OneOfApp = {
  args: { app: ["앱 이름 1"] },
};
export const MoreThanTwoApps = {
  args: { app: ["앱 이름 1", "앱 이름 2"] },
};
