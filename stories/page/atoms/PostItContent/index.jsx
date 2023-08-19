import styled from "@emotion/styled";

const Container = styled.p`
  @font-face {
    font-family: "Cafe24Shiningstar";
    src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_twelve@1.1/Cafe24Shiningstar.woff")
      format("woff");
    font-weight: normal;
    font-style: normal;
    font-display: swap;
  }
  font-family: "Cafe24Shiningstar";
  font-weight: normal;
  font-size: 1.5rem;
  color: var(--grey-500);
`;

// eslint-disable-next-line react/prop-types
const PostitContent = ({ content }) => {
  return <Container>{content}</Container>;
};

export default PostitContent;
