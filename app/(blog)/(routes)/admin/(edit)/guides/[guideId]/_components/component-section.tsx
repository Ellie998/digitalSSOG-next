"use client";
import { createContext, useState } from "react";

import ComponentPreview from "./component-preview";
import ComponentForm from "./component-form";

export const DisplayContext = createContext({
  bgColor: "",
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-unused-vars
  setBgColor: (e: any) => {},
});

const ComponentSection = ({
  guide_component_id,
}: {
  guide_component_id: string | null;
}) => {
  const [bgColor, setBgColor] = useState("");
  return (
    <DisplayContext.Provider
      value={{
        bgColor,
        setBgColor: (e) => {
          setBgColor(e.target.value);
        },
      }}>
      <div className="grid grid-cols-2">
        <ComponentPreview />
        <ComponentForm id={guide_component_id || ""} />
      </div>
    </DisplayContext.Provider>
  );
};

export default ComponentSection;
