import styles from "../sections/AppMain.module.css";
import { NavLink } from "react-router-dom";

function KakaoAppMain({ functionName, appName }) {
  return (
    <section className={styles.AppMain}>
      <section className={styles.mainApps}></section>
      <section className={styles.mainNavApps}>
        <ul className={styles.wigetApps}>
          <li data-tooltip="클릭!">
            <NavLink to={`/description/${functionName}/${appName}/2`}>
              <i className="bi bi-person"></i>
            </NavLink>
          </li>
          <li>
            <i className="bi bi-chat"></i>
          </li>
          <li>
            <i className="bi bi-eye"></i>
          </li>
          <li>
            <i className="bi bi-handbag"></i>
          </li>
          <li>
            <i className="bi bi-three-dots"></i>
          </li>
        </ul>
      </section>
    </section>
  );
}

export default KakaoAppMain;
