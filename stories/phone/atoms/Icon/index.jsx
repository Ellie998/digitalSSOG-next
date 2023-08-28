/* eslint-disable react/prop-types */
import styled from "@emotion/styled";

const IconContainer = styled.i((props) => ({
  cursor: "pointer",
  fontSize: props.style.fontSize ? props.style.fontSize : "0.875rem",
  color: props.style.color ? props.style.color : "var(--grey-800)",
  margin: props.style.margin ? props.style.margin : "0 0 0 0" /* 8px */,
}));

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
