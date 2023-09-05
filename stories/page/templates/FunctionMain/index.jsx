/* eslint-disable react/prop-types */
import styled from "@emotion/styled";

// import DisplayBox from "components/DisplayBox/DisplayBox";
import DisplayBox from "stories/phone/templates/DisplayBox/index";
import IconTextLine from "stories/page/molecules/IconTextLine/index";
import H1 from "stories/page/atoms/H1/index";
import FunctionDescriptionBox from "stories/page/templates/FunctionDescriptionBox/index";

const Container = styled.section`
  padding: 6rem 0 6rem 10%;
  width: 80%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;

  @media (max-width: 1000px) {
    padding-left: 5%;
  }

  @media (max-width: 850px) {
    width: 80%;
    padding-left: 0;
  }

  @media (max-width: 650px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;

const DisplayContainer = styled.div`
  margin: 0 auto;
`;
const H1Container = styled.div`
  grid-column: 1 / 3;
  text-align: center;
  padding: 0.5rem 0;
`;

// eslint-disable-next-line react/prop-types
const FunctionMain = ({ detailFunctionObject }) => {
  return (
    <Container>
      <H1Container>
        <H1>
          <b>{detailFunctionObject.name}</b> 기능 실행 방법
        </H1>
      </H1Container>

      <FunctionDescriptionBox functionMethods={detailFunctionObject.method} />
      <DisplayContainer>
        <IconTextLine
          icon={"❗️"}
          fontSize={"0.875rem"}
          color={"rgb(156 163 175 /1)"}
          width={"14rem"}
          hover={"color: rgb(17 24 39 /1)"}>
          학습에 도움을 드리기 위해 실제 스마트폰의 모습을 본따 만든 화면입니다.
        </IconTextLine>
        <IconTextLine
          icon={"❗️"}
          fontSize={"0.875rem"}
          color={"rgb(156 163 175 /1)"}
          width={"14rem"}
          hover={"color: rgb(17 24 39 /1)"}>
          스마트폰 기종에 따라 화면 모습에 차이가 있을 수 있습니다.
        </IconTextLine>

        <DisplayBox></DisplayBox>
      </DisplayContainer>
    </Container>
  );
};

export default FunctionMain;
