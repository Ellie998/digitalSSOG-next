/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import { useState } from "react";
import classes from "./index.module.css";

import AppHeader from "components/DisplayBox/AppDisplays/components/layout/AppHeader";
import StackedListWrap from "components/DisplayBox/AppDisplays/components/list/StackedListWrap";
import StackedList from "components/DisplayBox/AppDisplays/components/list/StackedList";
import NoScrollBar from "components/DisplayBox/AppDisplays/components/layout/NoScrollBar";

import BackBtn from "components/DisplayBox/AppDisplays/components/UI/BackBtn";
import Switch from "components/DisplayBox/AppDisplays/components/UI/Switch";
import Button from "components/DisplayBox/AppDisplays/components/UI/Button";
import Checkbox from "components/DisplayBox/AppDisplays/components/UI/Checkbox";
import Phone from "stories/phone/molecules/Phone";
import ModalContents from "stories/phone/organisms/ModalContents";
import Modal from "stories/phone/molecules/Modal";
import TargetBox from "stories/phone/atoms/TargetBox";
import CancelBtn from "stories/phone/atoms/CancelBtn";
import SubmitBtn from "stories/phone/atoms/SubmitBtn";

function SettingChatRoom_NameImg({
  target_groubChatLeave_rejectInvitation,
  target_groubChatLock,
  target_groubChatLeave,
  target_backBtn,
  open_modal,
}) {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <Phone>
      <NoScrollBar height="305px">
        {open_modal && (
          <Modal
            modalStyle={{ top: "50px" }}
            onClickBackDrop={() => {
              setIsChecked(false);
            }}>
            <ModalContents
              title={{ content: "초대 거부 및 나가기" }}
              subTitle={{
                content: (
                  <>
                    초대를 거부하고 채팅방을 나갑니다.
                    <br />
                    이후 이 채팅방에 다시 입장할 수 없습니다. <br />
                    대화 내용을 포함한 채팅방의 정보는 모두 삭제됩니다.
                  </>
                ),
              }}
              buttons={{
                style: { justifyContent: "end" },
                content: [
                  <CancelBtn
                    key="btn1"
                    style={{ color: "rgb(59 130 246)" }}
                    condition={true}>
                    취소
                  </CancelBtn>,
                  <SubmitBtn
                    key="btn2"
                    condition={
                      isChecked && target_groubChatLeave_rejectInvitation
                    }>
                    나가기
                  </SubmitBtn>,
                ],
              }}>
              <TargetBox isNextTriger={false} condition={!isChecked}>
                <Checkbox
                  id="info_config"
                  onChangeHandler={() => {
                    target_groubChatLeave_rejectInvitation && isChecked
                      ? setIsChecked(false)
                      : setIsChecked(true);
                  }}
                  label={{
                    content: "위 내용을 모두 확인하였습니다.",
                  }}></Checkbox>
              </TargetBox>
            </ModalContents>
          </Modal>
        )}
        <>
          {/* header nav */}
          <AppHeader
            leftItem={[
              <BackBtn
                condition={isChecked && target_backBtn}
                isNavTriger={true}
              />,
            ]}
            rightItem={[
              <div className="display_title">채팅방 설정</div>,
            ]}></AppHeader>
          {/* main */}
          {/* title={{ content: "채팅방 이름" }} */}
          <StackedListWrap>
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
            <StackedList
              title={{ content: "채팅방 이름" }}
              subTitle={{ content: "그룹채팅방 1" }}></StackedList>
            <div className="display_subTitle--light">
              내가 설정한 사진과 이름은 나에게만 보입니다.
            </div>
          </StackedListWrap>
          <StackedListWrap listTitle={{ content: "채팅방 설정" }}>
            {/* title={{ content: "현재 채팅방 배경화면" }} */}
            <StackedList
              title={{ content: "현재 채팅방 배경화면" }}
              subTitle={{
                content: (
                  <div className="flex display_subTitle--light ml-0">
                    <div className="w-4 h-5 bg-kakaoBlue rounded-sm mr-1"></div>
                    색상
                  </div>
                ),
              }}></StackedList>
            {/* title={{ content: "현재 채팅방 알림음" }} */}
            <StackedList
              title={{ content: "현재 채팅방 알림음" }}
              subTitle={{
                content: "카톡",
              }}></StackedList>
            {/* title={"현재 채팅방 입력창 잠금"} */}
            <TargetBox
              style={{ witdh: "170px" }}
              isNextTriger={false}
              condition={target_groubChatLock && !isChecked}>
              <Switch
                className=""
                theme={"#fff200"}
                title={"현재 채팅방 입력창 잠금"}
                setIsSwitchChecked={setIsChecked}
                id={`chatLockSwitch`}></Switch>
            </TargetBox>
          </StackedListWrap>
          <StackedListWrap listTitle={{ content: "채팅방 관리" }}>
            {/* title={{ content: "홈 화면에 바로가기 추가" }} */}
            <StackedList
              title={{ content: "홈 화면에 바로가기 추가" }}></StackedList>
            {/* title={{ content: "대화 내용 내보내기" }} */}
            <StackedList
              title={{ content: "대화 내용 내보내기" }}></StackedList>
            {/* title={"대화 내용 모두 삭제"} */}
            <StackedList
              title={{ content: "대화 내용 모두 삭제" }}></StackedList>
          </StackedListWrap>
          <StackedListWrap listTitle={{ content: "채팅방 용량 관리" }}>
            {/* title={{ content: "사진 파일 삭제" }} */}
            <StackedList
              title={{ content: "사진 파일 삭제" }}
              subTitle={{
                content: "0.49 GB",
              }}></StackedList>
            {/* title={{ content: "동영상 파일 삭제" }} */}
            <StackedList
              title={{ content: "동영상 파일 삭제" }}
              subTitle={{
                content: "1.23 GB",
              }}></StackedList>
            {/* title={{ content: "음성 파일 삭제" }} */}
            <StackedList
              title={{ content: "음성 파일 삭제", className: "text-gray-400" }}
              subTitle={{
                content: "0 bytes",
              }}></StackedList>
            {/* title={{ content: "전체 파일 모두 삭제" }} */}
            <StackedList
              title={{ content: "전체 파일 모두 삭제" }}
              subTitle={{
                content: "1.72 GB",
              }}></StackedList>
          </StackedListWrap>

          {/* Buttons */}
          <div className="py-2 px-1 mx-auto">
            <TargetBox condition={target_groubChatLeave}>
              <Button
                className="mb-1 text-sm"
                textColor="rgb(255, 115, 0)"
                borderColor="rgb(255, 115, 0)"
                content="채팅방 나가기"></Button>
            </TargetBox>
            <TargetBox condition={target_groubChatLeave_rejectInvitation}>
              <Button
                className={`text-sm`}
                btnColor="rgb(255, 115, 0)"
                textColor="white"
                content="초대거부 및 나가기"></Button>
            </TargetBox>
          </div>
        </>
      </NoScrollBar>
    </Phone>
  );
}

export default SettingChatRoom_NameImg;
