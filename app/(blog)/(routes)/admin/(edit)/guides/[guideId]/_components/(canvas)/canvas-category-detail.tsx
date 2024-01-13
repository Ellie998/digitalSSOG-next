"use client";
import React from "react";

import { useRecoilValue } from "recoil";
import { canvasCategoryState } from "./canvas-atom";

const CanvasCategoryDetail = () => {
  const canvasCategory = useRecoilValue(canvasCategoryState);

  return <>{canvasCategory}</>;
};

export default CanvasCategoryDetail;
