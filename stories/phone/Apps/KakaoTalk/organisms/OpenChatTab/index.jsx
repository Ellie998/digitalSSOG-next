/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import Icon from "stories/phone/atoms/Icon";
import NoScrollBar from "components/DisplayBox/AppDisplays/components/layout/NoScrollBar";
import AppHeader from "components/DisplayBox/AppDisplays/components/layout/AppHeader";

const OpenChatTab = () => {
  return (
    <NoScrollBar height="240px">
      <AppHeader
        leftItem={[<div className="text-sm font-bold">오픈채팅</div>]}
        rightItem={[
          <Icon name="plus-circle" className=" text-sm" />,
          <Icon name="chat" className="ml-1 text-sm" />,
          <Icon name="gear" className="ml-1 text-sm" />,
        ]}></AppHeader>
    </NoScrollBar>
  );
};

export default OpenChatTab;
