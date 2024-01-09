import styled from "@emotion/styled";

const IconContainer = styled.i`
  font-style: normal;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border-radius: 999px;

  background-color: ${(props) =>
    props.style.backgroundColor ? props.style.backgroundColor : "white"};
  padding: ${(props) => (props.style.padding ? props.style.padding : "2px")};
  font-size: ${(props) =>
    props.style.fontSize ? props.style.fontSize : "0.875rem"};
  &:hover {
    ${(props) => (props.style.hover ? props.style.hover : null)}
  }
  ${(props) => (props.style ? props.style : null)}
`;

const Icon = ({
  id = undefined,
  name,
  content = undefined,

  style = { fontSize: "0.875rem", padding: "2px", backgroundColor: "white" },
  onClick = undefined,
  className = undefined,
}) => {
  console.log(className);
  return (
    <IconContainer
      style={style}
      id={id}
      onClick={onClick}
      className={`bi bi-${name}`}>
      {content}
    </IconContainer>
  );
};
export default Icon;