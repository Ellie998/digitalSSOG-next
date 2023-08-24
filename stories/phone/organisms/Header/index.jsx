/* eslint-disable react/prop-types */
import Icon from "stories/phone/atoms/Icon";
import Flex from "stories/phone/atoms/Flex";

const Header = () => {
  return (
    <Flex
      styles={{ width: "170px" }}
      items={[
        <Icon key="left" name={"brightness-high"} />,
        <Flex
          key="right"
          items={[
            <Icon key="battery" name="battery-full" />,
            <div key="time">9:54</div>,
          ]}
        />,
      ]}></Flex>
  );
};

export default Header;
