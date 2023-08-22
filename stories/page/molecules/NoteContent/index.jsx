import styled from "@emotion/styled";
import H2 from "stories/page/atoms/H2";

import SubTitle from "stories/page/atoms/SubTitle";

const Container = styled.div`
  padding-top: 50px;
  text-align: center;
  min-height: ${(props) => (props.height ? props.height : "800px")};
  word-break: keep-all;
`;

const NoteInfoContainer = styled.div`
  margin: 0 auto;
`;
const ChildrenContainer = styled.div`
  margin-top: 30px;
`;

// eslint-disable-next-line react/prop-types
const NoteContent = ({ height, children, title, subTitle }) => {
  return (
    <Container height={height}>
      <NoteInfoContainer>
        <H2>{title ? title : null}</H2>
        <SubTitle>{subTitle ? subTitle : null}</SubTitle>
      </NoteInfoContainer>
      <ChildrenContainer>{children}</ChildrenContainer>
    </Container>
  );
};

export default NoteContent;
