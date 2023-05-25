import styles from "../sections/AppMain.module.css";
import { NavLink } from "react-router-dom";

function BasicMain({ functionName, appName }) {
  return (
    <section className={styles.AppMain}>
      <section className={styles.mainApps}>
        <ul>
          <li>
            <i className="bi bi-chat-fill"></i>
          </li>
        </ul>
      </section>
      <section className={styles.mainNavApps}>
        <ul className={styles.wigetApps}>
          <li>
            <NavLink to={`/description/${functionName}/${appName}/1`}>
              <i className="bi bi-telephone"></i>
            </NavLink>
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

export default BasicMain;
