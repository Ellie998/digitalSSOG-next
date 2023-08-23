import CategoryList from ".";

export default {
  component: CategoryList,
};

export const Default = {
  args: { char: "" },
};
export const MoreThanTwoCharacteristics = {
  args: { char: ["특징 1", "특징 2"] },
};
export const OneOfCharacteristic = {
  args: { char: "특징 1" },
};
