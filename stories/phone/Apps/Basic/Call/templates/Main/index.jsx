import { useState } from "react";
import NoScrollBar from "components/DisplayBox/AppDisplays/components/layout/NoScrollBar";
import CallTab from "stories/phone/Apps/Basic/Call/organisms/CallTab";
import CallKeypad from "stories/phone/Apps/Basic/Call/organisms/CallKeypad";
import Phone from "stories/phone/molecules/Phone";
import Histories from "stories/phone/Apps/Basic/Call/organisms/Histories";
import Contacts from "stories/phone/Apps/Basic/Call/organisms/Contacts";

// eslint-disable-next-line react/prop-types
const Main = ({ targetTab, target_videoCall, target_Call }) => {
  const [clickedTapName, setClickedTapName] = useState("키패드");

  return (
    <Phone>
      <NoScrollBar height="267px" style={{ textAlign: "center" }}>
        {clickedTapName === "키패드" && (
          <CallKeypad
            button1={{
              targetOption: targetTab === "키패드" && target_videoCall,
            }}
            button2={{
              targetOption: targetTab === "키패드" && target_Call,
            }}></CallKeypad>
        )}
        {clickedTapName === "최근기록" && (
          <Histories
            targetTab={targetTab}
            clickedTapName={clickedTapName}
            target_Call={target_Call}
          />
        )}
        {clickedTapName === "연락처" && <Contacts />}
      </NoScrollBar>
      <CallTab
        setClickedTapName={setClickedTapName}
        targetTab={targetTab}
        clickedTapName={clickedTapName}
      />
    </Phone>
  );
};

export default Main;
