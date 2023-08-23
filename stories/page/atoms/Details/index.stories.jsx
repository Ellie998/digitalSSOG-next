import Details from ".";

export default {
  component: Details,
};

export const Default = {
  args: {
    children: "details element의 children(summary를 누르면 등장할 내용)",
    open,
    summary: "details element의 summary 내용",
    sm: false,
  },
};
export const Small = {
  args: {
    children: "details element의 children(summary를 누르면 등장할 내용)",
    open: () => {},
    summary: "details element의 summary 내용",
    sm: true,
  },
};
