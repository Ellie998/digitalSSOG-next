import styled from "@emotion/styled";
import IndexFunctionsPostit from "stories/page/organisms/IndexFunctionsPostit";
import Note from "stories/page/molecules/Note";

const Container = styled.section`
  margin: 0 auto;
  max-width: 800px;
`;

// eslint-disable-next-line react/prop-types, no-unused-vars
const IndexFunntionNote = ({ tabName, setTabName }) => {
  return (
    <Container>
      <Note
        title={"스마트 기기로 사용 가능한 기능들"}
        subTitle={
          "카테고리를 누르면 카테고리에 속하는 기능들을 볼 수 있습니다."
        }
        holeNum={17}>
        <IndexFunctionsPostit tabName={tabName} setTabName={setTabName} />
      </Note>
    </Container>
  );
};

export default IndexFunntionNote;
