import styles from "./DisplayBox.module.css";

import AppHeader from "../../AppDisplays/sections/AppHeader";
import AppMain from "../../AppDisplays/sections/AppMain";
import AppNav from "../../AppDisplays/sections/AppNav";

function DisplayBox() {
  return (
    <div className={styles.DisplayBox}>
      <AppHeader />
      <AppMain />
      <AppNav />
    </div>
  );
}

export default DisplayBox;
