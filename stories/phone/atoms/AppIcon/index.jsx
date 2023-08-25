/* eslint-disable react/prop-types */
import styled from "@emotion/styled";
import TargetContent from "components/DisplayBox/AppDisplays/components/TargetContent";

const AppIconContainer = styled.i`
  box-shadow: 0px 0px 2px rgba(48, 48, 48, 0.652);
  border-radius: 18px;
  padding: 2px 4px;
  cursor: pointer;
  height: fit-content;
  font-size: 16px;
  &:hover {
    background-color: #cdcdcd8a;
  }
`;

const AppIcon = ({ id, name, targetOption }) => {
  return (
    <TargetContent targetOption={targetOption} isNextDescriptionLink={true}>
      <AppIconContainer id={id} className={`bi bi-${name}`}></AppIconContainer>
    </TargetContent>
  );
};
export default AppIcon;
