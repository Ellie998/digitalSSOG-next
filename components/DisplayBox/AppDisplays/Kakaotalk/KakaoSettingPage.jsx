import { useState } from "react";

import classes from "./KakaoSettingPage.module.css";
import TargetContent from "../components/TargetContent";
import BackBtn from "../components/UI/BackBtn";
import AppHeader from "../components/UI/AppHeader";
import Switch from "../components/UI/Switch";

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
            <div className="display_title">초대 거부 및 나가기</div>
            <div className="display_subTitle--light">
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
                <div className="display_subTitle--light">
                  위 내용을 모두 확인하였습니다.
                </div>
              </label>
            </TargetContent>
            <div className={classes.modalNavWrap}>
              <div
                className="display_title--bold text-blue-600 cursor-pointer"
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
                <div className="display_title--bold cursor-pointer">나가기</div>
              </TargetContent>
            </div>
          </div>
        </div>
      )}
      {/* header nav */}
      <div className={classes.main_header}>
        <AppHeader
          leftItem={[
            <BackBtn
              targetOption={isChecked && navTriger === "groubChatLock"}
              isNavTriger={true}
            />,
          ]}
          rightItem={[
            <div className="display_title">채팅방 설정</div>,
          ]}></AppHeader>
      </div>
      {/* main */}
      <div className="border-solid border-b border-gray-200 mb-1">
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
          <div className="display_title">채팅방 이름</div>
          <div className="display_subTitle--light">그룹채팅방 1</div>
        </div>
        <div className="display_subTitle--light">
          내가 설정한 사진과 이름은 나에게만 보입니다.
        </div>
      </div>
      <div className="border-solid border-b border-gray-200 mb-1">
        <div className="display_subTitle--light">채팅방 설정</div>
        <div className={classes.contentWrap}>
          <div className="display_title">현재 채팅방 배경화면</div>
          <div className={`display_subTitle--light flex align-center`}>
            <div className="w-4 h-5 bg-kakaoBlue rounded-sm mr-1"></div>
            색상
          </div>
        </div>
        <div className={classes.contentWrap}>
          <div className="display_title">현재 채팅방 알림음</div>
          <div className="display_subTitle--light">카톡</div>
        </div>
        <TargetContent
          targetOption={navTriger === "groubChatLock" && !isChecked}>
          <Switch
            className=""
            theme={"#fff200"}
            title={"현재 채팅방 입력창 잠금"}
            setIsSwitchChecked={setIsChecked}
            id={`chatLockSwitch`}></Switch>
        </TargetContent>
      </div>
      <div className="border-solid border-b border-gray-200 mb-1">
        <div className="display_subTitle--light">채팅방 관리</div>
        <div className={`display_title ${classes.contentWrap}`}>
          홈 화면에 바로가기 추가
        </div>
        <div className={`display_title ${classes.contentWrap}`}>
          대화 내용 내보내기
        </div>
        <div className={`display_title ${classes.contentWrap}`}>
          대화 내용 모두 삭제
        </div>
      </div>
      <div className="border-solid border-b border-gray-200 mb-1">
        <div className="display_subTitle--light">채팅방 용량 관리</div>
        <div className={classes.contentWrap}>
          <div className="display_title">사진 파일 삭제</div>
          <div className="display_subTitle--light">0.49 GB</div>
        </div>
        <div className={classes.contentWrap}>
          <div className="display_title">동영상 파일 삭제</div>
          <div className="display_subTitle--light">1.23 GB</div>
        </div>
        <div className={classes.contentWrap}>
          <div className="display_title text-gray-400">음성 파일 삭제</div>
          <div className="display_subTitle--light">0 bytes</div>
        </div>
        <div className={classes.contentWrap}>
          <div className="display_title">전체 파일 모두 삭제</div>
          <div className="display_subTitle--light">1.72 GB</div>
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
