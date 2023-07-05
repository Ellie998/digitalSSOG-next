import { useParams, useRouter } from "next/navigation";
import styles from "./AppNav.module.css";
import { useContext } from "react";
import UrlContext from "../../page_context/UrlContext";

function AppNav() {
  const router = useRouter();
  const { urlChangeDetecter, functionName } = useContext(UrlContext);
  const { appName, methodId } = urlChangeDetecter();

  function goToBack() {
    window.history.back();
  }
  function goToHome() {
    // router.push(`/description/${functionName}/${appName}/${methodId}/0`);
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
