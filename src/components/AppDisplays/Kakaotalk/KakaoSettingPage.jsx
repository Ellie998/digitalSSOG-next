import { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { PageContext } from "../sections/AppMain";
import classes from "./KakaoSettingPage.module.css";

import MakeList from "../Basic/components/MakeList";

function KakaoSettingPage() {
  const { urlContent, appName_basic } = useContext(PageContext);
  const [choicedModal, setChoicedModal] = useState("");
  return (
    <div className={classes.layout}>
      {/* header nav */}
      <div className={classes.main_header}>
        <MakeList
          listStyle={"flex_spaceBetween"}
          leftFlexItem={[
            {
              className: "title",
              content: <i className="bi bi-arrow-left"></i>,
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
        <div className={classes.contentWrap}>
          <div className={classes.color_black}>현재 채팅방 입력창 잠금</div>
        </div>
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
        <div
          className={classes.background_orange}
          onClick={() => setChoicedModal("inviteRejectAndLeave")}>
          초대거부 및 나가기
        </div>
      </div>
    </div>
  );
}

export default KakaoSettingPage;
