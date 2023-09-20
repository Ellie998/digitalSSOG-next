/* eslint-disable react/prop-types */

import StackedList_Profile from "stories/phone/molecules/StackedList_Profile/index";
import Phone from "stories/phone/molecules/Phone/index";
import Icon from "stories/phone/atoms/Icon/index";
import TargetBox from "stories/phone/atoms/TargetBox/index";
import NoScrollbar from "stories/phone/atoms/NoScrollbar/index";
import SearchInput from "stories/phone/Apps/KakaoTalk/atoms/SearchInput/index";
import StackedListWrap from "stories/phone/molecules/StackedListWrap/index";
import Modal from "stories/phone/molecules/Modal/index";
import ModalContents from "stories/phone/organisms/ModalContents/index";

function FriendList({
  header,
  info,
  target = { person1: false, info: false },
  open = { modal: false, person1: true },
  content = { modal: { title: "", subTitle: "", children: null } },
}) {
  const friendListContents1 = [
    open.person1 && (
      <TargetBox key="younghee" condition={target.person1 && !target.info}>
        <StackedList_Profile
          onClick={() => {}}
          profile={{
            style: { backgroundColor: "var(--kakao-purple)" },
            content: <Icon name="person-fill" style={{ color: "white" }} />,
          }}
          title={{ content: "영희", className: "" }}
          info={{
            content: (
              <TargetBox condition={target.person1 && target.info}>
                {info.content}
              </TargetBox>
            ),
            style: { marginLeft: "auto" },
          }}
        />
      </TargetBox>
    ),
    <TargetBox key="cherlsu" isNextTriger={false}>
      <StackedList_Profile
        key="cherlsu"
        profile={{
          style: { backgroundColor: "var(--kakao-blue)" },
          content: <Icon name="person-fill" style={{ color: "white" }} />,
        }}
        title={{ content: "철수", className: "" }}
        info={{
          content: info.content,
          style: { marginLeft: "auto" },
        }}
      />
    </TargetBox>,
    <StackedList_Profile
      onClick={() => {}}
      key="jiye"
      profile={{
        style: { backgroundColor: "var(--kakao-skyblue)" },
        content: <Icon name="person-fill" style={{ color: "white" }} />,
      }}
      title={{ content: "김지예", className: "" }}
      info={{
        content: info.content,
        style: { marginLeft: "auto" },
      }}
    />,
    <TargetBox key="ceo" isNextTriger={false}>
      <StackedList_Profile
        profile={{
          style: { backgroundColor: "var(--kakao-purple)" },
          content: <Icon name="person-fill" style={{ color: "white" }} />,
        }}
        title={{ content: "사장님", className: "" }}
        info={{
          content: info.content,
          style: { marginLeft: "auto" },
        }}
      />
    </TargetBox>,
    <TargetBox key="daeri" isNextTriger={false}>
      <StackedList_Profile
        profile={{
          style: { backgroundColor: "var(--kakao-blue)" },
          content: <Icon name="person-fill" style={{ color: "white" }} />,
        }}
        title={{ content: "김대리", className: "" }}
        info={{
          content: info.content,
          style: { marginLeft: "auto" },
        }}
      />
    </TargetBox>,
  ];
  return (
    <Phone>
      {open.modal && (
        <Modal modalStyle={{ top: "70px" }}>
          <ModalContents
            title={{ content: null || content.modal.title }}
            subTitle={{
              content: null || content.modal.subTitle,
              style: { fontSize: "14px" },
            }}>
            {null || content.modal.children}
          </ModalContents>
        </Modal>
      )}
      {/* 305px */}
      <NoScrollbar>
        <StackedList_Profile
          profile={{
            content: <Icon name="arrow-left" />,
          }}
          title={{
            content: header,
            style: { fontWeight: "bold" },
          }}
          info={{
            content: (
              <TargetBox
                style={{
                  marginLeft: "auto",
                  fontSize: "0.8rem",
                  fontWeight: "bold",
                }}>
                확인
              </TargetBox>
            ),
          }}
        />

        <SearchInput
          placeholder={"이름(초성), 전화번호 검색"}
          style={{
            display: "block",
            margin: "0 auto",
            width: "160px",
            backgroundColor: "rgb(239, 239, 239)",
            borderRadius: "4px",
            padding: "4px 12px",
            fontSize: "0.8rem",
            fontWeight: "bold",
          }}
        />

        <StackedListWrap
          style={{ borderBottom: "0px" }}
          listTitle={{ content: "친구 5" }}>
          {friendListContents1.map((list) => list)}
        </StackedListWrap>
      </NoScrollbar>
    </Phone>
  );
}

export default FriendList;
