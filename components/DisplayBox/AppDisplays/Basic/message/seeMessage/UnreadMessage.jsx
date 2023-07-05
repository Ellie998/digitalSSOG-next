import { useContext } from "react";

import UrlContext from "../../../../../page_context/UrlContext";
import NextDescriptionLink from "../../../../../NextDescriptionLink";
import classes from "./UnreadMessage.module.css";
import MakeList from "../../components/MakeList";

function UnreadMessage() {
  const { myMethodId, functionName, functionName_seeMessage } =
    useContext(UrlContext);

  return (
    <>
      <section className={classes.layout}>
        {functionName === functionName_seeMessage && myMethodId === "2" && (
          <div className={classes.header}>
            <div>읽지 않은 메시지</div>
            <div>
              <i className="bi bi-three-dots-vertical"></i>
            </div>
          </div>
        )}

        {/* <div className={classes.main_messageList}> */}
        <NextDescriptionLink
          nextOption={
            functionName === functionName_seeMessage && myMethodId === "2"
          }>
          <MakeList
            listStyle="grid_twoLine"
            item1={{
              className: "iconWrap_background--grey",
              content: "홍",
            }}
            item2={{
              className: "title",
              content: "홍길동",
            }}
            subItem2={{
              className: "subTitle",
              content: "결혼식 장소 정보입니다...",
            }}
            item3={{
              classeName: "info",
              content: "오전 8:03",
            }}
            subItem3={{
              className: "subInfo",
              content: functionName === functionName_seeMessage ? "1" : "",
            }}></MakeList>
        </NextDescriptionLink>
        {/* </div> */}
      </section>
    </>
  );
}

export default UnreadMessage;
