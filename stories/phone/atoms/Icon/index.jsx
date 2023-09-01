/* eslint-disable react/prop-types */
import styled from "@emotion/styled";

const IconContainer = styled.i`
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  cursor: pointer;
  border-radius: 999px;
  font-size: ${(props) =>
    props.style.fontSize ? props.style.fontSize : "0.875rem"};
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
    padding: "2px",
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
