import styles from "../sections/AppMain.module.css";
import { NavLink } from "react-router-dom";

function KakaoMain({ functionName, appName }) {
  return (
    <section className={styles.AppMain}>
      <section className={styles.mainApps}>
        <ul>
          <li data-tooltip="클릭!">
            <NavLink to={`/description/${functionName}/${appName}/1`}>
              <i className="bi bi-chat-fill"></i>
            </NavLink>
          </li>
        </ul>
      </section>
      <section className={styles.mainNavApps}>
        <ul className={styles.wigetApps}>
          <li>
            <i className="bi bi-telephone"></i>
          </li>
          <li>
            <i className="bi bi-camera"></i>
          </li>
          <li>
            <i className="bi bi-clock"></i>
          </li>
          <li>
            <i className="bi bi-browser-chrome"></i>
          </li>
          <li>
            <i className="bi bi-chat-dots"></i>
          </li>
        </ul>
      </section>
    </section>
  );
}

export default KakaoMain;
