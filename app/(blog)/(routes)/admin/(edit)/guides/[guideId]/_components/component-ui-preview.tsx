"use client";
import PhoneBackground from "@/components/my-ui/phone-background";
import PhoneDisplay from "@/components/my-ui/phone-display";
import PhoneHeader from "@/components/my-ui/phone-header";
import PhoneNav from "@/components/my-ui/phone-nav";
import Icon from "@/components/phone-ui/icon";
import { useRecoilValue } from "recoil";
import {
  iconNameState,
  uiBgColorState,
  uiColorState,
  uiTypeState,
} from "./atoms";

const ComponentUiPreview = () => {
  const uiColor = useRecoilValue(uiColorState);
  const uiBgColor = useRecoilValue(uiBgColorState);
  const uiType = useRecoilValue(uiTypeState);
  const iconName = useRecoilValue(iconNameState);

  return (
    <PhoneBackground>
      <PhoneHeader backgroundColor={undefined} />
      <PhoneDisplay backgroundColor={undefined} main={undefined}>
        {uiType === "icon" && (
          <Icon
            className={` text-sm p-[2px] bg-[${uiBgColor}] text-[${uiColor}]`}
            name={iconName}
            id={undefined}
            content={undefined}
            onClick={undefined} // style={{
            //   fontSize: "0.875rem",
            //   padding: "2px",
            //   backgroundColor: uiBgColor,
            //   color: uiColor,
            // }}
          />
        )}
      </PhoneDisplay>
      <PhoneNav />
    </PhoneBackground>
  );
};

export default ComponentUiPreview;
