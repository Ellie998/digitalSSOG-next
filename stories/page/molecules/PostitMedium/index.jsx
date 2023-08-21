import styled from "@emotion/styled";

const Container = styled.div`
  position: relative;
  /* margin-top: 60px; */
  background: rgb(255, 255, 209);
  box-shadow: 0 8px 8px rgba(23, 23, 23, 0.077);
  overflow: hidden;
  box-shadow:
    inset 0 -40px 40px rgba(0, 0, 0, 0.05),
    inset 0 25px 10px rgba(0, 0, 0, 0.034);
  line-height: 1.5rem;
  transition: 0.5s;
  max-width: 800px;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0px 8px 12px rgba(0, 0, 0, 0.124);
  }

  &:before {
    content: "";
    display: block;
    position: absolute;
    width: 20px;
    height: 20px;
    background: rgb(255, 255, 209);
    box-shadow:
      -3px -2px 10px rgba(0, 0, 0, 0.196),
      inset -15px -15px 15px rgba(0, 0, 0, 0.093);
    right: -15px;
    top: 0;
    z-index: 2;
    transform: skewX(25deg);
  }
  @media (max-width: 800px) {
    width: 100%;
  }
`;
const Title = styled.div`
  padding: 0 0 10px 0;
  font-weight: bold;
  min-width: max-content;
  text-align: center;
  display: inline-block;

  width: 90%;
  margin: 80px auto 0 auto;
  @media (max-width: 800px) {
    width: 90%;
  }
`;
const Content = styled.div`
  margin: 0 auto;
  padding: 20px 96px 64px 96px;

  @media (max-width: 600px) {
    padding: 20px 20px 64px 20px;
  }
`;

// eslint-disable-next-line react/prop-types
const PostitMedium = ({ title, content }) => {
  return (
    <Container>
      <Title>{title ? title : null}</Title>
      <Content>{content ? content : null}</Content>
    </Container>
  );
};

export default PostitMedium;
