import FunctionIntroBoxList from ".";

export default {
  component: FunctionIntroBoxList,
};

export const Default = {
  args: { char: "", app: [""] },
};
export const OneOfCharAndApp = {
  args: { char: "특징 1", app: ["앱 이름 1"] },
};
export const MoreThanTwoCharsAndApps = {
  args: {
    char: ["특징 1", "특징 2"],
    app: ["앱 이름 1", "앱 이름 2"],
  },
};
