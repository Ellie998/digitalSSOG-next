import BackBtn from "components/DisplayBox/AppDisplays/components/UI/BackBtn";
import { useEffect } from "react";

import Input_TextLength from "stories/phone/Apps/KakaoTalk/atoms/Input_TextLength/index";
import Flex from "stories/phone/atoms/Flex/index";
import TargetBox from "stories/phone/atoms/TargetBox/index";
import Phone from "stories/phone/molecules/Phone/index";

const Setting_ProfileName = ({
  content = { title: "이름", name: "영희", setName: () => {} },
}) => {
  useEffect(() => {
    content.title === "이름" && content.setName && content.setName("영희");
    content.title === "채팅방 이름" &&
      content.setName &&
      content.setName("그룹채팅방1");
  }, []);
  return (
    <Phone>
      <Flex
        style={{ fontWeight: "bold", fontSize: "0.9rem", marginBottom: "20px" }}
        items={[
          <div key="1" style={{ display: "flex" }}>
            <BackBtn key="back_btn" />
            <div key="header_title">{content.title}</div>
          </div>,
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
