/* eslint-disable react/prop-types */
import styled from "@emotion/styled";

const Container = styled.p`
  display: flex;
  text-align: left;
  justify-content: space-between;
  padding-top: 15px;
  border-bottom: 1px solid #b9b9b986;

  &:hover {
    color: gray;
  }
`;
// eslint-disable-next-line react/prop-types
const NoteParagraph = ({ content }) => {
  return <Container>{content}</Container>;
};

export default NoteParagraph;
