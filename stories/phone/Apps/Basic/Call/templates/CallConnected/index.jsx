/* eslint-disable react/prop-types */
import styled from "@emotion/styled";
import { useState } from "react";

import Phone from "stories/phone/molecules/Phone";
import FlexInFlex from "stories/phone/atoms/FlexInFlex";
import Top from "stories/phone/atoms/Top";
import IconBottom from "stories/phone/molecules/IconBottom";
import Icon from "stories/phone/atoms/Icon";

const Container = styled.div`
  text-align: center;
`;

const IconsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  border-radius: 10px;
  padding: 10px;
  margin-top: 30px;
  margin-left: 10px;
  margin-right: 10px;
  background-color: rgba(222, 222, 222, 0.428);
`;

const BtnContainer = styled.div`
  grid-column: 1 / 4;
  background-color: red;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 30px;
  margin: 0 auto;
`;

const CallConnected = () => {
  const [time, setTime] = useState(0);

  const timer = setTimeout(() => {
    setTime(time + 1);
  }, 1000);
  if (time === 9) clearTimeout(timer);

  const iconContents = [
    { name: "mic-mute-fill", description: "음소거" },
    { name: "volume-up-fill", description: "스피커" },
    { name: "filter", description: "음성필터" },
    { name: "plus-lg", description: "대화상대 초대" },
    { name: "arrows-angle-contract", description: "화면 숨김" },
    { name: "camera-video-fill", description: "페이스톡" },
  ];

  return (
    <Phone>
      <Container>
        <FlexInFlex
          rightItem={["..."]}
          style={{
            fontSize: "1.25rem",
            fontWeight: "700",
            paddingRight: "1rem",
          }}
        />
        <Top
          title={{
            content: "010-0000-0000",
            style: { fontSize: "0.875rem" },
          }}
        />
        <IconsContainer>
          {iconContents?.map((content, i) => (
            <IconBottom
              key={i}
              style={{ margin: "5px", fontSize: "0.6rem" }}
              icon={{ name: content.name }}
              description={{ content: content.description }}
            />
          ))}
          <BtnContainer>
            <Icon
              name="telephone-x-fill"
              style={{
                color: "white",
                fontSize: "1rem",
              }}
            />
          </BtnContainer>
        </IconsContainer>
      </Container>
    </Phone>
  );
};

export default CallConnected;
