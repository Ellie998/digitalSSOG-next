import style from "./style.css";

const NoteParagraph = ({ content }) => {
  return <p className={style.noteParagraph}>{content}</p>;
};

export default NoteParagraph;
