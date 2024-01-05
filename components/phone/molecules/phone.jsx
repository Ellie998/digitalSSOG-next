import styled from "@emotion/styled";

// import Header from "stories/phone/organisms/Header/index";
// import Nav from "stories/phone/organisms/Nav/index";
// import PhoneBackground from "stories/phone/atoms/PhoneBackground/index";

const MainContainer = styled.div`
  height: 300px;
  overflow: hidden;
  width: 175px;
  background-color: ${(props) =>
    props.backgroundColor ? props.backgroundColor : "white"};
`;

function Phone({ children, main, backgroundColor }) {
  return (
    <PhoneBackground>
      <Header backgroundColor={backgroundColor} />
      <MainContainer backgroundColor={backgroundColor}>
        {children ? children : main}
      </MainContainer>
      <Nav />
    </PhoneBackground>
  );
}

export default Phone;
