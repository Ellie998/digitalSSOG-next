import styled from "@emotion/styled";

const Container = styled.h1`
  font-size: 1.5rem /* 24px */;
  line-height: 2rem /* 32px */;
  font-weight: 700;
  --tw-text-opacity: 1;
  color: rgb(38 38 38 / var(--tw-text-opacity));
  @media (min-width: 640px) {
    font-size: 1.875rem /* 30px */;
    line-height: 2.25rem /* 36px */;
  }
`;

// eslint-disable-next-line react/prop-types
const H1 = ({ children }) => {
  return <Container> {children}</Container>;
};

export default H1;
