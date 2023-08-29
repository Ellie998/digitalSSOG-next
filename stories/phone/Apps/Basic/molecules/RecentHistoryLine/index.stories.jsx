import RecentHistoryLine from ".";

export default {
  component: RecentHistoryLine,
};

export const Default = {
  args: {
    profile: { name: "clock", style: {} },
    title: { content: "title" },
    info: { content: "info" },
    onClick: () => {},
    children: "",
  },
};
