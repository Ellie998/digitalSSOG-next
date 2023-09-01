import Calls from ".";

const functionName_makeCall = "전화걸기(발신)";

export default {
  component: Calls,
  args: {
    methodId: 1,
    descriptionId: 0,
  },
  argTypes: {
    myMethodId: {
      options: [1, 2, 3],
      control: { type: "radio" },
    },
    descriptionId: {
      options: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
      control: { type: "radio" },
    },
  },
};
export const MakeCall = {
  args: {
    functionName: functionName_makeCall,
  },
};
