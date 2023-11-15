/* eslint-disable react/prop-types */
import MyLink from "component/client/MyLink/index";
import styled from "./index.module.css";

// eslint-disable-next-line react/prop-types
const CategoryName = ({ children, name, tabName, icon }) => {
  /**function for change query in home page */

  return (
    <MyLink scroll={false} href={{ query: { tab: name } }}>
      <li
        className={`${styled[`categoryWrap`]} ${
          tabName === name ? styled["categoryWrap--clicked"] : ""
        }`}>
        <p className={`${styled.paragraphContainer}`} id={name}>
          {icon}
        </p>
        <p className={`${styled.paragraphContainer}`} id={name}>
          {children}
        </p>
      </li>
    </MyLink>
  );
};

export default CategoryName;
