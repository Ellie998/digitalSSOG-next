import styled from "@emotion/styled";

const Container = styled.div`
  text-align: center;
  font-size: 1.25rem /* 20px */;
  line-height: 1.75rem /* 28px */;
  font-weight: 700;
  --tw-text-opacity: 1;
  color: rgb(38 38 38 / var(--tw-text-opacity));
  @media (min-width: 640px) {
    font-size: 1.5rem /* 24px */;
    line-height: 2rem /* 32px */;
  }
`;

// eslint-disable-next-line react/prop-types
const IntroBoxTitle = ({ children }) => {
  return <Container>{children}</Container>;
};

export default IntroBoxTitle;
