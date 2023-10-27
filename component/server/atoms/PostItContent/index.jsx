import styled from "./index.module.css";
// eslint-disable-next-line react/prop-types
const PostitContent = ({ content }) => {
  return <p className={styled.postitContent}>{content}</p>;
};

export default PostitContent;
