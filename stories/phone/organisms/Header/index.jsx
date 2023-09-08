/* eslint-disable react/prop-types */
import Icon from "stories/phone/atoms/Icon/index";
import Flex from "stories/phone/atoms/Flex/index";

const Header = ({ backgroundColor = "white" }) => {
  return (
    <Flex
      style={{ width: "170px", backgroundColor: backgroundColor }}
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
