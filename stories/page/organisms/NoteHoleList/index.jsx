import styled from "@emotion/styled";
import NoteHoles from "stories/page/molecules/NoteHoles";

const Container = styled.div`
  padding: 30px 0;
  width: 30px;
  margin: 0 auto;
  height: 100%;
  @media (max-width: 600px) {
    width: 25px;
  }

  @media (max-width: 500px) {
    display: none;
  }
`;

// eslint-disable-next-line react/prop-types
const NoteHoleList = ({ number }) => {
  return (
    <Container>
      <NoteHoles number={number} />
    </Container>
  );
};

export default NoteHoleList;
