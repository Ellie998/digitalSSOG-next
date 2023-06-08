import styles from "../../sections/AppMain.module.css";

function CallSuccess({ onChangeMain }) {
  return (
    <section className={styles.AppMain}>
      <section className={styles.mainApps}>
        <p>전화 걸기 성공!</p>
      </section>
      <section className={styles.mainNavApps}>
        <ul className={styles.wigetApps}></ul>
      </section>
    </section>
  );
}

export default CallSuccess;
