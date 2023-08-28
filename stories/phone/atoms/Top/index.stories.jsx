import AnswerCall from ".";

export default {
  component: AnswerCall,
};

export const 기본App = {
  args: { appName_basic: true, appName_kakaotalk: false },
};
export const 카카오톡App = {
  args: { appName_basic: false, appName_kakaotalk: true },
};
