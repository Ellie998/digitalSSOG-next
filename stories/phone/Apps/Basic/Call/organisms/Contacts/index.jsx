import { useState } from "react";

import StackedListWrap from "components/DisplayBox/AppDisplays/components/list/StackedListWrap";
import StackedList_Profile from "components/DisplayBox/AppDisplays/components/list/StackedList_Profile";
import ListOption from "components/DisplayBox/AppDisplays/components/list/ListOption";
import FlexContent from "components/DisplayBox/AppDisplays/components/list/FlexContent";
import AppTitle_center from "components/DisplayBox/AppDisplays/components/layout/AppTitle_center";
import Icon from "stories/phone/atoms/Icon";
import TargetContent from "components/DisplayBox/AppDisplays/components/TargetContent";

// eslint-disable-next-line react/prop-types
const Contacts = ({ targetTab, clickedTapName, target_Call }) => {
  const scrollElement = document.getElementById("component_NoScrollBar");

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
        <TargetContent
          key="telephone"
          targetOption={targetTab === clickedTapName && target_Call}
          isNextDescriptionLink={true}>
          <Icon style={{ color: "rgb(22 163 74)" }} name="telephone-fill" />
        </TargetContent>,
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
      className: "h-8",
      profile: {
        className: "bg-pink-300 ",
        content: <i className="text-white bi bi-person-fill"></i>,
      },
      title: {
        className: "",
        content: "진수",
      },
    },
    // 즐겨찾는 연락처 추가
    {
      id: `contactList2`,
      className: "h-8",
      profile: {
        className: "bg-yellow-200",
        content: <i className="text-white bi bi-star"></i>,
      },
      title: {
        className: "",
        content: "즐겨찾는 연락처 추가",
      },
    },

    //그룹
    {
      id: `contactList3`,
      className: "h-8",
      profile: {
        className: "bg-gray-200",
        content: <i className="text-white bi bi-people-fill"></i>,
      },
      title: {
        className: "",
        content: "그룹",
      },
    },

    // ㅇ
    {
      id: `contactList4`,
      className: "h-3",
      profile: {
        className: "",
        content: "",
      },
      title: {
        className: "text-gray-400 text-xs",
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
      className: "h-8",
      profile: {
        className: "bg-pink-200",
        content: <i className="iconWrap text-white bi bi-person-fill"></i>,
      },
      title: {
        className: "",
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
      className: "h-3",
      profile: {
        className: "",
        content: "",
      },
      title: {
        className: "text-gray-400 text-xs",
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
      className: "h-8",
      profile: {
        className: "bg-orange-200",
        content: <i className="text-white bi bi-person-fill"></i>,
      },
      title: {
        className: "",
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
      <AppTitle_center
        title={{ content: "전화" }}
        subTitle={{
          content: "전화번호가 저장된 연락처 2개",
        }}></AppTitle_center>
      <FlexContent
        items={[
          // eslint-disable-next-line react/jsx-key
          <div />,
          // eslint-disable-next-line react/jsx-key
          <FlexContent
            items={[
              // eslint-disable-next-line react/jsx-key
              <Icon name="plus" className={`text-sm`} />,
              // eslint-disable-next-line react/jsx-key
              <Icon name="search" className={`text-sm`} />,
              // eslint-disable-next-line react/jsx-key
              <Icon name="three-dots-vertical" className={`text-sm`} />,
            ]}
          />,
        ]}
      />
      <StackedListWrap
        listTitle={{ content: "내 프로필" }}
        className={`border-none`}>
        {contactListProps.map((prop) => (
          <StackedList_Profile
            key={prop.id}
            onClick={prop.onClick}
            className={prop.className}
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
