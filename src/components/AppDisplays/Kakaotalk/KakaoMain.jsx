import styles from "../sections/AppMain.module.css";
import { NavLink } from "react-router-dom";

function KakaoMain({ functionName, appName }) {
  return (
    <section className={styles.AppMain}>
      <section className={styles.mainApps}>
        <div>
          <div className={styles.kakaoApp} data-tooltip="클릭!">
            <NavLink to={`/description/${functionName}/${appName}/1`}>
              <i className="bi bi-chat-fill"></i>
            </NavLink>
          </div>
        </div>
      </section>
      <section className={styles.mainNavApps}>
        <div className={styles.wigetApps}>
          <div>
            <i className="bi bi-telephone"></i>
          </div>
          <div>
            <i className="bi bi-camera"></i>
          </div>
          <div>
            <i className="bi bi-clock"></i>
          </div>
          <div>
            <i className="bi bi-browser-chrome"></i>
          </div>
          <div>
            <i className="bi bi-chat-dots"></i>
          </div>
        </div>
      </section>
    </section>
  );
}

export default KakaoMain;
