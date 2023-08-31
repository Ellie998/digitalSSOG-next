import { useState } from "react";

import ListOption from "components/DisplayBox/AppDisplays/components/list/ListOption";
import FlexContent from "components/DisplayBox/AppDisplays/components/list/FlexContent";

import Icon from "stories/phone/atoms/Icon";
import Top from "stories/phone/atoms/Top";
import FlexInFlex from "stories/phone/atoms/FlexInFlex";

import StackedListWrap from "stories/phone/molecules/StackedListWrap";

import StackedList_Profile from "stories/phone/molecules/StackedList_Profile";
import TargetBox from "stories/phone/atoms/TargetBox";

// eslint-disable-next-line react/prop-types
const Contacts = ({ targetTab, clickedTapName, target_call }) => {
  const scrollElement = document.getElementById("NoScrollbar");

  const [isListClicked1, setIsListClicked1] = useState(false);
  const [isListClicked2, setIsListClicked2] = useState(false);

  const showListOption1 = () => {
    !isListClicked1 && setIsListClicked1(true);
    isListClicked1 && setIsListClicked1(false);
    setIsListClicked2(false);
  };
  const showListOption2 = () => {
    !isListClicked2 && setIsListClicked2(true);
    isListClicked2 && setIsListClicked2(false);
    setIsListClicked1(false);
  };
  // 연락처 누르면 생기는 옵션 elements
  const optionlistContent = (
    <FlexContent
      className=""
      items={[
        <TargetBox
          key="telephone"
          condition={targetTab === clickedTapName && target_call}
          isNextTriger={true}>
          <Icon style={{ color: "rgb(22 163 74)" }} name="telephone-fill" />
        </TargetBox>,
        <Icon
          key="chat"
          style={{ color: "rgb(22 163 74)" }}
          name="chat-fill"
        />,
        <Icon
          key="camera"
          style={{ color: "rgb(22 163 74)" }}
          name="camera-video-fill"
        />,
        <Icon
          key="info"
          style={{ color: "rgb(22 163 74)" }}
          name="info-circle-fill"
        />,
      ]}
    />
  );
  // 연락처 tap에 만들 list 정보
  const contactListProps = [
    //진수
    {
      id: `contactList1`,
      style: { height: "2rem" },
      profile: {
        style: { backgroundColor: "rgb(249 168 212)", color: "white" },
        name: "person-fill",
      },
      title: {
        content: "진수",
      },
    },
    // 즐겨찾는 연락처 추가
    {
      id: `contactList2`,
      style: { height: "2rem" },
      profile: {
        style: { backgroundColor: "rgb(254 240 138)", color: "white" },
        name: "star-fill",
      },
      title: {
        content: "즐겨찾는 연락처 추가",
      },
    },

    //그룹
    {
      id: `contactList3`,
      style: { height: "2rem" },
      profile: {
        style: { color: "white", backgroundColor: "rgb(229 231 235)" },
        name: "people-fill",
      },
      title: {
        content: "그룹",
      },
    },

    // ㅇ
    {
      id: `contactList4`,
      style: { height: "12px" },
      profile: {},
      title: {
        style: { fontSize: "0.75rem", color: "rgb(156 163 175)" },
        content: "ㅇ",
      },
    },

    // 영희
    {
      id: `contactList5`,
      onClick: () => {
        showListOption1();
        scrollElement.scroll(0, 315);
      },
      style: { height: "2rem" },
      profile: {
        style: {
          color: "white",
          backgroundColor: "rgb(251 207 232)",
          padding: "4px 4px",
        },
        content: "영",
      },
      title: {
        content: "영희",
      },
      children: isListClicked1 && (
        <ListOption title={{ content: "휴대전화 010-1234-0000" }}>
          {optionlistContent}
        </ListOption>
      ),
    },

    // ㅊ
    {
      id: `contactList6`,
      style: { height: "12px" },
      profile: { name: "" },
      title: {
        style: { color: "rgb(156 163 175)", fontSize: "0.75rem" },
        content: "ㅊ",
      },
    },
    //철수
    {
      id: `contactList7`,
      onClick: () => {
        showListOption2();
        scrollElement.scroll(0, 340);
      },
      style: { height: "2rem" },
      profile: {
        style: { color: "white", backgroundColor: "rgb(254 215 170)" },
        content: "철",
      },
      title: {
        content: "철수",
      },
      children: isListClicked2 && (
        <ListOption title={{ content: "휴대전화 010-1234-0001" }}>
          {optionlistContent}
        </ListOption>
      ),
    },
  ];
  return (
    <>
      <Top
        title={{ content: "전화" }}
        subTitle={{
          content: "전화번호가 저장된 연락처 2개",
        }}
      />
      <FlexInFlex
        rightItem={[
          <Icon key="plus" name="plus" style={{ fontSize: "0.875rem" }} />,
          <Icon key="search" name="search" style={{ fontSize: "0.875rem" }} />,
          <Icon
            key="dots"
            name="three-dots-vertical"
            style={{ fontSize: "0.875rem" }}
          />,
        ]}
      />
      <StackedListWrap
        style={{ border: "none" }}
        listTitle={{ content: "내 프로필" }}>
        {contactListProps.map((prop) => (
          <StackedList_Profile
            key={prop.id}
            onClick={prop.onClick}
            style={prop.style}
            profile={prop.profile}
            title={prop.title}>
            {prop.children}
          </StackedList_Profile>
        ))}
      </StackedListWrap>
    </>
  );
};

export default Contacts;
