import BackBtn from "components/DisplayBox/AppDisplays/components/UI/BackBtn";
import { useEffect } from "react";

import Input_TextLength from "stories/phone/Apps/KakaoTalk/atoms/Input_TextLength/index";
import FlexInFlex from "stories/phone/atoms/FlexInFlex/index";
import TargetBox from "stories/phone/atoms/TargetBox/index";
import Phone from "stories/phone/molecules/Phone/index";

const Setting_ProfileName = ({
  content = { name: "영희", setName: () => {} },
}) => {
  useEffect(() => {
    content.setName && content.setName("영희");
  }, []);
  return (
    <Phone>
      <FlexInFlex
        style={{ fontWeight: "bold", fontSize: "0.9rem", marginBottom: "20px" }}
        leftItem={[
          <BackBtn key="back_btn" />,
          <div key="header_title">이름</div>,
        ]}
        rightItem={[
          <TargetBox key="submit_btn" condition={content.name.length !== 0}>
            확인
          </TargetBox>,
        ]}
      />
      <Input_TextLength
        style={{ width: "160px", margin: "0 auto" }}
        placeholder={content.name}
        text={content.name}
        setText={content.setName}
      />
    </Phone>
  );
};

export default Setting_ProfileName;
