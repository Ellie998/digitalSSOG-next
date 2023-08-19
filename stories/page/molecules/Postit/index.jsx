import styled from "@emotion/styled";
import PostitContent from "stories/page/atoms/PostItContent";
import PostitTitle from "stories/page/atoms/PostitTitle";

const Container = styled.li`
  list-style: none;
  text-align: left;
  width: 300px;
  height: 250px;
  padding: 48px 48px 64px 48px;

  /* -------------------BOX SHADOW------------------ */

  box-shadow: 0 0px 3px rgba(23, 23, 23, 0.187);
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 0px 18px rgba(23, 23, 23, 0.187);
  }
  /* -------------------POSTIT design------------------ */
  position: relative;
  background: #ffa;
  overflow: hidden;
  border-radius: 0 0 0 30px/45px;
  box-shadow:
    inset 0 -40px 40px rgba(0, 0, 0, 0.05),
    inset 0 25px 10px rgba(0, 0, 0, 0.034);
  line-height: 1.7em;
  font-size: 19px;
  transition: 0.4s;

  &:before {
    content: "";
    display: block;
    position: absolute;
    width: 25px;
    height: 25px;
    background: rgb(255, 255, 174);
    box-shadow:
      3px -2px 10px rgba(0, 0, 0, 0.196),
      inset 15px -15px 15px rgba(0, 0, 0, 0.093);
    left: 0;
    bottom: 0;
    z-index: 2;
    transform: skewX(25deg);
  }
  /* ---------- media queries ----------- */

  @media (max-width: 350px) {
    width: 100%;
    height: fit-content;
    padding: 2rem 2rem 1.5rem 2rem;
  }
`;

// eslint-disable-next-line react/prop-types
const Postit = ({ title, content }) => {
  return (
    <Container>
      <PostitTitle title={title} />
      <PostitContent content={content} />
    </Container>
  );
};

export default Postit;
