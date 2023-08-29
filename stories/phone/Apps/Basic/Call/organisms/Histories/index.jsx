import { useState } from "react";

import ListOption from "components/DisplayBox/AppDisplays/components/list/ListOption";
import FlexContent from "components/DisplayBox/AppDisplays/components/list/FlexContent";
import Icon from "stories/phone/atoms/Icon";
import TargetContent from "components/DisplayBox/AppDisplays/components/TargetContent";

import Top from "stories/phone/atoms/Top";
import FlexInFlex from "stories/phone/atoms/FlexInFlex";
import RecentHistoryLine from "stories/phone/Apps/Basic/molecules/RecentHistoryLine";
import StackedListWrap from "stories/phone/molecules/StackedListWrap";

// eslint-disable-next-line react/prop-types
const Histories = ({ targetTab, clickedTapName, target_Call }) => {
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
        style={{ border: "none" }}
        listTitle={{ content: "6월 17일" }}>
        {callHistoryListProps.map((prop) => (
          <RecentHistoryLine
            key={prop.id}
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
          </RecentHistoryLine>
        ))}
      </StackedListWrap>
    </>
  );
};

export default Histories;
