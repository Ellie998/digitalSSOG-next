import { atom } from "recoil";

export const canvasCategoryState = atom({
  key: "canvasCategory",
  default: "템플릿",
});
export const elementsState = atom<Array<{ type: string; style: string }>>({
  key: "elements",
  default: [],
});
//
export const bgColorState = atom({
  key: "bgColor",
  default: "#ffffff",
});

///
export const uiMakingModeState = atom({
  key: "uiMakingMode", // unique ID (with respect to other atoms/selectors)
  default: false, // default value (aka initial value)
});
export const uiTypeState = atom({
  key: "uiType",
  default: "",
});
export const uiThemeChoiceModeState = atom({
  key: "uiThemeChoiceMode",
  default: false,
});

export const uiThemeState = atom({
  key: "uiTheme",
  default: "",
});
///
export const iconNameState = atom({
  key: "iconName",
  default: "",
});
export const uiBgColorState = atom({
  key: "uiBgColor",
  default: "#ffffff",
});
export const uiColorState = atom({
  key: "uiColor",
  default: "#000000",
});
