import styles from './AppNav.module.css'


function AppNav(){
  return (
    <section >
      <ul className={styles.AppNav}>
        <li><i className="bi bi-list"></i></li>
        <li><i className="bi bi-square"></i></li>
        <li><i className="bi bi-chevron-double-left"></i></li>
      </ul>
    </section>
  )
}

export default AppNav;