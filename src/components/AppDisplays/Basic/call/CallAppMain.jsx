import { useState, useContext } from "react";
import { NavLink } from "react-router-dom";
import { PageContext } from "../../sections/AppMain";

import NavBar from "../components/NavBar";
import MakeList from "../components/MakeList";

import classes from "./CallAppMain.module.css";
import listClass from "../components/MakeList.module.css";

function CallAppMain() {
  const {
    appName,
    methodId,
    urlContent,
    realFunctionName,
    functionName_makeCall,
    functionName_makeVideoCall,
    appName_basic,
  } = useContext(PageContext);
  const [clickedTapName, setClickedTapName] = useState("키패드");
  const [clickedNum, changeNum] = useState("");
  const [isListClicked1, setIsListClicked1] = useState(false);
  const [isListClicked2, setIsListClicked2] = useState(false);
  const [isListClicked3, setIsListClicked3] = useState(false);

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
    setIsListClicked3(false);
  }
  const showListOption1 = () => {
    !isListClicked1 && setIsListClicked1(true);
    isListClicked1 && setIsListClicked1(false);
    setIsListClicked2(false);
    setIsListClicked3(false);
  };
  const showListOption2 = () => {
    !isListClicked2 && setIsListClicked2(true);
    isListClicked2 && setIsListClicked2(false);
    setIsListClicked1(false);
    setIsListClicked3(false);
  };
  const showListOption3 = () => {
    !isListClicked3 && setIsListClicked3(true);
    isListClicked3 && setIsListClicked3(false);
    setIsListClicked1(false);
    setIsListClicked2(false);
  };

  const optionlistContent = (
    <MakeList
      listStyle={"flex_spaceBetween"}
      item1={{
        className: "iconWrapS_background--green",
        content: (
          <NavLink
            to={realFunctionName === functionName_makeCall ? urlContent : null}>
            <i className="bi bi-telephone-fill"></i>
          </NavLink>
        ),
      }}
      item2={{
        className: "iconWrapS_background--green",
        content: <i className="bi bi-chat-fill"></i>,
      }}
      item3={{
        className: "iconWrapS_background--green",
        content: <i className="bi bi-camera-video-fill"></i>,
      }}
      item4={{
        className: "iconWrapS_background--green",
        content: <i className="bi bi-info-circle-fill"></i>,
      }}></MakeList>
  );

  const listProps = [
    {
      className1: "iconWrap_background--pink",
      content1: <i className="bi bi-person-fill"></i>,
      className2: "title",
      content2: "진수",
      className3: "",
      content3: "",
    },
    {
      className1: "iconWrap_background--yellow",
      content1: <i className="bi bi-star"></i>,
      className2: "title",
      content2: "즐겨찾는 연락처 추가",
      className3: "",
      content3: "",
    },
    {
      className1: "iconWrap_background--grey",
      content1: <i className="bi bi-people-fill"></i>,
      className2: "title",
      content2: "그룹",
      className3: "",
      content3: "",
    },
    {
      onClickFunction: showListOption1,
      className1: "iconWrap_background--pink",
      content1: <i className="bi bi-person-fill"></i>,
      className2: "title",
      content2: "영희",
      className3: "",
      content3: "",
      children: isListClicked1 && (
        <div className={classes.listOptionWrap}>
          <div className={listClass["subTitle_color--blackB"]}>
            휴대전화 010-1234-0000
          </div>
          {optionlistContent}
        </div>
      ),
    },
    {
      onClickFunction: showListOption2,
      className1: "iconWrap_background--orange",
      content1: <i className="bi bi-person-fill"></i>,
      className2: "title",
      content2: "철수",
      className3: "",
      content3: "",
      children: isListClicked2 && (
        <div className={classes.listOptionWrap}>
          <div className={listClass["subTitle_color--blackB"]}>
            휴대전화 010-1234-0001
          </div>
          {optionlistContent}
        </div>
      ),
    },
  ];

  return (
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
            <NavLink
              data-tooltip={
                appName === appName_basic &&
                realFunctionName === functionName_makeVideoCall
                  ? `클릭!`
                  : null
              }
              to={
                appName === appName_basic &&
                realFunctionName === functionName_makeVideoCall
                  ? urlContent
                  : null
              }>
              <div>
                <i className="bi bi-camera-video-fill"></i>
              </div>
            </NavLink>
            <div>
              <NavLink
                data-tooltip={
                  appName === appName_basic &&
                  realFunctionName === functionName_makeCall &&
                  methodId === "1"
                    ? `클릭!`
                    : null
                }
                to={
                  appName === appName_basic &&
                  realFunctionName === functionName_makeCall
                    ? urlContent
                    : null
                }>
                <div className={classes.iconWrap_background}>
                  <i className="bi bi-telephone-fill"></i>
                </div>
              </NavLink>
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
            <NavBar
              rIcons={["filter", "search", "three-dots-vertical"]}></NavBar>
          </div>
          <div
            className={
              isListClicked1 || isListClicked2 || isListClicked3
                ? ""
                : classes.listWrap
            }>
            <div className={listClass["subTitle"]}>6월 17일</div>
            <MakeList
              listStyle={"grid_oneLine"}
              list={{ className: "" }}
              listOnClick={showListOption1}
              item1={{
                className: "iconWrap_color--green",
                content: <i className="bi bi-telephone-outbound-fill"></i>,
              }}
              item2={{
                className: "title",
                content: "홍길동",
              }}
              item3={{
                className: "subTitle",
                content: `오후 7:38`,
              }}>
              {isListClicked1 && (
                <div className={classes.listOptionWrap}>
                  <div className={listClass["subTitle_color--blackB"]}>
                    휴대전화 010-0000-0000
                  </div>
                  <div className={listClass["subTitle_color--black"]}>
                    발신전화, 0분 33초
                  </div>
                  <MakeList
                    listStyle={"flex_spaceBetween"}
                    item1={{
                      className: "iconWrapS_background--green",
                      content: (
                        <NavLink
                          to={
                            realFunctionName === functionName_makeCall
                              ? urlContent
                              : null
                          }>
                          <i className="bi bi-telephone-fill"></i>
                        </NavLink>
                      ),
                    }}
                    item2={{
                      className: "iconWrapS_background--green",
                      content: <i className="bi bi-chat-fill"></i>,
                    }}
                    item3={{
                      className: "iconWrapS_background--green",
                      content: <i className="bi bi-camera-video-fill"></i>,
                    }}
                    item4={{
                      className: "iconWrapS_background--green",
                      content: <i className="bi bi-info-circle-fill"></i>,
                    }}></MakeList>
                </div>
              )}
            </MakeList>
            <MakeList
              listStyle={"grid_oneLine"}
              list={{ className: "" }}
              listOnClick={showListOption2}
              item1={{
                className: "iconWrap_color--green",
                content: <i className="bi bi-telephone-inbound-fill"></i>,
              }}
              item2={{
                className: "title",
                content: "영희",
              }}
              item3={{
                className: "subTitle",
                content: `오후 1:22`,
              }}>
              {isListClicked2 && (
                <div className={classes.listOptionWrap}>
                  <div className={listClass["subTitle_color--blackB"]}>
                    휴대전화 010-1234-0000
                  </div>
                  <div className={listClass["subTitle_color--black"]}>
                    수신전화, 1분 02초
                  </div>
                  <MakeList
                    listStyle={"flex_spaceBetween"}
                    item1={{
                      className: "iconWrapS_background--green",
                      content: (
                        <NavLink
                          to={
                            realFunctionName === functionName_makeCall
                              ? urlContent
                              : null
                          }>
                          <i className="bi bi-telephone-fill"></i>
                        </NavLink>
                      ),
                    }}
                    item2={{
                      className: "iconWrapS_background--green",
                      content: <i className="bi bi-chat-fill"></i>,
                    }}
                    item3={{
                      className: "iconWrapS_background--green",
                      content: <i className="bi bi-camera-video-fill"></i>,
                    }}
                    item4={{
                      className: "iconWrapS_background--green",
                      content: <i className="bi bi-info-circle-fill"></i>,
                    }}></MakeList>
                </div>
              )}
            </MakeList>
            <MakeList
              listStyle={"grid_oneLine"}
              list={{ className: "" }}
              listOnClick={showListOption3}
              item1={{
                className: "iconWrap_color--green",
                content: <i className="bi bi-telephone-x-fill"></i>,
              }}
              item2={{
                className: "title",
                content: "철수",
              }}
              item3={{
                className: "subTitle",
                content: `오전 9:00`,
              }}>
              {isListClicked3 && (
                <div className={classes.listOptionWrap}>
                  <div className={listClass["subTitle_color--blackB"]}>
                    휴대전화 010-0000-0001
                  </div>
                  <div className={listClass["subTitle_color--black"]}>
                    부재중 전화
                  </div>
                  <MakeList
                    listStyle={"flex_spaceBetween"}
                    item1={{
                      className: "iconWrapS_background--green",
                      content: (
                        <NavLink
                          to={
                            realFunctionName === functionName_makeCall
                              ? urlContent
                              : null
                          }>
                          <i className="bi bi-telephone-fill"></i>
                        </NavLink>
                      ),
                    }}
                    item2={{
                      className: "iconWrapS_background--green",
                      content: <i className="bi bi-chat-fill"></i>,
                    }}
                    item3={{
                      className: "iconWrapS_background--green",
                      content: <i className="bi bi-camera-video-fill"></i>,
                    }}
                    item4={{
                      className: "iconWrapS_background--green",
                      content: <i className="bi bi-info-circle-fill"></i>,
                    }}></MakeList>
                </div>
              )}
            </MakeList>
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
            <NavBar rIcons={["plus", "search", "three-dots-vertical"]}></NavBar>
          </div>
          <div
            className={
              isListClicked1 || isListClicked2 || isListClicked3
                ? ""
                : classes.listWrap
            }>
            <div className={listClass["subTitle"]}>내 프로필</div>
            {listProps?.map((prop) => (
              <>
                {prop.content2 === "영희" && (
                  <div className={listClass["subTitle"]}>ㅇ</div>
                )}
                {prop.content2 === "철수" && (
                  <div className={listClass["subTitle"]}>ㅊ</div>
                )}
                <MakeList
                  listStyle={"grid_oneLine"}
                  list={{ className: "" }}
                  listOnClick={
                    prop.onClickFunction ? prop.onClickFunction : null
                  }
                  item1={{
                    className: prop.className1,
                    content: prop.content1,
                  }}
                  item2={{
                    className: prop.className2,
                    content: prop.content2,
                  }}
                  item3={{
                    className: prop.className3,
                    content: prop.content3,
                  }}>
                  {prop.children ? prop.children : null}
                </MakeList>
              </>
            ))}
          </div>
        </div>
      )}
      {/* TAP LIST COMPONETS */}
      <div className={classes.tabLayout}>
        <div
          onClick={changeTapHandler}
          className={clickedTapName === "키패드" ? classes.tap_clicked : ""}>
          키패드
        </div>
        <div
          onClick={changeTapHandler}
          className={clickedTapName === "최근기록" ? classes.tap_clicked : ""}>
          최근기록
        </div>
        <div
          onClick={changeTapHandler}
          className={clickedTapName === "연락처" ? classes.tap_clicked : ""}>
          연락처
        </div>
      </div>
    </div>
  );
}

export default CallAppMain;
