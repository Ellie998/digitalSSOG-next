/* eslint-disable no-unused-vars */
import styled from "@emotion/styled";
import Phone from "stories/phone/molecules/Phone/index";
import AppLine from "stories/phone/molecules/AppLine/index";

const Container = styled.div`
  height: 300px;
  display: grid;
  grid-template-rows: repeat(8, 37px);
  font-size: 0.8rem;
  align-self: center;
  padding: 0 5px;
`;

// eslint-disable-next-line react/prop-types
const Home = ({ appName_kakaotalk, appName_call, appName_message }) => {
  const shareAppList = [
    {
      name: "arrow-right-circle",
      backgroundColor: "rgb(95, 31, 197)",
      description: "Quick Share",
      color: "white",
    },
    {
      name: "chat-fill",
      backgroundColor: "rgb(255, 225, 0)",
      description: "카카오톡",
      color: "rgb(36, 25, 4)",
    },
    {
      name: "browser-chrome",
      backgroundColor: "white",
      description: "Chrome",
      color: "",
    },
    {
      name: "lock-fill",
      backgroundColor: "rgb(63, 16, 163)",
      description: "보안 폴더",
      color: "white",
    },
    {
      content: "N",
      backgroundColor: "rgb(123, 226, 59)",
      description: "Naver",
      color: "white",
    },
    {
      name: "chat-dots-fill",
      backgroundColor: "rgb(82, 146, 230)",
      description: "메시지",
      color: "white",
    },
    {
      name: "instagram",
      backgroundColor: "rgb(231, 63, 206)",
      description: "Instargram",
      color: "white",
    },
    {
      name: "three-dots",
      backgroundColor: "rgb(233, 233, 233)",
      description: "더보기",
      color: "rgb(100,100,100)",
    },
  ];
  return (
    <Phone>
      <Container>
        <AppLine />
        <AppLine />
        <AppLine />
        <AppLine />
        {/*  */}
        <AppLine />
        <AppLine />
        <AppLine
          appList={[{ name: "chat-fill", targetOption: appName_kakaotalk }]}
        />
        <AppLine
          appList={[
            { name: "telephone", targetOption: appName_call },
            { name: "camera", targetOption: false },
            { name: "clock", targetOption: false },
            { name: "browser-chrome", targetOption: false },
            { name: "chat-dots", targetOption: appName_message },
          ]}
        />
      </Container>
    </Phone>
  );
};

export default Home;
