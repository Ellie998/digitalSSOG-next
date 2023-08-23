/* eslint-disable react/prop-types */
import styled from "@emotion/styled";

const IconContainer = styled.i((props) => ({
  cursor: "pointer",
  fontSize: props.styles.fontSize ? props.styles.fontSize : "0.875rem",
  color: props.styles.color ? props.styles.color : "var(--grey-800)",
  margin: props.styles.margin ? props.styles.margin : "0 0 0 0" /* 8px */,
}));

export default function Icon({ id, name, styles, className, onClick }) {
  return (
    <IconContainer
      styles={styles}
      id={id}
      onClick={onClick}
      className={`bi bi-${name}  ${className}`}></IconContainer>
  );
}
