import styles from "./AppHeader.module.css";

function AppHeader({ className }) {
  return (
    <section className={`${styles.AppHeader} ${className} `}>
      <ul className={styles.displayFlex}>
        <li>
          <i className="bi bi-brightness-high"></i>
        </li>
      </ul>
      <ul className={styles.displayFlex}>
        <li>
          <i className="bi bi-battery-full"></i>
        </li>
        <li>90%</li>
        <li>9:54</li>
      </ul>
    </section>
  );
}

export default AppHeader;
