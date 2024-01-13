/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import React from "react";
import { RecoilRoot } from "recoil";
// import ComponentSection from "./component-section";

import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import ComponentPreview from "./component-preview";
import {
  BsBack,
  BsBox,
  BsFillGrid1X2Fill,
  BsFillPaletteFill,
  BsTextCenter,
} from "react-icons/bs";
import CanvasCategories from "./(canvas)/canvas-categories";
import CanvasCategoryDetail from "./(canvas)/canvas-category-detail";

const DisplayRecoilRoot = ({
  guide_component_id,
}: {
  guide_component_id: string | null;
}) => {
  return (
    <RecoilRoot>
      {/* <ComponentSection guide_component_id={guide_component_id} /> */}
      <ResizablePanelGroup
        direction="horizontal"
        className="min-h-[500px] border ">
        <ResizablePanel>
          <>
            <div className="absolute z-10 flex flex-col w-16 border-r min-h-[500px] justify-around items-center  bg-slate-50">
              <CanvasCategories />
            </div>
            <div className="pl-16 ">
              <CanvasCategoryDetail />
            </div>
          </>
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel className="p-8">
          <ComponentPreview />
        </ResizablePanel>
      </ResizablePanelGroup>
    </RecoilRoot>
  );
};

export default DisplayRecoilRoot;
