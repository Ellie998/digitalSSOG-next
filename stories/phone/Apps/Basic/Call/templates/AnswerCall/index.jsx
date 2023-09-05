/* eslint-disable react/prop-types */
import styled from "@emotion/styled";

import TargetContent from "components/DisplayBox/AppDisplays/components/TargetContent";

import Top from "stories/phone/atoms/Top";
import Phone from "stories/phone/molecules/Phone";
import Icon from "stories/phone/atoms/Icon";

const Container = styled.div`
  text-align: center;
`;
const BtnContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 100px;
`;
const OptionContainer = styled.div`
  margin-top: 20px;
  color: #232323;
  font-size: 0.8rem;
`;
const AnswerCall = ({ appName_basic, appName_kakaotalk }) => {
  return (
    <Phone>
      {appName_basic && (
        <Container>
          <Top
            style={{ marginTop: "40px" }}
            title={{ content: "홍길동" }}
            subTitle={{ content: "010-0000-0000" }}
          />
          <BtnContainer>
            <TargetContent targetOption={true} isNextDescriptionLink={true}>
              <Icon
                name="telephone-fill"
                style={{
                  color: "rgb(37 99 235)",
                  width: "40px",
                  height: "40px",
                  boxShadow: "0 0px 10px rgb(0 0 0 / 0.2)",
                }}
              />
            </TargetContent>
            <Icon
              name="telephone-x-fill"
              style={{
                color: "rgb(220 38 38)",
                width: "40px",
                height: "40px",
                boxShadow: "0 0px 10px rgb(0 0 0 / 0.2)",
              }}
            />
          </BtnContainer>
          <OptionContainer>문자 보내기</OptionContainer>
        </Container>
      )}
      {appName_kakaotalk && (
        <Container>
          <Top
            style={{ marginTop: "40px" }}
            title={{ content: "철수" }}
            subTitle={{ content: "보이스톡 해요." }}
            childrenTop={
              <Icon
                name="person-fill"
                style={{
                  backgroundColor: "#92caff8a",
                  borderRadius: "16px",
                  color: "#e5f5ff",
                  fontSize: "1.5rem",
                  width: "40px",
                  height: "40px",
                  boxShadow: "0 0px 2px rgb(0 0 0 / 0.1)",
                  margin: "0 auto",
                }}
              />
            }></Top>

          <BtnContainer>
            <Icon
              name="telephone-fill"
              style={{
                color: "rgb(220 38 38)",
                width: "40px",
                height: "40px",
                boxShadow: "0 0px 10px rgb(0 0 0 / 0.2)",
              }}
            />

            <TargetContent targetOption={true} isNextDescriptionLink={true}>
              <Icon
                name="telephone-fill"
                style={{
                  color: "rgb(37 99 235)",
                  width: "40px",
                  height: "40px",
                  boxShadow: "0 0px 10px rgb(0 0 0 / 0.2)",
                }}
              />
            </TargetContent>
          </BtnContainer>
        </Container>
      )}
    </Phone>
  );
};

export default AnswerCall;
