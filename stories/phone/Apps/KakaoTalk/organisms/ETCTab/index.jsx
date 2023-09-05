/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */

import Icon from "stories/phone/atoms/Icon";
import NoScrollBar from "components/DisplayBox/AppDisplays/components/layout/NoScrollBar";
import AppHeader from "components/DisplayBox/AppDisplays/components/layout/AppHeader";

import TargetBox from "stories/phone/atoms/TargetBox/index";

const ETCTab = ({ target = { setting: false }, tab }) => {
  return (
    <NoScrollBar height="260px">
      <AppHeader
        leftItem={[<div className="text-sm font-bold">더보기</div>]}
        rightItem={[
          <Icon name="search" className="text-sm" />,
          <Icon name="upc-scan" className="ml-1 text-sm" />,
          <TargetBox condition={target.setting && tab}>
            <Icon name="gear" className="ml-1 text-sm" />
          </TargetBox>,
        ]}></AppHeader>
    </NoScrollBar>
  );
};

export default ETCTab;
