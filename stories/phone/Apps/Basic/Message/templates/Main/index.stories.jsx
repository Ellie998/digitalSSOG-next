import Main from ".";

export default {
  component: Main,
};

export const Default = {
  args: {
    target_sendMessage: false,
    target_seeMessage: false,
    target_unreadMessage: false,
  },
};

export const send = {
  args: {
    target_sendMessage: true,
    target_seeMessage: false,
    target_unreadMessage: false,
  },
};
export const see = {
  args: {
    target_sendMessage: false,
    target_seeMessage: true,
    target_unreadMessage: false,
  },
};
export const unreadMessage = {
  args: {
    target_sendMessage: false,
    target_seeMessage: false,
    target_unreadMessage: true,
  },
};
