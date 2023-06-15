import { useContext } from "react";
import { PageContext } from "../sections/AppMain";
import classes from "../sections/AppMain.module.css";
import { NavLink } from "react-router-dom";

function KakaoProfileMain() {
  const { urlContent } = useContext(PageContext);
  return (
    <div className={classes.layout}>
      <div className={classes.mainLayout}>
        <div className={classes.profile_layout}>
          <NavLink to={`${urlContent}`} data-tooltip="클릭!">
            <div className={classes.profile_img}>
              <i className="bi bi-person"></i>
            </div>
          </NavLink>

          <NavLink to={`${urlContent}`} data-tooltip="클릭!">
            <div>
              <div>홍길동</div>
              <div className={classes.profile_message}>좋~~다!</div>
            </div>
          </NavLink>

          <div className={classes.profile_musicBox}>
            <div>신호등-..</div>
            <div>
              <i className="bi bi-caret-right"></i>
            </div>
          </div>
        </div>
        <div className={classes.profile_layout}>
          <NavLink to={`${urlContent}`} data-tooltip="클릭!">
            <div className={classes.profile_img}>
              <i className="bi bi-person"></i>
            </div>
          </NavLink>
          <div>
            <NavLink to={`${urlContent}`} data-tooltip="클릭!">
              <div>홍길순</div>
              <div className={classes.profile_message}>D-day 56</div>
            </NavLink>
          </div>
        </div>
      </div>
      <div className={classes.navAppLayout}>
        <NavLink to={`${urlContent}`}>
          <div>
            <i className="bi bi-person"></i>
          </div>
        </NavLink>
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

export default KakaoProfileMain;
