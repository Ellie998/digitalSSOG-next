/* eslint-disable react/prop-types */
import styled from "@emotion/styled";
import Flex from "stories/phone/atoms/Flex/index";

import Icon from "stories/phone/atoms/Icon/index";
import NoScrollbar from "stories/phone/atoms/NoScrollbar/index";
import TargetBox from "stories/phone/atoms/TargetBox/index";

import Phone from "stories/phone/molecules/Phone/index";
import StackedListWrap from "stories/phone/molecules/StackedListWrap/index";

import StackedList_Profile from "stories/phone/molecules/StackedList_Profile/index";

const NavContainer = styled.div`
  background: rgb(254, 254, 254);
  display: flex;
  justify-content: space-around;
  position: relative;
  z-index: 100;
  top: -30px;
  font-size: 0.85rem;
`;

// eslint-disable-next-line react/prop-types
const Edit_ContactInfo = ({ content = { name: "영희" } }) => {
  return (
    <Phone>
      <NoScrollbar height={"300px"}>
        <Icon
          name="camera-fill"
          style={{
            color: "white",
            backgroundColor: "rgb(240, 173, 173)",
            padding: "10px",
            width: "50px",
            height: "50px",
            margin: "0 auto",
          }}
        />
        <StackedList_Profile
          profile={{ name: "person", style: { color: "rgb(44, 106, 221)" } }}
          title={{
            content: (
              <input
                type="text"
                placeholder={content.name}
                style={{ width: "100px" }}
              />
            ),
          }}
          info={{ content: <Icon name="chevron-down" /> }}
        />
        <StackedListWrap style={{ margin: "10px 0 0 0", padding: "10px 0" }}>
          <StackedList_Profile
            profile={{
              name: "telephone",
              style: { color: "rgb(44, 106, 221)" },
            }}
            title={{
              content: (
                <Flex
                  items={[
                    <div style={{ color: "rgb(44, 106, 221)" }} key="1">
                      휴대전화
                    </div>,
                    <Icon
                      style={{ color: "rgb(44, 106, 221)" }}
                      key="2"
                      name="chevron-down"
                    />,
                  ]}
                />
              ),
            }}
            subTitle={{
              content: (
                <input
                  type="text"
                  value={"010-1234-0000"}
                  style={{
                    width: "110px",
                    fontSize: "0.85rem",
                    color: "rgb(25, 25, 25)",
                  }}
                />
              ),
              style: { gridColumn: "2/6" },
            }}
            info={{
              content: <Icon name="dash-lg" style={{ color: "red" }} />,
              style: { gridColumn: "6/7" },
            }}
          />
        </StackedListWrap>
        <StackedListWrap style={{ margin: "0 0 0 0", padding: "10px 0" }}>
          <StackedList_Profile
            style={{ margin: "0 0" }}
            profile={{ name: "" }}
            title={{
              content: (
                <Flex
                  items={[
                    <div style={{ color: "rgb(44, 106, 221)" }} key="1">
                      휴대전화
                    </div>,
                    <Icon
                      style={{ color: "rgb(44, 106, 221)" }}
                      key="2"
                      name="chevron-down"
                    />,
                  ]}
                />
              ),
            }}
            subTitle={{
              content: (
                <input
                  type="text"
                  value={"+82 10-1234-0000"}
                  style={{
                    width: "110px",
                    fontSize: "0.85rem",
                    color: "rgb(25, 25, 25)",
                  }}
                />
              ),
              style: { gridColumn: "2/6" },
            }}
            info={{
              content: <Icon name="dash-lg" style={{ color: "red" }} />,
              style: { gridColumn: "6/7" },
            }}
          />
        </StackedListWrap>{" "}
        <StackedListWrap style={{ margin: "0 0 0 0", padding: "4px 0" }}>
          <StackedList_Profile
            style={{ margin: "0 0" }}
            profile={{ name: "plus" }}
            title={{
              content: (
                <input
                  type="text"
                  placeholder={"전화번호 추가"}
                  style={{
                    width: "110px",
                    fontSize: "0.85rem",
                  }}
                />
              ),
              style: { gridColumn: "2/6" },
            }}
          />
        </StackedListWrap>
        {/*  */}
        <StackedListWrap style={{ margin: "20px 0 0 0", padding: "4px 0" }}>
          <StackedList_Profile
            style={{ margin: "0 0" }}
            profile={{ name: "envelope" }}
            title={{
              content: (
                <input
                  type="text"
                  placeholder={"이메일"}
                  style={{
                    width: "110px",
                    fontSize: "0.85rem",
                  }}
                />
              ),
              style: { gridColumn: "2/6" },
            }}
          />
        </StackedListWrap>
        {/*  */}
        <StackedListWrap style={{ margin: "20px 0 10px 0", padding: "4px 0" }}>
          <StackedList_Profile
            style={{ margin: "0 0" }}
            profile={{ name: "people", style: { color: "rgb(44, 106, 221)" } }}
            title={{
              content: (
                <div
                  style={{
                    width: "110px",
                    fontSize: "0.85rem",
                  }}>
                  긴급 연락처
                </div>
              ),
              style: { gridColumn: "2/6" },
            }}
          />
        </StackedListWrap>
        <div
          style={{
            margin: "0 auto 50px auto",
            display: "flex",
            justifyContent: "center",
            fontSize: "0.85rem",
          }}>
          <Icon name="chevron-down" style={{ color: "rgb(122, 122, 122)" }} />
          <div style={{ color: "rgb(122, 122, 122)" }}>항목 더보기</div>
        </div>
      </NoScrollbar>
      <NavContainer>
        <TargetBox condition={false}>취소</TargetBox>
        <TargetBox condition={true}>저장</TargetBox>
      </NavContainer>
    </Phone>
  );
};

export default Edit_ContactInfo;
