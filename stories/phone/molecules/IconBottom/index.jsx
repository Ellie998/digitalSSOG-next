/* eslint-disable react/prop-types */
import styled from "@emotion/styled";

import Icon from "stories/phone/atoms/Icon/index";

const Container = styled.div`
  cursor: pointer;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  ${(props) => (props.style ? props.style : null)}
`;
const DescriptionContainer = styled.div`
  ${(props) => (props.style ? props.style : null)}
`;

const IconBottom = ({ icon, description, style, onClick }) => {
  return (
    <Container style={style} onClick={onClick}>
      <Icon name={icon.name} style={icon.style} content={icon.content} />
      <DescriptionContainer style={description.style}>
        {description.content}
      </DescriptionContainer>
    </Container>
  );
};

export default IconBottom;
