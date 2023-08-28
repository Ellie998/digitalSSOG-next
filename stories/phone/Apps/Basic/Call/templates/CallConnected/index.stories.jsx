import CallConnected from ".";

export default {
  component: CallConnected,
};

export const 기본App = {
  args: { appName_basic: true, appName_kakaotalk: false },
};
export const 카카오톡App = {
  args: { appName_basic: false, appName_kakaotalk: true },
};
