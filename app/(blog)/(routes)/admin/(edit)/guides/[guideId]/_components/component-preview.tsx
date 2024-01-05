"use client";
import PhoneBackground from "@/components/my-ui/phone-background";
import PhoneDisplay from "@/components/my-ui/phone-display";
import PhoneHeader from "@/components/my-ui/phone-header";
import PhoneNav from "@/components/my-ui/phone-nav";
import Icon from "@/components/phone-ui/icon";
import { useContext } from "react";
import { DisplayContext } from "./component-section";

const ComponentPreview = () => {
  const { bgColor } = useContext(DisplayContext);

  return (
    <PhoneBackground>
      <PhoneHeader backgroundColor={bgColor} />
      <PhoneDisplay backgroundColor={bgColor} main={undefined}>
        <Icon name={"people"} />
      </PhoneDisplay>
      <PhoneNav />
    </PhoneBackground>
  );
};

export default ComponentPreview;
