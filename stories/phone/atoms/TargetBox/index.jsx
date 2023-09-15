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
  isBackTriger = false,
  children,
  onMouseDown,
}) => {
  const { setMyDescriptionId } = useContext(UrlContext);

  return (
    <Container
      id={id}
      style={style}
      condition={condition && !isBackTriger}
      data-tooltip={
        condition && !isBackTriger
          ? onMouseDown
            ? "1초 이상 누르고 있기"
            : "클릭"
          : null
      }
      onMouseDown={() => {
        onMouseDown ? onMouseDown() : null;
        onMouseDown &&
          setTimeout(() => {
            isNextTriger &&
              condition &&
              setMyDescriptionId((prevValue) => (+prevValue + 1).toString());

            isBackTriger &&
              condition &&
              setMyDescriptionId((prevValue) => (+prevValue - 1).toString());
          }, 1000);
      }}
      onClick={() => {
        !onMouseDown &&
          isNextTriger &&
          condition &&
          setMyDescriptionId((prevValue) => (+prevValue + 1).toString());
        onClick ? onClick() : null;
        !onMouseDown &&
          isBackTriger &&
          condition &&
          setMyDescriptionId((prevValue) => (+prevValue - 1).toString());
      }}>
      {children}
    </Container>
  );
};

export default TargetBox;
