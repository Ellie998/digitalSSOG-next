import { BsChevronDoubleLeft, BsList, BsSquare } from "react-icons/bs";
import Flex from "../phone-ui/flex";

function PhoneNav() {
  return (
    <Flex
      style={{
        width: "170px",
        zIndex: "1",
        fontSize: "0.7rem",
        gridRow: "5/6",
        padding: "0 10px",
      }}
      items={[
        <BsList key="list" />,
        <BsSquare key="home" />,
        <BsChevronDoubleLeft key="back" />,
      ]}
    />
  );
}

export default PhoneNav;
