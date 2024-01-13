/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */

import React from "react";

import ComponentPreview from "./canvas-preview";
import ComponentUiForm from "./component-ui-form";
import ComponentPreviewForm from "./component-preview-form";
import ComponentUiPreview from "./component-ui-preview";
import { uiMakingModeState } from "./atoms";
import { useRecoilValue } from "recoil";

const ComponentSection = ({
  guide_component_id,
}: {
  guide_component_id: string | null;
}) => {
  const uiMakingMode = useRecoilValue(uiMakingModeState);

  return (
    <div className={`grid ${uiMakingMode ? "grid-cols-3" : "grid-cols-2"}`}>
      <ComponentPreview />
      {uiMakingMode && <ComponentUiPreview />}
      {uiMakingMode ? (
        <ComponentUiForm id={guide_component_id || ""}></ComponentUiForm>
      ) : (
        <ComponentPreviewForm id={guide_component_id || ""} />
      )}
    </div>
  );
};

export default ComponentSection;
