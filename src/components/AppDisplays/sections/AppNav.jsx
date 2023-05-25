import { useNavigate, useParams } from "react-router-dom";
import styles from "./AppNav.module.css";

function AppNav() {
  const navigate = useNavigate();
  const { functionName, appName } = useParams();

  function goToBack() {
    window.history.back();
  }
  function goToHome() {
    navigate(`/description/${functionName}/${appName}/0`);
  }
  return (
    <section>
      <ul className={styles.AppNav}>
        <li>
          <i className="bi bi-list"></i>
        </li>
        <li onClick={goToHome}>
          <i className="bi bi-square"></i>
        </li>
        <li onClick={goToBack}>
          <i className="bi bi-chevron-double-left"></i>
        </li>
      </ul>
    </section>
  );
}

export default AppNav;
