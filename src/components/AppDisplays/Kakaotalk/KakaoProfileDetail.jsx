import { NavLink } from "react-router-dom";
import classes from "./KakaoProfileDetail.module.css";
import { PageContext } from "../sections/AppMain";
import { useContext } from "react";

function KakaoProfileDetail() {
  const { urlContent } = useContext(PageContext);
  return (
    <section className={classes.AppMain}>
      <section className={classes.mainDisplay}>
        {/* <div className={classes.profileBackImg}></div> */}
        <div className={classes.profileImg}>
          <i className="bi bi-person"></i>
        </div>
        <ul className={classes.propfileMenus}>
          <li>
            <i className="bi bi-chat"></i>
            <p>1:1채팅</p>
          </li>
          <li>
            <div data-tooltip="클릭!">
              <NavLink to={urlContent}>
                <i className="bi bi-telephone"></i>
                <p>통화하기</p>
              </NavLink>
            </div>
          </li>
          <li>
            <i className="bi bi-camera-video"></i>
            <p>페이스톡</p>
          </li>
          <li>
            <i className="bi bi-quote"></i>
            <p>스토리</p>
          </li>
        </ul>
      </section>
    </section>
  );
}

export default KakaoProfileDetail;
