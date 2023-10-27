import styled from "./index.module.css";
import PostitTitle from "component/server/atoms/PostitTitle/index";
import PostitContent from "component/server/atoms/PostItContent/index";

// eslint-disable-next-line react/prop-types
const Postit = ({ title, content }) => {
  return (
    <li className={styled.postit}>
      <PostitTitle title={title} />
      <PostitContent content={content} />
    </li>
  );
};

export default Postit;
