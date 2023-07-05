import { useContext } from "react";
import { PageContext } from "../../../sections/AppMain";
import classes from "./AnswerCall.module.css";
import Link from "next/link";
import UrlContext from "../../../../page_context/UrlContext";

const AnswerCall = () => {
  const { urlContent, appName, appName_basic, appName_kakaotalk } =
    useContext(UrlContext);
  return (
    <>
      {appName === appName_basic && (
        <div className={classes.layout}>
          <div className={`${classes.content_title} ${classes.marginTop}`}>
            이름
          </div>
          <div className={classes.content_sub}>010-0000-0000</div>
          <div className={classes.btns_basic}>
            <Link href={urlContent}>
              <div data-tooltip="클릭!">
                <i
                  className="bi bi-telephone-fill"
                  style={{ color: "blue" }}></i>
              </div>
            </Link>

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
          <div className={classes.content_title}>철수</div>
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
            <Link href={urlContent}>
              <div data-tooltip="클릭!">
                <i
                  className="bi bi-telephone-fill"
                  style={{ color: "blue" }}></i>
              </div>
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default AnswerCall;
