import styled from "@emotion/styled";
import NoteHole from "stories/page/atoms/NoteHole";

const Container = styled.div`
  /* width: 30px; */
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
        <NoteHole key={i} />
      ))}
    </Container>
  );
};

export default NoteHoles;
