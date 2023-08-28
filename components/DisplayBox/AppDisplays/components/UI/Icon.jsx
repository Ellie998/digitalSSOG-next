/* eslint-disable react/prop-types */
import styled from "@emotion/styled";

const IconContainer = styled.i((props) => ({
  textAlign: "center",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  cursor: "pointer",
  borderRadius: props.style.borderRadius ? props.style.borderRadius : "9999px",
  width: props.style.width ? props.style.width : "1rem",
  height: props.style.height ? props.style.height : "1rem",
  fontSize: props.style.fontSize ? props.style.fontSize : "0.875rem",
  color: props.style.color ? props.style.color : "var(--grey-800)",
  margin: props.style.margin ? props.style.margin : "0 0 0 0" /* 8px */,
  padding: props.style.padding ? props.style.padding : null,
  boxShadow: props.style.boxShadow ? props.style.boxShadow : null,
  backgroundColor: props.style.backgroundColor
    ? props.style.backgroundColor
    : null,
}));

export default function Icon({
  id,
  name,
  style = {
    borderRadius: "9999px",
    fontSize: "0.875rem",
    color: "var(--grey-800)",
    margin: "0 0 0 0 ",
    padding: null,
    backgroundColor: null,
    boxShadow: null,
    width: "1rem",
    height: "1rem",
  },
  className,
  onClick,
}) {
  return (
    <IconContainer
      style={style}
      id={id}
      onClick={onClick}
      className={`bi bi-${name}  ${className}`}></IconContainer>
  );
}
