import Header from "./Header/Header";
import Footer from "./Footer/Footer";

import styles from "./Layout.module.css";

function Layout(props) {
  return (
    <div className={styles.layout}>
      <Header></Header>

      <main className={styles.main}>
        <h1>main index</h1>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default Layout;
