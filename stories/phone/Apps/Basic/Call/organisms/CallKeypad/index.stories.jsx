import CallKeypad from ".";

export default {
  component: CallKeypad,
};

export const Default = {
  args: { button1: { targetOption: false }, button2: { targetOption: false } },
};
export const TargetCallBtn = {
  args: { button1: { targetOption: false }, button2: { targetOption: true } },
};
export const TargetCallVideoBtn = {
  args: { button1: { targetOption: true }, button2: { targetOption: false } },
};
