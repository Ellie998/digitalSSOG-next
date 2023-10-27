import styled from "./index.module.css";
import NoteHoleOne from "component/server/atoms/NoteHoleOne/index";

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
    <div className={styled.NoteHoles}>
      {noteHoleComponents.map((i) => (
        <NoteHoleOne key={i} />
      ))}
    </div>
  );
};

export default NoteHoles;
