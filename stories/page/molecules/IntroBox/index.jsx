import styled from "@emotion/styled";
import IntroBoxTitle from "stories/page/atoms/IntroBoxTitle/index";

const Container = styled.li`
  list-style: none;
  border-radius: 20px;
  box-shadow: 0 8px 8px rgba(23, 23, 23, 0.077);
  padding: 3rem;
  min-width: 300px;
  max-width: 380px;
  width: 380px;
  background-color: rgba(242, 242, 242, 0.38);
  transition: 0.1s;
  margin: 0 auto;

  &:hover {
    cursor: pointer;
    box-shadow: 0 4px 22px rgba(23, 23, 23, 0.157);
    transform: translateY(-15px);
  }
  @media (max-width: 1000px) {
    width: auto;
  }

  @media (max-width: 800px) {
    width: 380px;
  }

  @media (max-width: 650px) {
    width: 300px;
  }

  @media (max-width: 400px) {
    width: fit-content;
    min-width: 100%;
    padding: 3rem 1rem;
    margin: 0;
  }
`;

// eslint-disable-next-line react/prop-types
const IntroBox = ({ title, children, onClick }) => {
  return (
    <Container onClick={onClick}>
      <IntroBoxTitle>{title}</IntroBoxTitle>
      {children}
    </Container>
  );
};

export default IntroBox;
