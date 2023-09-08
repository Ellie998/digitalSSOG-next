/* eslint-disable react/prop-types */
import { useState } from "react";

import CallTab from "stories/phone/Apps/Basic/Call/organisms/CallTab/index";
import CallKeypad from "stories/phone/Apps/Basic/Call/organisms/CallKeypad/index";
import Phone from "stories/phone/molecules/Phone/index";
import Histories from "stories/phone/Apps/Basic/Call/organisms/Histories/index";
import Contacts from "stories/phone/Apps/Basic/Call/organisms/Contacts/index";
import NoScrollbar from "stories/phone/atoms/NoScrollbar/index";

/** targetTab option "키패드","최근기록","연락처" */
// eslint-disable-next-line react/prop-types
const Main = ({
  targetTab,
  target = {
    videoCall: false,
    call: false,
    chat: false,
    info: false,
    person1: false,
  },
}) => {
  const [clickedTapName, setClickedTapName] = useState("키패드");

  return (
    <Phone
      backgroundColor={
        clickedTapName === "최근기록" || clickedTapName === "연락처"
          ? "rgb(244,244,244)"
          : "white"
      }>
      <NoScrollbar height="267px" style={{ textAlign: "center" }}>
        {clickedTapName === "키패드" && (
          <CallKeypad
            button1={{
              targetOption: targetTab === "키패드" && target.videoCall,
            }}
            button2={{
              targetOption: targetTab === "키패드" && target.call,
            }}></CallKeypad>
        )}
        {clickedTapName === "최근기록" && (
          <Histories
            targetTab={targetTab}
            clickedTapName={clickedTapName}
            target={target}
          />
        )}
        {clickedTapName === "연락처" && (
          <Contacts
            targetTab={targetTab}
            clickedTapName={clickedTapName}
            target={target}
          />
        )}
      </NoScrollbar>
      <CallTab
        setClickedTapName={setClickedTapName}
        targetTab={targetTab}
        clickedTapName={clickedTapName}
      />
    </Phone>
  );
};

export default Main;
