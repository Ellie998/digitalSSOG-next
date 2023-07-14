import styles from "./AppNav.module.css";
import { useContext } from "react";
import UrlContext from "../../page_context/UrlContext";

function AppNav({ className }) {
  const { setMyDescriptionId, myDescriptionId } = useContext(UrlContext);

  function goToBack() {
    myDescriptionId !== "0" &&
      setMyDescriptionId((prevValue) => {
        return `${prevValue - 1}`;
      });
  }
  function goToHome() {
    setMyDescriptionId("0");
  }
  return (
    <section className={`${className} row-start-4 row-end-5`}>
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
