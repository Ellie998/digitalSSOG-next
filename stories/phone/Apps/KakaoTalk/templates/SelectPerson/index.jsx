/* eslint-disable react/prop-types */

import { useState } from "react";

import StackedList_Profile from "stories/phone/molecules/StackedList_Profile/index";
import Phone from "stories/phone/molecules/Phone/index";
import Icon from "stories/phone/atoms/Icon/index";
import TargetBox from "stories/phone/atoms/TargetBox/index";
import NoScrollbar from "stories/phone/atoms/NoScrollbar/index";
import SearchInput from "stories/phone/Apps/KakaoTalk/atoms/SearchInput/index";
import StackedListWrap from "stories/phone/molecules/StackedListWrap/index";

function SelectPerson() {
  const [isTarget1Clicked, setIsTarget1Clicked] = useState(false);
  const [isTarget2Clicked, setIsTarget2Clicked] = useState(false);

  const friendListContents1 = [
    <StackedList_Profile
      key="younghee"
      onClick={() => {}}
      profile={{
        style: { backgroundColor: "var(--kakao-purple)" },
        content: <Icon name="person-fill" style={{ color: "white" }} />,
      }}
      title={{ content: "영희", className: "" }}
      info={{
        content: <input type="checkbox" name="group" id="person1" />,
      }}
    />,
    <StackedList_Profile
      key="cherlsu"
      onClick={() => {}}
      profile={{
        style: { backgroundColor: "var(--kakao-blue)" },
        content: <Icon name="person-fill" style={{ color: "white" }} />,
      }}
      title={{ content: "철수", className: "" }}
      info={{
        content: <input type="checkbox" name="group" id="person2" />,
      }}
    />,
  ];
  const friendListContents2 = [
    <StackedList_Profile
      onClick={() => {}}
      key="jiye"
      profile={{
        style: { backgroundColor: "var(--kakao-skyblue)" },
        content: <Icon name="person-fill" style={{ color: "white" }} />,
      }}
      title={{ content: "김지예", className: "" }}
      info={{
        content: <input type="checkbox" name="group" id="person3" />,
      }}
    />,
    <TargetBox key="ceo" condition={!isTarget1Clicked} isNextTriger={false}>
      <StackedList_Profile
        profile={{
          style: { backgroundColor: "var(--kakao-purple)" },
          content: <Icon name="person-fill" style={{ color: "white" }} />,
        }}
        title={{ content: "사장님", className: "" }}
        info={{
          content: <input type="checkbox" name="group" id="person4" />,
        }}
      />
    </TargetBox>,
    <TargetBox key="daeri" condition={!isTarget2Clicked} isNextTriger={false}>
      <StackedList_Profile
        profile={{
          style: { backgroundColor: "var(--kakao-blue)" },
          content: <Icon name="person-fill" style={{ color: "white" }} />,
        }}
        title={{ content: "김대리", className: "" }}
        info={{
          content: <input type="checkbox" name="group" id="person5" />,
        }}
      />
    </TargetBox>,
  ];
  return (
    <Phone>
      {/* 305px */}
      <NoScrollbar>
        <StackedList_Profile
          profile={{
            content: <Icon name="arrow-left" />,
          }}
          title={{
            content: "대화상대 초대",
            style: { fontWeight: "bold" },
          }}
          info={{
            content: (
              <TargetBox
                style={{
                  color:
                    isTarget1Clicked && isTarget2Clicked
                      ? "rgb(23,23,23)"
                      : "rgb(143, 143, 143)",
                  marginLeft: "auto",
                  fontSize: "0.8rem",
                  fontWeight: "bold",
                }}
                condition={isTarget1Clicked && isTarget2Clicked}>
                확인
              </TargetBox>
            ),
          }}
        />

        <SearchInput
          placeholder={"이름(초성), 전화번호 검색"}
          style={{
            display: "block",
            margin: "0 auto",
            width: "160px",
            backgroundColor: "rgb(239, 239, 239)",
            borderRadius: "4px",
            padding: "4px 12px",
            fontSize: "0.8rem",
            fontWeight: "bold",
          }}
        />

        <StackedListWrap listTitle={{ content: "즐겨찾기" }}>
          {friendListContents1.map((list, i) => (
            <label key={i} htmlFor={`person${i + 1}`}>
              {list}
            </label>
          ))}
        </StackedListWrap>
        <StackedListWrap
          listTitle={{ content: "친구" }}
          style={{ borderBottom: "none" }}>
          {friendListContents2.map((list, i) => (
            <label
              key={i}
              htmlFor={`person${i + 3}`}
              onChange={() => {
                i === 1 && setIsTarget1Clicked(!isTarget1Clicked);
                i === 2 && setIsTarget2Clicked(!isTarget2Clicked);
              }}>
              {list}
            </label>
          ))}
        </StackedListWrap>
      </NoScrollbar>
    </Phone>
  );
}

export default SelectPerson;
