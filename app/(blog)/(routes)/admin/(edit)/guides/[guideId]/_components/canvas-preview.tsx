"use client";
import PhoneBackground from "@/components/my-ui/phone-background";
import PhoneDisplay from "@/components/my-ui/phone-display";
import PhoneHeader from "@/components/my-ui/phone-header";
import PhoneNav from "@/components/my-ui/phone-nav";
import { useRecoilValue } from "recoil";
import { bgColorState } from "./atoms";
import { elementsState } from "./(canvas)/canvas-atom";

const CanvasPreview = () => {
  const bgColor = useRecoilValue(bgColorState);
  const elements = useRecoilValue(elementsState);

  return (
    <PhoneBackground>
      <PhoneHeader backgroundColor={bgColor} />
      <PhoneDisplay backgroundColor={bgColor} main={undefined}>
        {elements.map((element) => (
          <div>{element.type}</div>
        ))}
      </PhoneDisplay>
      <PhoneNav />
    </PhoneBackground>
  );
};

export default CanvasPreview;
