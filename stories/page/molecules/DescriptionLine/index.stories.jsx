import DescriptionLine from ".";

export default {
  component: DescriptionLine,
};

export const Default = {
  args: {
    children: "기능을 설명 할 내용을 작성한다.",
    isBold: false,
    order: 0,
    onClick: () => {},
  },
};
export const BoldVersion = {
  args: {
    children: "기능을 설명 할 내용을 작성한다.",
    isBold: true,
    order: 0,
    onClick: () => {},
  },
};
