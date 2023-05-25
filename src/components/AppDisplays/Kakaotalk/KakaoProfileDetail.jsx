import { NavLink } from "react-router-dom";
import classes from "./KakaoProfileDetail.module.css";

function KakaoProfileDetail({ functionName, appName }) {
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
            <NavLink to={`/description/${functionName}/${appName}/4`}>
              <i className="bi bi-telephone"></i>
              <p>통화하기</p>
            </NavLink>
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
