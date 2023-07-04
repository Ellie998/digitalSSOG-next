import { useParams, useRouter } from "next/navigation";
import styles from "./AppNav.module.css";

function AppNav() {
  const router = useRouter();
  const { functionName, appName, methodId } = useParams();

  function goToBack() {
    window.history.back();
  }
  function goToHome() {
    router.navigate(`/description/${functionName}/${appName}/${methodId}/0`);
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
