import { useContext } from "react";
import { PageContext } from "../../sections/AppMain";
import classes from "./SelectPerson.module.css";
import { NavLink } from "react-router-dom";

function SelectPerson() {
  const {
    appName,
    urlContent,
    descriptionId,
    realFunctionName,
    //
    functionName_sendMessage,
    functionName_sendImg,
    functionName_reserveMessage,
    functionName_sendAudio,
    functionName_sendPhoneNum,
    //
    appName_basic,
  } = useContext(PageContext);
  return (
    <section className={classes.appMain}>
      <div className={classes.appHeader}>대화 멤버 선택</div>
      <div className={classes.searchBox}>
        <p>받는 사람</p>
        <input type="text" placeholder="이름 또는 번호 입력"></input>
      </div>
      <ul className={classes.numLists}>
        <NavLink
          data-tooltip={
            appName === appName_basic &&
            (realFunctionName === functionName_sendMessage ||
              realFunctionName === functionName_sendImg ||
              realFunctionName === functionName_reserveMessage ||
              realFunctionName === functionName_sendAudio ||
              (realFunctionName === functionName_sendPhoneNum &&
                descriptionId === "2"))
              ? `클릭!`
              : null
          }
          to={
            realFunctionName === functionName_sendMessage ||
            realFunctionName === functionName_sendImg ||
            realFunctionName === functionName_reserveMessage ||
            realFunctionName === functionName_sendAudio ||
            (realFunctionName === functionName_sendPhoneNum &&
              descriptionId === "2") ||
            (realFunctionName === "문자 전달" && `${urlContent}`)
          }>
          <li>
            <div className={classes.firstNameBox}>홍</div>
            <div>홍길동</div>
            <div className={classes.callNumber}>010-0000-0000</div>
          </li>
        </NavLink>
        <NavLink
          data-tooltip={
            appName === appName_basic &&
            realFunctionName === functionName_sendPhoneNum &&
            descriptionId === "4"
              ? `클릭!`
              : null
          }
          to={
            appName === appName_basic &&
            realFunctionName === functionName_sendPhoneNum &&
            descriptionId === "4" &&
            `${urlContent}`
          }>
          <li>
            <div className={classes.firstNameBox}>홍</div>
            <div>홍길순</div>
            <div className={classes.callNumber}>010-0000-0000</div>
          </li>
        </NavLink>
      </ul>
    </section>
  );
}

export default SelectPerson;
