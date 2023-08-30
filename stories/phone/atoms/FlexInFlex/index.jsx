import styled from "@emotion/styled";

const Container = styled.div`
  vertical-align: middle;
  align-items: center;
  display: grid;
  grid-template-columns: repeat(3, 57px);
  ${(props) => props.style}
`;
const FlexContainer = styled.div`
  display: flex;
  margin: 0 auto;
`;

const FlexItem = styled.div`
  margin-left: 0.25rem /* 4px */;
`;

/* eslint-disable react/prop-types */
const FlexInFlex = ({
  leftItem,
  centerItem,
  rightItem,
  children,
  onClick,
  style,
}) => {
  return (
    <>
      <Container style={style} onClick={onClick}>
        {/* left item */}
        <FlexContainer>
          {leftItem?.map((item, i) => (
            <FlexItem key={`left${i}`}>{item}</FlexItem>
          ))}
        </FlexContainer>
        {/* mid item */}
        <FlexContainer>
          {centerItem?.map((item, i) => (
            <div key={`center${i}`}>{item}</div>
          ))}
        </FlexContainer>
        {/* right item */}
        <FlexContainer>
          {rightItem?.map((item, i) => (
            <FlexItem key={`right${i}`}>{item}</FlexItem>
          ))}
        </FlexContainer>
      </Container>
      {children}
    </>
  );
};
export default FlexInFlex;
