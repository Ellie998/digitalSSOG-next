import styled from "@emotion/styled";
import NumIcon from "stories/page/atoms/NumIcon/index";
import IconTextLine from "stories/page/molecules/IconTextLine/index";

const Container = styled.li`
  list-style: none;
  margin-left: 1rem /* 16px */;
  margin-bottom: 0.5rem /* 8px */;
  line-height: 1.5rem /* 24px */;
  cursor: pointer;
  font-weight: ${(prop) => (prop.isBold ? "700" : "normal")};
`;

// eslint-disable-next-line react/prop-types
const DescriptionLine = ({ children, isBold, order, onClick }) => {
  return (
    <Container data-list-order={order} isBold={isBold} onClick={onClick}>
      <IconTextLine icon={<NumIcon num={order} />}>{children}</IconTextLine>
    </Container>
  );
};

export default DescriptionLine;
