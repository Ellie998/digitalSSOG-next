/* eslint-disable no-unused-vars */
import styled from "@emotion/styled";
import Phone from "stories/phone/molecules/Phone/index";
import AppLine from "stories/phone/molecules/AppLine/index";
import { useState } from "react";

const Container = styled.div`
  height: 300px;
  display: grid;
  grid-template-rows: repeat(7, 43px);
  font-size: 0.8rem;
  align-items: center;
  padding: 0 5px;
`;

// eslint-disable-next-line react/prop-types
const Home = ({
  appName_kakaotalk,
  appName_call,
  appName_message,
  app = { gallery: false },
  target_action = {
    openAlertBar: false,
    openApps: false,
    closeAlertBar: false,
    closeApps: false,
  },
  target_alertBar = { setting: false },
  target_apps = { searchBox: false },
  open = { alertBar: false, apps: false },
}) => {
  const [isTopDownSwiped, setIsTopDownSwiped] = useState(0);
  const [isDownTopSwiped, setIsDownTopSwiped] = useState(false);
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
      {/* first alertBar */}
      {((isTopDownSwiped === 2 && !isDownTopSwiped) || open.alertBar) && (
        <Container>alert bar 1</Container>
      )}
      {/* second alertBar  */}
      {((isTopDownSwiped === 1 && !isDownTopSwiped) || open.alertBar) && (
        <Container>alert bar 2</Container>
      )}
      {/* main home */}
      {isTopDownSwiped == 0 && !isDownTopSwiped && (
        <Container>
          <AppLine />
          <AppLine />
          <AppLine />
          {/*  */}
          <AppLine />
          <AppLine
            appList={[
              {
                name: "flower3",
                condition: app.gallery,
                description: "갤러리",
                style: {
                  backgroundColor: "rgb(255, 0, 76)",
                  color: "rgb(255, 255, 255)",
                  fontSize: "20px",
                },
              },
            ]}
          />
          <AppLine
            appList={[
              {
                name: "chat-fill",
                condition: appName_kakaotalk,
                description: "카카오톡",
                style: {
                  backgroundColor: "rgb(255, 225, 0)",
                  color: "rgb(36, 25, 4)",
                },
              },
              {
                content: "N",
                description: "NAVER",
                style: {
                  backgroundColor: "rgb(123, 226, 59)",
                  color: "white",
                },
              },
            ]}
          />
          <AppLine
            appList={[
              {
                name: "telephone-fill",
                condition: appName_call,
                style: { backgroundColor: "rgb(22, 163, 74)", color: "white" },
              },
              {
                name: "camera-fill",
                condition: false,
                style: { backgroundColor: "rgb(220, 58, 76)", color: "white" },
              },
              {
                name: "clock-fill",
                condition: false,
                style: { backgroundColor: "rgb(43, 22, 163)", color: "white" },
              },
              {
                name: "browser-chrome",
                condition: false,
                style: {
                  backgroundColor: "rgb(229, 229, 229)",
                  color: "rgb(255, 79, 52)",
                },
              },
              {
                name: "chat-dots-fill",
                condition: appName_message,
                style: {
                  backgroundColor: "rgb(26, 95, 255)",
                  color: "rgb(255, 255, 255)",
                },
              },
            ]}
          />
        </Container>
      )}
      {/* apps home */}
      {((isTopDownSwiped == 0 && isDownTopSwiped) || open.apps) && (
        <Container>
          <AppLine
            appList={[
              {
                name: "flower3",
                condition: app.gallery,
                description: "갤러리",
                style: {
                  backgroundColor: "rgb(255, 0, 76)",
                  color: "rgb(255, 255, 255)",
                  fontSize: "20px",
                },
              },
            ]}
          />
          <AppLine
            appList={[
              {
                name: "chat-fill",
                condition: appName_kakaotalk,
                description: "카카오톡",
                style: {
                  backgroundColor: "rgb(255, 225, 0)",
                  color: "rgb(36, 25, 4)",
                },
              },
              {
                content: "N",
                description: "NAVER",
                style: {
                  backgroundColor: "rgb(123, 226, 59)",
                  color: "white",
                },
              },
            ]}
          />
          <AppLine
            appList={[
              {
                name: "telephone-fill",
                condition: appName_call,
                style: { backgroundColor: "rgb(22, 163, 74)", color: "white" },
              },
              {
                name: "camera-fill",
                condition: false,
                style: { backgroundColor: "rgb(220, 58, 76)", color: "white" },
              },
              {
                name: "clock-fill",
                condition: false,
                style: { backgroundColor: "rgb(43, 22, 163)", color: "white" },
              },
              {
                name: "browser-chrome",
                condition: false,
                style: {
                  backgroundColor: "rgb(229, 229, 229)",
                  color: "rgb(255, 79, 52)",
                },
              },
              {
                name: "chat-dots-fill",
                condition: appName_message,
                style: {
                  backgroundColor: "rgb(26, 95, 255)",
                  color: "rgb(255, 255, 255)",
                },
              },
            ]}
          />
          {/*  */}
          <AppLine />
          <AppLine />
          <AppLine />
          <AppLine />
        </Container>
      )}
    </Phone>
  );
};

export default Home;
