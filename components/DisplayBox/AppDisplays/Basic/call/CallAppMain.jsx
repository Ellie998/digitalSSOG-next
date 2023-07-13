import { useState, useContext } from "react";

import classes from "./CallAppMain.module.css";
import listClass from "../../components/MakeList.module.css";

import UrlContext from "../../../../page_context/UrlContext";

import TargetContent from "../../components/TargetContent";
import StackedList_Profile from "../../components/list/StackedList_Profile";
import FlexContent from "../../components/list/FlexContent";
import Tab from "../../components/layout/Tab";

function CallAppMain({ tab }) {
  const {
    myAppName,
    functionName,
    //
    functionName_makeCall,
    functionName_makeVideoCall,
    //
    appName_basic,
  } = useContext(UrlContext);
  const [clickedTapName, setClickedTapName] = useState("키패드");
  const [clickedNum, changeNum] = useState("");
  const [isListClicked1, setIsListClicked1] = useState(false);
  const [isListClicked2, setIsListClicked2] = useState(false);

  function onchangeClickNum(event) {
    if (event.target.innerText && event.target.nodeName === "DIV") {
      if (
        (!clickedNum.includes("-") && clickedNum.length === 3) ||
        clickedNum === "02"
      ) {
        changeNum(clickedNum + "-" + event.target.innerText);
      } else if (
        (clickedNum.length === 6 && clickedNum.slice(0, 2) === "02") ||
        (clickedNum.length === 8 && clickedNum.slice(0, 2) === "01") ||
        (clickedNum.length === 7 && clickedNum.slice(0, 2) !== "02")
      ) {
        changeNum(clickedNum + "-" + event.target.innerText);
      } else if (clickedNum.length > 20) {
        changeNum("");
      } else {
        changeNum(clickedNum + event.target.innerText);
      }
    }
  }

  function onDeleteNum() {
    changeNum(clickedNum.slice(0, clickedNum.length - 1));
  }

  function changeTapHandler(event) {
    setClickedTapName(event.target.innerText);
    setIsListClicked1(false);
    setIsListClicked2(false);
  }
  const showListOption1 = () => {
    !isListClicked1 && setIsListClicked1(true);
    isListClicked1 && setIsListClicked1(false);
    setIsListClicked2(false);
  };
  const showListOption2 = () => {
    !isListClicked2 && setIsListClicked2(true);
    isListClicked2 && setIsListClicked2(false);
    setIsListClicked1(false);
  };

  // 연락처 누르면 생기는 옵션 elements
  const optionlistContent = (
    <FlexContent
      className=""
      items={[
        <TargetContent
          targetOption={functionName === functionName_makeCall}
          isNextDescriptionLink={true}>
          <i className="text-green-600 bi bi-telephone-fill" />
        </TargetContent>,
        <i className="text-green-600 bi bi-chat-fill" />,
        <i className="text-green-600 bi bi-camera-video-fill" />,
        <i className="text-green-600 bi bi-info-circle-fill" />,
      ]}
    />
  );

  // 최근기록 tap에 만들 list 정보
  const callHistoryListProps = [
    {
      id: `callHistoryList1`,
      onClickFunction: showListOption1,
      className1: "",
      content1: (
        <i className="profileIconWrap text-green-700 bi bi-telephone-outbound-fill"></i>
      ),
      className2: "",
      content2: "영희",
      className3: "",
      content3: "오후 7:38",
      children: isListClicked1 && (
        <div className={classes.listOptionWrap}>
          <div className="display_subTitle--bold">휴대전화 010-0000-0000</div>
          <div className={"display_subTitle"}>발신전화, 0분 33초</div>
          {optionlistContent}
        </div>
      ),
    },
    {
      id: `callHistoryList2`,
      onClickFunction: showListOption2,
      className1: "",
      content1: (
        <i className="profileIconWrap text-green-700 bi bi-telephone-outbound-fill"></i>
      ),
      className2: "",
      content2: "철수",
      className3: "",
      content3: "오후 5:20",
      children: isListClicked2 && (
        <div className={classes.listOptionWrap}>
          <div className="display_subTitle--bold">휴대전화 010-0000-0000</div>
          <div className={"display_subTitle"}>발신전화, 0분 24초</div>
          {optionlistContent}
        </div>
      ),
    },
  ];
  // 연락처 tap에 만들 list 정보
  const contactListProps = [
    //진수
    {
      id: `contactList1`,
      className: "h-8",
      profile: {
        className: "bg-pink-300 ",
        content: <i className="text-white bi bi-person-fill"></i>,
      },
      title: {
        className: "",
        content: "진수",
      },
    },
    // 즐겨찾는 연락처 추가
    {
      id: `contactList2`,
      className: "h-8",
      profile: {
        className: "bg-yellow-200",
        content: <i className="text-white bi bi-star"></i>,
      },
      title: {
        className: "",
        content: "즐겨찾는 연락처 추가",
      },
    },

    //그룹
    {
      id: `contactList3`,
      className: "h-8",
      profile: {
        className: "bg-gray-200",
        content: <i className="text-white bi bi-people-fill"></i>,
      },
      title: {
        className: "",
        content: "그룹",
      },
    },

    // ㅇ
    {
      id: `contactList4`,
      className: "h-3",
      profile: {
        className: "",
        content: "",
      },
      title: {
        className: "text-gray-400 text-xs",
        content: "ㅇ",
      },
    },

    // 영희
    {
      id: `contactList5`,
      onClick: showListOption1,
      className: "h-8",
      profile: {
        className: "bg-pink-200",
        content: <i className="iconWrap text-white bi bi-person-fill"></i>,
      },
      title: {
        className: "",
        content: "영희",
      },
      children: isListClicked1 && (
        <div className={classes.listOptionWrap}>
          <div className="display_subTitle--bold">휴대전화 010-1234-0000</div>
          {optionlistContent}
        </div>
      ),
    },

    // ㅊ
    {
      id: `contactList6`,
      className: "h-3",
      profile: {
        className: "",
        content: "",
      },
      title: {
        className: "text-gray-400 text-xs",
        content: "ㅊ",
      },
    },
    //철수
    {
      id: `contactList7`,
      onClick: showListOption2,
      className: "h-8",
      profile: {
        className: "bg-orange-200",
        content: <i className="text-white bi bi-person-fill"></i>,
      },
      title: {
        className: "",
        content: "철수",
      },
      children: isListClicked2 && (
        <div className={classes.listOptionWrap}>
          <div className="display_subTitle--bold">휴대전화 010-1234-0001</div>
          {optionlistContent}
        </div>
      ),
    },
  ];

  return (
    <>
      <div className={classes.layout}>
        {clickedTapName === "키패드" && (
          <div>
            <div className={classes.main_title}>{clickedNum}</div>
            <div className={classes.main_optionBox} onClick={onchangeClickNum}>
              <div className={classes.main_optionRow}>
                <div>1</div>
                <div>2</div>
                <div>3</div>
              </div>
              <div className={classes.main_optionRow}>
                <div>4</div>
                <div>5</div>
                <div>6</div>
              </div>
              <div className={classes.main_optionRow}>
                <div>7</div>
                <div>8</div>
                <div>9</div>
              </div>
              <div className={classes.main_optionRow}>
                <div>*</div>
                <div>0</div>
                <div>#</div>
              </div>
            </div>
            <div className={classes.navLayout}>
              <TargetContent
                targetOption={
                  functionName === functionName_makeVideoCall &&
                  tab === "키패드"
                }
                isNextDescriptionLink={true}>
                <div>
                  <i className="bi bi-camera-video-fill"></i>
                </div>
              </TargetContent>
              <div>
                <TargetContent
                  targetOption={
                    functionName === functionName_makeCall && tab === "키패드"
                  }
                  isNextDescriptionLink={true}>
                  <div className={classes.iconWrap_background}>
                    <i className="bi bi-telephone-fill"></i>
                  </div>
                </TargetContent>
              </div>
              <div>
                <i className="bi bi-arrow-left-short" onClick={onDeleteNum}></i>
              </div>
            </div>
          </div>
        )}
        {clickedTapName === "최근기록" && (
          <div>
            <div>
              <div className={classes.main_title}>전화</div>
              <FlexContent
                items={[
                  <div />,
                  <FlexContent
                    items={[
                      <i className="text-sm bi bi-filter" />,
                      <i className="text-sm bi bi-search" />,
                      <i className="text-sm bi bi-three-dots-vertical" />,
                    ]}
                  />,
                ]}
              />
            </div>
            <div
              className={
                isListClicked1 || isListClicked2 ? "" : classes.listWrap
              }>
              <div className={listClass["subTitle"]}>6월 17일</div>
              {callHistoryListProps.map((prop) => (
                <StackedList_Profile
                  key={prop.id}
                  className="h-8 mb-1"
                  onClick={prop.onClickFunction ? prop.onClickFunction : null}
                  profile={{
                    className: `${prop.className1}`,
                    content: prop.content1,
                  }}
                  title={{
                    className: prop.className2,
                    content: prop.content2,
                  }}
                  info={{
                    className: `${prop.className3} text-end`,
                    content: prop.content3,
                  }}>
                  {prop.children ? prop.children : null}
                </StackedList_Profile>
              ))}
            </div>
          </div>
        )}
        {clickedTapName === "연락처" && (
          <div>
            <div>
              <div className={classes["main_title--noMargin"]}>
                전화
                <div className={classes.main_subTitle}>
                  전화번호가 저장된 연락처 2개
                </div>
              </div>
              <FlexContent
                items={[
                  <div />,
                  <FlexContent
                    items={[
                      <i className="text-sm bi bi-plus" />,
                      <i className="text-sm bi bi-search" />,
                      <i className="text-sm bi bi-three-dots-vertical" />,
                    ]}
                  />,
                ]}
              />
            </div>
            <div>
              <div className={listClass["subTitle"]}>내 프로필</div>
              {contactListProps.map((prop) => (
                <StackedList_Profile
                  key={prop.id}
                  onClick={prop.onClick}
                  className={prop.className}
                  profile={prop.profile}
                  title={prop.title}>
                  {prop.children}
                </StackedList_Profile>
              ))}
            </div>
          </div>
        )}
      </div>
      <Tab
        className="shadow-sm"
        setClickedTab={setClickedTapName}
        defaultTab={tab}
        clickedTab={clickedTapName}
        textItems={["키패드", "최근기록", "연락처"]}
        theme="green-600"
        clickEvent="underBar"></Tab>
    </>
  );
}

export default CallAppMain;
