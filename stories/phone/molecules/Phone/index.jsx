/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import styled from "@emotion/styled";

import Header from "stories/phone/organisms/Header/index";
import Nav from "stories/phone/organisms/Nav/index";
import PhoneBackground from "stories/phone/atoms/PhoneBackground/index";

const MainContainer = styled.div`
  height: 300px;
  overflow: hidden;
  width: 175px;
`;

function Phone({ children, main }) {
  return (
    <PhoneBackground>
      <Header />
      <MainContainer>{children ? children : main}</MainContainer>
      <Nav />
    </PhoneBackground>
  );
}

export default Phone;
