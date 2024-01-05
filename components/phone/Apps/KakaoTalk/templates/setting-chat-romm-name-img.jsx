import { useState } from "react";

import NoScrollBar from "components/DisplayBox/AppDisplays/components/layout/NoScrollBar";
import BackBtn from "components/DisplayBox/AppDisplays/components/UI/BackBtn";

import StackedList_Profile from "stories/phone/molecules/StackedList_Profile/index";
import Phone from "stories/phone/molecules/Phone/index";
import ModalContents from "stories/phone/organisms/ModalContents/index";
import Modal from "stories/phone/molecules/Modal/index";
import TargetBox from "stories/phone/atoms/TargetBox/index";

import ProfileIcons from "stories/phone/Apps/KakaoTalk/organisms/ProfileIcons/index";
import SubTitle from "stories/phone/atoms/SubTitle/index";
import Input_TextLength from "stories/phone/Apps/KakaoTalk/atoms/Input_TextLength/index";

function SettingChatRoom_NameImg({
  target_backBtn,
  open = { imgSetting: false },
  content = { name: "그룹채팅", setName: () => {} },
}) {
  const [isImgSettingClicked, setIsImgSettingClicked] = useState(false);
  useState(() => {
    content.setName("그룹채팅");
  }, []);
  return (
    <Phone>
      <NoScrollBar height="305px">
        {(open.imgSetting || isImgSettingClicked) && (
          <Modal
            modalStyle={{ top: "80px" }}
            backdrop={{ isBackTriger: false }}
            onClickBackDrop={() => {
              setIsImgSettingClicked(false);
            }}>
            <ModalContents
              title={{
                content: "프로필 사진 등록",
                style: { fontWeight: "bold" },
              }}>
              <TargetBox
                condition={false}
                style={{ fontSize: "0.8rem", margin: "8px 0" }}>
                앨범에서 사진 선택
              </TargetBox>
              <TargetBox
                condition={false}
                style={{ fontSize: "0.8rem", margin: "8px 0" }}>
                사진 촬영
              </TargetBox>
              <TargetBox
                condition={false}
                style={{ fontSize: "0.8rem", margin: "8px 0 " }}>
                커스텀 프로필 만들기
              </TargetBox>
            </ModalContents>
          </Modal>
        )}
        <>
          {/* header */}
          <StackedList_Profile
            profile={{
              content: <BackBtn condition={target_backBtn} />,
            }}
            title={{
              content: "그룹채팅방 정보설정",
              style: { fontWeight: "bold", gridColumnEnd: "6" },
            }}
            info={{
              content: (
                <TargetBox
                  style={{
                    color: "rgb(17, 17, 17)",
                    fontWeight: "bold",
                    marginLeft: "auto",
                    fontSize: "0.8rem",
                  }}
                  condition={true}>
                  확인
                </TargetBox>
              ),
            }}
          />

          {/* main */}

          <ProfileIcons onClick={() => setIsImgSettingClicked(true)} />
          <Input_TextLength
            style={{ margin: "0 8px" }}
            placeholder={"그룹채팅"}
            text={content.name}
            setText={content.setName}
          />
          <SubTitle style={{ marginTop: "8px", fontSize: "0.8rem" }}>
            채팅시작 전, 내가 설정한 그룹채팅방의 사진과 이름은 다른 모든
            대화상대에게도 동일하게 보입니다.
          </SubTitle>
        </>
      </NoScrollBar>
    </Phone>
  );
}

export default SettingChatRoom_NameImg;
