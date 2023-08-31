/* eslint-disable react/prop-types */
import styled from "@emotion/styled";
import TargetBox from "stories/phone/atoms/TargetBox";

const Container = styled.div`
  position: absolute;
  animation: opacity0to100 0.5s;
  z-index: 100;
  ${(props) => (props.style ? props.style : null)}
  @keyframes opacity0to100 {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;
const ModalContainer = styled.div`
  width: 150px;
  height: max-content;
  position: absolute;
  padding: 10px;
  z-index: 100;
  border-radius: 4px;
  left: 10px;
  background-color: ${(props) =>
    props.style.backgroundColor ? props.style.backgroundColor : "white"};
  ${(props) => (props.style ? props.style : null)}
`;

export default function Modal({
  style = {},
  onClickBackDrop = () => {},
  children,
  modalStyle = { backgroundColor: "white" },
}) {
  return (
    <Container id="modalWrap" style={style}>
      <TargetBox
        id="modal_backdrop"
        style={{
          backgroundColor: "#2a2a2a6a",
          width: "175px",
          height: "305px",
          position: "absolute",
        }}
        onClick={onClickBackDrop}
        isBackTriger={true}
        isNextTriger={false}
        condition={true}></TargetBox>
      <ModalContainer id={`modal`} style={modalStyle}>
        {children}
      </ModalContainer>
    </Container>
  );
}
