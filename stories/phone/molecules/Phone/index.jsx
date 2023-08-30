/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import styled from "@emotion/styled";

import Header from "stories/phone/organisms/Header";
import Nav from "stories/phone/organisms/Nav";
import PhoneBackground from "stories/phone/atoms/PhoneBackground";

const MainContainer = styled.div`
  height: 300px;
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
