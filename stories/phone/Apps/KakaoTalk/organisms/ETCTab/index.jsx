/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */

import Icon from "stories/phone/atoms/Icon";
import NoScrollBar from "components/DisplayBox/AppDisplays/components/layout/NoScrollBar";
import AppHeader from "components/DisplayBox/AppDisplays/components/layout/AppHeader";
import TargetContent from "components/DisplayBox/AppDisplays/components/TargetContent";

const ETCTab = ({ target = { setting: false } }) => {
  return (
    <NoScrollBar height="240px">
      <AppHeader
        leftItem={[<div className="text-sm font-bold">더보기</div>]}
        rightItem={[
          <Icon name="search" className="text-sm" />,
          <Icon name="upc-scan" className="ml-1 text-sm" />,
          <TargetContent
            targetOption={target.setting}
            isNextDescriptionLink={true}>
            <Icon name="gear" className="ml-1 text-sm" />
          </TargetContent>,
        ]}></AppHeader>
    </NoScrollBar>
  );
};

export default ETCTab;
