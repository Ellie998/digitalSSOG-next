import styled from "@emotion/styled";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  vertical-align: middle;
  align-items: center;
  width: ${(props) => (props.styles.width ? props.styles.width : "100%")};
  ${(props) => props.styles}
`;

const FlexItem = styled.div`
  margin-left: 0.25rem /* 4px */;
`;

/* eslint-disable react/prop-types */
const Flex = ({ items, styles = { width: "100%" }, children }) => {
  return (
    <>
      <Container styles={styles}>
        {items?.map((item, i) => (
          <FlexItem key={`flexItem${i}`}>{item}</FlexItem>
        ))}
      </Container>
      {children}
    </>
  );
};
export default Flex;
