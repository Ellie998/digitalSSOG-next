"use client";
import PhoneBackground from "@/components/my-ui/phone-background";
import PhoneDisplay from "@/components/my-ui/phone-display";
import PhoneHeader from "@/components/my-ui/phone-header";
import PhoneNav from "@/components/my-ui/phone-nav";
import { useRecoilValue } from "recoil";
import { bgColorState } from "./atoms";
import { elementsState } from "./(canvas)/canvas-atom";
import { cn } from "@/lib/utils";

const CanvasPreview = () => {
  const bgColor = useRecoilValue(bgColorState);
  const elements = useRecoilValue(elementsState);
  // type : icon,

  return (
    <PhoneBackground>
      <PhoneHeader backgroundColor={bgColor} />
      <PhoneDisplay backgroundColor={bgColor} main={undefined}>
        {elements.map((element, i) => (
          <div
            className={cn("cursor-pointer", element.style)}
            key={element.type + i}
            draggable>
            {element.type}
            {element.style}
          </div>
        ))}
      </PhoneDisplay>
      <PhoneNav />
    </PhoneBackground>
  );
};

export default CanvasPreview;
