/* eslint-disable react/prop-types */

// import TargetContent from "components/DisplayBox/AppDisplays/components/TargetContent";
import StackedList_Profile from "stories/phone/molecules/StackedList_Profile";
import Phone from "stories/phone/molecules/Phone";
import Icon from "stories/phone/atoms/Icon";
import TargetBox from "stories/phone/atoms/TargetBox";
import NoScrollbar from "stories/phone/atoms/NoScrollbar";
import SearchInput from "stories/phone/Apps/KakaoTalk/atoms/SearchInput";
import StackedListWrap from "stories/phone/molecules/StackedListWrap";
import { useState } from "react";

function SelectPerson() {
  const [isChecked1, setIsChecked1] = useState(false);
  const [isChecked2, setIsChecked2] = useState(false);
  const friendListContents1 = [
    <StackedList_Profile
      onClick={() => {
        setIsChecked1(true);
      }}
      key="younghee"
      profile={{
        style: { backgroundColor: "var(--kakao-purple)" },
        content: (
          <Icon
            name="person-fill"
            style={{ color: "var(--kakao-profilePerson)" }}
          />
        ),
      }}
      title={{ content: "영희", className: "" }}
      info={{
        content: <input type="checkbox" name="group" id="person1" />,
      }}
    />,
    <StackedList_Profile
      onClick={() => {
        setIsChecked2(true);
      }}
      key="cherlsu"
      profile={{
        style: { backgroundColor: "var(--kakao-blue)" },
        content: (
          <Icon
            name="person-fill"
            style={{ color: "var(--kakao-profilePerson)" }}
          />
        ),
      }}
      title={{ content: "철수", className: "" }}
      info={{
        content: <input type="checkbox" name="group" id="person2" />,
      }}
    />,
  ];
  const friendListContents2 = [
    <StackedList_Profile
      key="jiye"
      profile={{
        style: { backgroundColor: "var(--kakao-skyblue)" },
        content: (
          <Icon
            name="person-fill"
            style={{ color: "var(--kakao-profilePerson)" }}
          />
        ),
      }}
      title={{ content: "김지예", className: "" }}
      info={{
        content: <input type="checkbox" name="group" />,
      }}
    />,
    <StackedList_Profile
      key="yehong"
      profile={{
        style: { backgroundColor: "var(--kakao-blue)" },
        content: (
          <Icon
            name="person-fill"
            style={{ color: "var(--kakao-profilePerson)" }}
          />
        ),
      }}
      title={{ content: "안예홍", className: "" }}
      info={{
        content: <input type="checkbox" name="group" />,
      }}
    />,
    <StackedList_Profile
      key="daeri"
      profile={{
        style: { backgroundColor: "var(--kakao-purple)" },
        content: (
          <Icon
            name="person-fill"
            style={{ color: "var(--kakao-profilePerson)" }}
          />
        ),
      }}
      title={{ content: "김대리", className: "" }}
      info={{
        content: <input type="checkbox" name="group" />,
      }}
    />,
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
                  color: "rgb(143, 143, 143)",
                  marginLeft: "auto",
                  fontSize: "0.8rem",
                }}
                condition={isChecked1 && isChecked2}>
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
            <TargetBox key={i}>
              <label htmlFor={`person${i + 1}`}>{list}</label>
            </TargetBox>
          ))}
        </StackedListWrap>
        <StackedListWrap
          listTitle={{ content: "친구" }}
          style={{ borderBottom: "none" }}>
          {friendListContents2.map((list) => list)}
        </StackedListWrap>
      </NoScrollbar>
    </Phone>
  );
}

export default SelectPerson;
