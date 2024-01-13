import { atom } from "recoil";

export const canvasCategoryState = atom({
  key: "canvasCategory",
  default: "템플릿",
});
export const elementsState = atom<Array<{ type: string; style: string }>>({
  key: "elements",
  default: [],
});
export const selectedElementState = atom({
  key: "selectedElement",
  default: "",
});

//
