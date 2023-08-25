import AppLine from ".";

export default {
  component: AppLine,
};

export const Primary = {
  args: {
    appList: [
      { name: "telephone", targetOption: false },
      { name: "camera", targetOption: false },
      { name: "clock", targetOption: false },
      { name: "browser-chrome", targetOption: false },
      { name: "chat-dots", targetOption: true },
    ],
  },
};
