import { useState } from "react";

import StackedListWrap from "components/DisplayBox/AppDisplays/components/list/StackedListWrap";
import StackedList_Profile from "components/DisplayBox/AppDisplays/components/list/StackedList_Profile";
import ListOption from "components/DisplayBox/AppDisplays/components/list/ListOption";
import FlexContent from "components/DisplayBox/AppDisplays/components/list/FlexContent";
import AppTitle_center from "components/DisplayBox/AppDisplays/components/layout/AppTitle_center";
import Icon from "stories/phone/atoms/Icon";
import TargetContent from "components/DisplayBox/AppDisplays/components/TargetContent";
import ProfileIcon from "stories/phone/atoms/ProfileIcon";

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
  const callHistoryListProps = [
    {
      id: `callHistoryList1`,
      onClickFunction: showListOption1,
      className1: "",
      content1: (
        <ProfileIcon
          name="telephone-outbound-fill"
          style={{ color: "rgb(21 128 61" }}
        />
      ),
      className2: "",
      content2: "영희",
      className3: "",
      content3: "오후 7:38",
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
      className1: "",
      content1: (
        <i className="profileIconWrap text-green-700 bi bi-telephone-outbound-fill"></i>
      ),
      className2: "",
      content2: "철수",
      className3: "",
      content3: "오후 5:20",
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
      <AppTitle_center title={{ content: "전화" }}></AppTitle_center>
      <FlexContent
        items={[
          // eslint-disable-next-line react/jsx-key
          <div />,
          // eslint-disable-next-line react/jsx-key
          <FlexContent
            items={[
              <Icon key="1" name="filter" className={`text-sm`} />,
              <Icon key="2" name="search" className={`text-sm `} />,
              <Icon
                key="3"
                name="three-dots-vertical"
                className={`text-sm `}
              />,
            ]}
          />,
        ]}
      />
      <StackedListWrap
        listTitle={{ content: "6월 17일" }}
        className={`border-none`}>
        {callHistoryListProps.map((prop) => (
          <StackedList_Profile
            key={prop.id}
            className="h-8"
            onClick={prop.onClickFunction ? prop.onClickFunction : null}
            profile={{
              className: `${prop.className1}`,
              content: prop.content1,
            }}
            title={{
              className: prop.className2,
              content: prop.content2,
            }}
            info={{
              className: `${prop.className3} text-end`,
              content: prop.content3,
            }}>
            {prop.children ? prop.children : null}
          </StackedList_Profile>
        ))}
      </StackedListWrap>
    </>
  );
};

export default Histories;
