import StackedListWrap from ".";

export default {
  component: StackedListWrap,
};

export const Default = {
  args: {
    listTitle: { content: "list title" },
    children: (
      <div>
        <div>Stacked List Element1</div>
        <div>Stacked List Element2</div>
        <div>Stacked List Element3</div>
      </div>
    ),
    style: {},
  },
};
