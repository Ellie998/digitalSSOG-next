"use client";
import PhoneBackground from "@/components/my-ui/phone-background";
import PhoneDisplay from "@/components/my-ui/phone-display";
import PhoneHeader from "@/components/my-ui/phone-header";
import PhoneNav from "@/components/my-ui/phone-nav";
import Icon from "@/components/phone-ui/icon";
import { useRecoilValue } from "recoil";
import { iconNameState, uiBgColorState, uiTypeState } from "./atoms";

const ComponentUiPreview = () => {
  const uiBgColor = useRecoilValue(uiBgColorState);
  const uiType = useRecoilValue(uiTypeState);
  const iconName = useRecoilValue(iconNameState);

  return (
    <PhoneBackground>
      <PhoneHeader backgroundColor={undefined} />
      <PhoneDisplay backgroundColor={undefined} main={undefined}>
        {uiType === "icon" && (
          <Icon
            name={iconName}
            style={{
              fontSize: "0.875rem",
              padding: "2px",
              backgroundColor: uiBgColor,
            }}
          />
        )}
      </PhoneDisplay>
      <PhoneNav />
    </PhoneBackground>
  );
};

export default ComponentUiPreview;
