"use client";
import PhoneBackground from "@/components/my-ui/phone-background";
import PhoneDisplay from "@/components/my-ui/phone-display";
import PhoneHeader from "@/components/my-ui/phone-header";
import PhoneNav from "@/components/my-ui/phone-nav";
import { useRecoilValue } from "recoil";
import { bgColorState } from "./atoms";

const ComponentPreview = () => {
  const bgColor = useRecoilValue(bgColorState);

  return (
    <PhoneBackground>
      <PhoneHeader backgroundColor={bgColor} />
      <PhoneDisplay
        backgroundColor={bgColor}
        main={undefined}
        children={undefined}></PhoneDisplay>
      <PhoneNav />
    </PhoneBackground>
  );
};

export default ComponentPreview;
