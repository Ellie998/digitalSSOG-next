import styled from "@emotion/styled";

const Container = styled.details``;

const Summary = styled.summary`
  font-size: ${(prop) => (prop.sm ? "1rem" : "1.25rem")};
  line-height: ${(prop) => (prop.sm ? "1.25rem" : "1.75rem")};

  margin-bottom: 0.25rem /* 4px */;
`;

// eslint-disable-next-line react/prop-types
const Details = ({ children, open, summary, sm }) => {
  return (
    <Container open={open}>
      <Summary data-tooltip-left="클릭!" sm={sm}>
        {summary}
      </Summary>
      {children}
    </Container>
  );
};

export default Details;
