import ProfileIcon from ".";

export default {
  component: ProfileIcon,
};

export const Default = {
  args: {
    id: "",
    name: "chat-fill",
    targetOption: false,
    children: "",
  },
};
export const Target = {
  args: {
    id: "",
    name: "chat-fill",
    targetOption: true,
    children: "",
  },
};
export const Content = {
  args: {
    id: "",
    name: "",
    targetOption: true,
    children: "홍",
  },
};
