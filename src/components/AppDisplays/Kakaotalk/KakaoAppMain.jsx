import { useContext } from "react";
import { PageContext } from "../sections/AppMain";
import classes from "../sections/AppMain.module.css";
import { NavLink } from "react-router-dom";

function KakaoAppMain() {
  const { urlContent } = useContext(PageContext);
  return (
    <div className={classes.layout}>
      <section className={classes.appLayout}></section>
      <div className={classes.navAppLayout}>
        <NavLink to={urlContent} data-tooltip="클릭!">
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

export default KakaoAppMain;
