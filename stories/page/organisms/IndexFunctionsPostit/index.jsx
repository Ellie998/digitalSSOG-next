import styled from "@emotion/styled";

const Container = styled.div`
  margin: 0 auto;

  max-width: 90%;
`;

import CategoryContentList from "stories/page/organisms/CategoryContentList";
import CategoryList from "stories/page/organisms/CategoryList";
import PostitMedium from "stories/page/molecules/PostitMedium";

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
