import styled from "@emotion/styled";

/* eslint-disable react/prop-types */
import FunctionIntroAppBox from "stories/page/organisms/FunctionIntroAppBox/index";
import FunctionIntroCharBox from "stories/page/organisms/FunctionIntroCharBox/index";

const Container = styled.ul`
  margin: 2rem auto;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;

  @media (max-width: 800px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

// eslint-disable-next-line react/prop-types, no-unused-vars
const FunctionIntroBoxList = ({
  char,
  app,
  setMyAppName,
  setMyMethodId,
  setMyDescriptionId,
}) => {
  return (
    <Container>
      <FunctionIntroCharBox char={char} />
      <FunctionIntroAppBox
        app={app}
        setMyAppName={setMyAppName}
        setMyMethodId={setMyMethodId}
        setMyDescriptionId={setMyDescriptionId}
      />
    </Container>
  );
};

export default FunctionIntroBoxList;
