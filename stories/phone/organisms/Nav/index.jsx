/* eslint-disable react/prop-types */
// import styles from "./Nav.module.css";
import { useContext } from "react";
import UrlContext from "components/page_context/UrlContext";
import Icon from "stories/phone/atoms/Icon/index";
import Flex from "stories/phone/atoms/Flex/index";

function Nav() {
  const { setMyDescriptionId, myDescriptionId } = useContext(UrlContext);

  function goToBack() {
    myDescriptionId !== "0" &&
      setMyDescriptionId((prevValue) => {
        return `${prevValue - 1}`;
      });
  }
  function goToHome() {
    setMyDescriptionId("0");
  }
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
        <Icon key="list" name="list" />,
        <Icon key="home" onClick={goToHome} name="square" />,
        <Icon key="back" onClick={goToBack} name="chevron-double-left" />,
      ]}
    />
  );
}

export default Nav;
