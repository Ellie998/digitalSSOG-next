import { useContext } from "react";
import { PageContext } from "../../sections/AppMain";
import classes from "./ComeCall.module.css";
import { NavLink } from "react-router-dom";

const AnswerCall = () => {
  const { urlContent, appName, appName_basic, appName_kakaotalk } =
    useContext(PageContext);
  return (
    <>
      {appName === appName_basic && (
        <div className={classes.layout}>
          <div className={`${classes.content_title} ${classes.marginTop}`}>
            이름
          </div>
          <div className={classes.content_sub}>010-0000-0000</div>
          <div className={classes.btns}>
            <NavLink to={`${urlContent}`}>
              <div data-tooltip="클릭!">
                <i
                  className="bi bi-telephone-fill"
                  style={{ color: "blue" }}></i>
              </div>
            </NavLink>

            <div>
              <i
                className="bi bi-telephone-x-fill"
                style={{ color: "red" }}></i>
            </div>
          </div>
          <div className={classes.message}>
            <p>문자 보내기</p>
          </div>
        </div>
      )}
      {appName === appName_kakaotalk && (
        <div className={classes.layout}>
          <div className={classes["profileBox"]}>
            <div>
              <i className="bi bi-person-fill"></i>
            </div>
          </div>
          <div className={classes.content_title}>홍길동</div>
          <div
            className={`${classes["content_sub"]} ${classes["font_color--light"]}`}>
            보이스톡 해요.
          </div>
          <div className={classes.btns}>
            <div>
              <i
                className="bi bi-telephone-x-fill"
                style={{ color: "red" }}></i>
            </div>
            <NavLink to={`${urlContent}`}>
              <div data-tooltip="클릭!">
                <i
                  className="bi bi-telephone-fill"
                  style={{ color: "blue" }}></i>
              </div>
            </NavLink>
          </div>
        </div>
      )}
    </>
  );
};

export default AnswerCall;
