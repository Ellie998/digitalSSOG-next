import styled from "@emotion/styled";
import BackBtn from "components/DisplayBox/AppDisplays/components/UI/BackBtn";
import ChatList from "components/DisplayBox/AppDisplays/components/UI/ChatList";
import Flex from "stories/phone/atoms/Flex/index";
import Icon from "stories/phone/atoms/Icon/index";

import Title from "stories/phone/atoms/Title/index";

import Phone from "stories/phone/molecules/Phone/index";
import ScrollController from "../../../atoms/ScrollController/index";
import { useState } from "react";

const SampleContainer = styled.div`
  width: 100%;
  height: 150px;
  background-color: var(--kakao-blue);
  padding-top: 30px;
`;

const FontSizeControllerContainer = styled.div`
  width: 100%;
  height: 40px;
  padding: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Setting_FontSize = () => {
  const [position, setPosition] = useState(2);

  return (
    <Phone>
      <Flex
        style={{ justifyContent: "left" }}
        items={[<BackBtn key="1" />, <Title key="2">글자 크기</Title>]}
      />
      <SampleContainer>
        <ChatList
          isGetList={true}
          className=""
          profile={{
            className: "bg-kakaoPurple",
            content: (
              <Icon name="person-fill" style={{ color: "white" }}></Icon>
            ),
          }}
          name={{ content: "진수", className: "" }}
          message={{
            className: "bg-white",
            content: "안녕하세요",
          }}
          timeStamp={{
            className: "",
            content: "",
          }}
        />
        <ChatList
          isGetList={true}
          profile={{
            content: <></>,
          }}
          name={{ content: "", className: "" }}
          message={{
            className: "bg-white",
            content: "Hello",
          }}
          timeStamp={{
            className: "",
            content: "오전 9:00",
          }}
        />
      </SampleContainer>
      <FontSizeControllerContainer>
        <div style={{ fontSize: "10px" }}>가</div>
        <ScrollController
          position={position}
          setPosition={setPosition}></ScrollController>
        <div style={{ fontSize: "18px" }}>가</div>
      </FontSizeControllerContainer>
    </Phone>
  );
};

export default Setting_FontSize;
