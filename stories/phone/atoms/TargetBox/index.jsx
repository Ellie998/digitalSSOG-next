/* eslint-disable react/prop-types */
// components/TargetBox.jsx
import styled from "@emotion/styled";
import UrlContext from "components/page_context/UrlContext";

import { useContext } from "react";

const Container = styled.div`
  cursor: pointer;
  width: ${(props) => (props.style.width ? props.style.width : "fit-content")};
  height: ${(props) =>
    props.style.height ? props.style.height : "fit-content"};
  border: ${(props) => (props.condition ? "2px solid red" : "none")};
  border-radius: "2px";
  ${(props) => (props.style ? props.style : null)}
`;

/**  make component border and tooltip */
const TargetBox = ({
  id = "TargetBox",
  style = { width: "fit-content" },
  onClick,
  condition,
  isNextTriger = true,
  isBackTriger,
  children,
}) => {
  const { setMyDescriptionId } = useContext(UrlContext);
  console.log(condition);
  return (
    <Container
      id={id}
      style={style}
      condition={condition && !isBackTriger}
      data-tooltip={condition && !isBackTriger ? "클릭" : null}
      onClick={() => {
        isNextTriger &&
          condition &&
          setMyDescriptionId((prevValue) => (+prevValue + 1).toString());
        onClick ? onClick() : null;
        isBackTriger &&
          condition &&
          setMyDescriptionId((prevValue) => (+prevValue - 1).toString());
      }}>
      {children}
    </Container>
  );
};

export default TargetBox;
