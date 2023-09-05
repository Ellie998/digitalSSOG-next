import styled from "@emotion/styled";
import AppIcon from "stories/phone/atoms/AppIcon/index";
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

const Container = styled.div`
  display: flex;
  justify-content: space-between;
`;

function AppLine({ appList }) {
  return (
    <Container>
      {appList?.map((app, i) => (
        <AppIcon key={i} name={app.name} targetOption={app.targetOption} />
      ))}
    </Container>
  );
}

export default AppLine;
