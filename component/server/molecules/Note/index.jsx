import styled from "@emotion/styled";

import NoteContent from "../NoteContent/index";
import NoteHoleList from "component/server/organisms/NoteHoleList/index";

const Container = styled.div`
  display: grid;
  grid-template-columns: 50px auto;
  background-color: #dadada08;
  box-shadow: 0 0px 18px rgba(23, 23, 23, 0.18);
  transition: 0.1s;
  background-color: rgba(242, 242, 242, 0.38);
  min-height: "800px";
  width: inherit;
  transition: 0.3s;

  &:hover {
    box-shadow: 0 0px 3px rgba(0, 0, 0, 0.333);
    transform: translateY(10px);
  }

  @media (max-width: 500px) {
    background-color: transparent;
    box-shadow: none;
    display: block;
    &:hover {
      box-shadow: none;
      transform: none;
    }
  }
`;

// eslint-disable-next-line react/prop-types
const Note = ({ children, title, subTitle, holeNum }) => {
  return (
    <Container>
      <NoteHoleList number={holeNum} />
      <NoteContent title={title} subTitle={subTitle}>
        {children}
      </NoteContent>
    </Container>
  );
};

export default Note;
