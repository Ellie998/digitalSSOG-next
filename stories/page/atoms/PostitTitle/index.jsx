import styled from "@emotion/styled";

const Container = styled.p`
  font-size: 1.25rem;
  margin-bottom: 1.25rem /* 20px */;
  --tw-text-opacity: 1;
  color: rgb(55 65 81 / var(--tw-text-opacity));
  word-break: keep-all;
`;

// eslint-disable-next-line react/prop-types
const PostitTitle = ({ title }) => {
  return <Container>{title}</Container>;
};

export default PostitTitle;
