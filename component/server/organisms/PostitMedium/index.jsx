import styled from "./index.module.css";

// eslint-disable-next-line react/prop-types
const PostitMedium = ({ title, content }) => {
  return (
    <div className={styled.container}>
      <div className={styled.title}>{title ? title : null}</div>
      <div className={styled.content}>{content ? content : null}</div>
    </div>
  );
};

export default PostitMedium;
