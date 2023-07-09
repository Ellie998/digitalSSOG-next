import { useState } from "react";
import MakeList from "../components/MakeList";

import classes from "./KakaoSettingPage.module.css";
import TargetContent from "../components/TargetContent";

function KakaoSettingPage({ navTriger }) {
  const [choicedModal, setChoicedModal] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  return (
    <div className={classes.layout}>
      {choicedModal !== "" && (
        <div className={classes.modalWrap}>
          <div
            className={classes.backdrop}
            onClick={() => {
              setChoicedModal("");
              setIsChecked(false);
            }}></div>
          <div className={classes.modal}>
            <div className={classes.title}>초대 거부 및 나가기</div>
            <div className={classes.subTitle}>
              초대를 거부하고 채팅방을 나갑니다.
              <br />
              이후 이 채팅방에 다시 입장할 수 없습니다.
              <br />
              대화 내용을 포함한 채팅방의 정보는 모두 삭제됩니다.
            </div>
            <TargetContent targetOption={!isChecked}>
              <label
                className={`${classes.modalRadioWrap}`}
                htmlFor="info_config">
                <input
                  type="checkbox"
                  id="info_config"
                  onChange={(event) => {
                    navTriger === "groubChatLeave_rejectInvitation" && isChecked
                      ? setIsChecked(false)
                      : setIsChecked(true);
                  }}></input>
                <div className={classes.subTitle}>
                  위 내용을 모두 확인하였습니다.
                </div>
              </label>
            </TargetContent>
            <div className={classes.modalNavWrap}>
              <div
                className={classes["color_blue--bold"]}
                onClick={() => {
                  setChoicedModal("");
                  navTriger === "groubChatLeave_rejectInvitation" &&
                    setIsChecked(false);
                }}>
                취소
              </div>
              <TargetContent
                targetOption={
                  isChecked && navTriger === "groubChatLeave_rejectInvitation"
                }
                isNextDescriptionLink={true}>
                <div className={classes["color_grey--bold"]}>나가기</div>
              </TargetContent>
            </div>
          </div>
        </div>
      )}
      {/* header nav */}
      <div className={classes.main_header}>
        <MakeList
          listStyle={"flex_spaceBetween"}
          leftFlexItem={[
            {
              className: "title",
              content: (
                <TargetContent
                  targetOption={isChecked && navTriger === "groubChatLock"}
                  isNextDescriptionLink={true}>
                  <i className="bi bi-arrow-left"></i>
                </TargetContent>
              ),
            },
            { className: "title--bold", content: "채팅방 설정" },
          ]}></MakeList>
      </div>
      <div className={classes.border_bottom}>
        <div className={classes.groupProfileWrap}>
          <div className={classes["iconWrap_background--skyBlue"]}>
            <i className="bi bi-person-fill"></i>
          </div>
          <div className={classes["iconWrap_background--blue"]}>
            <i className="bi bi-person-fill"></i>
          </div>
          <div className={classes["iconWrap_background--purple"]}>
            <i className="bi bi-person-fill"></i>
          </div>
          <div className={classes.groupProfileSettingBtn}>
            <i className="bi bi-camera-fill"></i>
          </div>
        </div>
        <div className={classes.contentWrap}>
          <div className={classes.color_black}>채팅방 이름</div>
          <div className={classes.subTitle}>그룹채팅방 1</div>
        </div>
        <div className={classes.subTitle}>
          내가 설정한 사진과 이름은 나에게만 보입니다.
        </div>
      </div>
      <div className={classes.border_bottom}>
        <div className={classes.subTitle}>채팅방 설정</div>
        <div className={classes.contentWrap}>
          <div className={classes.color_black}>현재 채팅방 배경화면</div>
          <div className={`${classes.subTitle} ${classes.display_flex}`}>
            <div
              style={{
                width: "15px",
                height: "20px",
                backgroundColor: "rgb(178,197,217)",
                borderRadius: "2px",
                marginRight: "4px",
              }}></div>
            색상
          </div>
        </div>
        <div className={classes.contentWrap}>
          <div className={classes.color_black}>현재 채팅방 알림음</div>
          <div className={classes.subTitle}>카톡</div>
        </div>
        <TargetContent
          targetOption={navTriger === "groubChatLock" && !isChecked}>
          <div
            className={`${classes.contentWrap} ${classes["display_flex--speaceBetween"]}`}>
            <label className={`${classes.color_black} `} htmlFor="chatLock">
              현재 채팅방 입력창 잠금
            </label>
            <input
              type="checkbox"
              id="chatLock"
              className={classes.toggleInput}
              onChange={() => {
                navTriger === "groubChatLock" &&
                  isChecked &&
                  setIsChecked(false);
                navTriger === "groubChatLock" &&
                  !isChecked &&
                  setIsChecked(true);
              }}></input>
            <label
              className={` ${classes.toggleLabel}`}
              htmlFor="chatLock"></label>
          </div>
        </TargetContent>
      </div>
      <div className={classes.border_bottom}>
        <div className={classes.subTitle}>채팅방 관리</div>
        <div className={`${classes.color_black} ${classes.contentWrap}`}>
          홈 화면에 바로가기 추가
        </div>
        <div className={`${classes.color_black} ${classes.contentWrap}`}>
          대화 내용 내보내기
        </div>
        <div className={`${classes.color_black} ${classes.contentWrap}`}>
          대화 내용 모두 삭제
        </div>
      </div>
      <div className={classes.border_bottom}>
        <div className={classes.subTitle}>채팅방 용량 관리</div>
        <div className={classes.contentWrap}>
          <div className={classes.color_black}>사진 파일 삭제</div>
          <div className={classes.subTitle}>0.49 GB</div>
        </div>
        <div className={classes.contentWrap}>
          <div className={classes.color_black}>동영상 파일 삭제</div>
          <div className={classes.subTitle}>1.23 GB</div>
        </div>
        <div className={classes.contentWrap}>
          <div className={classes.color_grey}>음성 파일 삭제</div>
          <div className={classes.subTitle}>0 bytes</div>
        </div>
        <div className={classes.contentWrap}>
          <div className={classes.color_black}>전체 파일 모두 삭제</div>
          <div className={classes.subTitle}>1.72 GB</div>
        </div>
      </div>
      <div className={classes.buttonWrap}>
        <div className={classes.border_orange}>채팅방 나가기</div>
        <TargetContent
          targetOption={navTriger === "groubChatLeave_rejectInvitation"}>
          <div
            className={classes.background_orange}
            onClick={() => setChoicedModal("groubChatLeave_rejectInvitation")}>
            초대거부 및 나가기
          </div>
        </TargetContent>
      </div>
    </div>
  );
}

export default KakaoSettingPage;
