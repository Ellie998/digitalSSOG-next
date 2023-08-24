/* eslint-disable react/prop-types */
import styled from "@emotion/styled";

const IconContainer = styled.i((props) => ({
  cursor: "pointer",
  fontSize: props.styles.fontSize ? props.styles.fontSize : "0.875rem",
  color: props.styles.color ? props.styles.color : "var(--grey-800)",
  margin: props.styles.margin ? props.styles.margin : "0 0 0 0" /* 8px */,
}));

const Icon = ({
  id,
  name,
  styles = {
    fontSize: "0.875rem",
    color: "var(--grey-800)",
    margin: "0 0 0 0 ",
  },

  onClick,
}) => {
  return (
    <IconContainer
      styles={styles}
      id={id}
      onClick={onClick}
      className={`bi bi-${name}`}></IconContainer>
  );
};
export default Icon;
