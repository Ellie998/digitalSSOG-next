import styled from "./index.module.css";
// eslint-disable-next-line react/prop-types
const PostitTitle = ({ title }) => {
  return <p className={styled.postitTitle}>{title}</p>;
};

export default PostitTitle;
