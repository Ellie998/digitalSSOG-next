import styled from "@emotion/styled";

const Container = styled.div`
  font-size: ${(prop) => (prop.fontSize ? prop.fontSize : "1rem")};
  color: ${(prop) => (prop.color ? prop.color : "var(--grey-800)")};
  width: ${(prop) => (prop.width ? prop.width : "fix-content")};
  &:hover {
    ${(prop) => (prop.hover ? prop.hover : null)}
  }
`;

// eslint-disable-next-line react/prop-types
const IconTextLine = ({ children, fontSize, icon, color, hover, width }) => {
  return (
    <Container fontSize={fontSize} color={color} hover={hover} width={width}>
      {icon} {children}
    </Container>
  );
};

export default IconTextLine;
