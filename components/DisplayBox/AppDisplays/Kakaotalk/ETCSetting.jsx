import { useState } from "react";

import classes from "./ETCSetting.module.css";
import TargetContent from "../components/TargetContent";
import StackedList_Profile from "../components/list/StackedList_Profile";

function ETCSetting({ navTriger }) {
  const [choicedModal, setChoicedModal] = useState("");
  const [choicedSetting, setChoicedSetting] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  return (
    <div className={classes.layout}>
      {choicedModal !== "" && (
        <div className={classes.modalWrap}>
          <div
            className={classes.backdrop}
            onClick={() => setChoicedModal("")}></div>
          <div className={classes.modal}>
            <div className={classes.title}>초대 거부 및 나가기</div>
            <div className={classes.subTitle}>
              초대를 거부하고 채팅방을 나갑니다.
              <br />
              이후 이 채팅방에 다시 입장할 수 없습니다.
              <br />
              대화 내용을 포함한 채팅방의 정보는 모두 삭제됩니다.
            </div>
            <label
              className={`${classes.modalRadioWrap}`}
              htmlFor="info_config">
              <input
                type="checkbox"
                id="info_config"
                onChange={(event) => setIsChecked(event.target.value)}></input>
              <div className={classes.subTitle}>
                위 내용을 모두 확인하였습니다.
              </div>
            </label>
            <div className={classes.modalNavWrap}>
              <div
                className={classes["color_blue--bold"]}
                onClick={() => setChoicedModal("")}>
                취소
              </div>
              <TargetContent
                targetOption={
                  isChecked && navTriger === "leaveOutBtn_inviteReject"
                }
                isNextDescriptionLink={true}>
                <div className={classes["color_grey--bold"]}>나가기</div>
              </TargetContent>
            </div>
          </div>
        </div>
      )}
      {choicedSetting !== "" && (
        <div>
          <div className={classes.main_header}>
            <TargetContent targetOption={isChecked}>
              <div
                onClick={() => {
                  setChoicedSetting("");
                  setChoicedModal("");
                }}>
                <i className="bi bi-arrow-left"></i>
              </div>
            </TargetContent>
            <div>실험실</div>
          </div>
          <div>
            <div className={classes.groupProfileWrap}>
              <div className={classes["iconWrap_background--yellow"]}>
                <i className="bi bi-lightbulb"></i>
              </div>
            </div>
            <div className={classes.contentWrap_center}>
              <div className={classes.color_black}>카카오 실험실</div>
              <div className={classes.subTitle}>
                출시 준비 중인 새로운 기능을 먼저 이용해 볼 수 있습니다.
                <br />
                실험실 기능은 원하실 때 끄고 켜실 수 있습니다.
              </div>
            </div>
          </div>
          <div className={classes.border_bottom}>
            {/* 실험실 이용하기 */}
            <div className={`${classes.contentWrap} `}>
              <div className={`${classes["display_flex--speaceBetween"]}`}>
                <label className={`${classes.title} `} htmlFor="set1">
                  실험실 이용하기
                </label>
                <input
                  type="checkbox"
                  id="set1"
                  className={classes.toggleInput}></input>
                <label
                  className={` ${classes.toggleLabel}`}
                  htmlFor="set1"></label>
              </div>
            </div>
            {/* 톡 음성모드 */}
            <div className={`${classes.contentWrap} `}>
              <div className={`${classes.title} `}>톡 음성모드</div>
              <div className={classes.subTitle}>사용안함</div>
            </div>
            {/* 말풍선 번역 */}
            <div className={`${classes.contentWrap} `}>
              <div className={`${classes["display_flex--speaceBetween"]}`}>
                <label className={`${classes.color_black} `} htmlFor="set2">
                  말풍선 번역
                </label>
                <input
                  type="checkbox"
                  id="set2"
                  className={classes.toggleInput}></input>
                <label
                  className={` ${classes.toggleLabel}`}
                  htmlFor="set2"></label>
              </div>
              <div className={classes.subTitle}>
                카카오톡에서 사용하는 언어와 다른 언어의 말풍선을 길게 눌러
                번역할 수 있습니다.
              </div>
            </div>
            {/* 채팅방 조용히 나가기 */}
            <TargetContent
              targetOption={
                navTriger === "groubChatLeave_quietly" && !isChecked
              }>
              <div className={`${classes.contentWrap} `}>
                <div className={`${classes["display_flex--speaceBetween"]}`}>
                  <label className={`${classes.color_black} `} htmlFor="set3">
                    채팅방 조용히 나가기
                  </label>
                  <input
                    type="checkbox"
                    id="set3"
                    className={classes.toggleInput}
                    onChange={() => {
                      navTriger === "groubChatLeave_quietly" &&
                        isChecked &&
                        setIsChecked(false);
                      navTriger === "groubChatLeave_quietly" &&
                        !isChecked &&
                        setIsChecked(true);
                    }}></input>
                  <label
                    className={` ${classes.toggleLabel}`}
                    htmlFor="set3"></label>
                </div>
                <div className={classes.subTitle}>
                  그룹채팅방에서 나가기 시, 조용히 나가기를 선택할 수 있습니다.
                  조용히 나가는 경우 채팅방에 나간 기록이 표시되지 않습니다.
                </div>
              </div>
            </TargetContent>
            {/* 빠른 공감하기 */}
            <div className={`${classes.contentWrap} `}>
              <div className={`${classes["display_flex--speaceBetween"]}`}>
                <label className={`${classes.color_black} `} htmlFor="set4">
                  빠른 공감하기
                </label>
                <input
                  type="checkbox"
                  id="set4"
                  className={classes.toggleInput}></input>
                <label
                  className={` ${classes.toggleLabel}`}
                  htmlFor="set4"></label>
              </div>
              <div className={classes.subTitle}>
                말풍선을 빠르게 두 번 탭해 하트 공감을 날릴 수 있습니다.
              </div>
            </div>
            {/* 인앱브라우저 앱 화면 분리 */}
            <div className={`${classes.contentWrap} `}>
              <div className={`${classes["display_flex--speaceBetween"]}`}>
                <label className={`${classes.color_black} `} htmlFor="set5">
                  인앱브라우저 앱 화면 분리
                </label>
                <input
                  type="checkbox"
                  id="set5"
                  className={classes.toggleInput}></input>
                <label
                  className={` ${classes.toggleLabel}`}
                  htmlFor="set5"></label>
              </div>
              <div className={classes.subTitle}>
                채팅방에 전달된 URL 확인 시 사용중인 채팅방과 분리된 화면으로
                오픈됩니다. <br />
                브라우저를 닫지 않고 화면 전환을 통해 채팅방의 대화 내용을
                확인할 수 있어요.
              </div>
            </div>
            {/* 키워드 알림 모아보기 */}
            <div className={`${classes.contentWrap} `}>
              <div className={`${classes["display_flex--speaceBetween"]}`}>
                <label className={`${classes.color_black} `} htmlFor="set6">
                  키워드 알림 모아보기
                </label>
                <input
                  type="checkbox"
                  id="set6"
                  className={classes.toggleInput}></input>
                <label
                  className={` ${classes.toggleLabel}`}
                  htmlFor="set6"></label>
              </div>
              <div className={classes.subTitle}>
                등록된 키워드에 해당하는 메시지만 모아볼 수 있습니다.
              </div>
            </div>
          </div>
          <div>
            <div className={classes.subTitle}>
              실험실 기능은 바람처럼 나타났다 소리없이 사라질 수 있습니다.
            </div>
          </div>
        </div>
      )}
      {/* setting page */}
      {choicedSetting === "" && (
        <div>
          <div className={classes.main_header}>
            <TargetContent
              targetOption={isChecked}
              isNextDescriptionLink={true}>
              <i className="bi bi-arrow-left"></i>
            </TargetContent>
            <div>설정</div>
          </div>
          {/* 나 */}
          <div className={classes.border_bottom}>
            <div className={classes.contentWrap}>
              <StackedList_Profile
                className="h-8"
                profile={{
                  className: "bg-kakaoPurple ",
                  content: <i className="text-white bi bi-person-fill"></i>,
                }}
                title={{
                  className: "ml-2",
                  content: "나",
                }}
                info={{
                  className: "borderGray",
                  content: "프로필 관리",
                }}
                subTitle={{
                  className: "col-end-7 ml-2",
                  content: "+82 10-0000-0000",
                }}
                subInfo={{}}></StackedList_Profile>
            </div>
          </div>
          <div className={classes.border_bottom}>
            {/*개인/보안 */}
            <div className={classes.contentWrap}>
              <StackedList_Profile
                className="h-8"
                profile={{
                  className: "",
                  content: <i className="text-base bi bi-lock"></i>,
                }}
                title={{
                  className: "text-xs display_subTitle",
                  content: "개인/보안",
                }}></StackedList_Profile>
            </div>
            {/*친구 */}
            <div className={classes.contentWrap}>
              <div className={classes.contentWrap}>
                <StackedList_Profile
                  className="h-8"
                  profile={{
                    className: "",
                    content: <i className="text-base bi bi-person"></i>,
                  }}
                  title={{
                    className: "text-xs display_subTitle",
                    content: "친구",
                  }}></StackedList_Profile>
              </div>
            </div>
            {/*알림 */}
            <div className={classes.contentWrap}>
              <StackedList_Profile
                className="h-8"
                profile={{
                  className: "",
                  content: <i className="text-base bi bi-bell"></i>,
                }}
                title={{
                  className: "text-xs display_subTitle",
                  content: "알림",
                }}></StackedList_Profile>
            </div>
            {/*화면 */}
            <div className={classes.contentWrap}>
              <StackedList_Profile
                className="h-8"
                profile={{
                  className: "",
                  content: <i className="text-base bi bi-brightness-low"></i>,
                }}
                title={{
                  className: "text-xs display_subTitle",
                  content: "화면",
                }}></StackedList_Profile>
            </div>
            {/* 테마 */}
            <div className={classes.contentWrap}>
              <StackedList_Profile
                className="h-8"
                profile={{
                  className: "",
                  content: <i className="text-base bi bi-palette"></i>,
                }}
                title={{
                  className: "text-xs display_subTitle",
                  content: "기본테마",
                }}></StackedList_Profile>
            </div>
            {/*채팅 */}
            <div className={classes.contentWrap}>
              <StackedList_Profile
                className="h-8"
                profile={{
                  className: "",
                  content: <i className="text-base bi bi-chat"></i>,
                }}
                title={{
                  className: "text-xs display_subTitle",
                  content: "채팅",
                }}></StackedList_Profile>
            </div>
            {/*통화 */}
            <div className={classes.contentWrap}>
              <StackedList_Profile
                className="h-8"
                profile={{
                  className: "",
                  content: <i className="text-base bi bi-telephone"></i>,
                }}
                title={{
                  className: "text-xs display_subTitle",
                  content: "통화",
                }}></StackedList_Profile>
            </div>
            {/* 언어 */}
            <div className={classes.contentWrap}>
              <StackedList_Profile
                className="h-8"
                profile={{
                  className: "",
                  content: <i className="text-base bi bi-globe"></i>,
                }}
                title={{
                  className: "text-xs display_subTitle",
                  content: "언어",
                }}
                subTitle={{
                  className: "ml-2",
                  content: "시스템 기본 언어",
                }}></StackedList_Profile>
            </div>
            {/*실험실 */}
            <TargetContent
              targetOption={
                navTriger === "groubChatLeave_quietly" && !isChecked
              }>
              <div
                className={classes.contentWrap}
                onClick={() => setChoicedSetting("experimentRoom")}>
                <StackedList_Profile
                  className="h-8"
                  profile={{
                    className: "",
                    content: <i className="text-base bi bi-lightbulb"></i>,
                  }}
                  title={{
                    className: "text-xs display_subTitle",
                    content: "실험실",
                  }}></StackedList_Profile>
              </div>
            </TargetContent>
            {/*기타 */}
            <div className={classes.contentWrap}>
              <StackedList_Profile
                className="h-8"
                profile={{
                  className: "",
                  content: <i className="text-base bi bi-three-dots"></i>,
                }}
                title={{
                  className: "text-xs display_subTitle",
                  content: "기타",
                }}></StackedList_Profile>
            </div>
          </div>
          <div className={classes.border_bottom}>
            {/*공지사항 */}
            <div className={classes.contentWrap}>
              <StackedList_Profile
                className="h-8"
                profile={{
                  className: "",
                  content: <i className="text-base bi bi-megaphone"></i>,
                }}
                title={{
                  className: "text-xs display_subTitle",
                  content: "공지사항",
                }}></StackedList_Profile>
            </div>
            {/*카톡 안녕 가이드 */}
            <div className={classes.contentWrap}>
              <StackedList_Profile
                className="h-8"
                profile={{
                  className: "",
                  content: <i className="text-base bi bi-emoji-smile"></i>,
                }}
                title={{
                  className: "text-xs display_subTitle",
                  content: "카톡 안녕 가이드",
                }}></StackedList_Profile>
            </div>
            {/*고객센터/운영정책 */}
            <div className={classes.contentWrap}>
              <StackedList_Profile
                className="h-8"
                profile={{
                  className: "",
                  content: <i className="text-base bi bi-question-circle"></i>,
                }}
                title={{
                  className: "text-xs display_subTitle",
                  content: "고객센터/운영정책",
                }}></StackedList_Profile>
            </div>
            {/* 앱 관리 */}
            <div className={classes.contentWrap}>
              <StackedList_Profile
                className="h-8"
                profile={{
                  className: "",
                  content: <i className="text-base bi bi-globe"></i>,
                }}
                title={{
                  className: "text-xs display_subTitle",
                  content: "앱 관리",
                }}
                subTitle={{
                  className: "ml-2",
                  content: "10.2.8",
                }}></StackedList_Profile>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ETCSetting;
