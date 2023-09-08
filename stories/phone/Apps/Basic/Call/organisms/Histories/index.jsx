import { useState } from "react";

import ListOption from "components/DisplayBox/AppDisplays/components/list/ListOption";
import FlexContent from "components/DisplayBox/AppDisplays/components/list/FlexContent";

import Top from "stories/phone/atoms/Top/index";
import Icon from "stories/phone/atoms/Icon/index";
import FlexInFlex from "stories/phone/atoms/FlexInFlex/index";
import StackedListWrap from "stories/phone/molecules/StackedListWrap/index";
import StackedList_Profile from "stories/phone/molecules/StackedList_Profile/index";
import TargetBox from "stories/phone/atoms/TargetBox/index";

// eslint-disable-next-line react/prop-types
const Histories = ({
  targetTab,
  clickedTapName,
  target = { call: false, person1: false },
}) => {
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
  const optionlistContent = (
    <FlexContent
      items={[
        <TargetBox
          key="telephone"
          condition={targetTab === clickedTapName && target.call}>
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
            key="chat"
            style={{
              backgroundColor: "rgb(69, 127, 243)",
              color: "white",
              padding: "4px",
            }}
            name="chat-fill"
          />
        </TargetBox>,
        <Icon
          key="camera"
          style={{
            backgroundColor: "rgb(22 ,163 ,74)",
            color: "white",
            padding: "4px",
          }}
          name="camera-video-fill"
        />,
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

  const callHistoryListProps = [
    {
      id: `callHistoryList1`,
      onClickFunction: showListOption1,
      profile: {
        name: "telephone-outbound-fill",
        style: { color: "rgb(21 128 61)" },
      },
      title: { content: "영희" },
      info: { content: "오후 7:38" },
      children: isListClicked1 && (
        <ListOption
          style={{
            backgroundColor: "white",
            borderBottomLeftRadius: "12px",
            borderBottomRightRadius: "12px",
          }}
          title={{ content: "휴대전화 010-1234-0000" }}
          subTitle={{ content: "휴대전화 발신전화, 0분 33초" }}>
          {optionlistContent}
        </ListOption>
      ),
    },
    {
      id: `callHistoryList2`,
      onClickFunction: showListOption2,

      profile: {
        name: "telephone-outbound-fill",
        style: { color: "rgb(21 128 61)" },
      },
      title: { content: "철수" },
      info: { content: "오후 5:20" },
      children: isListClicked2 && (
        <ListOption
          style={{
            backgroundColor: "white",
            borderBottomLeftRadius: "12px",
            borderBottomRightRadius: "12px",
          }}
          title={{ content: "휴대전화 010-1234-0000" }}
          subTitle={{ content: "휴대전화 발신전화, 0분 24초" }}>
          {optionlistContent}
        </ListOption>
      ),
    },
  ];
  return (
    <>
      <Top title={{ content: "전화" }} />
      <FlexInFlex
        rightItem={[
          <Icon key="1" name="filter" style={{ fontSize: "0.875rem" }} />,
          <Icon key="2" name="search" style={{ fontSize: "0.875rem" }} />,
          <Icon
            key="3"
            name="three-dots-vertical"
            style={{ fontSize: "0.875rem" }}
          />,
        ]}
      />
      <StackedListWrap
        style={{ border: "none", marginTop: "10px" }}
        listTitle={{ content: "6월 17일" }}>
        {callHistoryListProps.map((prop, i) => (
          <TargetBox
            key={i}
            condition={i === 0 && !isListClicked1 && target.person1}
            isNextTriger={false}>
            <StackedList_Profile
              style={{
                padding: "4px 0",
                backgroundColor: "white",
                borderTopLeftRadius: i === 0 ? "12px" : "0px",
                borderTopRightRadius: i === 0 ? "12px" : "0px",
                borderBottomLeftRadius:
                  i === 1 && !isListClicked2 ? "12px" : "0px",
                borderBottomRightRadius:
                  i === 1 && !isListClicked2 ? "12px" : "0px",
                borderTop: i === 1 ? "1px solid rgb(233,233,233)" : "none",
              }}
              profile={{
                name: prop.profile.name,
                style: prop.profile.style,
              }}
              title={{
                content: prop.title.content,
              }}
              info={{
                content: prop.info.content,
              }}
              onClick={prop.onClickFunction ? prop.onClickFunction : null}>
              {prop.children ? prop.children : null}
            </StackedList_Profile>
          </TargetBox>
        ))}
      </StackedListWrap>
    </>
  );
};

export default Histories;
