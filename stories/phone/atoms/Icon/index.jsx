/* eslint-disable react/prop-types */
import styled from "@emotion/styled";

const IconContainer = styled.i`
  cursor: pointer;
  font-size: ${(props) =>
    props.style.fontSize ? props.style.fontSize : "0.875rem"};
  color: ${(props) =>
    props.style.color ? props.style.color : "var(--grey-800)"};
  margin: ${(props) => (props.style.margin ? props.style.margin : "0 0 0 0")};
  &:hover {
    ${(props) => (props.style.hover ? props.style.hover : null)}
  }
  ${(props) => (props.style ? props.style : null)}
`;

const Icon = ({
  id,
  name,
  style = {
    fontSize: "0.875rem",
    color: "var(--grey-800)",
    margin: "0 0 0 0 ",
  },

  onClick,
}) => {
  return (
    <IconContainer
      style={style}
      id={id}
      onClick={onClick}
      className={`bi bi-${name}`}></IconContainer>
  );
};
export default Icon;
