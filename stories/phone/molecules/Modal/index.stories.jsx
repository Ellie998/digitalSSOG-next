import Modal from ".";

export default {
  component: Modal,
};

export const Primary = {
  args: {
    style: {},
    onClickBackDrop: () => {},
    children: <div>modal content</div>,
    modalStyle: {},
  },
};
