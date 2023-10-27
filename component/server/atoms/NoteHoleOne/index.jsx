import styled from "@emotion/styled";

const Container = styled.div`
  display: block;
  width: 20px;
  height: 20px;
  background-color: rgb(255, 255, 255);
  border-radius: 100%;
  box-shadow:
    inset 2px 4px 3px rgba(166, 166, 166, 0.187),
    0 0px 3px rgba(0, 0, 0, 0.333);

  &:hover {
    box-shadow:
      inset 2px 4px 3px rgba(166, 166, 166, 0),
      0 0px 3px rgba(0, 0, 0, 0.45);
  }
`;

// eslint-disable-next-line react/prop-types
const NoteHoleOne = () => {
  return <Container></Container>;
};

export default NoteHoleOne;
