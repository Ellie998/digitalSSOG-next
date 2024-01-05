import Icon from "stories/phone/atoms/Icon";
import NoScrollBar from "components/DisplayBox/AppDisplays/components/layout/NoScrollBar";
import AppHeader from "components/DisplayBox/AppDisplays/components/layout/AppHeader";

const ShoppingTab = () => {
  return (
    <NoScrollBar height="260px">
      <AppHeader
        leftItem={[<div className="text-sm font-bold">쇼핑</div>]}
        rightItem={[
          <Icon name="bag-check" className="text-sm" />,
          <Icon name="gear" className="ml-1 text-sm" />,
        ]}></AppHeader>
    </NoScrollBar>
  );
};

export default ShoppingTab;
