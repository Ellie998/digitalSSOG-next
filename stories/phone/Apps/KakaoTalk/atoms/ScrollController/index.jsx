import styled from "@emotion/styled";

const ControlBarContainer = styled.div`
  display: flex;
  width: 100px;
`;
const ControlBar = styled.div`
  width: 25px;
  height: 6px;
  border-left: 1px solid rgb(195, 195, 195);
  ${(props) => (props.style ? props.style : null)}

  &::after {
    content: "";
    display: block;
    width: 25px;
    height: 1px;
    margin-top: 2.5px;
    background-color: rgb(195, 195, 195);
  }
`;
const Controller = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 100%;
  background-color: white;
  position: absolute;
  z-index: 10;
  margin-left: 68px;
  box-shadow: 2px 2px 4px rgba(128, 128, 128, 0.83);
  cursor: pointer;
`;

const ScrollController = () => {
  return (
    <>
      <ControlBarContainer>
        <ControlBar onDragEnter={() => console.log("entered1")} />
        <ControlBar onDragEnter={() => console.log("entered2")} />
        <ControlBar onDragEnter={() => console.log("entered3")} />
        <ControlBar
          onDragEnter={() => console.log("entered4")}
          style={{ borderRight: "1px solid rgb(195, 195, 195)" }}
        />
      </ControlBarContainer>
      <Controller draggable={true}></Controller>
    </>
  );
};
export default ScrollController;
