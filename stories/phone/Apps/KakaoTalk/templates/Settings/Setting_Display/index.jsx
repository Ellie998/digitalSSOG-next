import styled from "@emotion/styled";
import BackBtn from "components/DisplayBox/AppDisplays/components/UI/BackBtn";
import Flex from "stories/phone/atoms/Flex/index";
import TargetBox from "stories/phone/atoms/TargetBox/index";

import Title from "stories/phone/atoms/Title/index";

import Phone from "stories/phone/molecules/Phone/index";
import StackedListWrap from "stories/phone/molecules/StackedListWrap/index";

const SettingTitle = styled.div`
  padding-left: 8px;
`;
const SettingContent = styled.div`
  padding-left: 8px;
  font-size: 12px;
  color: var(--gray-500);
`;

const Setting_Display = ({ target = { fontSize: false } }) => {
  return (
    <Phone>
      <Flex
        style={{ justifyContent: "left" }}
        items={[<BackBtn key="1" />, <Title key="2">화면</Title>]}
      />
      <TargetBox condition={target.fontSize}>
        <StackedListWrap style={{ border: "none", width: "170px" }}>
          <SettingTitle>글자 크기</SettingTitle>
          <SettingContent>15pt</SettingContent>
        </StackedListWrap>
      </TargetBox>
      <StackedListWrap style={{ border: "none", width: "170px" }}>
        <SettingTitle>배경 화면</SettingTitle>
        <Flex
          style={{ justifyContent: "left", paddingLeft: "8px" }}
          items={[
            <div
              style={{
                width: "12px",
                height: "20px",
                backgroundColor: "rgb(216, 236, 255)",
                borderRadius: "2px",
              }}
              key="1"></div>,
            <SettingContent key="2">색상</SettingContent>,
          ]}
        />
      </StackedListWrap>
      <StackedListWrap style={{ border: "none", width: "170px" }}>
        <SettingTitle>화면 방향</SettingTitle>
        <SettingContent>자동</SettingContent>
      </StackedListWrap>
    </Phone>
  );
};

export default Setting_Display;
