/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import { createContext, useState } from "react";

import ComponentPreview from "./component-preview";
import ComponentUiForm from "./component-ui-form";
import ComponentPreviewForm from "./component-preview-form";

export const DisplayContext = createContext({
  bgColor: "",
  setBgColor: (e: any) => {},
  uiBgColor: "",
  setUiBgColor: (e: any) => {},
  uiMakingMode: false,
  setUiMakingMode: (e: any) => {},
  uiThemeChoiceMode: false,
  setUiThemeChoiceMode: (e: any) => {},
});

const ComponentSection = ({
  guide_component_id,
}: {
  guide_component_id: string | null;
}) => {
  const [bgColor, setBgColor] = useState("#ffffff");
  const [uiBgColor, setUiBgColor] = useState("#ffffff");
  const [uiMakingMode, setUiMakingMode] = useState(false);
  const [uiThemeChoiceMode, setUiThemeChoiceMode] = useState(false);

  return (
    <DisplayContext.Provider
      value={{
        bgColor,
        setBgColor,
        uiBgColor,
        setUiBgColor,
        uiMakingMode,
        setUiMakingMode,
        uiThemeChoiceMode,
        setUiThemeChoiceMode,
      }}>
      <div className={`grid ${uiMakingMode ? "grid-cols-3" : "grid-cols-2"}`}>
        <ComponentPreview />
        {uiMakingMode && <div>UI</div>}
        {uiMakingMode ? (
          <ComponentUiForm id={guide_component_id || ""}></ComponentUiForm>
        ) : (
          <ComponentPreviewForm id={guide_component_id || ""} />
        )}
      </div>
    </DisplayContext.Provider>
  );
};

export default ComponentSection;
