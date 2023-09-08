import styled from "@emotion/styled";
import AppIcon from "stories/phone/atoms/AppIcon/index";
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 4px 0;
`;

function AppLine({ appList }) {
  return (
    <Container>
      {appList?.map((app, i) => (
        <AppIcon
          key={i}
          name={null || app.name}
          content={null || app.content}
          description={null || app.description}
          condition={null || app.condition}
          style={null || app.style}
        />
      ))}
    </Container>
  );
}

export default AppLine;
