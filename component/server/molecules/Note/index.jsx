import styled from "./index.module.css";
import NoteContent from "../NoteContent/index";
import NoteHoleList from "component/server/organisms/NoteHoleList/index";

// eslint-disable-next-line react/prop-types
const Note = ({ children, title, subTitle, holeNum }) => {
  return (
    <div className={styled.note}>
      <NoteHoleList number={holeNum} />
      <NoteContent title={title} subTitle={subTitle}>
        {children}
      </NoteContent>
    </div>
  );
};

export default Note;
