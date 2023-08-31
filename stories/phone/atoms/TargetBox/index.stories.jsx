import TargetBox from ".";

export default {
  component: TargetBox,
};

export const Default = {
  args: {
    style: { width: "fit-content" },
    onClick: () => {},
    condition: true,
    isNextTriger: true,
    isBackTriger: false,
    children: <div>Target Content</div>,
  },
};
