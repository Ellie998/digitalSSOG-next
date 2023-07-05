import Link from "next/link";
import { useContext } from "react";
import { PageContext } from "../../../sections/AppMain";
import classes from "./SelectPerson.module.css";
import UrlContext from "../../../../page_context/UrlContext";

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
        <Link
          data-tooltip={
            appName === appName_basic &&
            (functionName === functionName_sendMessage ||
              functionName === functionName_sendImg ||
              functionName === functionName_reserveMessage ||
              functionName === functionName_sendAudio ||
              (functionName === functionName_sendPhoneNum &&
                descriptionId === "2") ||
              functionName === functionName_resendMessage)
              ? "클릭!"
              : null
          }
          href={
            functionName === functionName_sendMessage ||
            functionName === functionName_sendImg ||
            functionName === functionName_reserveMessage ||
            functionName === functionName_sendAudio ||
            (functionName === functionName_sendPhoneNum &&
              descriptionId === "2") ||
            functionName === functionName_resendMessage
              ? urlContent
              : ""
          }>
          <li>
            <div className={classes.firstNameBox}>홍</div>
            <div>홍길동</div>
            <div className={classes.callNumber}>010-0000-0000</div>
          </li>
        </Link>
        <Link
          data-tooltip={
            appName === appName_basic &&
            functionName === functionName_sendPhoneNum &&
            descriptionId === "4"
              ? `클릭!`
              : null
          }
          href={
            appName === appName_basic &&
            functionName === functionName_sendPhoneNum &&
            descriptionId === "4"
              ? urlContent
              : ""
          }>
          <li>
            <div className={classes.firstNameBox}>홍</div>
            <div>홍길순</div>
            <div className={classes.callNumber}>010-0000-0000</div>
          </li>
        </Link>
      </ul>
    </section>
  );
}

export default SelectPerson;
