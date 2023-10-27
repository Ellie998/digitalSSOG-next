/* eslint-disable react/prop-types */
import MyLink from "component/client/MyLink/index";
import styled from "./index.module.css";

// eslint-disable-next-line react/prop-types
const CategoryName = ({ children, name, tabName, setTabName }) => {
  /**function for change query in home page */
  function linkClickHandler(e) {
    e.preventDefault();
    const tabName = e.target.id.replace(" ", "-");
    history.pushState("", "", `/?tab=${tabName}`);
    setTabName(tabName);
  }
  return (
    <li
      className={
        !tabName === name ? styled.container : styled["container--clicked"]
      }>
      <MyLink scroll={false} href={{ query: { tab: name } }}>
        <p
          className={
            !tabName === name
              ? styled.paragraphContainer
              : styled["paragraphContainer--clicked"]
          }
          onClick={linkClickHandler}
          id={name}>
          {children}
        </p>
      </MyLink>
    </li>
  );
};

export default CategoryName;
