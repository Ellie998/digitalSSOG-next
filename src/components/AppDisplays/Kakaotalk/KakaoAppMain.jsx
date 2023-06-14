import { useContext } from "react";
import { PageContext } from "../sections/AppMain";
import styles from "../sections/AppMain.module.css";
import { NavLink } from "react-router-dom";

function KakaoAppMain() {
  const { functionName, appName, methodId, urlContent, realFunctionName } =
    useContext(PageContext);
  return (
    <section className={styles.AppMain}>
      <section className={styles.mainApps}></section>
      <section className={styles.mainNavApps}>
        <div className={styles.wigetApps}>
          <div data-tooltip="클릭!">
            <NavLink to={`${urlContent}/1/2`}>
              <i className="bi bi-person"></i>
            </NavLink>
          </div>
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
      </section>
    </section>
  );
}

export default KakaoAppMain;
