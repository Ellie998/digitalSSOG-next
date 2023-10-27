import CategoryName from ".";

export default {
  component: CategoryName,
};

export const Default = {
  args: {
    children: "🌱 카테고리 이름",

    tabName: "",
    name: "카테고리-이름",
    setTabName: () => {},
  },
};
export const Clicked = {
  args: {
    children: "🌱 카테고리 이름",

    tabName: "카테고리-이름",
    name: "카테고리-이름",
    setTabName: () => {},
  },
};
