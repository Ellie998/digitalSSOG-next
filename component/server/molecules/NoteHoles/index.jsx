import styled from "@emotion/styled";
import NoteHoleOne from "component/server/atoms/NoteHoleOne/index";

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
`;

// eslint-disable-next-line react/prop-types
const NoteHoles = ({ number }) => {
  let temp = 0;
  const noteHoleComponents = [];
  if (number < 0) return;
  while (temp < number) {
    noteHoleComponents.push(temp);
    temp++;
  }

  return (
    <Container>
      {noteHoleComponents.map((i) => (
        <NoteHoleOne key={i} />
      ))}
    </Container>
  );
};

export default NoteHoles;
