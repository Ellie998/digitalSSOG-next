import styled from "@emotion/styled";
import PostitMedium from "../PostitMedium/index";
import CategoryList from "../CategoryList/index";
import CategoryContentList from "../CategoryContentList/index";

const Container = styled.div`
  margin: 0 auto;

  max-width: 90%;
`;

// eslint-disable-next-line react/prop-types
const IndexFunctionsPostit = ({ setTabName, tabName }) => {
  return (
    <Container>
      <PostitMedium
        title={<CategoryList setTabName={setTabName} tabName={tabName} />}
        content={<CategoryContentList tabName={tabName} />}
      />
    </Container>
  );
};

export default IndexFunctionsPostit;
