import { useContext } from "react";

import UrlContext from "../../../../../page_context/UrlContext";

import classes from "./UnreadMessage.module.css";
import TargetContent from "../../../components/TargetContent";
import StackedList_Profile from "../../../components/list/StackedList_Profile";

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
        <TargetContent
          targetOption={functionName === functionName_seeMessage}
          isNextDescriptionLink={true}>
          <StackedList_Profile
            profile={{ className: "bg-gray-200", content: "홍" }}
            title={{ className: "ml-1", content: "홍길동" }}
            info={{
              className: "text-end",
              content: "오전 8:03",
            }}
            subTitle={{
              className: "ml-1 col-end-6",
              content: "결혼식 장소 정보입니다...",
            }}
            subInfo={{
              className:
                functionName === functionName_seeMessage ? "alert--yellow" : "",
              content: functionName === functionName_seeMessage ? "1" : "",
            }}></StackedList_Profile>
        </TargetContent>

        {/* </div> */}
      </section>
    </>
  );
}

export default UnreadMessage;
