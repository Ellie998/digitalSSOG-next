/* eslint-disable react/prop-types */
import styled from "@emotion/styled";

const IconContainer = styled.i(() => ({
  textAlign: "center",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  cursor: "pointer",
  borderRadius: "9999px",
}));

export default function Icon({
  id,
  name,

  className,
  onClick,
}) {
  return (
    <IconContainer
      id={id}
      onClick={onClick}
      className={`bi bi-${name}  ${className}`}></IconContainer>
  );
}
