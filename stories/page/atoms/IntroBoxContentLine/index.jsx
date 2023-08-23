import styled from "@emotion/styled";

const Container = styled.div`
  line-height: 1.75rem /* 28px */;
  text-align: ${(props) => (props.isCenter ? "center" : "unset")};
`;

// eslint-disable-next-line react/prop-types
const IntroBoxContentLine = ({ isCenter, children }) => {
  return <Container isCenter={isCenter}>{children}</Container>;
};

export default IntroBoxContentLine;
