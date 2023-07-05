import { useContext } from "react";

import classes from "./SelectPerson.module.css";
import UrlContext from "../../../../page_context/UrlContext";
import NextDescriptionLink from "../../../../NextDescriptionLink";

function SelectPerson() {
  const {
    appName,
    urlContent,
    descriptionId,
    functionName,
    //
    functionName_sendMessage,
    functionName_sendImg,
    functionName_reserveMessage,
    functionName_resendMessage,
    functionName_sendAudio,
    functionName_sendPhoneNum,
    //
    appName_basic,
  } = useContext(UrlContext);
  return (
    <section className={classes.appMain}>
      <div className={classes.appHeader}>대화 멤버 선택</div>
      <div className={classes.searchBox}>
        <p>받는 사람</p>
        <input type="text" placeholder="이름 또는 번호 입력"></input>
      </div>
      <ul className={classes.numLists}>
        <NextDescriptionLink
          nextOption={
            functionName === functionName_sendMessage ||
            functionName === functionName_sendImg ||
            functionName === functionName_reserveMessage ||
            functionName === functionName_sendAudio ||
            (functionName === functionName_sendPhoneNum &&
              descriptionId === "2") ||
            functionName === functionName_resendMessage
          }>
          <li>
            <div className={classes.firstNameBox}>홍</div>
            <div>홍길동</div>
            <div className={classes.callNumber}>010-0000-0000</div>
          </li>
        </NextDescriptionLink>
        <NextDescriptionLink
          nextOption={
            appName === appName_basic &&
            functionName === functionName_sendPhoneNum &&
            descriptionId === "4"
          }>
          <li>
            <div className={classes.firstNameBox}>홍</div>
            <div>홍길순</div>
            <div className={classes.callNumber}>010-0000-0000</div>
          </li>
        </NextDescriptionLink>
      </ul>
    </section>
  );
}

export default SelectPerson;
