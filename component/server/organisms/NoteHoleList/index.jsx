import styled from "./index.module.css";
import NoteHoles from "component/server/molecules/NoteHoles/index";

// eslint-disable-next-line react/prop-types
const NoteHoleList = ({ number }) => {
  return (
    <div className={styled.noteHoleList}>
      <NoteHoles number={number} />
    </div>
  );
};

export default NoteHoleList;
