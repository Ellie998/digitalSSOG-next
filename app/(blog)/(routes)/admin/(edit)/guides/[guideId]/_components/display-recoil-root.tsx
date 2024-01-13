/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import React from "react";
import { RecoilRoot } from "recoil";
import ComponentSection from "./component-section";

const DisplayRecoilRoot = ({
  guide_component_id,
}: {
  guide_component_id: string | null;
}) => {
  return (
    <RecoilRoot>
      <ComponentSection guide_component_id={guide_component_id} />
    </RecoilRoot>
  );
};

export default DisplayRecoilRoot;
