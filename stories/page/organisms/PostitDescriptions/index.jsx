import styled from "@emotion/styled";
import Postit from "stories/page/molecules/Postit/index";

const Container = styled.ul`
  display: flex;
  justify-content: space-around;
  align-items: center;
  max-width: 900px;
  margin: 40px auto;

  @media (max-width: 900px) {
    flex-direction: column;
    margin: 0px auto;
    height: 650px;
  }
`;

// eslint-disable-next-line react/prop-types
const PostitDescriptions = () => {
  return (
    <Container>
      <Postit
        title={
          <>
            디지털쏙 페이지의 <br /> 핵심 포인트 1️⃣
          </>
        }
        content={"스마트 기기로 할 수 있는 기능들을 정리했습니다."}
      />
      <Postit
        title={
          <>
            디지털쏙 페이지의 <br /> 핵심 포인트 2️⃣
          </>
        }
        content={"화면을 직접 눌러보며 기능을 미리 경험할 수 있습니다."}
      />
    </Container>
  );
};

export default PostitDescriptions;
