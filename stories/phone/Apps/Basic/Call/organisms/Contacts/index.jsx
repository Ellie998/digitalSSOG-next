/* eslint-disable react/prop-types */
import { useState } from "react";

import ListOption from "components/DisplayBox/AppDisplays/components/list/ListOption";
import FlexContent from "components/DisplayBox/AppDisplays/components/list/FlexContent";

import Icon from "stories/phone/atoms/Icon/index";
import Top from "stories/phone/atoms/Top/index";
import FlexInFlex from "stories/phone/atoms/FlexInFlex/index";

import StackedListWrap from "stories/phone/molecules/StackedListWrap/index";

import StackedList_Profile from "stories/phone/molecules/StackedList_Profile/index";
import TargetBox from "stories/phone/atoms/TargetBox/index";

// eslint-disable-next-line react/prop-types
const Contacts = ({
  targetTab,
  clickedTapName,
  target = {
    call: false,
    videoCall: false,
    chat: false,
    info: false,
    person1: false,
  },
}) => {
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
          condition={targetTab === clickedTapName && target.call}
          isNextTriger={true}>
          <Icon
            style={{
              backgroundColor: "rgb(22, 163, 74)",
              color: "white",
              padding: "4px",
            }}
            name="telephone-fill"
          />
        </TargetBox>,
        <TargetBox
          key="chat"
          condition={targetTab === clickedTapName && target.chat}
          isNextTriger={true}>
          <Icon
            style={{
              backgroundColor: "rgb(69, 127, 243)",
              color: "white",
              padding: "4px",
            }}
            name="chat-fill"
          />
        </TargetBox>,
        <TargetBox
          key="camera"
          condition={targetTab === clickedTapName && target.videoCall}
          isNextTriger={true}>
          <Icon
            style={{
              backgroundColor: "rgb(22 ,163 ,74)",
              color: "white",
              padding: "4px",
            }}
            name="camera-video-fill"
          />
        </TargetBox>,
        <TargetBox
          key="info"
          condition={targetTab === clickedTapName && target.info}
          isNextTriger={true}>
          <Icon
            key="info"
            style={{
              backgroundColor: "rgb(97, 97, 97)",
              color: "white",
              padding: "4px",
            }}
            name="info"
          />
        </TargetBox>,
      ]}
    />
  );
  // 연락처 tap에 만들 list 정보
  const contactContents1 = [
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
        {contactContents1.map((prop) => (
          <StackedList_Profile
            key={prop.id}
            onClick={prop.onClick}
            style={{
              backgroundColor: "white",
              marginBottom: "8px",
              borderRadius: "12px",
              ...prop.style,
            }}
            profile={prop.profile}
            title={prop.title}>
            {prop.children}
          </StackedList_Profile>
        ))}
      </StackedListWrap>
      <StackedListWrap
        listTitle={{ content: "ㅇ" }}
        style={{
          border: "none",
        }}>
        <TargetBox
          condition={target.person1 && !isListClicked1}
          isNextTriger={false}>
          <StackedList_Profile
            onClick={() => {
              showListOption1();
              scrollElement.scroll(0, 315);
            }}
            style={{
              height: "2rem",
              backgroundColor: "white",
              borderTopLeftRadius: "12px",
              borderTopRightRadius: "12px",
              borderBottomLeftRadius: !isListClicked1 && "12px",
              borderBottomRightRadius: !isListClicked1 && "12px",
            }}
            //
            profile={{
              style: {
                color: "white",
                backgroundColor: "rgb(251 207 232)",
                padding: "4px 4px",
              },
              content: "영",
            }}
            title={{
              content: "영희",
            }}>
            {isListClicked1 && (
              <ListOption
                title={{
                  content: "휴대전화 010-1234-0000",
                  style: { color: "rgb(22, 163, 74)" },
                }}
                style={{
                  backgroundColor: "white",
                  borderBottomLeftRadius: "12px",
                  borderBottomRightRadius: "12px",
                }}>
                {optionlistContent}
              </ListOption>
            )}
          </StackedList_Profile>
        </TargetBox>
      </StackedListWrap>
      <StackedListWrap listTitle={{ content: "ㅊ" }} style={{ border: "none" }}>
        <TargetBox condition={false} isNextTriger={false}>
          <StackedList_Profile
            onClick={() => {
              showListOption2();
              scrollElement.scroll(0, 340);
            }}
            style={{
              height: "2rem",
              backgroundColor: "white",
              borderTopLeftRadius: "12px",
              borderTopRightRadius: "12px",
              borderBottomLeftRadius: !isListClicked2 && "12px",
              borderBottomRightRadius: !isListClicked2 && "12px",
            }} //
            profile={{
              style: {
                color: "white",
                backgroundColor: "rgb(254 215 170)",
                padding: "4px 4px",
              },
              content: "철",
            }}
            title={{
              content: "철수",
            }}>
            {isListClicked2 && (
              <ListOption
                style={{
                  backgroundColor: "white",
                  borderBottomLeftRadius: "12px",
                  borderBottomRightRadius: "12px",
                }}
                title={{
                  content: "휴대전화 010-1234-0001",
                  style: { color: "rgb(22, 163, 74)" },
                }}>
                {optionlistContent}
              </ListOption>
            )}
          </StackedList_Profile>
        </TargetBox>
      </StackedListWrap>
    </>
  );
};

export default Contacts;
