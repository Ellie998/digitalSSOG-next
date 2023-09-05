/* eslint-disable react/prop-types */
import styled from "@emotion/styled";

import H2 from "stories/page/atoms/H2/index";
import FunctionIntroBoxList from "stories/page/organisms/FunctionIntroBoxList/index";

const Container = styled.section`
  width: 80%;
  margin: 8rem auto 14rem auto;
  text-align: center;

  @media (max-width: 850px) {
    margin: 4rem auto 6rem auto;
  }

  @media (max-width: 800px) {
    padding: 3rem 0;
  }
`;

// eslint-disable-next-line react/prop-types
const FunctionIntro = ({
  detailFunctionObject,
  setMyAppName,
  setMyMethodId,
  setMyDescriptionId,
}) => {
  return (
    <Container>
      <H2>
        <b>{detailFunctionObject.name}</b> 기능 소개
      </H2>
      <FunctionIntroBoxList
        char={detailFunctionObject.characteristic}
        app={detailFunctionObject.app}
        setMyAppName={setMyAppName}
        setMyMethodId={setMyMethodId}
        setMyDescriptionId={setMyDescriptionId}
      />
    </Container>
  );
};

export default FunctionIntro;
