import { useContext } from "react";
import { PageContext } from "../sections/AppMain";
import styles from "../sections/AppMain.module.css";
import { NavLink } from "react-router-dom";

function KakaoProfileMain() {
  const { functionName, appName, methodId, urlContent, realFunctionName } =
    useContext(PageContext);
  return (
    <section className={styles.AppMain}>
      <section className={styles.mainDisplay}>
        <ul>
          <li className={styles.kakaoProfileMain}>
            <i className="bi bi-person"></i>
            <div>
              <p>name</p>
              <p className={styles.kakaoProfileMessage}>message</p>
            </div>
            <p>music</p>
          </li>
          <li className={styles.kakaoProfileMain}>
            <NavLink
              to={`/description/${functionName}/${appName}/3`}
              data-tooltip="클릭!">
              <i className="bi bi-person"></i>
            </NavLink>

            <div data-tooltip="클릭!">
              <NavLink to={`/description/${functionName}/${appName}/3`}>
                <p>target</p>
                <p className={styles.kakaoProfileMessage}>message</p>
              </NavLink>
            </div>
            <p>music</p>
          </li>
          <li className={styles.kakaoProfileMain}>
            <i className="bi bi-person"></i>
            <div>
              <p>name</p>
              <p className={styles.kakaoProfileMessage}>message</p>
            </div>
            <p>music</p>
          </li>
        </ul>
      </section>
      <section className={styles.mainNavApps}>
        <ul className={styles.wigetApps}>
          <li>
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

export default KakaoProfileMain;
