import { NavLink } from "react-router-dom";
import { useContext } from "react";

import { PageContext } from "../sections/AppMain";

import classes from "./KakaoAppMain.module.css";
import MakeList from "../Basic/components/MakeList";

function KakaoAppMain({ navTriger }) {
  const { urlContent } = useContext(PageContext);

  const listContents = [
    <MakeList
      listStyle={"grid_oneLine"}
      item1={{
        className: "iconWrap_background--skyBlue",
        content: <i className="bi bi-person-fill"></i>,
      }}
      item2={{
        className: "title",
        content: "진수",
      }}
      item3={{
        className: "subInfo_border--grey",
        content: "상태메시지 올리기",
      }}></MakeList>,
    <MakeList
      listStyle={"grid_twoLine"}
      item1={{
        className: "iconWrap_background--purple",
        content: <i className="bi bi-person-fill"></i>,
      }}
      item2={{
        className: "title",
        content: "영희",
      }}
      subItem2={{
        className: "subTitle",
        content: "행복하세요",
      }}></MakeList>,
    <MakeList
      listStyle={"grid_oneLine"}
      item1={{
        className: "iconWrap_background--blue",
        content: <i className="bi bi-person-fill"></i>,
      }}
      item2={{
        className: "title",
        content: "철수",
      }}
      item3={{
        className: "profile_musicBox",
        content: "밤이 깊었네-노..",
      }}></MakeList>,
  ];
  return (
    <div className={classes.layout}>
      <div className={classes.mainLayout}>
        <div className={classes.main_header}>
          <MakeList
            listStyle={"flex_spaceBetween"}
            leftFlexItem={[{ classeName: "title--bold", content: "친구" }]}
            rightFlexItem={[
              {
                className: "",
                content: <i className="bi bi-search"></i>,
              },
              {
                className: "",
                content: <i className="bi bi-person-plus"></i>,
              },
              {
                className: "",
                content: <i className="bi bi-music-note-beamed"></i>,
              },
              {
                className: "",
                content: <i className="bi bi-gear"></i>,
              },
            ]}></MakeList>
        </div>
        <div className={classes.list}>
          {listContents[0]}
          {
            <NavLink to={navTriger === "profile_friend" && urlContent}>
              {listContents[1]}
            </NavLink>
          }
          {
            <NavLink to={navTriger === "profile_friend" && urlContent}>
              {listContents[2]}
            </NavLink>
          }
        </div>
      </div>
      <div className={classes.navAppLayout}>
        <div>
          <i className={`bi bi-person-fill`}></i>
        </div>
        <div>
          <i className="bi bi-chat"></i>
        </div>
        <div>
          <i className="bi bi-eye"></i>
        </div>
        <div>
          <i className="bi bi-handbag"></i>
        </div>
        <div>
          <i className="bi bi-three-dots"></i>
        </div>
      </div>
    </div>
  );
}

export default KakaoAppMain;
