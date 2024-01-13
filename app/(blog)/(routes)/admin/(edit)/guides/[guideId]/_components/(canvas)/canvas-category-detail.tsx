"use client";
import React from "react";

import { useRecoilValue } from "recoil";
import { canvasCategoryState, selectedElementState } from "./canvas-atom";
import DetailTheme from "./(category-details)/detail-theme";
import DetailBg from "./(category-details)/detail-bg";
import DetailText from "./(category-details)/detail-text";
import DetailNewElement from "./(category-details)/detail-new-element";
import DetailEditElement from "./(category-details)/detail-edit-element";

const CanvasCategoryDetail = () => {
  const canvasCategory = useRecoilValue(canvasCategoryState);
  const selectedElement = useRecoilValue(selectedElementState);

  switch (canvasCategory) {
    case "템플릿":
      return <></>;
      break;
    case "요소":
      return selectedElement === "" ? (
        <DetailNewElement />
      ) : (
        <DetailEditElement />
      );
      break;
    case "텍스트":
      return <DetailText />;
      break;
    case "배경":
      return <DetailBg />;
      break;
    case "테마":
      return <DetailTheme />;
      break;
    default:
      return <></>;
  }
};

export default CanvasCategoryDetail;
